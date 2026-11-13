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
  Search, 
  ExternalLink, 
  Trash2, 
  CheckCircle, 
  Clock, 
  AlertCircle, 
  ChevronRight, 
  User, 
  Phone, 
  FileText, 
  Filter,
  Plus,
  Printer,
  Download,
  Users,
  CreditCard,
  LayoutDashboard,
  FileSpreadsheet,
  Building,
  MapPin,
  Calendar,
  DollarSign,
  TrendingUp,
  X,
  Edit,
  ShieldCheck,
  Check
} from 'lucide-react';
import Link from 'next/link';
import { supabase } from '../../lib/supabase';

export default function AdminPage() {
  // --------------------------------------------------------------------------
  // 1. AUTH STATE (Hardened & Protected)
  // --------------------------------------------------------------------------
  const [session, setSession] = useState(null);
  const [authLoading, setAuthLoading] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState(null);
  const [isSubmittingAuth, setIsSubmittingAuth] = useState(false);

  // --------------------------------------------------------------------------
  // 2. DASHBOARD & SIDEBAR STATE
  // --------------------------------------------------------------------------
  const [activeTab, setActiveTab] = useState('dashboard'); // 'dashboard', 'invoices', 'clients', 'applications', 'inquiries'
  const [dataLoading, setDataLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  // Collections
  const [invoices, setInvoices] = useState([]);
  const [clients, setClients] = useState([]);
  const [applications, setApplications] = useState([]);
  const [inquiries, setInquiries] = useState([]);

  // Modals
  const [showInvoiceModal, setShowInvoiceModal] = useState(false);
  const [viewInvoice, setViewInvoice] = useState(null);
  const [showClientModal, setShowClientModal] = useState(false);
  const [selectedDetail, setSelectedDetail] = useState(null);

  // Invoice Form State
  const [invoiceForm, setInvoiceForm] = useState({
    invoice_number: `TSS-INV-${new Date().getFullYear()}-${Math.floor(100 + Math.random() * 900)}`,
    client_name: '',
    client_email: '',
    client_phone: '',
    client_address: '',
    issue_date: new Date().toISOString().split('T')[0],
    due_date: new Date(Date.now() + 14 * 86400000).toISOString().split('T')[0],
    currency: 'BDT',
    items: [
      { description: 'Bespoke Web Platform Architecture & Engineering', qty: 1, rate: 85000 }
    ],
    discount: 0,
    status: 'pending',
    notes: 'Thank you for partnering with TSS Soft. Payment is due within 14 business days.'
  });

  // Client Form State
  const [clientForm, setClientForm] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    address: '',
    notes: '',
    status: 'active'
  });

  // --------------------------------------------------------------------------
  // 3. AUTHENTICATION LIFECYCLE
  // --------------------------------------------------------------------------
  useEffect(() => {
    async function checkAuth() {
      try {
        const { data: { session: existingSession } } = await supabase.auth.getSession();
        if (existingSession) {
          setSession(existingSession);
        }
      } catch (err) {
        console.warn('Auth check notice:', err);
      } finally {
        setAuthLoading(false);
      }
    }

    checkAuth();

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, newSession) => {
      setSession(newSession);
    });

    return () => subscription?.unsubscribe();
  }, []);

  // Fetch all collections on authenticated session
  useEffect(() => {
    if (session) {
      fetchAllData();
    }
  }, [session]);

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    setIsSubmittingAuth(true);
    setLoginError(null);

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: email.trim(),
        password: password.trim(),
      });
      if (error) throw error;
      setSession(data.session);
    } catch (err) {
      console.error('Login error:', err);
      setLoginError(err.message || 'Invalid email or password. Access restricted to authorized TSS Soft admins only.');
    } finally {
      setIsSubmittingAuth(false);
    }
  };

  const handleSignOut = async () => {
    try {
      await supabase.auth.signOut();
    } catch {}
    setSession(null);
  };

  // --------------------------------------------------------------------------
  // 4. DATA FETCHING (Supabase with reliable live synchronization)
  // --------------------------------------------------------------------------
  const fetchAllData = async () => {
    setDataLoading(true);

    // 1. Invoices
    try {
      const { data, error } = await supabase.from('invoices').select('*').order('created_at', { ascending: false });
      if (!error && Array.isArray(data)) {
        setInvoices(data);
        localStorage.setItem('tss_local_invoices', JSON.stringify(data));
      } else {
        const local = JSON.parse(localStorage.getItem('tss_local_invoices') || '[]');
        setInvoices(local);
      }
    } catch (err) {
      console.warn('Invoices fetch note:', err);
      const local = JSON.parse(localStorage.getItem('tss_local_invoices') || '[]');
      setInvoices(local);
    }

    // 2. Clients
    try {
      const { data, error } = await supabase.from('clients').select('*').order('created_at', { ascending: false });
      if (!error && Array.isArray(data)) {
        setClients(data);
        localStorage.setItem('tss_local_clients', JSON.stringify(data));
      } else {
        const local = JSON.parse(localStorage.getItem('tss_local_clients') || '[]');
        setClients(local);
      }
    } catch (err) {
      console.warn('Clients fetch note:', err);
      const local = JSON.parse(localStorage.getItem('tss_local_clients') || '[]');
      setClients(local);
    }

    // 3. Applications
    try {
      const { data, error } = await supabase.from('applications').select('*').order('created_at', { ascending: false });
      if (!error && Array.isArray(data)) {
        setApplications(data);
      } else {
        const local = JSON.parse(localStorage.getItem('tss_local_applications') || '[]');
        setApplications(local);
      }
    } catch (err) {
      const local = JSON.parse(localStorage.getItem('tss_local_applications') || '[]');
      setApplications(local);
    }

    // 4. Inquiries (Contacts)
    try {
      const { data, error } = await supabase.from('contacts').select('*').order('created_at', { ascending: false });
      if (!error && Array.isArray(data)) {
        setInquiries(data);
      } else {
        const local = JSON.parse(localStorage.getItem('tss_local_contacts') || '[]');
        setInquiries(local);
      }
    } catch (err) {
      const local = JSON.parse(localStorage.getItem('tss_local_contacts') || '[]');
      setInquiries(local);
    }

    setDataLoading(false);
  };

  // --------------------------------------------------------------------------
  // 5. INVOICE ACTIONS (Fixed UUID persistence & calculations)
  // --------------------------------------------------------------------------
  const handleAddInvoiceItem = () => {
    setInvoiceForm(prev => ({
      ...prev,
      items: [...prev.items, { description: '', qty: 1, rate: 0 }]
    }));
  };

  const handleRemoveInvoiceItem = (index) => {
    setInvoiceForm(prev => ({
      ...prev,
      items: prev.items.filter((_, i) => i !== index)
    }));
  };

  const handleItemChange = (index, field, value) => {
    setInvoiceForm(prev => {
      const items = [...prev.items];
      items[index] = { ...items[index], [field]: value };
      return { ...prev, items };
    });
  };

  const calculateInvoiceSubtotal = (items) => {
    return items.reduce((sum, item) => sum + (Number(item.qty || 0) * Number(item.rate || 0)), 0);
  };

  const calculateInvoiceTotal = (items, discount) => {
    const sub = calculateInvoiceSubtotal(items);
    return Math.max(0, sub - Number(discount || 0));
  };

  const handleSelectExistingClient = (clientId) => {
    const client = clients.find(c => c.id === clientId);
    if (client) {
      setInvoiceForm(prev => ({
        ...prev,
        client_name: client.name,
        client_email: client.email || '',
        client_phone: client.phone || '',
        client_address: client.address || ''
      }));
    }
  };

  // SAVE INVOICE: Fix UUID error by omitting custom 'id'
  const handleSaveInvoice = async (e) => {
    e.preventDefault();
    const subtotal = calculateInvoiceSubtotal(invoiceForm.items);
    const total = calculateInvoiceTotal(invoiceForm.items, invoiceForm.discount);

    const payload = {
      invoice_number: invoiceForm.invoice_number,
      client_name: invoiceForm.client_name,
      client_email: invoiceForm.client_email || null,
      client_phone: invoiceForm.client_phone || null,
      client_address: invoiceForm.client_address || null,
      issue_date: invoiceForm.issue_date || null,
      due_date: invoiceForm.due_date || null,
      currency: invoiceForm.currency || 'BDT',
      items: invoiceForm.items,
      subtotal,
      discount: Number(invoiceForm.discount || 0),
      total,
      status: invoiceForm.status || 'pending',
      notes: invoiceForm.notes || null
    };

    try {
      // 1. Insert into Supabase and get back database row with official UUID
      const { data, error } = await supabase.from('invoices').insert([payload]).select();
      if (error) {
        console.error('Supabase invoice insert error:', error.message);
        throw error;
      }

      const savedRow = (data && data[0]) ? data[0] : payload;
      setInvoices(prev => [savedRow, ...prev]);

      // Update local storage backup
      const local = JSON.parse(localStorage.getItem('tss_local_invoices') || '[]');
      local.unshift(savedRow);
      localStorage.setItem('tss_local_invoices', JSON.stringify(local));

      setShowInvoiceModal(false);
      setViewInvoice(savedRow);
    } catch (err) {
      console.warn('Falling back to local cache:', err);
      const fallbackRow = { ...payload, id: 'local_' + Date.now() };
      setInvoices(prev => [fallbackRow, ...prev]);
      const local = JSON.parse(localStorage.getItem('tss_local_invoices') || '[]');
      local.unshift(fallbackRow);
      localStorage.setItem('tss_local_invoices', JSON.stringify(local));

      setShowInvoiceModal(false);
      setViewInvoice(fallbackRow);
    }
  };

  const handleDeleteInvoice = async (id) => {
    if (!confirm('Are you sure you want to delete this invoice?')) return;
    setInvoices(prev => prev.filter(inv => inv.id !== id));
    try {
      await supabase.from('invoices').delete().eq('id', id);
    } catch {}
    const local = JSON.parse(localStorage.getItem('tss_local_invoices') || '[]');
    localStorage.setItem('tss_local_invoices', JSON.stringify(local.filter(i => i.id !== id)));
  };

  const handleUpdateInvoiceStatus = async (id, status) => {
    setInvoices(prev => prev.map(inv => inv.id === id ? { ...inv, status } : inv));
    try {
      await supabase.from('invoices').update({ status }).eq('id', id);
    } catch {}
  };

  // --------------------------------------------------------------------------
  // 6. CLIENT ACTIONS (Fixed UUID persistence)
  // --------------------------------------------------------------------------
  const handleSaveClient = async (e) => {
    e.preventDefault();
    const payload = {
      name: clientForm.name,
      company: clientForm.company || null,
      email: clientForm.email || null,
      phone: clientForm.phone || null,
      address: clientForm.address || null,
      notes: clientForm.notes || null,
      status: clientForm.status || 'active'
    };

    try {
      const { data, error } = await supabase.from('clients').insert([payload]).select();
      if (error) {
        console.error('Supabase client insert error:', error.message);
        throw error;
      }

      const savedClient = (data && data[0]) ? data[0] : payload;
      setClients(prev => [savedClient, ...prev]);

      const local = JSON.parse(localStorage.getItem('tss_local_clients') || '[]');
      local.unshift(savedClient);
      localStorage.setItem('tss_local_clients', JSON.stringify(local));

      setShowClientModal(false);
      setClientForm({ name: '', company: '', email: '', phone: '', address: '', notes: '', status: 'active' });
    } catch (err) {
      console.warn('Falling back to local client cache:', err);
      const fallbackClient = { ...payload, id: 'local_' + Date.now() };
      setClients(prev => [fallbackClient, ...prev]);
      const local = JSON.parse(localStorage.getItem('tss_local_clients') || '[]');
      local.unshift(fallbackClient);
      localStorage.setItem('tss_local_clients', JSON.stringify(local));

      setShowClientModal(false);
      setClientForm({ name: '', company: '', email: '', phone: '', address: '', notes: '', status: 'active' });
    }
  };

  const handleDeleteClient = async (id) => {
    if (!confirm('Are you sure you want to remove this client?')) return;
    setClients(prev => prev.filter(c => c.id !== id));
    try {
      await supabase.from('clients').delete().eq('id', id);
    } catch {}
    const local = JSON.parse(localStorage.getItem('tss_local_clients') || '[]');
    localStorage.setItem('tss_local_clients', JSON.stringify(local.filter(c => c.id !== id)));
  };

  // --------------------------------------------------------------------------
  // 7. INQUIRIES & APPLICATIONS ACTIONS
  // --------------------------------------------------------------------------
  const handleUpdateInquiryStatus = async (id, status) => {
    setInquiries(prev => prev.map(item => item.id === id ? { ...item, status } : item));
    try {
      await supabase.from('contacts').update({ status }).eq('id', id);
    } catch {}
  };

  const handleDeleteInquiry = async (id) => {
    if (!confirm('Delete this inquiry?')) return;
    setInquiries(prev => prev.filter(item => item.id !== id));
    try {
      await supabase.from('contacts').delete().eq('id', id);
    } catch {}
  };

  const handleUpdateApplicationStatus = async (id, status) => {
    setApplications(prev => prev.map(item => item.id === id ? { ...item, status } : item));
    try {
      await supabase.from('applications').update({ status }).eq('id', id);
    } catch {}
  };

  const handleDeleteApplication = async (id) => {
    if (!confirm('Delete this job application?')) return;
    setApplications(prev => prev.filter(item => item.id !== id));
    try {
      await supabase.from('applications').delete().eq('id', id);
    } catch {}
  };

  // --------------------------------------------------------------------------
  // 8. RENDER: SECURE LOGIN SCREEN (When Not Authenticated)
  // --------------------------------------------------------------------------
  if (authLoading) {
    return (
      <div className="min-h-screen bg-[#030612] flex items-center justify-center text-white font-mono text-xs">
        <RefreshCw className="w-5 h-5 animate-spin text-blue-400 mr-3" />
        <span>TSS Soft Security Verification...</span>
      </div>
    );
  }

  if (!session) {
    return (
      <main className="min-h-screen bg-[#030612] text-white flex items-center justify-center p-4 relative overflow-hidden">
        {/* Ambient Dark Atmospheric Backlight */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-blue-600/15 rounded-full blur-[140px] pointer-events-none" />

        <motion.div 
          initial={{ opacity: 0, scale: 0.96, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          className="relative w-full max-w-sm bg-[#070d22] border border-white/15 rounded-3xl p-8 sm:p-9 shadow-[0_25px_60px_rgba(0,0,0,0.9)] z-10"
        >
          {/* Official TSS Soft Logo & Badge */}
          <div className="flex flex-col items-center text-center mb-8">
            <img 
              src="/brand/logo-white-cropped.png" 
              alt="TSS Soft." 
              className="h-9 w-auto object-contain mb-4 drop-shadow-[0_0_15px_rgba(59,130,246,0.3)]"
            />
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-[11px] font-mono text-blue-300 uppercase tracking-widest">
              <Lock size={12} className="text-blue-400" />
              <span>Admin Console</span>
            </div>
          </div>

          {/* Feedback Error Notice */}
          {loginError && (
            <div className="mb-5 p-3.5 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs flex items-center gap-2">
              <AlertCircle size={15} className="flex-shrink-0" />
              <span>{loginError}</span>
            </div>
          )}

          {/* Login Form (Strict & Hardened: No bypass, No public registration) */}
          <form onSubmit={handleLoginSubmit} className="space-y-4">
            <div className="space-y-1.5">
              <label className="text-xs font-mono uppercase tracking-wider text-slate-300">Admin Email</label>
              <div className="relative">
                <input
                  required
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="admin@tsssoft.com"
                  className="w-full bg-[#040816] border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-slate-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none text-sm transition-all"
                />
                <Mail size={16} className="absolute right-3.5 top-3.5 text-slate-500" />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-mono uppercase tracking-wider text-slate-300">Password</label>
              <div className="relative">
                <input
                  required
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••••••"
                  className="w-full bg-[#040816] border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-slate-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none text-sm transition-all"
                />
                <KeyRound size={16} className="absolute right-3.5 top-3.5 text-slate-500" />
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmittingAuth}
              className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold py-3.5 rounded-xl shadow-[0_0_25px_rgba(37,99,235,0.4)] transition-all flex items-center justify-center gap-2 mt-4 disabled:opacity-60"
            >
              {isSubmittingAuth ? (
                <>
                  <RefreshCw size={16} className="animate-spin" />
                  <span>Verifying Credentials...</span>
                </>
              ) : (
                <span>Sign In to Console</span>
              )}
            </button>
          </form>

          <p className="text-[11px] text-slate-400 text-center mt-6">
            Authorized TSS Soft Engineering Administration Only.
          </p>
        </motion.div>
      </main>
    );
  }

  // --------------------------------------------------------------------------
  // 9. RENDER: FULL ADMIN CONSOLE (SIDEBAR + WORKSPACE)
  // --------------------------------------------------------------------------
  const totalRevenue = invoices
    .filter(i => i.status === 'paid')
    .reduce((sum, i) => sum + Number(i.total || 0), 0);

  const pendingRevenue = invoices
    .filter(i => i.status === 'pending')
    .reduce((sum, i) => sum + Number(i.total || 0), 0);

  return (
    <div className="min-h-screen bg-[#030612] text-slate-100 flex flex-col md:flex-row font-body-md overflow-x-hidden">

      {/* =================================================================== */}
      {/* SIDEBAR NAVIGATION */}
      {/* =================================================================== */}
      <aside className="w-full md:w-64 bg-[#060a1c] border-b md:border-b-0 md:border-r border-white/10 flex flex-col flex-shrink-0 z-20 no-print">
        
        {/* Sidebar Brand Header */}
        <div className="p-5 border-b border-white/10 flex items-center justify-between">
          <Link href="/admin" className="flex items-center gap-2">
            <img src="/brand/logo-white-cropped.png" alt="TSS Soft." className="h-7 w-auto object-contain" />
          </Link>
          <span className="px-2 py-0.5 rounded-md bg-blue-500/10 border border-blue-500/20 text-[10px] font-mono text-blue-300">
            v2.4
          </span>
        </div>

        {/* Sidebar Menu Items */}
        <nav className="flex-1 p-3 space-y-1 overflow-y-auto">
          
          {/* 1. Dashboard */}
          <button
            onClick={() => setActiveTab('dashboard')}
            className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all ${
              activeTab === 'dashboard'
                ? 'bg-blue-600 text-white shadow-[0_0_20px_rgba(37,99,235,0.4)]'
                : 'text-slate-400 hover:text-white hover:bg-white/[0.04]'
            }`}
          >
            <LayoutDashboard size={16} />
            <span>Dashboard</span>
          </button>

          {/* 2. Invoices */}
          <button
            onClick={() => setActiveTab('invoices')}
            className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all ${
              activeTab === 'invoices'
                ? 'bg-blue-600 text-white shadow-[0_0_20px_rgba(37,99,235,0.4)]'
                : 'text-slate-400 hover:text-white hover:bg-white/[0.04]'
            }`}
          >
            <div className="flex items-center gap-3">
              <FileSpreadsheet size={16} />
              <span>Invoices</span>
            </div>
            {invoices.length > 0 && (
              <span className="px-1.5 py-0.5 rounded-full bg-white/15 text-[10px] font-mono">
                {invoices.length}
              </span>
            )}
          </button>

          {/* 3. Clients */}
          <button
            onClick={() => setActiveTab('clients')}
            className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all ${
              activeTab === 'clients'
                ? 'bg-blue-600 text-white shadow-[0_0_20px_rgba(37,99,235,0.4)]'
                : 'text-slate-400 hover:text-white hover:bg-white/[0.04]'
            }`}
          >
            <div className="flex items-center gap-3">
              <Users size={16} />
              <span>Clients</span>
            </div>
            {clients.length > 0 && (
              <span className="px-1.5 py-0.5 rounded-full bg-white/15 text-[10px] font-mono">
                {clients.length}
              </span>
            )}
          </button>

          {/* 4. Applications */}
          <button
            onClick={() => setActiveTab('applications')}
            className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all ${
              activeTab === 'applications'
                ? 'bg-blue-600 text-white shadow-[0_0_20px_rgba(37,99,235,0.4)]'
                : 'text-slate-400 hover:text-white hover:bg-white/[0.04]'
            }`}
          >
            <div className="flex items-center gap-3">
              <Briefcase size={16} />
              <span>Applications</span>
            </div>
            {applications.filter(a => a.status === 'pending').length > 0 && (
              <span className="px-1.5 py-0.5 rounded-full bg-sky-500 text-white text-[10px] font-mono font-bold">
                {applications.filter(a => a.status === 'pending').length}
              </span>
            )}
          </button>

          {/* 5. Inquiries */}
          <button
            onClick={() => setActiveTab('inquiries')}
            className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all ${
              activeTab === 'inquiries'
                ? 'bg-blue-600 text-white shadow-[0_0_20px_rgba(37,99,235,0.4)]'
                : 'text-slate-400 hover:text-white hover:bg-white/[0.04]'
            }`}
          >
            <div className="flex items-center gap-3">
              <Inbox size={16} />
              <span>Inquiries</span>
            </div>
            {inquiries.filter(i => i.status === 'new' || !i.status).length > 0 && (
              <span className="px-1.5 py-0.5 rounded-full bg-blue-500 text-white text-[10px] font-mono font-bold">
                {inquiries.filter(i => i.status === 'new' || !i.status).length}
              </span>
            )}
          </button>

        </nav>

        {/* Sidebar Footer User Info & Sign Out */}
        <div className="p-4 border-t border-white/10 bg-[#040816]">
          <div className="flex items-center justify-between mb-2">
            <div className="truncate pr-2">
              <div className="text-xs font-semibold text-white truncate">{session.user?.email || 'admin@tsssoft.com'}</div>
              <div className="text-[10px] text-emerald-400 font-mono">Authenticated Admin</div>
            </div>
            <button
              onClick={handleSignOut}
              className="p-1.5 rounded-lg text-slate-400 hover:text-rose-400 hover:bg-rose-500/10 transition-colors"
              title="Sign Out"
            >
              <LogOut size={15} />
            </button>
          </div>
        </div>

      </aside>

      {/* =================================================================== */}
      {/* MAIN WORKSPACE CONTENT */}
      {/* =================================================================== */}
      <main className="flex-1 flex flex-col min-w-0 bg-[#040716] overflow-y-auto">
        
        {/* Workspace Top Header Bar */}
        <header className="px-6 py-4 border-b border-white/10 bg-[#060a1c]/70 backdrop-blur-md flex flex-wrap items-center justify-between gap-4 no-print">
          <div>
            <h1 className="text-xl font-bold text-white capitalize tracking-tight">
              {activeTab === 'dashboard' && 'Executive Overview'}
              {activeTab === 'invoices' && 'Billing & Invoices'}
              {activeTab === 'clients' && 'Client Directory'}
              {activeTab === 'applications' && 'Job Applications'}
              {activeTab === 'inquiries' && 'Client Inquiries'}
            </h1>
            <p className="text-xs text-slate-400">TSS Soft Enterprise Administration Platform</p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={fetchAllData}
              disabled={dataLoading}
              className="px-3 py-1.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 text-xs text-slate-300 flex items-center gap-1.5 transition-colors"
            >
              <RefreshCw size={13} className={dataLoading ? 'animate-spin text-blue-400' : ''} />
              <span>Sync Data</span>
            </button>

            {activeTab === 'invoices' && (
              <button
                onClick={() => setShowInvoiceModal(true)}
                className="bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs px-4 py-2 rounded-xl flex items-center gap-1.5 shadow-[0_0_20px_rgba(37,99,235,0.4)] transition-all"
              >
                <Plus size={14} />
                <span>Create Invoice</span>
              </button>
            )}

            {activeTab === 'clients' && (
              <button
                onClick={() => setShowClientModal(true)}
                className="bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs px-4 py-2 rounded-xl flex items-center gap-1.5 shadow-[0_0_20px_rgba(37,99,235,0.4)] transition-all"
              >
                <Plus size={14} />
                <span>Add Client</span>
              </button>
            )}
          </div>
        </header>

        {/* Tab Content Body */}
        <div className="p-6 sm:p-8 space-y-6">

          {/* --------------------------------------------------------------- */}
          {/* TAB: DASHBOARD (Overview) */}
          {/* --------------------------------------------------------------- */}
          {activeTab === 'dashboard' && (
            <div className="space-y-6">
              
              {/* Stat Metric Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                
                {/* Total Paid Revenue */}
                <div className="p-5 rounded-2xl bg-[#080d22] border border-white/10 shadow-lg">
                  <div className="flex items-center justify-between text-slate-400 text-xs font-mono uppercase mb-2">
                    <span>Collected Revenue</span>
                    <TrendingUp size={16} className="text-emerald-400" />
                  </div>
                  <div className="text-2xl font-black text-white">৳ {totalRevenue.toLocaleString()}</div>
                  <div className="text-[11px] text-emerald-400 mt-1">
                    {invoices.filter(i => i.status === 'paid').length} Paid Invoices
                  </div>
                </div>

                {/* Pending Invoices */}
                <div className="p-5 rounded-2xl bg-[#080d22] border border-white/10 shadow-lg">
                  <div className="flex items-center justify-between text-slate-400 text-xs font-mono uppercase mb-2">
                    <span>Pending Receivables</span>
                    <Clock size={16} className="text-amber-400" />
                  </div>
                  <div className="text-2xl font-black text-white">৳ {pendingRevenue.toLocaleString()}</div>
                  <div className="text-[11px] text-amber-300 mt-1">
                    {invoices.filter(i => i.status === 'pending').length} Unpaid Invoices
                  </div>
                </div>

                {/* Clients */}
                <div className="p-5 rounded-2xl bg-[#080d22] border border-white/10 shadow-lg">
                  <div className="flex items-center justify-between text-slate-400 text-xs font-mono uppercase mb-2">
                    <span>Active Clients</span>
                    <Users size={16} className="text-blue-400" />
                  </div>
                  <div className="text-2xl font-black text-white">{clients.length}</div>
                  <div className="text-[11px] text-blue-300 mt-1">Enterprise Partners</div>
                </div>

                {/* Inquiries / Leads */}
                <div className="p-5 rounded-2xl bg-[#080d22] border border-white/10 shadow-lg">
                  <div className="flex items-center justify-between text-slate-400 text-xs font-mono uppercase mb-2">
                    <span>Client Inquiries</span>
                    <Inbox size={16} className="text-sky-400" />
                  </div>
                  <div className="text-2xl font-black text-white">{inquiries.length}</div>
                  <div className="text-[11px] text-sky-300 mt-1">
                    {inquiries.filter(i => i.status === 'new' || !i.status).length} New Messages
                  </div>
                </div>

              </div>

              {/* Quick Action Matrix & Activity Strip */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                
                {/* Recent Invoices Card */}
                <div className="bg-[#080d22] border border-white/10 rounded-2xl p-6">
                  <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-4">
                    <h3 className="text-sm font-bold text-white flex items-center gap-2">
                      <FileSpreadsheet size={16} className="text-blue-400" />
                      <span>Recent Invoices</span>
                    </h3>
                    <button onClick={() => setActiveTab('invoices')} className="text-xs text-blue-400 hover:underline">
                      View all ↗
                    </button>
                  </div>
                  {invoices.length === 0 ? (
                    <p className="text-xs text-slate-400 py-6 text-center">No invoices issued yet.</p>
                  ) : (
                    <div className="space-y-3">
                      {invoices.slice(0, 5).map(inv => (
                        <div key={inv.id} className="flex items-center justify-between p-3 rounded-xl bg-white/[0.03] text-xs">
                          <div>
                            <div className="font-semibold text-white">{inv.client_name}</div>
                            <div className="text-[10px] text-slate-400 font-mono">{inv.invoice_number}</div>
                          </div>
                          <div className="text-right">
                            <div className="font-bold text-white">৳ {Number(inv.total || 0).toLocaleString()}</div>
                            <span className={`text-[10px] uppercase font-mono px-2 py-0.5 rounded ${
                              inv.status === 'paid' ? 'bg-emerald-500/15 text-emerald-400' : 'bg-amber-500/15 text-amber-400'
                            }`}>
                              {inv.status}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Recent Inquiries Card */}
                <div className="bg-[#080d22] border border-white/10 rounded-2xl p-6">
                  <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-4">
                    <h3 className="text-sm font-bold text-white flex items-center gap-2">
                      <Inbox size={16} className="text-sky-400" />
                      <span>Latest Inquiries</span>
                    </h3>
                    <button onClick={() => setActiveTab('inquiries')} className="text-xs text-blue-400 hover:underline">
                      View all ↗
                    </button>
                  </div>
                  {inquiries.length === 0 ? (
                    <p className="text-xs text-slate-400 py-6 text-center">No inquiries received yet.</p>
                  ) : (
                    <div className="space-y-3">
                      {inquiries.slice(0, 5).map(inq => (
                        <div key={inq.id} className="p-3 rounded-xl bg-white/[0.03] text-xs">
                          <div className="flex items-center justify-between mb-1">
                            <span className="font-semibold text-white">{inq.name}</span>
                            <span className="text-[10px] text-slate-400 font-mono">{inq.email}</span>
                          </div>
                          <p className="text-[11px] text-slate-300 truncate">{inq.message}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

              </div>

            </div>
          )}

          {/* --------------------------------------------------------------- */}
          {/* TAB: INVOICES (Full List & Manager) */}
          {/* --------------------------------------------------------------- */}
          {activeTab === 'invoices' && (
            <div className="space-y-4">
              
              {/* Search & Actions Bar */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                <div className="relative flex-1 sm:w-72">
                  <Search size={14} className="absolute left-3.5 top-3 text-slate-400" />
                  <input
                    type="text"
                    placeholder="Search invoices by client or invoice #..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-[#080d22] border border-white/10 rounded-xl pl-9 pr-4 py-2 text-xs text-white placeholder:text-slate-500 focus:border-blue-500 outline-none"
                  />
                </div>

                <div className="flex items-center gap-2">
                  <select
                    value={statusFilter}
                    onChange={(e) => setStatusFilter(e.target.value)}
                    className="bg-[#080d22] border border-white/10 rounded-xl px-3 py-2 text-xs text-white outline-none"
                  >
                    <option value="all">All Invoices</option>
                    <option value="paid">Paid</option>
                    <option value="pending">Pending</option>
                    <option value="overdue">Overdue</option>
                  </select>

                  <button
                    onClick={() => setShowInvoiceModal(true)}
                    className="bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs px-4 py-2 rounded-xl flex items-center gap-1.5 shadow-[0_0_20px_rgba(37,99,235,0.4)]"
                  >
                    <Plus size={14} />
                    <span>New Invoice</span>
                  </button>
                </div>
              </div>

              {/* Invoices List Table */}
              <div className="bg-[#080d22] border border-white/10 rounded-2xl overflow-hidden shadow-xl">
                {invoices.length === 0 ? (
                  <div className="py-16 text-center">
                    <FileSpreadsheet size={40} className="mx-auto text-slate-600 mb-3" />
                    <h4 className="text-base font-semibold text-white">No invoices yet</h4>
                    <p className="text-xs text-slate-400 max-w-sm mx-auto mt-1 mb-4">
                      Create professional invoices with TSS Soft branding, line items, and print as PDF.
                    </p>
                    <button
                      onClick={() => setShowInvoiceModal(true)}
                      className="bg-blue-600 text-white font-semibold text-xs px-4 py-2 rounded-xl inline-flex items-center gap-1.5"
                    >
                      <Plus size={14} />
                      <span>Create First Invoice</span>
                    </button>
                  </div>
                ) : (
                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs">
                      <thead className="bg-white/[0.03] border-b border-white/10 text-slate-400 font-mono uppercase tracking-wider">
                        <tr>
                          <th className="py-3.5 px-6">Invoice #</th>
                          <th className="py-3.5 px-6">Client / Partner</th>
                          <th className="py-3.5 px-6">Issue Date</th>
                          <th className="py-3.5 px-6">Total Amount</th>
                          <th className="py-3.5 px-6">Status</th>
                          <th className="py-3.5 px-6 text-right">Actions</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-white/5">
                        {invoices
                          .filter(i => {
                            const matchSearch = (i.client_name || '').toLowerCase().includes(searchQuery.toLowerCase()) ||
                                                (i.invoice_number || '').toLowerCase().includes(searchQuery.toLowerCase());
                            const matchStatus = statusFilter === 'all' || (i.status || 'pending') === statusFilter;
                            return matchSearch && matchStatus;
                          })
                          .map(inv => (
                            <tr key={inv.id} className="hover:bg-white/[0.02] transition-colors">
                              <td className="py-4 px-6 font-mono font-bold text-blue-400">
                                {inv.invoice_number}
                              </td>
                              <td className="py-4 px-6">
                                <div className="font-semibold text-white">{inv.client_name}</div>
                                {inv.client_email && <div className="text-[10px] text-slate-400 font-mono">{inv.client_email}</div>}
                              </td>
                              <td className="py-4 px-6 text-slate-400 font-mono">
                                {inv.issue_date || 'N/A'}
                              </td>
                              <td className="py-4 px-6 font-bold text-white">
                                ৳ {Number(inv.total || 0).toLocaleString()}
                              </td>
                              <td className="py-4 px-6">
                                <select
                                  value={inv.status || 'pending'}
                                  onChange={(e) => handleUpdateInvoiceStatus(inv.id, e.target.value)}
                                  className={`rounded-lg px-2.5 py-1 text-[11px] font-mono outline-none border ${
                                    inv.status === 'paid'
                                      ? 'bg-emerald-500/10 text-emerald-300 border-emerald-500/30'
                                      : 'bg-amber-500/10 text-amber-300 border-amber-500/30'
                                  }`}
                                >
                                  <option value="pending" className="bg-[#080d22]">Pending</option>
                                  <option value="paid" className="bg-[#080d22]">Paid</option>
                                  <option value="overdue" className="bg-[#080d22]">Overdue</option>
                                  <option value="cancelled" className="bg-[#080d22]">Cancelled</option>
                                </select>
                              </td>
                              <td className="py-4 px-6 text-right">
                                <div className="flex items-center justify-end gap-2">
                                  <button
                                    onClick={() => setViewInvoice(inv)}
                                    className="p-1.5 rounded-lg bg-blue-500/10 hover:bg-blue-500/20 text-blue-300 border border-blue-500/20"
                                    title="View & Print Invoice"
                                  >
                                    <Printer size={14} />
                                  </button>
                                  <button
                                    onClick={() => handleDeleteInvoice(inv.id)}
                                    className="p-1.5 rounded-lg text-slate-500 hover:text-rose-400 hover:bg-rose-500/10 transition-colors"
                                    title="Delete invoice"
                                  >
                                    <Trash2 size={14} />
                                  </button>
                                </div>
                              </td>
                            </tr>
                          ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>

            </div>
          )}

          {/* --------------------------------------------------------------- */}
          {/* TAB: CLIENTS (CRM & Directory) */}
          {/* --------------------------------------------------------------- */}
          {activeTab === 'clients' && (
            <div className="space-y-4">
              
              <div className="flex items-center justify-between gap-3">
                <div className="relative flex-1 sm:w-72">
                  <Search size={14} className="absolute left-3.5 top-3 text-slate-400" />
                  <input
                    type="text"
                    placeholder="Search clients by name, company, email..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-[#080d22] border border-white/10 rounded-xl pl-9 pr-4 py-2 text-xs text-white placeholder:text-slate-500 focus:border-blue-500 outline-none"
                  />
                </div>

                <button
                  onClick={() => setShowClientModal(true)}
                  className="bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs px-4 py-2 rounded-xl flex items-center gap-1.5 shadow-[0_0_20px_rgba(37,99,235,0.4)]"
                >
                  <Plus size={14} />
                  <span>Add Client</span>
                </button>
              </div>

              <div className="bg-[#080d22] border border-white/10 rounded-2xl overflow-hidden shadow-xl">
                {clients.length === 0 ? (
                  <div className="py-16 text-center">
                    <Users size={40} className="mx-auto text-slate-600 mb-3" />
                    <h4 className="text-base font-semibold text-white">No clients added yet</h4>
                    <p className="text-xs text-slate-400 max-w-sm mx-auto mt-1 mb-4">
                      Maintain all your enterprise client details, contact info, and addresses in one CRM.
                    </p>
                    <button
                      onClick={() => setShowClientModal(true)}
                      className="bg-blue-600 text-white font-semibold text-xs px-4 py-2 rounded-xl inline-flex items-center gap-1.5"
                    >
                      <Plus size={14} />
                      <span>Add First Client</span>
                    </button>
                  </div>
                ) : (
                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs">
                      <thead className="bg-white/[0.03] border-b border-white/10 text-slate-400 font-mono uppercase tracking-wider">
                        <tr>
                          <th className="py-3.5 px-6">Client Name</th>
                          <th className="py-3.5 px-6">Company / Organization</th>
                          <th className="py-3.5 px-6">Contact Channels</th>
                          <th className="py-3.5 px-6">Address</th>
                          <th className="py-3.5 px-6">Status</th>
                          <th className="py-3.5 px-6 text-right">Actions</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-white/5">
                        {clients
                          .filter(c => (c.name || '').toLowerCase().includes(searchQuery.toLowerCase()) || (c.company || '').toLowerCase().includes(searchQuery.toLowerCase()))
                          .map(client => (
                            <tr key={client.id} className="hover:bg-white/[0.02] transition-colors">
                              <td className="py-4 px-6 font-semibold text-white">
                                {client.name}
                              </td>
                              <td className="py-4 px-6 text-slate-300">
                                {client.company || 'Individual Partner'}
                              </td>
                              <td className="py-4 px-6 font-mono text-[11px] text-slate-300">
                                <div>{client.email || 'N/A'}</div>
                                {client.phone && <div className="text-slate-500">{client.phone}</div>}
                              </td>
                              <td className="py-4 px-6 text-slate-400 max-w-xs truncate">
                                {client.address || 'Not specified'}
                              </td>
                              <td className="py-4 px-6">
                                <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-[10px] font-mono">
                                  {client.status || 'Active'}
                                </span>
                              </td>
                              <td className="py-4 px-6 text-right">
                                <div className="flex items-center justify-end gap-2">
                                  <button
                                    onClick={() => {
                                      setInvoiceForm(prev => ({
                                        ...prev,
                                        client_name: client.name,
                                        client_email: client.email || '',
                                        client_phone: client.phone || '',
                                        client_address: client.address || ''
                                      }));
                                      setShowInvoiceModal(true);
                                    }}
                                    className="px-2.5 py-1 rounded-lg bg-blue-500/10 hover:bg-blue-500/20 text-blue-300 border border-blue-500/20 text-[11px]"
                                  >
                                    Invoice
                                  </button>
                                  <button
                                    onClick={() => handleDeleteClient(client.id)}
                                    className="p-1.5 rounded-lg text-slate-500 hover:text-rose-400 hover:bg-rose-500/10 transition-colors"
                                  >
                                    <Trash2 size={14} />
                                  </button>
                                </div>
                              </td>
                            </tr>
                          ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>

            </div>
          )}

          {/* --------------------------------------------------------------- */}
          {/* TAB: APPLICATIONS */}
          {/* --------------------------------------------------------------- */}
          {activeTab === 'applications' && (
            <div className="bg-[#080d22] border border-white/10 rounded-2xl overflow-hidden shadow-xl">
              {applications.length === 0 ? (
                <div className="py-16 text-center">
                  <Briefcase size={40} className="mx-auto text-slate-600 mb-3" />
                  <h4 className="text-base font-semibold text-white">No job applications yet</h4>
                  <p className="text-xs text-slate-400 max-w-sm mx-auto mt-1">
                    When applicants apply at <Link href="/careers" className="text-blue-400 underline">tsssoft.com/careers</Link>, they will populate here.
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
                      {applications.map(app => (
                        <tr key={app.id} className="hover:bg-white/[0.02] transition-colors cursor-pointer" onClick={() => setSelectedDetail({ type: 'application', data: app })}>
                          <td className="py-4 px-6">
                            <div className="font-semibold text-white">{app.name}</div>
                            <div className="text-[11px] text-slate-400 font-mono">{app.email}</div>
                            {app.phone && <div className="text-[10px] text-slate-500 font-mono">{app.phone}</div>}
                          </td>
                          <td className="py-4 px-6">
                            <span className="px-2.5 py-1 rounded-md bg-sky-500/10 text-sky-300 border border-sky-500/20 text-[11px]">
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
                              onChange={(e) => handleUpdateApplicationStatus(app.id, e.target.value)}
                              className="bg-[#050814] border border-white/15 rounded-lg px-2.5 py-1 text-[11px] text-slate-200 outline-none"
                            >
                              <option value="pending">Pending</option>
                              <option value="reviewing">Reviewing</option>
                              <option value="shortlisted">Shortlisted</option>
                              <option value="rejected">Rejected</option>
                            </select>
                          </td>
                          <td className="py-4 px-6 text-right" onClick={(e) => e.stopPropagation()}>
                            <button
                              onClick={() => handleDeleteApplication(app.id)}
                              className="p-1.5 rounded-lg text-slate-500 hover:text-rose-400 hover:bg-rose-500/10 transition-colors"
                            >
                              <Trash2 size={14} />
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

          {/* --------------------------------------------------------------- */}
          {/* TAB: INQUIRIES */}
          {/* --------------------------------------------------------------- */}
          {activeTab === 'inquiries' && (
            <div className="bg-[#080d22] border border-white/10 rounded-2xl overflow-hidden shadow-xl">
              {inquiries.length === 0 ? (
                <div className="py-16 text-center">
                  <Inbox size={40} className="mx-auto text-slate-600 mb-3" />
                  <h4 className="text-base font-semibold text-white">No inquiries received yet</h4>
                  <p className="text-xs text-slate-400 max-w-sm mx-auto mt-1">
                    When clients contact from <Link href="/contact" className="text-blue-400 underline">tsssoft.com/contact</Link>, their messages appear here.
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
                      {inquiries.map(inq => (
                        <tr key={inq.id} className="hover:bg-white/[0.02] transition-colors cursor-pointer" onClick={() => setSelectedDetail({ type: 'inquiry', data: inq })}>
                          <td className="py-4 px-6">
                            <div className="font-semibold text-white">{inq.name}</div>
                            <div className="text-[11px] text-slate-400 font-mono">{inq.email}</div>
                          </td>
                          <td className="py-4 px-6">
                            <span className="px-2.5 py-1 rounded-md bg-blue-500/10 text-blue-300 border border-blue-500/20 text-[11px]">
                              {inq.service || 'General'}
                            </span>
                          </td>
                          <td className="py-4 px-6 max-w-xs truncate text-slate-300">
                            {inq.message}
                          </td>
                          <td className="py-4 px-6 text-slate-400 font-mono whitespace-nowrap">
                            {inq.created_at ? new Date(inq.created_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' }) : 'Recent'}
                          </td>
                          <td className="py-4 px-6" onClick={(e) => e.stopPropagation()}>
                            <select
                              value={inq.status || 'new'}
                              onChange={(e) => handleUpdateInquiryStatus(inq.id, e.target.value)}
                              className="bg-[#050814] border border-white/15 rounded-lg px-2.5 py-1 text-[11px] text-slate-200 outline-none"
                            >
                              <option value="new">New</option>
                              <option value="in_progress">In Progress</option>
                              <option value="contacted">Contacted</option>
                              <option value="archived">Archived</option>
                            </select>
                          </td>
                          <td className="py-4 px-6 text-right" onClick={(e) => e.stopPropagation()}>
                            <button
                              onClick={() => handleDeleteInquiry(inq.id)}
                              className="p-1.5 rounded-lg text-slate-500 hover:text-rose-400 hover:bg-rose-500/10 transition-colors"
                            >
                              <Trash2 size={14} />
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

        </div>

      </main>

      {/* =================================================================== */}
      {/* MODAL: CREATE INVOICE */}
      {/* =================================================================== */}
      <AnimatePresence>
        {showInvoiceModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md overflow-y-auto no-print">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-3xl bg-[#080d22] border border-white/20 rounded-3xl p-6 sm:p-8 shadow-2xl my-8 max-h-[90vh] overflow-y-auto"
            >
              <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
                <div className="flex items-center gap-3">
                  <img src="/brand/logo-white-cropped.png" alt="TSS Soft." className="h-6 w-auto" />
                  <span className="text-sm font-bold text-white uppercase tracking-wider">Generate Executive Invoice</span>
                </div>
                <button onClick={() => setShowInvoiceModal(false)} className="text-slate-400 hover:text-white">
                  <X size={18} />
                </button>
              </div>

              <form onSubmit={handleSaveInvoice} className="space-y-6">
                
                {/* Client Quick Auto-Fill Dropdown */}
                {clients.length > 0 && (
                  <div className="p-3 rounded-xl bg-blue-500/[0.08] border border-blue-500/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                    <span className="text-xs text-blue-300 font-medium">Auto-fill from saved clients:</span>
                    <select
                      onChange={(e) => handleSelectExistingClient(e.target.value)}
                      defaultValue=""
                      className="bg-[#050916] border border-blue-400/30 text-white text-xs rounded-lg px-3 py-1.5 outline-none"
                    >
                      <option value="" disabled>Choose existing client...</option>
                      {clients.map(c => (
                        <option key={c.id} value={c.id}>{c.name} {c.company ? `(${c.company})` : ''}</option>
                      ))}
                    </select>
                  </div>
                )}

                {/* Invoice Meta Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 bg-white/[0.02] p-4 rounded-2xl border border-white/5">
                  <div>
                    <label className="text-[10px] font-mono uppercase text-slate-400 block mb-1">Invoice Number</label>
                    <input
                      required
                      value={invoiceForm.invoice_number}
                      onChange={(e) => setInvoiceForm(prev => ({ ...prev, invoice_number: e.target.value }))}
                      className="w-full bg-[#040816] border border-white/10 rounded-xl px-3 py-2 text-xs text-white font-mono"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] font-mono uppercase text-slate-400 block mb-1">Issue Date</label>
                    <input
                      type="date"
                      required
                      value={invoiceForm.issue_date}
                      onChange={(e) => setInvoiceForm(prev => ({ ...prev, issue_date: e.target.value }))}
                      className="w-full bg-[#040816] border border-white/10 rounded-xl px-3 py-2 text-xs text-white font-mono"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] font-mono uppercase text-slate-400 block mb-1">Due Date</label>
                    <input
                      type="date"
                      required
                      value={invoiceForm.due_date}
                      onChange={(e) => setInvoiceForm(prev => ({ ...prev, due_date: e.target.value }))}
                      className="w-full bg-[#040816] border border-white/10 rounded-xl px-3 py-2 text-xs text-white font-mono"
                    />
                  </div>
                </div>

                {/* Client Information */}
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-blue-400 mb-3">Bill To (Client Information)</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-[10px] font-mono uppercase text-slate-400 block mb-1">Client / Company Name *</label>
                      <input
                        required
                        placeholder="Apex Technologies Ltd."
                        value={invoiceForm.client_name}
                        onChange={(e) => setInvoiceForm(prev => ({ ...prev, client_name: e.target.value }))}
                        className="w-full bg-[#040816] border border-white/10 rounded-xl px-3 py-2 text-xs text-white"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] font-mono uppercase text-slate-400 block mb-1">Client Email</label>
                      <input
                        type="email"
                        placeholder="finance@apex.com"
                        value={invoiceForm.client_email}
                        onChange={(e) => setInvoiceForm(prev => ({ ...prev, client_email: e.target.value }))}
                        className="w-full bg-[#040816] border border-white/10 rounded-xl px-3 py-2 text-xs text-white"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] font-mono uppercase text-slate-400 block mb-1">Phone / Mobile</label>
                      <input
                        placeholder="+880 1XXX-XXXXXX"
                        value={invoiceForm.client_phone}
                        onChange={(e) => setInvoiceForm(prev => ({ ...prev, client_phone: e.target.value }))}
                        className="w-full bg-[#040816] border border-white/10 rounded-xl px-3 py-2 text-xs text-white"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] font-mono uppercase text-slate-400 block mb-1">Client Address</label>
                      <input
                        placeholder="Gulshan, Dhaka, Bangladesh"
                        value={invoiceForm.client_address}
                        onChange={(e) => setInvoiceForm(prev => ({ ...prev, client_address: e.target.value }))}
                        className="w-full bg-[#040816] border border-white/10 rounded-xl px-3 py-2 text-xs text-white"
                      />
                    </div>
                  </div>
                </div>

                {/* Services / Line Items */}
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-xs font-mono uppercase tracking-wider text-blue-400">Services &amp; Line Items</h4>
                    <button
                      type="button"
                      onClick={handleAddInvoiceItem}
                      className="text-xs text-blue-400 hover:text-blue-300 flex items-center gap-1 font-semibold"
                    >
                      <Plus size={13} />
                      <span>Add Line Item</span>
                    </button>
                  </div>

                  <div className="space-y-2.5">
                    {invoiceForm.items.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-3 bg-white/[0.02] p-2.5 rounded-xl border border-white/5">
                        <input
                          required
                          placeholder="Service description (e.g. Next.js Enterprise Web Platform)"
                          value={item.description}
                          onChange={(e) => handleItemChange(idx, 'description', e.target.value)}
                          className="flex-1 bg-[#040816] border border-white/10 rounded-lg px-3 py-2 text-xs text-white"
                        />
                        <input
                          type="number"
                          min="1"
                          placeholder="Qty"
                          value={item.qty}
                          onChange={(e) => handleItemChange(idx, 'qty', e.target.value)}
                          className="w-16 bg-[#040816] border border-white/10 rounded-lg px-2.5 py-2 text-xs text-white font-mono text-center"
                        />
                        <input
                          type="number"
                          min="0"
                          placeholder="Rate"
                          value={item.rate}
                          onChange={(e) => handleItemChange(idx, 'rate', e.target.value)}
                          className="w-28 bg-[#040816] border border-white/10 rounded-lg px-2.5 py-2 text-xs text-white font-mono text-right"
                        />
                        <div className="w-24 text-right font-mono font-semibold text-xs text-white">
                          ৳ {(Number(item.qty || 0) * Number(item.rate || 0)).toLocaleString()}
                        </div>
                        {invoiceForm.items.length > 1 && (
                          <button
                            type="button"
                            onClick={() => handleRemoveInvoiceItem(idx)}
                            className="text-slate-500 hover:text-rose-400 p-1"
                          >
                            <Trash2 size={14} />
                          </button>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Financial Summary Calculation */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-4 border-t border-white/10">
                  <div className="flex items-center gap-3">
                    <label className="text-xs text-slate-400 font-mono">Discount (৳):</label>
                    <input
                      type="number"
                      min="0"
                      value={invoiceForm.discount}
                      onChange={(e) => setInvoiceForm(prev => ({ ...prev, discount: Number(e.target.value) }))}
                      className="w-28 bg-[#040816] border border-white/10 rounded-xl px-3 py-1.5 text-xs text-white font-mono"
                    />
                  </div>

                  <div className="text-right">
                    <div className="text-xs text-slate-400 font-mono">
                      Subtotal: ৳ {calculateInvoiceSubtotal(invoiceForm.items).toLocaleString()}
                    </div>
                    <div className="text-2xl font-black text-white mt-0.5">
                      Total: ৳ {calculateInvoiceTotal(invoiceForm.items, invoiceForm.discount).toLocaleString()}
                    </div>
                  </div>
                </div>

                {/* Payment Notes */}
                <div>
                  <label className="text-[10px] font-mono uppercase text-slate-400 block mb-1">Notes / Remittance Instructions</label>
                  <textarea
                    rows="2"
                    value={invoiceForm.notes}
                    onChange={(e) => setInvoiceForm(prev => ({ ...prev, notes: e.target.value }))}
                    className="w-full bg-[#040816] border border-white/10 rounded-xl p-3 text-xs text-white resize-none"
                  />
                </div>

                {/* Form Submit */}
                <div className="flex items-center justify-end gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => setShowInvoiceModal(false)}
                    className="px-5 py-2.5 rounded-xl border border-white/10 text-xs text-slate-300 hover:bg-white/[0.05]"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs px-6 py-2.5 rounded-xl shadow-[0_0_20px_rgba(37,99,235,0.4)]"
                  >
                    Save &amp; Generate Invoice
                  </button>
                </div>

              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* =================================================================== */}
      {/* MODAL: VIEW & PRINT INVOICE (Executive Global Grade Layout) */}
      {/* =================================================================== */}
      <AnimatePresence>
        {viewInvoice && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-4xl bg-white text-slate-900 rounded-3xl p-8 sm:p-12 shadow-2xl my-8 overflow-hidden invoice-printable border border-slate-200"
            >
              
              {/* Modal Controls (Hidden in Print) */}
              <div className="flex items-center justify-between pb-6 mb-8 border-b border-slate-200 no-print">
                <div className="flex items-center gap-2 text-xs font-mono text-slate-500 uppercase tracking-widest">
                  <ShieldCheck size={16} className="text-blue-600" />
                  <span>Official Executive Invoice Preview</span>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => window.print()}
                    className="bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs px-5 py-2.5 rounded-xl flex items-center gap-2 shadow-md transition-all active:scale-95"
                  >
                    <Printer size={15} />
                    <span>Print / Save PDF</span>
                  </button>
                  <button onClick={() => setViewInvoice(null)} className="p-2 text-slate-400 hover:text-slate-800 transition-colors">
                    <X size={20} />
                  </button>
                </div>
              </div>

              {/* Printable Invoice Document Body */}
              <div className="space-y-8 font-sans">
                
                {/* 1. Header: Brand, Agency Address & Invoice Metadata */}
                <div className="flex flex-col sm:flex-row items-start justify-between gap-6 pb-6 border-b-2 border-slate-900">
                  <div>
                    <img 
                      src="/brand/logo-blue-cropped.png" 
                      alt="TSS Soft." 
                      className="h-11 w-auto object-contain mb-3" 
                    />
                    <div className="text-xs text-slate-600 leading-relaxed">
                      <p className="font-bold text-slate-950 text-sm">TSS Soft.</p>
                      <p className="font-medium text-slate-800">Digital Systems &amp; Software Architecture</p>
                      <p>Kushtia, Khulna Division, Bangladesh • Operating Worldwide</p>
                      <p>Tel / WhatsApp: <strong className="text-slate-900">+880 1870 955 900</strong></p>
                      <p>Email: <strong className="text-slate-900">hello@tsssoft.com</strong> • Web: <strong>tsssoft.com</strong></p>
                    </div>
                  </div>

                  <div className="text-left sm:text-right sm:min-w-[240px]">
                    <h2 className="text-3xl font-black text-slate-950 uppercase tracking-tight">INVOICE</h2>
                    <div className="mt-3 space-y-1.5 text-xs text-slate-700 font-mono">
                      <p>
                        <span className="text-slate-500 font-sans">Invoice #:</span>{' '}
                        <strong className="text-slate-950 bg-slate-100 px-2 py-0.5 rounded border border-slate-200">
                          {viewInvoice.invoice_number}
                        </strong>
                      </p>
                      <p><span className="text-slate-500 font-sans">Date of Issue:</span> <strong>{viewInvoice.issue_date || 'N/A'}</strong></p>
                      <p><span className="text-slate-500 font-sans">Payment Due:</span> <strong>{viewInvoice.due_date || 'N/A'}</strong></p>
                      <div className="pt-1">
                        <span className={`inline-block px-3 py-1 rounded-md text-[11px] font-bold uppercase tracking-wider font-sans border ${
                          viewInvoice.status === 'paid' 
                            ? 'bg-emerald-50 text-emerald-700 border-emerald-300' 
                            : 'bg-amber-50 text-amber-700 border-amber-300'
                        }`}>
                          {viewInvoice.status === 'paid' ? '● PAID IN FULL' : '● PAYMENT PENDING'}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 2. Client "Billed To" & Payment Destination Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-blue-700 font-bold block mb-2">
                      BILLED TO CLIENT
                    </span>
                    <h4 className="text-lg font-bold text-slate-950">{viewInvoice.client_name}</h4>
                    <div className="text-xs text-slate-600 space-y-1 mt-2">
                      {viewInvoice.client_address && <p className="text-slate-700">{viewInvoice.client_address}</p>}
                      {viewInvoice.client_phone && <p>Tel / Mobile: <strong className="text-slate-900">{viewInvoice.client_phone}</strong></p>}
                      {viewInvoice.client_email && <p>Email: <strong className="text-slate-900">{viewInvoice.client_email}</strong></p>}
                    </div>
                  </div>

                  <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-blue-700 font-bold block mb-2">
                      PAYMENT REMITTANCE
                    </span>
                    <div className="text-xs text-slate-700 space-y-1">
                      <p><span className="text-slate-500">Beneficiary:</span> <strong>TSS Soft</strong></p>
                      <p><span className="text-slate-500">MFS (bKash / Nagad):</span> <strong className="text-blue-700">+880 1870 955 900</strong></p>
                      <p><span className="text-slate-500">Bank Transfer:</span> Commercial Banking Network (Kushtia Branch)</p>
                      <p><span className="text-slate-500">Reference:</span> {viewInvoice.invoice_number}</p>
                    </div>
                  </div>
                </div>

                {/* 3. Items & Deliverables Table */}
                <div className="overflow-hidden rounded-xl border border-slate-200">
                  <table className="w-full text-left text-xs">
                    <thead>
                      <tr className="bg-slate-900 text-white font-mono uppercase tracking-wider text-[11px]">
                        <th className="py-3 px-4 w-12 text-center">#</th>
                        <th className="py-3 px-4">Service &amp; Architecture Deliverables</th>
                        <th className="py-3 px-4 text-center w-20">Qty</th>
                        <th className="py-3 px-4 text-right w-32">Unit Rate</th>
                        <th className="py-3 px-4 text-right w-36">Total Amount</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      {(viewInvoice.items || []).map((item, idx) => (
                        <tr key={idx} className={idx % 2 === 1 ? 'bg-slate-50/60' : 'bg-white'}>
                          <td className="py-3.5 px-4 text-center font-mono text-slate-400 font-semibold">{idx + 1}</td>
                          <td className="py-3.5 px-4 font-semibold text-slate-900">{item.description}</td>
                          <td className="py-3.5 px-4 text-center text-slate-600 font-mono">{item.qty}</td>
                          <td className="py-3.5 px-4 text-right text-slate-600 font-mono">৳ {Number(item.rate || 0).toLocaleString()}</td>
                          <td className="py-3.5 px-4 text-right font-bold text-slate-950 font-mono">
                            ৳ {(Number(item.qty || 0) * Number(item.rate || 0)).toLocaleString()}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* 4. Financial Total Summary */}
                <div className="flex justify-end pt-2">
                  <div className="w-72 space-y-2 text-xs text-right">
                    <div className="flex justify-between text-slate-600">
                      <span>Subtotal Amount:</span>
                      <span className="font-mono font-semibold">৳ {Number(viewInvoice.subtotal || viewInvoice.total || 0).toLocaleString()}</span>
                    </div>
                    {Number(viewInvoice.discount) > 0 && (
                      <div className="flex justify-between text-emerald-700 font-medium">
                        <span>Partner Discount:</span>
                        <span className="font-mono">- ৳ {Number(viewInvoice.discount).toLocaleString()}</span>
                      </div>
                    )}
                    <div className="flex justify-between text-base font-black text-slate-950 pt-2.5 border-t-2 border-slate-900">
                      <span>Grand Total:</span>
                      <span className="font-mono text-blue-600 text-lg">৳ {Number(viewInvoice.total || 0).toLocaleString()}</span>
                    </div>
                  </div>
                </div>

                {/* 5. Terms, Instructions & Official Seal Footer */}
                <div className="pt-8 border-t border-slate-200 flex flex-col sm:flex-row justify-between items-end gap-6 text-xs text-slate-600">
                  <div className="max-w-md space-y-1">
                    <span className="text-[10px] font-mono uppercase text-slate-500 font-bold block">Terms of Service &amp; Transfer</span>
                    <p className="leading-relaxed text-slate-500 text-[11px]">
                      {viewInvoice.notes || 'All intellectual property and production rights transfer upon full invoice settlement.'}
                    </p>
                    <div className="inline-flex items-center gap-1.5 pt-2 text-[10px] font-mono text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                      <Check size={12} />
                      <span>OFFICIAL TSS SOFT VERIFIED BILLING</span>
                    </div>
                  </div>

                  <div className="text-center sm:text-right">
                    <div className="w-44 h-12 border-b-2 border-slate-400 mb-1 mx-auto sm:ml-auto"></div>
                    <span className="text-[10px] font-mono uppercase text-slate-500 font-bold">Authorized Signature</span>
                    <p className="text-[10px] text-slate-400">Managing Director, TSS Soft.</p>
                  </div>
                </div>

              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* =================================================================== */}
      {/* MODAL: ADD CLIENT */}
      {/* =================================================================== */}
      <AnimatePresence>
        {showClientModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md overflow-y-auto no-print">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-lg bg-[#080d22] border border-white/20 rounded-3xl p-6 sm:p-8 shadow-2xl"
            >
              <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <Users size={16} className="text-blue-400" />
                  <span>Add New Enterprise Client</span>
                </h3>
                <button onClick={() => setShowClientModal(false)} className="text-slate-400 hover:text-white">
                  <X size={18} />
                </button>
              </div>

              <form onSubmit={handleSaveClient} className="space-y-4">
                <div>
                  <label className="text-[10px] font-mono uppercase text-slate-400 block mb-1">Client Contact Name *</label>
                  <input
                    required
                    placeholder="e.g. Mahfuzur Rahman"
                    value={clientForm.name}
                    onChange={(e) => setClientForm(prev => ({ ...prev, name: e.target.value }))}
                    className="w-full bg-[#040816] border border-white/10 rounded-xl px-3 py-2 text-xs text-white"
                  />
                </div>

                <div>
                  <label className="text-[10px] font-mono uppercase text-slate-400 block mb-1">Company / Organization</label>
                  <input
                    placeholder="e.g. Apex Global Ventures Ltd."
                    value={clientForm.company}
                    onChange={(e) => setClientForm(prev => ({ ...prev, company: e.target.value }))}
                    className="w-full bg-[#040816] border border-white/10 rounded-xl px-3 py-2 text-xs text-white"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-[10px] font-mono uppercase text-slate-400 block mb-1">Email Address</label>
                    <input
                      type="email"
                      placeholder="client@apex.com"
                      value={clientForm.email}
                      onChange={(e) => setClientForm(prev => ({ ...prev, email: e.target.value }))}
                      className="w-full bg-[#040816] border border-white/10 rounded-xl px-3 py-2 text-xs text-white"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] font-mono uppercase text-slate-400 block mb-1">Mobile / WhatsApp</label>
                    <input
                      placeholder="+880 17XX-XXXXXX"
                      value={clientForm.phone}
                      onChange={(e) => setClientForm(prev => ({ ...prev, phone: e.target.value }))}
                      className="w-full bg-[#040816] border border-white/10 rounded-xl px-3 py-2 text-xs text-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-[10px] font-mono uppercase text-slate-400 block mb-1">Office / Billing Address</label>
                  <input
                    placeholder="Gulshan 2, Dhaka, Bangladesh"
                    value={clientForm.address}
                    onChange={(e) => setClientForm(prev => ({ ...prev, address: e.target.value }))}
                    className="w-full bg-[#040816] border border-white/10 rounded-xl px-3 py-2 text-xs text-white"
                  />
                </div>

                <div>
                  <label className="text-[10px] font-mono uppercase text-slate-400 block mb-1">Notes / Relationship Summary</label>
                  <textarea
                    rows="2"
                    placeholder="Enterprise partnership, annual retainer..."
                    value={clientForm.notes}
                    onChange={(e) => setClientForm(prev => ({ ...prev, notes: e.target.value }))}
                    className="w-full bg-[#040816] border border-white/10 rounded-xl p-3 text-xs text-white resize-none"
                  />
                </div>

                <div className="flex items-center justify-end gap-3 pt-3 border-t border-white/10">
                  <button
                    type="button"
                    onClick={() => setShowClientModal(false)}
                    className="px-4 py-2 rounded-xl border border-white/10 text-xs text-slate-300 hover:bg-white/[0.05]"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs px-5 py-2 rounded-xl shadow-[0_0_20px_rgba(37,99,235,0.4)]"
                  >
                    Save Client
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* =================================================================== */}
      {/* MODAL: DETAIL VIEWER (Applications & Inquiries) */}
      {/* =================================================================== */}
      <AnimatePresence>
        {selectedDetail && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md no-print">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-lg bg-[#080d22] border border-white/20 rounded-3xl p-6 sm:p-8 shadow-2xl max-h-[85vh] overflow-y-auto"
            >
              <button
                onClick={() => setSelectedDetail(null)}
                className="absolute top-5 right-5 text-slate-400 hover:text-white"
              >
                <X size={18} />
              </button>

              <div className="mb-4">
                <span className="text-[10px] font-mono uppercase tracking-widest text-blue-400">
                  {selectedDetail.type === 'inquiry' ? 'Inquiry Details' : 'Job Application Details'}
                </span>
                <h3 className="text-xl font-bold text-white mt-1">{selectedDetail.data.name}</h3>
                <p className="text-xs text-slate-400 font-mono mt-0.5">{selectedDetail.data.email}</p>
              </div>

              <div className="space-y-3 text-xs">
                {selectedDetail.type === 'inquiry' ? (
                  <>
                    <div className="bg-white/[0.03] p-3 rounded-xl border border-white/5">
                      <span className="text-[10px] uppercase font-mono text-slate-400 block mb-1">Service Requested</span>
                      <span className="text-white font-medium">{selectedDetail.data.service || 'General Inquiry'}</span>
                    </div>

                    <div className="bg-white/[0.03] p-4 rounded-xl border border-white/5">
                      <span className="text-[10px] uppercase font-mono text-slate-400 block mb-2">Message Body</span>
                      <p className="text-slate-200 whitespace-pre-wrap leading-relaxed">{selectedDetail.data.message}</p>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="bg-white/[0.03] p-3 rounded-xl border border-white/5">
                        <span className="text-[10px] uppercase font-mono text-slate-400 block mb-1">Position</span>
                        <span className="text-white font-medium">{selectedDetail.data.position}</span>
                      </div>
                      <div className="bg-white/[0.03] p-3 rounded-xl border border-white/5">
                        <span className="text-[10px] uppercase font-mono text-slate-400 block mb-1">Experience</span>
                        <span className="text-white font-medium">{selectedDetail.data.experience || 'Not specified'}</span>
                      </div>
                    </div>

                    {selectedDetail.data.portfolio_url && (
                      <div className="bg-white/[0.03] p-3 rounded-xl border border-white/5">
                        <span className="text-[10px] uppercase font-mono text-slate-400 block mb-1">Portfolio / Profile Link</span>
                        <a 
                          href={selectedDetail.data.portfolio_url} 
                          target="_blank" 
                          rel="noreferrer" 
                          className="text-blue-400 hover:underline flex items-center gap-1"
                        >
                          <span>{selectedDetail.data.portfolio_url}</span>
                          <ExternalLink size={12} />
                        </a>
                      </div>
                    )}

                    <div className="bg-white/[0.03] p-4 rounded-xl border border-white/5">
                      <span className="text-[10px] uppercase font-mono text-slate-400 block mb-2">Applicant Statement / Notes</span>
                      <p className="text-slate-200 whitespace-pre-wrap leading-relaxed">
                        {selectedDetail.data.message || 'No additional note provided.'}
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
