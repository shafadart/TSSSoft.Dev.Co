'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Lock, 
  Mail, 
  KeyRound, 
  LogOut, 
  RefreshCw, 
  Inbox, 
  Briefcase, 
  Database, 
  Search, 
  ExternalLink, 
  Trash2, 
  CheckCircle, 
  Clock, 
  AlertCircle, 
  Copy, 
  Check, 
  ChevronRight, 
  User, 
  Phone, 
  FileText, 
  Filter,
  ShieldAlert,
  Sparkles
} from 'lucide-react';
import Link from 'next/link';
import { supabase } from '../../lib/supabase';

export default function AdminPage() {
  // Auth state
  const [session, setSession] = useState(null);
  const [authLoading, setAuthLoading] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState(null);
  const [loginSuccess, setLoginSuccess] = useState(null);
  const [isSubmittingAuth, setIsSubmittingAuth] = useState(false);
  const [authMode, setAuthMode] = useState('signin'); // 'signin' or 'signup'

  // Dashboard state
  const [activeTab, setActiveTab] = useState('contacts'); // 'contacts', 'applications', 'database'
  const [contacts, setContacts] = useState([]);
  const [applications, setApplications] = useState([]);
  const [dataLoading, setDataLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [selectedItem, setSelectedItem] = useState(null);
  const [copiedSql, setCopiedSql] = useState(false);
  const [tableStatus, setTableStatus] = useState({ contacts: null, applications: null });

  // 1. Check Auth Session on Mount
  useEffect(() => {
    async function checkAuth() {
      try {
        const { data: { session: existingSession } } = await supabase.auth.getSession();
        if (existingSession) {
          setSession(existingSession);
        } else {
          // Check for local admin bypass token
          const localAdmin = localStorage.getItem('tss_admin_authenticated');
          if (localAdmin === 'true') {
            setSession({ user: { email: 'admin@tsssoft.com', user_metadata: { role: 'Super Admin' } } });
          }
        }
      } catch (err) {
        console.error('Session error:', err);
      } finally {
        setAuthLoading(false);
      }
    }

    checkAuth();

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, newSession) => {
      if (newSession) {
        setSession(newSession);
      }
    });

    return () => subscription?.unsubscribe();
  }, []);

  // 2. Fetch Data when logged in
  useEffect(() => {
    if (session) {
      fetchDashboardData();
    }
  }, [session]);

  const fetchDashboardData = async () => {
    setDataLoading(true);
    let contactsList = [];
    let applicationsList = [];

    // 1. Fetch Contacts
    try {
      const { data, error } = await supabase
        .from('contacts')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        setTableStatus(prev => ({ ...prev, contacts: 'missing' }));
      } else {
        setTableStatus(prev => ({ ...prev, contacts: 'active' }));
        contactsList = data || [];
      }
    } catch (e) {
      setTableStatus(prev => ({ ...prev, contacts: 'missing' }));
    }

    // Merge with any offline/local contacts
    try {
      const localContacts = JSON.parse(localStorage.getItem('tss_local_contacts') || '[]');
      const ids = new Set(contactsList.map(c => c.id));
      const unmerged = localContacts.filter(c => !ids.has(c.id));
      contactsList = [...unmerged, ...contactsList];
    } catch {}

    setContacts(contactsList);

    // 2. Fetch Applications
    try {
      const { data, error } = await supabase
        .from('applications')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        setTableStatus(prev => ({ ...prev, applications: 'missing' }));
      } else {
        setTableStatus(prev => ({ ...prev, applications: 'active' }));
        applicationsList = data || [];
      }
    } catch (e) {
      setTableStatus(prev => ({ ...prev, applications: 'missing' }));
    }

    // Merge with any offline/local applications
    try {
      const localApps = JSON.parse(localStorage.getItem('tss_local_applications') || '[]');
      const ids = new Set(applicationsList.map(a => a.id));
      const unmerged = localApps.filter(a => !ids.has(a.id));
      applicationsList = [...unmerged, ...applicationsList];
    } catch {}

    setApplications(applicationsList);
    setDataLoading(false);
  };

  // Auth Handler
  const handleAuthSubmit = async (e) => {
    e.preventDefault();
    setIsSubmittingAuth(true);
    setLoginError(null);
    setLoginSuccess(null);

    try {
      if (authMode === 'signup') {
        const { data, error } = await supabase.auth.signUp({
          email,
          password,
        });
        if (error) throw error;
        setLoginSuccess('Account registered! Please check email or sign in.');
        setAuthMode('signin');
      } else {
        const { data, error } = await supabase.auth.signInWithPassword({
          email,
          password,
        });
        if (error) throw error;
        setSession(data.session);
        localStorage.setItem('tss_admin_authenticated', 'true');
      }
    } catch (err) {
      console.error('Auth error:', err);
      setLoginError(err.message || 'Authentication failed. Please verify credentials.');
    } finally {
      setIsSubmittingAuth(false);
    }
  };

  const handleQuickAdminLogin = () => {
    localStorage.setItem('tss_admin_authenticated', 'true');
    setSession({ user: { email: 'founder@tsssoft.com', user_metadata: { role: 'Founder & Admin' } } });
  };

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    localStorage.removeItem('tss_admin_authenticated');
    setSession(null);
  };

  // Update Status in Supabase
  const updateContactStatus = async (id, newStatus) => {
    setContacts(prev => prev.map(c => c.id === id ? { ...c, status: newStatus } : c));
    try {
      await supabase.from('contacts').update({ status: newStatus }).eq('id', id);
    } catch (e) {
      console.warn('Update offline/local:', e);
    }
  };

  const updateApplicationStatus = async (id, newStatus) => {
    setApplications(prev => prev.map(a => a.id === id ? { ...a, status: newStatus } : a));
    try {
      await supabase.from('applications').update({ status: newStatus }).eq('id', id);
    } catch (e) {
      console.warn('Update offline/local:', e);
    }
  };

  // Delete Handlers
  const deleteContact = async (id) => {
    if (!confirm('Are you sure you want to delete this contact submission?')) return;
    setContacts(prev => prev.filter(c => c.id !== id));
    try {
      await supabase.from('contacts').delete().eq('id', id);
      const local = JSON.parse(localStorage.getItem('tss_local_contacts') || '[]');
      localStorage.setItem('tss_local_contacts', JSON.stringify(local.filter(c => c.id !== id)));
    } catch {}
    if (selectedItem?.id === id) setSelectedItem(null);
  };

  const deleteApplication = async (id) => {
    if (!confirm('Are you sure you want to delete this job application?')) return;
    setApplications(prev => prev.filter(a => a.id !== id));
    try {
      await supabase.from('applications').delete().eq('id', id);
      const local = JSON.parse(localStorage.getItem('tss_local_applications') || '[]');
      localStorage.setItem('tss_local_applications', JSON.stringify(local.filter(a => a.id !== id)));
    } catch {}
    if (selectedItem?.id === id) setSelectedItem(null);
  };

  const sqlSchemaText = `-- Run this in your Supabase SQL Editor:
-- https://supabase.com/dashboard/project/zhkkcherqhupogojgxky/sql

-- 1. Contacts Table
CREATE TABLE IF NOT EXISTS public.contacts (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  service TEXT,
  message TEXT NOT NULL,
  status TEXT DEFAULT 'new',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. Applications Table
CREATE TABLE IF NOT EXISTS public.applications (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  position TEXT NOT NULL,
  portfolio_url TEXT,
  experience TEXT,
  message TEXT,
  status TEXT DEFAULT 'pending',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 3. Enable RLS
ALTER TABLE public.contacts ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.applications ENABLE ROW LEVEL SECURITY;

-- 4. Public Insert Policies
CREATE POLICY "Allow public insert contacts" ON public.contacts FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow public insert applications" ON public.applications FOR INSERT WITH CHECK (true);

-- 5. Full Admin Access Policies
CREATE POLICY "Allow full access contacts" ON public.contacts FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Allow full access applications" ON public.applications FOR ALL USING (true) WITH CHECK (true);`;

  const copySqlToClipboard = () => {
    navigator.clipboard.writeText(sqlSchemaText);
    setCopiedSql(true);
    setTimeout(() => setCopiedSql(false), 2500);
  };

  // Filtered Lists
  const filteredContacts = contacts.filter(c => {
    const matchesSearch = (c.name || '').toLowerCase().includes(searchQuery.toLowerCase()) ||
                          (c.email || '').toLowerCase().includes(searchQuery.toLowerCase()) ||
                          (c.message || '').toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === 'all' || (c.status || 'new') === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const filteredApplications = applications.filter(a => {
    const matchesSearch = (a.name || '').toLowerCase().includes(searchQuery.toLowerCase()) ||
                          (a.email || '').toLowerCase().includes(searchQuery.toLowerCase()) ||
                          (a.position || '').toLowerCase().includes(searchQuery.toLowerCase()) ||
                          (a.message || '').toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === 'all' || (a.status || 'pending') === statusFilter;
    return matchesSearch && matchesStatus;
  });

  // --------------------------------------------------------------------------
  // RENDER: Loading Spinner
  // --------------------------------------------------------------------------
  if (authLoading) {
    return (
      <div className="min-h-screen bg-[#050916] flex items-center justify-center text-white font-mono text-sm">
        <RefreshCw className="w-5 h-5 animate-spin text-blue-400 mr-3" />
        <span>Authenticating TSS Soft Portal...</span>
      </div>
    );
  }

  // --------------------------------------------------------------------------
  // RENDER: Login Screen (When Not Authenticated)
  // --------------------------------------------------------------------------
  if (!session) {
    return (
      <main className="min-h-screen bg-[#050916] text-white flex items-center justify-center p-4 relative overflow-hidden">
        {/* Ambient Glows */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-blue-600/20 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute inset-0 fluted-glass-pattern opacity-60 pointer-events-none" />

        <motion.div 
          initial={{ opacity: 0, scale: 0.96, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          className="relative w-full max-w-md bg-[#080d22]/90 backdrop-blur-2xl border border-white/15 rounded-3xl p-8 sm:p-10 shadow-[0_30px_70px_rgba(0,0,0,0.8)] z-10"
        >
          {/* Logo Header */}
          <div className="flex flex-col items-center text-center mb-8">
            <Link href="/" className="mb-4 inline-block">
              <img 
                src="/brand/logo-white-cropped.png" 
                alt="TSS Soft." 
                className="h-10 w-auto object-contain drop-shadow-[0_0_15px_rgba(59,130,246,0.4)]"
              />
            </Link>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-[11px] font-mono text-blue-300 uppercase tracking-widest">
              <Lock size={12} className="text-blue-400" />
              <span>Admin Console</span>
            </div>
          </div>

          {/* Mode Switcher: Sign In vs Create Admin */}
          <div className="flex items-center p-1 rounded-xl bg-white/[0.05] border border-white/10 mb-6">
            <button
              type="button"
              onClick={() => { setAuthMode('signin'); setLoginError(null); setLoginSuccess(null); }}
              className={`flex-1 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                authMode === 'signin'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Sign In
            </button>
            <button
              type="button"
              onClick={() => { setAuthMode('signup'); setLoginError(null); setLoginSuccess(null); }}
              className={`flex-1 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                authMode === 'signup'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Create New Admin
            </button>
          </div>

          {/* Feedback Alerts */}
          {loginError && (
            <div className="mb-5 p-3.5 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs flex items-center gap-2">
              <AlertCircle size={15} className="flex-shrink-0" />
              <span>{loginError}</span>
            </div>
          )}

          {loginSuccess && (
            <div className="mb-5 p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs flex items-center gap-2">
              <CheckCircle size={15} className="flex-shrink-0" />
              <span>{loginSuccess}</span>
            </div>
          )}

          {/* Login Form */}
          <form onSubmit={handleAuthSubmit} className="space-y-4">
            <div className="space-y-1.5">
              <label className="text-xs font-mono uppercase tracking-wider text-slate-300">
                {authMode === 'signup' ? 'New Admin Email' : 'Admin Email'}
              </label>
              <div className="relative">
                <input
                  required
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="admin@tsssoft.com"
                  className="w-full bg-[#050814] border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-slate-500 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none text-sm transition-all"
                />
                <Mail size={16} className="absolute right-3.5 top-3.5 text-slate-500" />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-mono uppercase tracking-wider text-slate-300">
                {authMode === 'signup' ? 'Create Password (min 6 chars)' : 'Password'}
              </label>
              <div className="relative">
                <input
                  required
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••••••"
                  className="w-full bg-[#050814] border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-slate-500 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none text-sm transition-all"
                />
                <KeyRound size={16} className="absolute right-3.5 top-3.5 text-slate-500" />
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmittingAuth}
              className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold py-3.5 rounded-xl shadow-[0_0_25px_rgba(37,99,235,0.4)] transition-all flex items-center justify-center gap-2 mt-2 disabled:opacity-60"
            >
              {isSubmittingAuth ? (
                <>
                  <RefreshCw size={16} className="animate-spin" />
                  <span>Processing...</span>
                </>
              ) : (
                <span>{authMode === 'signup' ? 'Create & Register Admin' : 'Sign In with Supabase Auth'}</span>
              )}
            </button>
          </form>

          {/* Quick Admin Pass for Founders */}
          <div className="mt-6 pt-5 border-t border-white/10 text-center">
            <button
              onClick={handleQuickAdminLogin}
              className="w-full bg-white/[0.06] hover:bg-white/[0.1] border border-white/15 text-slate-200 text-xs font-semibold py-3 px-4 rounded-xl transition-all flex items-center justify-center gap-2"
            >
              <Sparkles size={14} className="text-blue-400" />
              <span>Founder One-Click Access (Bypass)</span>
            </button>
            <p className="text-[10px] text-slate-400 mt-2">
              Instant access while configuring Supabase Authentication users.
            </p>
          </div>

          {/* Supabase Dashboard Setup Guide */}
          <div className="mt-4 p-4 rounded-2xl bg-blue-500/[0.07] border border-blue-500/20 text-left text-xs">
            <div className="font-semibold text-blue-300 flex items-center justify-between mb-2">
              <span>Supabase Dashboard থেকে পাসওয়ার্ড সেটআপ:</span>
              <a
                href="https://supabase.com/dashboard/project/zhkkcherqhupogojgxky/auth/users"
                target="_blank"
                rel="noreferrer"
                className="text-blue-400 hover:underline flex items-center gap-1 text-[11px]"
              >
                <span>Users Panel ↗</span>
              </a>
            </div>
            <ol className="text-[11px] text-slate-300 list-decimal list-inside space-y-1 leading-relaxed">
              <li>Supabase-এ <strong className="text-white">Add user → Create user</strong> চাপুন</li>
              <li>ইমেইল এবং পছন্দমতো পাসওয়ার্ড লিখুন</li>
              <li><strong className="text-emerald-300">Auto Confirm User?</strong> অন করে সেভ করুন</li>
            </ol>
          </div>
        </motion.div>
      </main>
    );
  }

  // --------------------------------------------------------------------------
  // RENDER: Admin Dashboard (When Authenticated)
  // --------------------------------------------------------------------------
  return (
    <div className="min-h-screen bg-[#050916] text-white flex flex-col relative">
      {/* Background Lighting */}
      <div className="fixed top-0 left-1/4 w-[700px] h-[400px] bg-blue-600/10 rounded-full blur-[150px] pointer-events-none -z-10" />
      <div className="fixed inset-0 fluted-glass-pattern opacity-40 pointer-events-none -z-10" />

      {/* Top Navbar */}
      <header className="sticky top-0 z-40 bg-[#070e24]/90 backdrop-blur-xl border-b border-white/10 px-4 sm:px-8 py-3.5 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href="/" className="flex items-center gap-2">
            <img src="/brand/logo-white-cropped.png" alt="TSS Soft." className="h-7 w-auto object-contain" />
          </Link>
          <span className="hidden sm:inline-block px-2.5 py-0.5 rounded-full bg-blue-500/15 border border-blue-500/30 text-[10px] font-mono text-blue-300 uppercase tracking-widest">
            Admin Console
          </span>
        </div>

        <div className="flex items-center gap-3">
          <div className="hidden md:flex items-center gap-2 text-xs text-slate-300 font-mono bg-white/[0.04] px-3 py-1.5 rounded-full border border-white/10">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>{session.user?.email || 'admin@tsssoft.com'}</span>
          </div>

          <button
            onClick={fetchDashboardData}
            disabled={dataLoading}
            className="p-2 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 text-slate-300 transition-colors"
            title="Refresh Data"
          >
            <RefreshCw size={15} className={dataLoading ? 'animate-spin text-blue-400' : ''} />
          </button>

          <button
            onClick={handleSignOut}
            className="flex items-center gap-1.5 text-xs text-slate-300 hover:text-white bg-rose-500/15 hover:bg-rose-500/25 border border-rose-500/30 px-3 py-1.5 rounded-xl transition-all font-medium"
          >
            <LogOut size={13} />
            <span className="hidden sm:inline">Sign Out</span>
          </button>
        </div>
      </header>

      {/* Main Container */}
      <div className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-8 py-8 space-y-6">

        {/* Missing Table Alert Notice if not yet created in Supabase */}
        {(tableStatus.contacts === 'missing' || tableStatus.applications === 'missing') && (
          <div className="bg-amber-500/10 border border-amber-500/30 rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-start gap-3">
              <ShieldAlert className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-semibold text-amber-300">Supabase Tables Notice</h4>
                <p className="text-xs text-slate-300 mt-0.5">
                  The <code className="text-amber-200">contacts</code> and <code className="text-amber-200">applications</code> tables haven't been created in Supabase yet. Run the 1-click SQL schema to enable live Supabase persistence.
                </p>
              </div>
            </div>
            <button
              onClick={() => setActiveTab('database')}
              className="bg-amber-400 text-slate-950 text-xs font-semibold px-4 py-2 rounded-xl hover:bg-amber-300 transition-all flex-shrink-0"
            >
              View SQL Script
            </button>
          </div>
        )}

        {/* KPI Summary Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div 
            onClick={() => { setActiveTab('contacts'); setStatusFilter('all'); }}
            className={`p-5 rounded-2xl border transition-all cursor-pointer ${
              activeTab === 'contacts'
                ? 'bg-blue-600/15 border-blue-500/40 shadow-[0_0_30px_rgba(37,99,235,0.2)]'
                : 'bg-[#080e22]/70 border-white/10 hover:border-white/20'
            }`}
          >
            <div className="flex items-center justify-between text-slate-400 mb-2">
              <span className="text-xs font-mono uppercase tracking-wider">Client Inquiries</span>
              <Inbox size={18} className="text-blue-400" />
            </div>
            <div className="text-3xl font-extrabold text-white">{contacts.length}</div>
            <div className="text-xs text-blue-300 mt-1">
              {contacts.filter(c => c.status === 'new' || !c.status).length} new messages
            </div>
          </div>

          <div 
            onClick={() => { setActiveTab('applications'); setStatusFilter('all'); }}
            className={`p-5 rounded-2xl border transition-all cursor-pointer ${
              activeTab === 'applications'
                ? 'bg-blue-600/15 border-blue-500/40 shadow-[0_0_30px_rgba(37,99,235,0.2)]'
                : 'bg-[#080e22]/70 border-white/10 hover:border-white/20'
            }`}
          >
            <div className="flex items-center justify-between text-slate-400 mb-2">
              <span className="text-xs font-mono uppercase tracking-wider">Job Applications</span>
              <Briefcase size={18} className="text-sky-400" />
            </div>
            <div className="text-3xl font-extrabold text-white">{applications.length}</div>
            <div className="text-xs text-sky-300 mt-1">
              {applications.filter(a => a.status === 'pending' || !a.status).length} pending review
            </div>
          </div>

          <div 
            onClick={() => setActiveTab('database')}
            className={`p-5 rounded-2xl border transition-all cursor-pointer ${
              activeTab === 'database'
                ? 'bg-blue-600/15 border-blue-500/40 shadow-[0_0_30px_rgba(37,99,235,0.2)]'
                : 'bg-[#080e22]/70 border-white/10 hover:border-white/20'
            }`}
          >
            <div className="flex items-center justify-between text-slate-400 mb-2">
              <span className="text-xs font-mono uppercase tracking-wider">Supabase Storage</span>
              <Database size={18} className="text-emerald-400" />
            </div>
            <div className="text-xl font-bold text-white font-mono truncate">zhkkcherqh...</div>
            <div className="text-xs text-emerald-400 mt-1 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>Connected &amp; Ready</span>
            </div>
          </div>
        </div>

        {/* Tab Selector & Controls */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 pt-2">
          
          {/* Main Tabs */}
          <div className="flex items-center gap-1.5 bg-[#080d22] p-1.5 rounded-2xl border border-white/10">
            <button
              onClick={() => { setActiveTab('contacts'); setStatusFilter('all'); }}
              className={`px-4 py-2 rounded-xl text-xs font-semibold flex items-center gap-2 transition-all ${
                activeTab === 'contacts'
                  ? 'bg-blue-600 text-white shadow-[0_0_20px_rgba(37,99,235,0.4)]'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Inbox size={14} />
              <span>Inquiries ({contacts.length})</span>
            </button>

            <button
              onClick={() => { setActiveTab('applications'); setStatusFilter('all'); }}
              className={`px-4 py-2 rounded-xl text-xs font-semibold flex items-center gap-2 transition-all ${
                activeTab === 'applications'
                  ? 'bg-blue-600 text-white shadow-[0_0_20px_rgba(37,99,235,0.4)]'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Briefcase size={14} />
              <span>Applications ({applications.length})</span>
            </button>

            <button
              onClick={() => setActiveTab('database')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold flex items-center gap-2 transition-all ${
                activeTab === 'database'
                  ? 'bg-blue-600 text-white shadow-[0_0_20px_rgba(37,99,235,0.4)]'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Database size={14} />
              <span>SQL Schema</span>
            </button>
          </div>

          {/* Search & Filter Bar (Only for contacts and applications) */}
          {activeTab !== 'database' && (
            <div className="flex items-center gap-3">
              <div className="relative flex-1 sm:w-64">
                <Search size={14} className="absolute left-3.5 top-3 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search submissions..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-[#080d22] border border-white/10 rounded-xl pl-9 pr-4 py-2 text-xs text-white placeholder:text-slate-500 focus:border-blue-500 outline-none"
                />
              </div>

              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="bg-[#080d22] border border-white/10 rounded-xl px-3 py-2 text-xs text-white outline-none focus:border-blue-500"
              >
                <option value="all">All Statuses</option>
                {activeTab === 'contacts' ? (
                  <>
                    <option value="new">New</option>
                    <option value="in_progress">In Progress</option>
                    <option value="contacted">Contacted</option>
                    <option value="archived">Archived</option>
                  </>
                ) : (
                  <>
                    <option value="pending">Pending</option>
                    <option value="reviewing">Reviewing</option>
                    <option value="shortlisted">Shortlisted</option>
                    <option value="rejected">Rejected</option>
                  </>
                )}
              </select>
            </div>
          )}
        </div>

        {/* ------------------------------------------------------------------ */}
        {/* TAB 1: Contacts (Client Inquiries) */}
        {/* ------------------------------------------------------------------ */}
        {activeTab === 'contacts' && (
          <div className="bg-[#080e24]/80 border border-white/10 rounded-3xl overflow-hidden shadow-xl">
            {filteredContacts.length === 0 ? (
              <div className="py-16 text-center">
                <Inbox size={40} className="mx-auto text-slate-600 mb-3" />
                <h4 className="text-base font-semibold text-white">No inquiries found</h4>
                <p className="text-xs text-slate-400 max-w-sm mx-auto mt-1">
                  When clients fill out the form at <Link href="/contact" className="text-blue-400 underline">tsssoft.com/contact</Link>, they will immediately populate here.
                </p>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead className="bg-white/[0.03] border-b border-white/10 text-slate-400 font-mono uppercase tracking-wider">
                    <tr>
                      <th className="py-3.5 px-6">Client / Sender</th>
                      <th className="py-3.5 px-6">Service Requested</th>
                      <th className="py-3.5 px-6">Message Preview</th>
                      <th className="py-3.5 px-6">Received</th>
                      <th className="py-3.5 px-6">Status</th>
                      <th className="py-3.5 px-6 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {filteredContacts.map((contact) => (
                      <tr 
                        key={contact.id} 
                        className="hover:bg-white/[0.02] transition-colors cursor-pointer group"
                        onClick={() => setSelectedItem({ type: 'contact', data: contact })}
                      >
                        <td className="py-4 px-6">
                          <div className="font-semibold text-white group-hover:text-blue-300 transition-colors">
                            {contact.name || 'Unnamed Client'}
                          </div>
                          <div className="text-[11px] text-slate-400 font-mono">{contact.email}</div>
                        </td>

                        <td className="py-4 px-6">
                          <span className="inline-block px-2.5 py-1 rounded-md bg-blue-500/10 text-blue-300 border border-blue-500/20 text-[11px]">
                            {contact.service || 'General Inquiry'}
                          </span>
                        </td>

                        <td className="py-4 px-6 max-w-xs truncate text-slate-300">
                          {contact.message}
                        </td>

                        <td className="py-4 px-6 text-slate-400 font-mono whitespace-nowrap">
                          {contact.created_at ? new Date(contact.created_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' }) : 'Recent'}
                        </td>

                        <td className="py-4 px-6" onClick={(e) => e.stopPropagation()}>
                          <select
                            value={contact.status || 'new'}
                            onChange={(e) => updateContactStatus(contact.id, e.target.value)}
                            className="bg-[#050814] border border-white/15 rounded-lg px-2 py-1 text-[11px] text-slate-200 outline-none"
                          >
                            <option value="new">New</option>
                            <option value="in_progress">In Progress</option>
                            <option value="contacted">Contacted</option>
                            <option value="archived">Archived</option>
                          </select>
                        </td>

                        <td className="py-4 px-6 text-right" onClick={(e) => e.stopPropagation()}>
                          <button
                            onClick={() => deleteContact(contact.id)}
                            className="p-1.5 rounded-lg text-slate-500 hover:text-rose-400 hover:bg-rose-500/10 transition-colors"
                            title="Delete inquiry"
                          >
                            <Trash2 size={15} />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}

        {/* ------------------------------------------------------------------ */}
        {/* TAB 2: Applications (Job Applicants) */}
        {/* ------------------------------------------------------------------ */}
        {activeTab === 'applications' && (
          <div className="bg-[#080e24]/80 border border-white/10 rounded-3xl overflow-hidden shadow-xl">
            {filteredApplications.length === 0 ? (
              <div className="py-16 text-center">
                <Briefcase size={40} className="mx-auto text-slate-600 mb-3" />
                <h4 className="text-base font-semibold text-white">No job applications yet</h4>
                <p className="text-xs text-slate-400 max-w-sm mx-auto mt-1">
                  When developers and designers apply on <Link href="/careers" className="text-blue-400 underline">tsssoft.com/careers</Link>, their portfolios and contact details will appear here.
                </p>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead className="bg-white/[0.03] border-b border-white/10 text-slate-400 font-mono uppercase tracking-wider">
                    <tr>
                      <th className="py-3.5 px-6">Applicant</th>
                      <th className="py-3.5 px-6">Position</th>
                      <th className="py-3.5 px-6">Portfolio / GitHub</th>
                      <th className="py-3.5 px-6">Submitted</th>
                      <th className="py-3.5 px-6">Status</th>
                      <th className="py-3.5 px-6 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {filteredApplications.map((app) => (
                      <tr 
                        key={app.id} 
                        className="hover:bg-white/[0.02] transition-colors cursor-pointer group"
                        onClick={() => setSelectedItem({ type: 'application', data: app })}
                      >
                        <td className="py-4 px-6">
                          <div className="font-semibold text-white group-hover:text-blue-300 transition-colors">
                            {app.name}
                          </div>
                          <div className="text-[11px] text-slate-400 font-mono">{app.email}</div>
                          {app.phone && <div className="text-[10px] text-slate-500 font-mono">{app.phone}</div>}
                        </td>

                        <td className="py-4 px-6">
                          <span className="inline-block px-2.5 py-1 rounded-md bg-sky-500/10 text-sky-300 border border-sky-500/20 text-[11px]">
                            {app.position}
                          </span>
                        </td>

                        <td className="py-4 px-6" onClick={(e) => e.stopPropagation()}>
                          {app.portfolio_url ? (
                            <a
                              href={app.portfolio_url}
                              target="_blank"
                              rel="noreferrer"
                              className="inline-flex items-center gap-1.5 text-blue-400 hover:underline max-w-[200px] truncate"
                            >
                              <span>{app.portfolio_url}</span>
                              <ExternalLink size={12} />
                            </a>
                          ) : (
                            <span className="text-slate-500">Not provided</span>
                          )}
                        </td>

                        <td className="py-4 px-6 text-slate-400 font-mono whitespace-nowrap">
                          {app.created_at ? new Date(app.created_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric' }) : 'Recent'}
                        </td>

                        <td className="py-4 px-6" onClick={(e) => e.stopPropagation()}>
                          <select
                            value={app.status || 'pending'}
                            onChange={(e) => updateApplicationStatus(app.id, e.target.value)}
                            className="bg-[#050814] border border-white/15 rounded-lg px-2 py-1 text-[11px] text-slate-200 outline-none"
                          >
                            <option value="pending">Pending</option>
                            <option value="reviewing">Reviewing</option>
                            <option value="shortlisted">Shortlisted</option>
                            <option value="rejected">Rejected</option>
                          </select>
                        </td>

                        <td className="py-4 px-6 text-right" onClick={(e) => e.stopPropagation()}>
                          <button
                            onClick={() => deleteApplication(app.id)}
                            className="p-1.5 rounded-lg text-slate-500 hover:text-rose-400 hover:bg-rose-500/10 transition-colors"
                            title="Delete application"
                          >
                            <Trash2 size={15} />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}

        {/* ------------------------------------------------------------------ */}
        {/* TAB 3: Database & SQL Schema */}
        {/* ------------------------------------------------------------------ */}
        {activeTab === 'database' && (
          <div className="bg-[#080e24]/80 border border-white/10 rounded-3xl p-6 sm:p-8 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-white/10">
              <div>
                <h3 className="text-xl font-bold text-white">Supabase SQL Editor Script</h3>
                <p className="text-xs text-slate-300 mt-1">
                  Copy and run this SQL once inside your Supabase SQL Editor to configure tables and Row-Level Security policies.
                </p>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={copySqlToClipboard}
                  className="bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs px-4 py-2.5 rounded-xl transition-all flex items-center gap-2 shadow-[0_0_20px_rgba(37,99,235,0.4)]"
                >
                  {copiedSql ? <Check size={14} /> : <Copy size={14} />}
                  <span>{copiedSql ? 'Copied to Clipboard!' : 'Copy SQL Script'}</span>
                </button>

                <a
                  href="https://supabase.com/dashboard/project/zhkkcherqhupogojgxky/sql"
                  target="_blank"
                  rel="noreferrer"
                  className="bg-white/[0.06] hover:bg-white/[0.1] border border-white/15 text-white text-xs px-4 py-2.5 rounded-xl transition-all flex items-center gap-1.5"
                >
                  <span>Open Supabase SQL Editor</span>
                  <ExternalLink size={13} />
                </a>
              </div>
            </div>

            <pre className="p-5 rounded-2xl bg-[#030612] border border-white/10 text-[11px] font-mono text-blue-200 overflow-x-auto leading-relaxed">
              {sqlSchemaText}
            </pre>
          </div>
        )}

      </div>

      {/* Detail Modal */}
      <AnimatePresence>
        {selectedItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-lg bg-[#080d22] border border-white/20 rounded-3xl p-6 sm:p-8 shadow-2xl max-h-[85vh] overflow-y-auto"
            >
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-5 right-5 text-slate-400 hover:text-white"
              >
                ✕
              </button>

              <div className="mb-4">
                <span className="text-[10px] font-mono uppercase tracking-widest text-blue-400">
                  {selectedItem.type === 'contact' ? 'Inquiry Detail' : 'Application Detail'}
                </span>
                <h3 className="text-2xl font-bold text-white mt-1">{selectedItem.data.name}</h3>
                <p className="text-xs text-slate-400 font-mono mt-0.5">{selectedItem.data.email}</p>
              </div>

              <div className="space-y-4 text-xs">
                {selectedItem.type === 'contact' ? (
                  <>
                    <div className="bg-white/[0.03] p-3 rounded-xl border border-white/5">
                      <span className="text-[10px] uppercase font-mono text-slate-400 block mb-1">Service Requested</span>
                      <span className="text-white font-medium">{selectedItem.data.service || 'General'}</span>
                    </div>

                    <div className="bg-white/[0.03] p-4 rounded-xl border border-white/5">
                      <span className="text-[10px] uppercase font-mono text-slate-400 block mb-2">Message Body</span>
                      <p className="text-slate-200 whitespace-pre-wrap leading-relaxed">{selectedItem.data.message}</p>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="bg-white/[0.03] p-3 rounded-xl border border-white/5">
                        <span className="text-[10px] uppercase font-mono text-slate-400 block mb-1">Position</span>
                        <span className="text-white font-medium">{selectedItem.data.position}</span>
                      </div>
                      <div className="bg-white/[0.03] p-3 rounded-xl border border-white/5">
                        <span className="text-[10px] uppercase font-mono text-slate-400 block mb-1">Experience</span>
                        <span className="text-white font-medium">{selectedItem.data.experience || 'Not stated'}</span>
                      </div>
                    </div>

                    {selectedItem.data.portfolio_url && (
                      <div className="bg-white/[0.03] p-3 rounded-xl border border-white/5">
                        <span className="text-[10px] uppercase font-mono text-slate-400 block mb-1">Portfolio / Profile</span>
                        <a 
                          href={selectedItem.data.portfolio_url} 
                          target="_blank" 
                          rel="noreferrer"
                          className="text-blue-400 hover:underline flex items-center gap-1"
                        >
                          <span>{selectedItem.data.portfolio_url}</span>
                          <ExternalLink size={12} />
                        </a>
                      </div>
                    )}

                    <div className="bg-white/[0.03] p-4 rounded-xl border border-white/5">
                      <span className="text-[10px] uppercase font-mono text-slate-400 block mb-2">Applicant Statement / Notes</span>
                      <p className="text-slate-200 whitespace-pre-wrap leading-relaxed">
                        {selectedItem.data.message || 'No additional note provided.'}
                      </p>
                    </div>
                  </>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
