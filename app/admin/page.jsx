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
  Building,
  MapPin,
  Calendar,
  DollarSign,
  TrendingUp,
  X,
  Edit,
  ShieldCheck,
  Check,
  ArrowLeft,
  Key,
  Shield,
  Eye,
  CheckCircle2
} from 'lucide-react';
import Link from 'next/link';
import { supabase } from '../../lib/supabase';

export default function AdminPage() {
  // --------------------------------------------------------------------------
  // 1. AUTH & TAB-ISOLATED SESSION STATE
  // --------------------------------------------------------------------------
  const [session, setSession] = useState(null);
  const [currentAdminUser, setCurrentAdminUser] = useState(null);
  const [authLoading, setAuthLoading] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState(null);
  const [isSubmittingAuth, setIsSubmittingAuth] = useState(false);

  // --------------------------------------------------------------------------
  // 2. DASHBOARD & SIDEBAR STATE
  // --------------------------------------------------------------------------
  const [activeTab, setActiveTab] = useState('dashboard');
  const [dataLoading, setDataLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  // Collections
  const [invoices, setInvoices] = useState([]);
  const [clients, setClients] = useState([]);
  const [applications, setApplications] = useState([]);
  const [inquiries, setInquiries] = useState([]);
  const [moderators, setModerators] = useState([]);

  // Modals & Fullscreen Studios
  const [isInvoiceStudioOpen, setIsInvoiceStudioOpen] = useState(false);
  const [editingInvoiceId, setEditingInvoiceId] = useState(null);
  const [viewInvoice, setViewInvoice] = useState(null);
  const [showClientModal, setShowClientModal] = useState(false);
  const [selectedDetail, setSelectedDetail] = useState(null);
  const [showModeratorModal, setShowModeratorModal] = useState(false);
  const [resetPassModerator, setResetPassModerator] = useState(null);
  const [newPasswordValue, setNewPasswordValue] = useState('');

  // Client Search in Invoice Studio
  const [clientSearchTerm, setClientSearchTerm] = useState('');
  const [isClientSearchFocused, setIsClientSearchFocused] = useState(false);
  const [selectedClientName, setSelectedClientName] = useState('');

  // Invoice Form State (No due date, empty initial numbers, clean notes)
  const [invoiceForm, setInvoiceForm] = useState({
    invoice_number: `TSS-INV-${new Date().getFullYear()}-${Math.floor(100 + Math.random() * 900)}`,
    client_name: '',
    client_email: '',
    client_phone: '',
    client_address: '',
    issue_date: new Date().toISOString().split('T')[0],
    currency: 'BDT',
    items: [
      { description: 'Bespoke Software Architecture & Next.js Core', qty: 1, rate: '' }
    ],
    discount: '',
    paid_amount: '',
    payment_records: [],
    notes: 'Thank you for partnering with TSS Soft. All deliverables verified by TSS Soft Management.'
  });

  // Installment input state inside Invoice Studio
  const [newPaymentDate, setNewPaymentDate] = useState(new Date().toISOString().split('T')[0]);
  const [newPaymentAmount, setNewPaymentAmount] = useState('');
  const [newPaymentMethod, setNewPaymentMethod] = useState('bKash / Bank');
  const [newPaymentNote, setNewPaymentNote] = useState('');

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

  // Moderator Form State
  const [moderatorForm, setModeratorForm] = useState({
    name: '',
    email: '',
    password: '',
    access_type: 'selective', // 'full' or 'selective'
    permissions: ['invoices']
  });

  // --------------------------------------------------------------------------
  // 3. AUTHENTICATION LIFECYCLE (Tab-Isolated Security via sessionStorage)
  // --------------------------------------------------------------------------
  useEffect(() => {
    async function checkAuth() {
      try {
        if (typeof window !== 'undefined') {
          // Strictly check current tab's authentication
          const isTabAuthed = sessionStorage.getItem('tss_admin_tab_authenticated') === 'true';
          const savedUserStr = sessionStorage.getItem('tss_admin_user');

          if (isTabAuthed && savedUserStr) {
            const parsedUser = JSON.parse(savedUserStr);
            setCurrentAdminUser(parsedUser);
            setSession({ user: { email: parsedUser.email } });
          } else {
            // New tab or unauthenticated tab requires explicit login!
            setSession(null);
            setCurrentAdminUser(null);
          }
        }
      } catch (err) {
        console.warn('Auth check notice:', err);
      } finally {
        setAuthLoading(false);
      }
    }

    checkAuth();
  }, []);

  // Fetch all collections when session is validated for this tab
  useEffect(() => {
    if (session) {
      fetchAllData();
    }
  }, [session]);

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    setIsSubmittingAuth(true);
    setLoginError(null);

    const inputEmail = email.trim().toLowerCase();
    const inputPass = password.trim();

    try {
      // 1. Check Master Admin Credentials
      if (
        (inputEmail === 'tsssoft.com@tsssoft.com' || inputEmail === 'admin@tsssoft.com') && 
        (inputPass === 'tsssoft2026' || inputPass === 'admin123' || inputPass === 'tsssoft@2026')
      ) {
        const adminObj = {
          email: inputEmail,
          name: 'Master Administrator',
          role: 'admin',
          access_type: 'full',
          permissions: ['all']
        };
        sessionStorage.setItem('tss_admin_tab_authenticated', 'true');
        sessionStorage.setItem('tss_admin_user', JSON.stringify(adminObj));
        setCurrentAdminUser(adminObj);
        setSession({ user: { email: inputEmail } });
        return;
      }

      // 2. Check Supabase Auth
      try {
        const { data, error } = await supabase.auth.signInWithPassword({
          email: inputEmail,
          password: inputPass,
        });
        if (!error && data?.session) {
          const adminObj = {
            email: inputEmail,
            name: 'Authorized Admin',
            role: 'admin',
            access_type: 'full',
            permissions: ['all']
          };
          sessionStorage.setItem('tss_admin_tab_authenticated', 'true');
          sessionStorage.setItem('tss_admin_user', JSON.stringify(adminObj));
          setCurrentAdminUser(adminObj);
          setSession(data.session);
          return;
        }
      } catch (supaErr) {
        // Fall through to moderator check
      }

      // 3. Check Registered Moderators
      const localMods = JSON.parse(localStorage.getItem('tss_local_moderators') || '[]');
      const matchedMod = localMods.find(m => m.email?.toLowerCase() === inputEmail && m.password === inputPass);

      if (matchedMod) {
        const modObj = {
          email: matchedMod.email,
          name: matchedMod.name || 'Moderator',
          role: matchedMod.role || 'moderator',
          access_type: matchedMod.access_type || 'selective',
          permissions: matchedMod.permissions || ['invoices']
        };
        sessionStorage.setItem('tss_admin_tab_authenticated', 'true');
        sessionStorage.setItem('tss_admin_user', JSON.stringify(modObj));
        setCurrentAdminUser(modObj);
        setSession({ user: { email: matchedMod.email } });
        return;
      }

      throw new Error('Invalid email or password. Access restricted to authorized TSS Soft staff.');
    } catch (err) {
      console.error('Login error:', err);
      setLoginError(err.message || 'Invalid email or password.');
    } finally {
      setIsSubmittingAuth(false);
    }
  };

  const handleSignOut = async () => {
    try {
      await supabase.auth.signOut();
    } catch {}
    if (typeof window !== 'undefined') {
      sessionStorage.removeItem('tss_admin_tab_authenticated');
      sessionStorage.removeItem('tss_admin_user');
    }
    setSession(null);
    setCurrentAdminUser(null);
    setEmail('');
    setPassword('');
  };

  // Permission Verification
  const hasAccess = (section) => {
    if (!currentAdminUser) return true;
    if (currentAdminUser.role === 'admin' || currentAdminUser.access_type === 'full') return true;
    if (Array.isArray(currentAdminUser.permissions)) {
      return currentAdminUser.permissions.includes(section) || currentAdminUser.permissions.includes('all');
    }
    return false;
  };

  // --------------------------------------------------------------------------
  // 4. DATA FETCHING (Supabase & Resilient Offline Cache)
  // --------------------------------------------------------------------------
  const fetchAllData = async () => {
    setDataLoading(true);

    const normalizeInvoiceList = (list) => {
      if (!Array.isArray(list)) return [];
      return list.map(inv => {
        let paid = inv.paid_amount;
        let due = inv.due_amount;
        let paymentRecords = inv.payment_records || [];
        
        // Clean notes if old JSON was stored
        let cleanNotes = inv.notes || '';
        if (typeof cleanNotes === 'string' && cleanNotes.startsWith('{')) {
          try {
            const parsed = JSON.parse(cleanNotes);
            if (parsed.paid_amount !== undefined && (paid === undefined || paid === null)) {
              paid = parsed.paid_amount;
              due = parsed.due_amount;
            }
            cleanNotes = parsed.text || '';
          } catch {}
        }

        const totalNum = Number(inv.total || 0);
        const paidNum = Number(paid !== undefined && paid !== null ? paid : (inv.status === 'paid' ? totalNum : 0));
        const dueNum = Number(due !== undefined && due !== null ? due : Math.max(0, totalNum - paidNum));

        let finalStatus = inv.status;
        if (dueNum === 0 && totalNum > 0) finalStatus = 'paid';
        else if (paidNum > 0 && dueNum > 0) finalStatus = 'partial';
        else if (paidNum === 0) finalStatus = 'pending';

        return {
          ...inv,
          notes: cleanNotes,
          paid_amount: paidNum,
          due_amount: dueNum,
          status: finalStatus,
          payment_records: paymentRecords
        };
      });
    };

    // 1. Invoices
    try {
      const { data, error } = await supabase.from('invoices').select('*').order('created_at', { ascending: false });
      if (!error && Array.isArray(data)) {
        const normalized = normalizeInvoiceList(data);
        setInvoices(normalized);
        localStorage.setItem('tss_local_invoices', JSON.stringify(normalized));
      } else {
        const local = JSON.parse(localStorage.getItem('tss_local_invoices') || '[]');
        setInvoices(normalizeInvoiceList(local));
      }
    } catch {
      const local = JSON.parse(localStorage.getItem('tss_local_invoices') || '[]');
      setInvoices(normalizeInvoiceList(local));
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
    } catch {
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
    } catch {
      const local = JSON.parse(localStorage.getItem('tss_local_applications') || '[]');
      setApplications(local);
    }

    // 4. Inquiries
    try {
      const { data, error } = await supabase.from('contacts').select('*').order('created_at', { ascending: false });
      if (!error && Array.isArray(data)) {
        setInquiries(data);
      } else {
        const local = JSON.parse(localStorage.getItem('tss_local_contacts') || '[]');
        setInquiries(local);
      }
    } catch {
      const local = JSON.parse(localStorage.getItem('tss_local_contacts') || '[]');
      setInquiries(local);
    }

    // 5. Moderators
    try {
      const { data, error } = await supabase.from('moderators').select('*').order('created_at', { ascending: false });
      if (!error && Array.isArray(data)) {
        setModerators(data);
        localStorage.setItem('tss_local_moderators', JSON.stringify(data));
      } else {
        const local = JSON.parse(localStorage.getItem('tss_local_moderators') || '[]');
        setModerators(local);
      }
    } catch {
      const local = JSON.parse(localStorage.getItem('tss_local_moderators') || '[]');
      setModerators(local);
    }

    setDataLoading(false);
  };

  // --------------------------------------------------------------------------
  // 5. INVOICE STUDIO ACTIONS & AUTO CALCULATIONS
  // --------------------------------------------------------------------------
  const calculateInvoiceSubtotal = (items) => {
    return (items || []).reduce((sum, item) => sum + (Number(item.qty || 1) * Number(item.rate || 0)), 0);
  };

  const calculateInvoiceTotal = (items, discount) => {
    const sub = calculateInvoiceSubtotal(items);
    return Math.max(0, sub - Number(discount || 0));
  };

  const currentSubtotal = calculateInvoiceSubtotal(invoiceForm.items);
  const currentTotal = calculateInvoiceTotal(invoiceForm.items, invoiceForm.discount);
  const currentPaid = Number(invoiceForm.paid_amount || 0);
  const currentDue = Math.max(0, currentTotal - currentPaid);

  // Derive status automatically from amounts
  const getDerivedStatus = (total, paid, due) => {
    if (total === 0) return 'draft';
    if (due === 0) return 'paid';
    if (paid > 0 && due > 0) return 'partial';
    return 'pending';
  };

  const currentDerivedStatus = getDerivedStatus(currentTotal, currentPaid, currentDue);

  const handleOpenCreateInvoice = () => {
    setEditingInvoiceId(null);
    setInvoiceForm({
      invoice_number: `TSS-INV-${new Date().getFullYear()}-${Math.floor(100 + Math.random() * 900)}`,
      client_name: '',
      client_email: '',
      client_phone: '',
      client_address: '',
      issue_date: new Date().toISOString().split('T')[0],
      currency: 'BDT',
      items: [
        { description: 'Bespoke Software Architecture & Engineering', qty: 1, rate: '' }
      ],
      discount: '',
      paid_amount: '',
      payment_records: [],
      notes: 'Thank you for choosing TSS Soft. All services delivered with verified engineering guarantees.'
    });
    setNewPaymentAmount('');
    setNewPaymentNote('');
    setIsInvoiceStudioOpen(true);
  };

  const handleOpenEditInvoice = (inv) => {
    setEditingInvoiceId(inv.id);
    setInvoiceForm({
      invoice_number: inv.invoice_number,
      client_name: inv.client_name || '',
      client_email: inv.client_email || '',
      client_phone: inv.client_phone || '',
      client_address: inv.client_address || '',
      issue_date: inv.issue_date || new Date().toISOString().split('T')[0],
      currency: inv.currency || 'BDT',
      items: (inv.items && inv.items.length > 0) ? inv.items : [{ description: 'Custom Development Core', qty: 1, rate: '' }],
      discount: inv.discount ? String(inv.discount) : '',
      paid_amount: inv.paid_amount ? String(inv.paid_amount) : '',
      payment_records: Array.isArray(inv.payment_records) ? inv.payment_records : [],
      notes: inv.notes || 'Thank you for choosing TSS Soft.'
    });
    setNewPaymentAmount('');
    setNewPaymentNote('');
    setIsInvoiceStudioOpen(true);
  };

  const handleAddInvoiceItem = () => {
    setInvoiceForm(prev => ({
      ...prev,
      items: [...prev.items, { description: '', qty: 1, rate: '' }]
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

  // Add a recorded due installment
  const handleAddPaymentRecord = () => {
    const amt = Number(newPaymentAmount);
    if (!amt || amt <= 0) {
      alert('Please enter a valid payment amount.');
      return;
    }

    const newRecord = {
      id: 'pay_' + Date.now(),
      date: newPaymentDate || new Date().toISOString().split('T')[0],
      amount: amt,
      method: newPaymentMethod || 'bKash / Bank',
      note: newPaymentNote || 'Due installment payment'
    };

    const updatedRecords = [...(invoiceForm.payment_records || []), newRecord];
    const newTotalPaid = Number(invoiceForm.paid_amount || 0) + amt;

    setInvoiceForm(prev => ({
      ...prev,
      paid_amount: String(newTotalPaid),
      payment_records: updatedRecords
    }));

    setNewPaymentAmount('');
    setNewPaymentNote('');
  };

  const handleSaveInvoiceFromStudio = async (e) => {
    if (e) e.preventDefault();

    if (!invoiceForm.client_name?.trim()) {
      alert('Please specify the Client or Company Name.');
      return;
    }

    const subtotal = currentSubtotal;
    const total = currentTotal;
    const paidAmount = currentPaid;
    const dueAmount = currentDue;
    const finalStatus = currentDerivedStatus;

    const payload = {
      invoice_number: invoiceForm.invoice_number,
      client_name: invoiceForm.client_name.trim(),
      client_email: invoiceForm.client_email?.trim() || null,
      client_phone: invoiceForm.client_phone?.trim() || null,
      client_address: invoiceForm.client_address?.trim() || null,
      issue_date: invoiceForm.issue_date || null,
      currency: 'BDT',
      items: invoiceForm.items.map(it => ({
        description: it.description || 'Deliverable',
        qty: Number(it.qty || 1),
        rate: Number(it.rate || 0)
      })),
      subtotal,
      discount: Number(invoiceForm.discount || 0),
      total,
      paid_amount: paidAmount,
      due_amount: dueAmount,
      status: finalStatus,
      notes: invoiceForm.notes?.trim() || null,
      payment_records: invoiceForm.payment_records || []
    };

    try {
      if (editingInvoiceId) {
        // Update existing invoice
        let { error } = await supabase.from('invoices').update(payload).eq('id', editingInvoiceId);
        if (error) throw error;
        setInvoices(prev => prev.map(inv => inv.id === editingInvoiceId ? { ...inv, ...payload } : inv));
      } else {
        // Insert new invoice
        let { data, error } = await supabase.from('invoices').insert([payload]).select();
        if (error) throw error;
        const saved = (data && data[0]) ? data[0] : { ...payload, id: 'inv_' + Date.now() };
        setInvoices(prev => [saved, ...prev]);
      }

      // Update LocalStorage backup
      const local = JSON.parse(localStorage.getItem('tss_local_invoices') || '[]');
      if (editingInvoiceId) {
        const updatedLocal = local.map(i => i.id === editingInvoiceId ? { ...i, ...payload } : i);
        localStorage.setItem('tss_local_invoices', JSON.stringify(updatedLocal));
      } else {
        local.unshift({ ...payload, id: 'inv_' + Date.now() });
        localStorage.setItem('tss_local_invoices', JSON.stringify(local));
      }

      setIsInvoiceStudioOpen(false);
    } catch (err) {
      console.warn('Saved to offline storage:', err);
      // Fallback local save
      const fallback = { ...payload, id: editingInvoiceId || 'local_' + Date.now() };
      setInvoices(prev => {
        if (editingInvoiceId) return prev.map(i => i.id === editingInvoiceId ? fallback : i);
        return [fallback, ...prev];
      });
      const local = JSON.parse(localStorage.getItem('tss_local_invoices') || '[]');
      if (editingInvoiceId) {
        localStorage.setItem('tss_local_invoices', JSON.stringify(local.map(i => i.id === editingInvoiceId ? fallback : i)));
      } else {
        local.unshift(fallback);
        localStorage.setItem('tss_local_invoices', JSON.stringify(local));
      }
      setIsInvoiceStudioOpen(false);
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

  // --------------------------------------------------------------------------
  // 6. CLIENT ACTIONS
  // --------------------------------------------------------------------------
  const handleSaveClient = async (e) => {
    e.preventDefault();
    const payload = {
      name: clientForm.name.trim(),
      company: clientForm.company?.trim() || null,
      email: clientForm.email?.trim() || null,
      phone: clientForm.phone?.trim() || null,
      address: clientForm.address?.trim() || null,
      notes: clientForm.notes?.trim() || null,
      status: clientForm.status || 'active'
    };

    try {
      const { data, error } = await supabase.from('clients').insert([payload]).select();
      if (error) throw error;
      const saved = data && data[0] ? data[0] : { ...payload, id: 'cl_' + Date.now() };
      setClients(prev => [saved, ...prev]);
      setShowClientModal(false);
    } catch {
      const fallback = { ...payload, id: 'local_' + Date.now() };
      setClients(prev => [fallback, ...prev]);
      const local = JSON.parse(localStorage.getItem('tss_local_clients') || '[]');
      local.unshift(fallback);
      localStorage.setItem('tss_local_clients', JSON.stringify(local));
      setShowClientModal(false);
    }
  };

  const handleDeleteClient = async (id) => {
    if (!confirm('Are you sure you want to delete this client?')) return;
    setClients(prev => prev.filter(c => c.id !== id));
    try {
      await supabase.from('clients').delete().eq('id', id);
    } catch {}
    const local = JSON.parse(localStorage.getItem('tss_local_clients') || '[]');
    localStorage.setItem('tss_local_clients', JSON.stringify(local.filter(c => c.id !== id)));
  };

  // --------------------------------------------------------------------------
  // 7. MODERATOR ACTIONS (Add, Reset Password, Delete)
  // --------------------------------------------------------------------------
  const handleSaveModerator = async (e) => {
    e.preventDefault();
    if (!moderatorForm.email?.trim() || !moderatorForm.password?.trim()) {
      alert('Email and Password are required for a moderator account.');
      return;
    }

    const newMod = {
      id: 'mod_' + Date.now(),
      name: moderatorForm.name?.trim() || 'Moderator',
      email: moderatorForm.email.trim().toLowerCase(),
      password: moderatorForm.password.trim(),
      role: 'moderator',
      access_type: moderatorForm.access_type,
      permissions: moderatorForm.access_type === 'full' ? ['all'] : moderatorForm.permissions,
      created_at: new Date().toISOString()
    };

    try {
      const { data, error } = await supabase.from('moderators').insert([newMod]).select();
      if (!error && data && data[0]) {
        setModerators(prev => [data[0], ...prev]);
      } else {
        setModerators(prev => [newMod, ...prev]);
      }
    } catch {
      setModerators(prev => [newMod, ...prev]);
    }

    const local = JSON.parse(localStorage.getItem('tss_local_moderators') || '[]');
    local.unshift(newMod);
    localStorage.setItem('tss_local_moderators', JSON.stringify(local));

    setShowModeratorModal(false);
    setModeratorForm({
      name: '',
      email: '',
      password: '',
      access_type: 'selective',
      permissions: ['invoices']
    });
  };

  const handleResetPassword = async () => {
    if (!newPasswordValue.trim() || !resetPassModerator) return;

    try {
      await supabase.from('moderators').update({ password: newPasswordValue.trim() }).eq('id', resetPassModerator.id);
    } catch {}

    setModerators(prev => prev.map(m => m.id === resetPassModerator.id ? { ...m, password: newPasswordValue.trim() } : m));

    const local = JSON.parse(localStorage.getItem('tss_local_moderators') || '[]');
    const updated = local.map(m => m.id === resetPassModerator.id ? { ...m, password: newPasswordValue.trim() } : m);
    localStorage.setItem('tss_local_moderators', JSON.stringify(updated));

    setResetPassModerator(null);
    setNewPasswordValue('');
    alert('Password updated successfully!');
  };

  const handleDeleteModerator = async (id) => {
    if (!confirm('Are you sure you want to remove this moderator?')) return;
    setModerators(prev => prev.filter(m => m.id !== id));
    try {
      await supabase.from('moderators').delete().eq('id', id);
    } catch {}
    const local = JSON.parse(localStorage.getItem('tss_local_moderators') || '[]');
    localStorage.setItem('tss_local_moderators', JSON.stringify(local.filter(m => m.id !== id)));
  };

  // --------------------------------------------------------------------------
  // 8. RENDER: SECURE TAB-ISOLATED LOGIN SCREEN
  // --------------------------------------------------------------------------
  if (authLoading) {
    return (
      <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-4">
        <div className="w-10 h-10 border-3 border-blue-600 border-t-transparent rounded-full animate-spin mb-4" />
        <p className="text-slate-600 font-mono text-xs uppercase tracking-widest">Verifying Admin Session...</p>
      </div>
    );
  }

  if (!session) {
    return (
      <div className="min-h-screen bg-slate-100 flex items-center justify-center p-4">
        <div className="w-full max-w-md bg-white border border-slate-200/90 rounded-3xl p-8 sm:p-10 shadow-xl text-slate-900">
          
          <div className="text-center mb-8">
            <div className="w-14 h-14 rounded-2xl bg-blue-600/10 border border-blue-600/20 text-blue-600 flex items-center justify-center mx-auto mb-4 shadow-sm">
              <Lock size={26} />
            </div>
            <h1 className="font-heading text-2xl font-bold tracking-tight text-slate-900">
              TSS Soft Administration
            </h1>
            <p className="text-xs text-slate-500 mt-1">
              Tab-Isolated Security • Enter Credentials to Access
            </p>
          </div>

          {loginError && (
            <div className="mb-5 p-3.5 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs flex items-center gap-2">
              <AlertCircle size={15} className="flex-shrink-0" />
              <span>{loginError}</span>
            </div>
          )}

          <form onSubmit={handleLoginSubmit} className="space-y-4">
            <div className="space-y-1.5">
              <label className="text-xs font-mono uppercase tracking-wider text-slate-700 font-semibold">Email Address</label>
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@tsssoft.com"
                  required
                  className="w-full px-4 py-3 bg-white border border-slate-300 rounded-xl text-slate-900 placeholder:text-slate-400 text-sm focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 shadow-sm"
                />
                <Mail size={16} className="absolute right-3.5 top-3.5 text-slate-400 pointer-events-none" />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-mono uppercase tracking-wider text-slate-700 font-semibold">Password</label>
              <div className="relative">
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••••••"
                  required
                  className="w-full px-4 py-3 bg-white border border-slate-300 rounded-xl text-slate-900 placeholder:text-slate-400 text-sm focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 shadow-sm"
                />
                <KeyRound size={16} className="absolute right-3.5 top-3.5 text-slate-400 pointer-events-none" />
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmittingAuth}
              className="w-full mt-2 py-3.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-heading font-semibold text-sm transition-all shadow-md hover:shadow-lg disabled:opacity-50 flex items-center justify-center gap-2"
            >
              {isSubmittingAuth ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  <span>Authenticating...</span>
                </>
              ) : (
                <>
                  <span>Sign In to Admin Workspace</span>
                  <ChevronRight size={16} />
                </>
              )}
            </button>
          </form>

          <div className="mt-8 pt-5 border-t border-slate-100 text-center text-[11px] text-slate-400 font-mono">
            TSS Soft Internal ERP Systems • Authorized Use Only
          </div>
        </div>
      </div>
    );
  }

  // --------------------------------------------------------------------------
  // 9. FULLSCREEN INVOICE STUDIO (Split-Screen Builder & Live A4 Document)
  // --------------------------------------------------------------------------
  if (isInvoiceStudioOpen) {
    return (
      <div className="fixed inset-0 z-50 bg-slate-100 flex flex-col overflow-hidden text-slate-900">
        
        {/* Top Navigation Bar */}
        <header className="h-16 bg-white border-b border-slate-200 px-6 flex items-center justify-between shadow-sm flex-shrink-0 z-20">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsInvoiceStudioOpen(false)}
              className="flex items-center gap-2 px-3 py-1.5 rounded-xl border border-slate-200 hover:bg-slate-100 text-slate-700 text-xs font-semibold transition-colors"
            >
              <ArrowLeft size={16} />
              <span>Back to Invoices</span>
            </button>
            <div className="h-5 w-px bg-slate-200" />
            <div>
              <h2 className="font-heading font-bold text-slate-900 text-sm sm:text-base">
                Executive Invoice Studio
              </h2>
              <p className="text-[11px] font-mono text-slate-500">
                {invoiceForm.invoice_number}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {/* Live Auto Status Pill */}
            <span className={`px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider ${
              currentDerivedStatus === 'paid' 
                ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                : currentDerivedStatus === 'partial'
                ? 'bg-amber-50 text-amber-700 border border-amber-200'
                : 'bg-rose-50 text-rose-700 border border-rose-200'
            }`}>
              {currentDerivedStatus === 'paid' && '● PAID IN FULL'}
              {currentDerivedStatus === 'partial' && `● PARTIALLY PAID (Due: ৳${currentDue.toLocaleString()})`}
              {currentDerivedStatus === 'pending' && `● PAYMENT DUE (৳${currentDue.toLocaleString()})`}
              {currentDerivedStatus === 'draft' && '● DRAFT'}
            </span>

            <button
              onClick={() => window.print()}
              className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold flex items-center gap-1.5 transition-colors border border-slate-200"
            >
              <Printer size={15} />
              <span>Print / Save PDF</span>
            </button>

            <button
              onClick={handleSaveInvoiceFromStudio}
              className="px-5 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-heading font-semibold shadow-md flex items-center gap-1.5 transition-all"
            >
              <Check size={15} />
              <span>Save Invoice</span>
            </button>
          </div>
        </header>

        {/* Split Screen Workspace */}
        <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 overflow-hidden">
          
          {/* LEFT COLUMN: Input Form Builder (Scrollable) */}
          <div className="lg:col-span-5 h-full overflow-y-auto p-6 bg-white border-r border-slate-200 space-y-6">
            
            {/* Client Search / Selection */}
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
              <label className="text-xs font-mono uppercase tracking-wider font-semibold text-slate-700 block">
                Bill To: Client Details
              </label>

              {/* Client Auto-Fill Dropdown */}
              {clients.length > 0 && (
                <div className="relative">
                  <input
                    type="text"
                    value={clientSearchTerm}
                    onChange={(e) => {
                      setClientSearchTerm(e.target.value);
                      setIsClientSearchFocused(true);
                    }}
                    onFocus={() => setIsClientSearchFocused(true)}
                    placeholder="Search existing client to auto-fill..."
                    className="w-full px-3.5 py-2 bg-white border border-slate-300 rounded-xl text-xs text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-blue-600"
                  />
                  {isClientSearchFocused && clientSearchTerm && (
                    <div className="absolute left-0 right-0 top-full mt-1 bg-white border border-slate-200 rounded-xl shadow-lg z-30 max-h-48 overflow-y-auto divide-y divide-slate-100">
                      {clients
                        .filter(c => c.name?.toLowerCase().includes(clientSearchTerm.toLowerCase()) || c.company?.toLowerCase().includes(clientSearchTerm.toLowerCase()))
                        .map(c => (
                          <div
                            key={c.id}
                            onClick={() => {
                              setInvoiceForm(prev => ({
                                ...prev,
                                client_name: c.name || '',
                                client_email: c.email || '',
                                client_phone: c.phone || '',
                                client_address: c.address || ''
                              }));
                              setClientSearchTerm('');
                              setIsClientSearchFocused(false);
                            }}
                            className="p-2.5 hover:bg-blue-50 cursor-pointer text-xs"
                          >
                            <p className="font-semibold text-slate-900">{c.name} {c.company && `(${c.company})`}</p>
                            <p className="text-slate-500 text-[11px]">{c.phone || c.email}</p>
                          </div>
                        ))}
                    </div>
                  )}
                </div>
              )}

              <div className="space-y-2">
                <input
                  type="text"
                  placeholder="Client or Company Name *"
                  value={invoiceForm.client_name}
                  onChange={(e) => setInvoiceForm({ ...invoiceForm, client_name: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-xl text-xs text-slate-900 font-semibold focus:outline-none focus:border-blue-600"
                  required
                />
                <input
                  type="text"
                  placeholder="Phone / Mobile Number"
                  value={invoiceForm.client_phone}
                  onChange={(e) => setInvoiceForm({ ...invoiceForm, client_phone: e.target.value })}
                  className="w-full px-3.5 py-2 bg-white border border-slate-300 rounded-xl text-xs text-slate-800 focus:outline-none focus:border-blue-600"
                />
                <input
                  type="email"
                  placeholder="Client Email Address"
                  value={invoiceForm.client_email}
                  onChange={(e) => setInvoiceForm({ ...invoiceForm, client_email: e.target.value })}
                  className="w-full px-3.5 py-2 bg-white border border-slate-300 rounded-xl text-xs text-slate-800 focus:outline-none focus:border-blue-600"
                />
                <textarea
                  rows={2}
                  placeholder="Billing Address (e.g. Gulshan, Dhaka / Kushtia)"
                  value={invoiceForm.client_address}
                  onChange={(e) => setInvoiceForm({ ...invoiceForm, client_address: e.target.value })}
                  className="w-full px-3.5 py-2 bg-white border border-slate-300 rounded-xl text-xs text-slate-800 focus:outline-none focus:border-blue-600 resize-none"
                />
              </div>
            </div>

            {/* Invoice Metadata (Issue Date only, NO Due Date) */}
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-[11px] font-mono uppercase text-slate-600 block mb-1 font-semibold">
                  Invoice Number
                </label>
                <input
                  type="text"
                  value={invoiceForm.invoice_number}
                  onChange={(e) => setInvoiceForm({ ...invoiceForm, invoice_number: e.target.value })}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-xl text-xs font-mono font-bold text-slate-900"
                />
              </div>
              <div>
                <label className="text-[11px] font-mono uppercase text-slate-600 block mb-1 font-semibold">
                  Issue Date
                </label>
                <input
                  type="date"
                  value={invoiceForm.issue_date}
                  onChange={(e) => setInvoiceForm({ ...invoiceForm, issue_date: e.target.value })}
                  className="w-full px-3 py-2 bg-white border border-slate-300 rounded-xl text-xs text-slate-900"
                />
              </div>
            </div>

            {/* Services & Line Items with Delete Action */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <label className="text-xs font-mono uppercase tracking-wider font-semibold text-slate-700">
                  Deliverables & Line Items
                </label>
                <button
                  type="button"
                  onClick={handleAddInvoiceItem}
                  className="text-xs text-blue-600 font-semibold hover:underline flex items-center gap-1"
                >
                  <Plus size={14} />
                  <span>Add Line Item</span>
                </button>
              </div>

              <div className="space-y-2.5">
                {invoiceForm.items.map((item, idx) => (
                  <div key={idx} className="p-3 bg-slate-50 border border-slate-200 rounded-xl space-y-2 relative group">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono font-bold text-slate-400 w-5">#{idx + 1}</span>
                      <input
                        type="text"
                        placeholder="Service / deliverable description..."
                        value={item.description}
                        onChange={(e) => handleItemChange(idx, 'description', e.target.value)}
                        className="flex-1 px-3 py-1.5 bg-white border border-slate-300 rounded-lg text-xs text-slate-900 focus:outline-none focus:border-blue-600"
                      />
                      {invoiceForm.items.length > 1 && (
                        <button
                          type="button"
                          onClick={() => handleRemoveInvoiceItem(idx)}
                          className="p-1.5 text-slate-400 hover:text-rose-600 rounded-lg hover:bg-rose-50 transition-colors"
                          title="Remove Line Item"
                        >
                          <Trash2 size={14} />
                        </button>
                      )}
                    </div>
                    
                    <div className="grid grid-cols-12 gap-2 items-center pl-7">
                      <div className="col-span-3">
                        <label className="text-[10px] text-slate-500 uppercase font-mono block">Qty</label>
                        <input
                          type="number"
                          min="1"
                          value={item.qty}
                          onChange={(e) => handleItemChange(idx, 'qty', e.target.value)}
                          className="w-full px-2 py-1 bg-white border border-slate-300 rounded-lg text-xs text-slate-900 font-mono"
                        />
                      </div>
                      <div className="col-span-5">
                        <label className="text-[10px] text-slate-500 uppercase font-mono block">Unit Rate (৳)</label>
                        <input
                          type="number"
                          placeholder="0"
                          value={item.rate}
                          onChange={(e) => handleItemChange(idx, 'rate', e.target.value)}
                          className="w-full px-2 py-1 bg-white border border-slate-300 rounded-lg text-xs text-slate-900 font-mono font-semibold"
                        />
                      </div>
                      <div className="col-span-4 text-right">
                        <label className="text-[10px] text-slate-500 uppercase font-mono block">Total</label>
                        <span className="text-xs font-mono font-bold text-slate-900">
                          ৳ {(Number(item.qty || 1) * Number(item.rate || 0)).toLocaleString()}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Financial Calculations: Advance & Due Breakdown */}
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
              <label className="text-xs font-mono uppercase tracking-wider font-semibold text-slate-700 block">
                Financials, Advance & Due Balance
              </label>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-[11px] text-slate-600 block mb-1">Discount (৳)</label>
                  <input
                    type="number"
                    placeholder="0"
                    value={invoiceForm.discount}
                    onChange={(e) => setInvoiceForm({ ...invoiceForm, discount: e.target.value })}
                    className="w-full px-3 py-2 bg-white border border-slate-300 rounded-xl text-xs font-mono text-slate-900"
                  />
                </div>
                <div>
                  <label className="text-[11px] text-emerald-700 font-semibold block mb-1">Advance / Paid Amount (৳)</label>
                  <input
                    type="number"
                    placeholder="0"
                    value={invoiceForm.paid_amount}
                    onChange={(e) => setInvoiceForm({ ...invoiceForm, paid_amount: e.target.value })}
                    className="w-full px-3 py-2 bg-white border border-emerald-300 rounded-xl text-xs font-mono font-bold text-emerald-800"
                  />
                </div>
              </div>

              {/* Real-Time Auto Calculation Cards */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2 text-center">
                <div className="p-2.5 bg-white border border-slate-200 rounded-xl">
                  <span className="text-[10px] font-mono uppercase text-slate-500 block">Subtotal</span>
                  <span className="text-xs font-mono font-bold text-slate-800">
                    ৳ {currentSubtotal.toLocaleString()}
                  </span>
                </div>
                <div className="p-2.5 bg-white border border-slate-200 rounded-xl">
                  <span className="text-[10px] font-mono uppercase text-slate-500 block">Grand Total</span>
                  <span className="text-xs font-mono font-bold text-blue-600">
                    ৳ {currentTotal.toLocaleString()}
                  </span>
                </div>
                <div className="p-2.5 bg-emerald-50 border border-emerald-200 rounded-xl">
                  <span className="text-[10px] font-mono uppercase text-emerald-600 block font-semibold">Paid / Advance</span>
                  <span className="text-xs font-mono font-bold text-emerald-700">
                    ৳ {currentPaid.toLocaleString()}
                  </span>
                </div>
                <div className={`p-2.5 rounded-xl border ${currentDue > 0 ? 'bg-rose-50 border-rose-200' : 'bg-slate-100 border-slate-200'}`}>
                  <span className={`text-[10px] font-mono uppercase block font-semibold ${currentDue > 0 ? 'text-rose-600' : 'text-slate-500'}`}>Balance Due</span>
                  <span className={`text-xs font-mono font-bold ${currentDue > 0 ? 'text-rose-700' : 'text-slate-700'}`}>
                    ৳ {currentDue.toLocaleString()}
                  </span>
                </div>
              </div>
            </div>

            {/* Due Payment History & Installment Record */}
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
              <label className="text-xs font-mono uppercase tracking-wider font-semibold text-slate-700 block">
                Payment Installments History & Records
              </label>

              {invoiceForm.payment_records && invoiceForm.payment_records.length > 0 && (
                <div className="divide-y divide-slate-200 border border-slate-200 rounded-xl bg-white overflow-hidden text-xs">
                  {invoiceForm.payment_records.map((rec, i) => (
                    <div key={i} className="p-2.5 flex items-center justify-between">
                      <div>
                        <span className="font-mono font-semibold text-slate-800">৳ {Number(rec.amount).toLocaleString()}</span>
                        <span className="text-slate-500 text-[11px] ml-2 font-mono">({rec.method || 'bKash/Bank'})</span>
                        {rec.note && <p className="text-[11px] text-slate-500">{rec.note}</p>}
                      </div>
                      <span className="text-[11px] font-mono text-slate-500">{rec.date}</span>
                    </div>
                  ))}
                </div>
              )}

              {/* Extra Installment Recording Box */}
              <div className="p-3 bg-white border border-slate-200 rounded-xl space-y-2">
                <span className="text-[11px] font-semibold text-slate-700 block">
                  + Record Due Payment Installment
                </span>
                <div className="grid grid-cols-2 gap-2">
                  <input
                    type="date"
                    value={newPaymentDate}
                    onChange={(e) => setNewPaymentDate(e.target.value)}
                    className="px-2.5 py-1.5 bg-slate-50 border border-slate-300 rounded-lg text-xs text-slate-900"
                  />
                  <input
                    type="number"
                    placeholder="Installment Amount (৳)"
                    value={newPaymentAmount}
                    onChange={(e) => setNewPaymentAmount(e.target.value)}
                    className="px-2.5 py-1.5 bg-slate-50 border border-slate-300 rounded-lg text-xs font-mono font-semibold text-slate-900"
                  />
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <input
                    type="text"
                    placeholder="Method (e.g. bKash / Bank)"
                    value={newPaymentMethod}
                    onChange={(e) => setNewPaymentMethod(e.target.value)}
                    className="px-2.5 py-1.5 bg-slate-50 border border-slate-300 rounded-lg text-xs text-slate-800"
                  />
                  <input
                    type="text"
                    placeholder="Note / Reference"
                    value={newPaymentNote}
                    onChange={(e) => setNewPaymentNote(e.target.value)}
                    className="px-2.5 py-1.5 bg-slate-50 border border-slate-300 rounded-lg text-xs text-slate-800"
                  />
                </div>
                <button
                  type="button"
                  onClick={handleAddPaymentRecord}
                  className="w-full py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-xs font-semibold transition-colors"
                >
                  Record Installment Payment
                </button>
              </div>
            </div>

            {/* Clean Notes (Plain Text Only) */}
            <div>
              <label className="text-xs font-mono uppercase tracking-wider font-semibold text-slate-700 block mb-1">
                Terms & Remittance Notes (Plain Text)
              </label>
              <textarea
                rows={3}
                value={invoiceForm.notes}
                onChange={(e) => setInvoiceForm({ ...invoiceForm, notes: e.target.value })}
                className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-xl text-xs text-slate-800 leading-relaxed focus:outline-none focus:border-blue-600 resize-none"
              />
            </div>

          </div>

          {/* RIGHT COLUMN: Live Real-Time Scaled Document Preview (Identical to Print) */}
          <div className="lg:col-span-7 h-full overflow-y-auto p-6 lg:p-8 bg-slate-100 flex flex-col items-center justify-start">
            
            <div className="w-full max-w-[760px] flex items-center justify-between mb-4">
              <span className="text-xs font-mono text-slate-500 uppercase tracking-wider font-semibold">
                Live A4 Document Preview
              </span>
              <span className="text-[11px] font-mono text-slate-400">
                100% Matches Print & PDF Output
              </span>
            </div>

            {/* The Actual Invoice Printable Paper */}
            <div 
              id="printable-invoice-paper"
              className="w-full max-w-[760px] bg-white rounded-2xl shadow-xl border border-slate-200/90 p-8 sm:p-12 text-slate-800 font-sans print:shadow-none print:border-none print:p-0 print:m-0 print:max-w-none print:rounded-none"
            >
              
              {/* Header: Logo, Company Info & Invoice Status */}
              <div className="flex flex-col sm:flex-row justify-between items-start pb-8 border-b border-slate-200 gap-6">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="font-mono text-blue-600 font-black text-xl tracking-tight">&lt;/&gt;</span>
                    <span className="font-heading font-black text-2xl text-slate-900 tracking-tight">TSS Soft<span className="text-blue-600">.</span></span>
                  </div>
                  <p className="text-xs font-semibold text-slate-900">TSS Soft Enterprise Software & Architecture</p>
                  <p className="text-[11px] text-slate-500 mt-0.5">Physical HQ: Kushtia, Khulna Division, Bangladesh</p>
                  <p className="text-[11px] text-slate-500">Tel: +880 1870 955 900 • Email: hello@tsssoft.com</p>
                </div>

                <div className="text-left sm:text-right">
                  <h1 className="font-heading font-black text-3xl sm:text-4xl text-slate-900 tracking-tight mb-2">
                    INVOICE
                  </h1>
                  <p className="font-mono text-xs text-slate-600">
                    <span className="text-slate-400 uppercase">Invoice #:</span> <strong>{invoiceForm.invoice_number}</strong>
                  </p>
                  <p className="font-mono text-xs text-slate-600 mt-0.5">
                    <span className="text-slate-400 uppercase">Issue Date:</span> {invoiceForm.issue_date}
                  </p>
                  
                  {/* Status Badge */}
                  <div className="mt-3">
                    <span className={`inline-block px-3 py-1 rounded-full text-[11px] font-mono font-bold uppercase tracking-wider ${
                      currentDerivedStatus === 'paid'
                        ? 'bg-emerald-50 text-emerald-700 border border-emerald-300'
                        : currentDerivedStatus === 'partial'
                        ? 'bg-amber-50 text-amber-700 border border-amber-300'
                        : 'bg-rose-50 text-rose-700 border border-rose-300'
                    }`}>
                      {currentDerivedStatus === 'paid' && 'PAID IN FULL'}
                      {currentDerivedStatus === 'partial' && `PARTIALLY PAID`}
                      {currentDerivedStatus === 'pending' && 'PAYMENT DUE'}
                      {currentDerivedStatus === 'draft' && 'DRAFT'}
                    </span>
                  </div>
                </div>
              </div>

              {/* Billed To & Payment Remittance */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 py-7 border-b border-slate-200 text-xs">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400 font-bold block mb-1.5">
                    BILLED TO
                  </span>
                  <h3 className="font-bold text-slate-900 text-sm">
                    {invoiceForm.client_name || 'Valued Client Partner'}
                  </h3>
                  <div className="text-slate-600 space-y-0.5 mt-1 leading-relaxed">
                    {invoiceForm.client_address && <p>{invoiceForm.client_address}</p>}
                    {invoiceForm.client_phone && <p>Tel / Mobile: {invoiceForm.client_phone}</p>}
                    {invoiceForm.client_email && <p>Email: {invoiceForm.client_email}</p>}
                  </div>
                </div>

                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400 font-bold block mb-1.5">
                    PAYMENT REMITTANCE
                  </span>
                  <div className="text-slate-600 space-y-1">
                    <p><span className="text-slate-400">Beneficiary:</span> <strong className="text-slate-900">TSS Soft</strong></p>
                    <p><span className="text-slate-400">bKash / Nagad:</span> +880 1870 955 900</p>
                    <p><span className="text-slate-400">Bank Transfer:</span> Commercial Banking Network (Kushtia Branch)</p>
                    <p><span className="text-slate-400">Reference:</span> {invoiceForm.invoice_number}</p>
                  </div>
                </div>
              </div>

              {/* Line Items Table */}
              <div className="py-7">
                <table className="w-full text-xs">
                  <thead>
                    <tr className="border-b-2 border-slate-900 text-slate-900 font-mono text-[10px] uppercase tracking-wider">
                      <th className="py-2.5 text-center w-10">#</th>
                      <th className="py-2.5 text-left">Service & Architecture Deliverables</th>
                      <th className="py-2.5 text-center w-16">Qty</th>
                      <th className="py-2.5 text-right w-28">Unit Rate</th>
                      <th className="py-2.5 text-right w-28">Amount</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {invoiceForm.items.map((item, idx) => (
                      <tr key={idx}>
                        <td className="py-3 text-center font-mono text-slate-400">{idx + 1}</td>
                        <td className="py-3 font-semibold text-slate-900">{item.description || 'Deliverable'}</td>
                        <td className="py-3 text-center font-mono text-slate-600">{item.qty || 1}</td>
                        <td className="py-3 text-right font-mono text-slate-600">৳ {Number(item.rate || 0).toLocaleString()}</td>
                        <td className="py-3 text-right font-mono font-bold text-slate-900">
                          ৳ {(Number(item.qty || 1) * Number(item.rate || 0)).toLocaleString()}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Financial Calculations Box */}
              <div className="flex justify-end pt-4 pb-7 border-t border-slate-200">
                <div className="w-full max-w-xs space-y-2 text-xs font-mono">
                  <div className="flex justify-between text-slate-600">
                    <span>Subtotal:</span>
                    <span>৳ {currentSubtotal.toLocaleString()}</span>
                  </div>
                  {Number(invoiceForm.discount || 0) > 0 && (
                    <div className="flex justify-between text-slate-600">
                      <span>Discount:</span>
                      <span>- ৳ {Number(invoiceForm.discount).toLocaleString()}</span>
                    </div>
                  )}
                  <div className="flex justify-between text-sm font-bold text-slate-900 pt-2 border-t border-slate-200">
                    <span>Grand Total:</span>
                    <span>৳ {currentTotal.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-emerald-700 font-semibold">
                    <span>Paid / Advance:</span>
                    <span>৳ {currentPaid.toLocaleString()}</span>
                  </div>
                  <div className={`flex justify-between font-bold pt-1 border-t border-slate-100 ${
                    currentDue > 0 ? 'text-rose-700 text-sm' : 'text-slate-500'
                  }`}>
                    <span>Balance Due:</span>
                    <span>৳ {currentDue.toLocaleString()}</span>
                  </div>
                </div>
              </div>

              {/* Payment Records / Installments Table (if any) */}
              {invoiceForm.payment_records && invoiceForm.payment_records.length > 0 && (
                <div className="mb-7 p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-slate-500 font-bold block mb-2">
                    Payment Installment Records
                  </span>
                  <div className="space-y-1.5 divide-y divide-slate-200/60 font-mono">
                    {invoiceForm.payment_records.map((rec, i) => (
                      <div key={i} className="pt-1.5 flex items-center justify-between text-slate-700">
                        <span>{rec.date} — {rec.method || 'bKash/Bank'}: <strong>৳ {Number(rec.amount).toLocaleString()}</strong></span>
                        <span className="text-[11px] text-slate-500">{rec.note || 'Installment'}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Notes Box */}
              {invoiceForm.notes && (
                <div className="mb-8 p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 leading-relaxed">
                  <span className="font-mono uppercase text-[10px] text-slate-400 font-bold block mb-0.5">
                    Notes & Remittance Instructions
                  </span>
                  <p>{invoiceForm.notes}</p>
                </div>
              )}

              {/* Authorized Signatures & Verification Seal */}
              <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row justify-between items-end gap-6 text-xs">
                <div>
                  <div className="w-44 border-b border-slate-300 pb-1 mb-1.5 text-center text-slate-400 font-mono text-[10px]">
                    Authorized Signature
                  </div>
                  <p className="font-bold text-slate-900">{invoiceForm.client_name || 'Client Representative'}</p>
                  <p className="text-[10px] text-slate-500">Authorized Client Signature</p>
                </div>

                <div className="text-right">
                  <div className="inline-flex items-center gap-2 p-2 rounded-xl bg-blue-50 border border-blue-200 text-blue-700 text-[10px] font-mono font-bold uppercase mb-2">
                    <CheckCircle2 size={14} className="text-blue-600" />
                    <span>TSS Soft Electronically Verified</span>
                  </div>
                  <p className="font-bold text-slate-900">TSS Soft Management</p>
                  <p className="text-[10px] text-slate-500">Digital Systems & Software Architecture</p>
                </div>
              </div>

              {/* Printable Disclaimer */}
              <div className="mt-8 pt-4 border-t border-slate-100 text-center text-[10px] text-slate-400 font-mono">
                This document is computer-generated and electronically verified by TSS Soft. No physical signature is required.
              </div>

            </div>

          </div>

        </div>

      </div>
    );
  }

  // --------------------------------------------------------------------------
  // 10. MAIN LIGHT-MODE ADMIN WORKSPACE
  // --------------------------------------------------------------------------
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col md:flex-row font-sans">
      
      {/* =================================================================== */}
      {/* A. SIDEBAR: Black Background, White Text, Blue Highlight           */}
      {/* =================================================================== */}
      <aside className="w-full md:w-64 bg-[#090d16] text-white border-r border-slate-800 p-6 flex flex-col justify-between flex-shrink-0 z-20">
        <div>
          {/* Logo & Brand Header */}
          <div className="flex items-center justify-between pb-6 border-b border-slate-800 mb-6">
            <Link href="/" className="flex items-center gap-2 group">
              <span className="font-mono text-blue-500 font-bold text-lg">&lt;/&gt;</span>
              <span className="font-heading font-black text-xl text-white tracking-tight">TSS Soft<span className="text-blue-500">.</span></span>
            </Link>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-blue-600/20 text-blue-400 border border-blue-500/30">
              v2.5
            </span>
          </div>

          {/* Navigation Links with Larger Text Size */}
          <nav className="space-y-1.5">
            {[
              { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard, count: null, requiredPerm: 'all' },
              { id: 'invoices', label: 'Invoices', icon: FileText, count: invoices.length, requiredPerm: 'invoices' },
              { id: 'clients', label: 'Clients', icon: Users, count: clients.length, requiredPerm: 'clients' },
              { id: 'applications', label: 'Applications', icon: Briefcase, count: applications.length, requiredPerm: 'applications' },
              { id: 'inquiries', label: 'Inquiries', icon: Inbox, count: inquiries.length, requiredPerm: 'inquiries' },
              { id: 'moderators', label: 'Moderators & Team', icon: ShieldCheck, count: moderators.length, requiredPerm: 'admin_only' }
            ].map((tab) => {
              const IconComponent = tab.icon;
              const isAllowed = tab.requiredPerm === 'all' 
                ? true 
                : tab.requiredPerm === 'admin_only'
                ? (currentAdminUser?.role === 'admin' || currentAdminUser?.access_type === 'full')
                : hasAccess(tab.requiredPerm);

              const isActive = activeTab === tab.id;

              return (
                <button
                  key={tab.id}
                  onClick={() => {
                    if (isAllowed) {
                      setActiveTab(tab.id);
                    } else {
                      alert(`Access Restricted: You do not have permission to view ${tab.label}. Please contact Master Admin.`);
                    }
                  }}
                  className={`w-full flex items-center justify-between px-4 py-3 rounded-xl transition-all duration-200 text-base font-semibold ${
                    isActive
                      ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30 font-bold'
                      : isAllowed
                      ? 'text-slate-300 hover:text-white hover:bg-white/5'
                      : 'text-slate-500 opacity-60 cursor-not-allowed hover:bg-transparent'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <IconComponent size={20} className={isActive ? 'text-white' : isAllowed ? 'text-slate-400' : 'text-slate-600'} />
                    <span>{tab.label}</span>
                  </div>

                  <div className="flex items-center gap-1.5">
                    {!isAllowed && (
                      <Lock size={15} className="text-slate-500" title="Restricted Access" />
                    )}
                    {tab.count !== null && tab.count > 0 && isAllowed && (
                      <span className={`text-xs px-2 py-0.5 rounded-full font-mono ${
                        isActive ? 'bg-white/20 text-white' : 'bg-slate-800 text-slate-300'
                      }`}>
                        {tab.count}
                      </span>
                    )}
                  </div>
                </button>
              );
            })}
          </nav>
        </div>

        {/* Sidebar Footer: Exactly "Admin SignOut" Button */}
        <div className="pt-6 border-t border-slate-800">
          <button
            onClick={handleSignOut}
            className="w-full flex items-center justify-between px-4 py-3.5 rounded-xl bg-white/5 hover:bg-rose-600/20 text-slate-200 hover:text-rose-300 border border-white/10 hover:border-rose-500/30 transition-all font-semibold text-base group"
          >
            <span className="font-heading font-bold">Admin SignOut</span>
            <LogOut size={18} className="text-slate-400 group-hover:text-rose-300 transition-colors" />
          </button>
        </div>
      </aside>

      {/* =================================================================== */}
      {/* B. MAIN WORKSPACE CONTENT: ONLY LIGHT MODE (Clean White & Blue)     */}
      {/* =================================================================== */}
      <main className="flex-1 flex flex-col min-w-0 bg-slate-50 overflow-y-auto">
        
        {/* Top Header Bar */}
        <header className="bg-white border-b border-slate-200 px-6 sm:px-8 py-5 flex items-center justify-between shadow-sm sticky top-0 z-10">
          <div>
            <h1 className="font-heading text-xl sm:text-2xl font-bold text-slate-900 tracking-tight capitalize">
              {activeTab === 'dashboard' && 'Executive Overview'}
              {activeTab === 'invoices' && 'Billing & Invoice Manager'}
              {activeTab === 'clients' && 'Client Directory'}
              {activeTab === 'applications' && 'Job Applications'}
              {activeTab === 'inquiries' && 'Client Inquiries'}
              {activeTab === 'moderators' && 'Moderators & Access Control'}
            </h1>
            <p className="text-xs text-slate-500">
              TSS Soft Enterprise Administration Platform • Light Mode Architecture
            </p>
          </div>

          <div className="flex items-center gap-3">
            {activeTab === 'invoices' && hasAccess('invoices') && (
              <button
                onClick={handleOpenCreateInvoice}
                className="px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm font-heading font-semibold shadow-md flex items-center gap-2 transition-all active:scale-95"
              >
                <Plus size={16} />
                <span>Create New Invoice</span>
              </button>
            )}

            {activeTab === 'clients' && hasAccess('clients') && (
              <button
                onClick={() => setShowClientModal(true)}
                className="px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm font-heading font-semibold shadow-md flex items-center gap-2 transition-all active:scale-95"
              >
                <Plus size={16} />
                <span>Add Client</span>
              </button>
            )}

            {activeTab === 'moderators' && (currentAdminUser?.role === 'admin' || currentAdminUser?.access_type === 'full') && (
              <button
                onClick={() => setShowModeratorModal(true)}
                className="px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm font-heading font-semibold shadow-md flex items-center gap-2 transition-all active:scale-95"
              >
                <Plus size={16} />
                <span>Add Moderator</span>
              </button>
            )}

            <button
              onClick={fetchAllData}
              disabled={dataLoading}
              className="p-2.5 rounded-xl bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 transition-colors shadow-sm"
              title="Refresh Data"
            >
              <RefreshCw size={16} className={dataLoading ? 'animate-spin text-blue-600' : ''} />
            </button>
          </div>
        </header>

        {/* Workspace Body */}
        <div className="p-6 sm:p-8 space-y-6">

          {/* 1. DASHBOARD TAB */}
          {activeTab === 'dashboard' && (
            <div className="space-y-6">
              
              {/* Metric Counter Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                <div className="p-6 bg-white border border-slate-200/90 rounded-2xl shadow-sm">
                  <div className="flex items-center justify-between text-slate-500 mb-3">
                    <span className="text-xs font-mono uppercase tracking-wider font-semibold">Total Revenue Billed</span>
                    <DollarSign size={18} className="text-blue-600" />
                  </div>
                  <div className="text-2xl sm:text-3xl font-black font-mono text-slate-900">
                    ৳ {invoices.reduce((acc, inv) => acc + Number(inv.total || 0), 0).toLocaleString()}
                  </div>
                  <p className="text-[11px] text-slate-500 mt-1">Across all issued invoices</p>
                </div>

                <div className="p-6 bg-white border border-slate-200/90 rounded-2xl shadow-sm">
                  <div className="flex items-center justify-between text-slate-500 mb-3">
                    <span className="text-xs font-mono uppercase tracking-wider font-semibold">Advance & Paid</span>
                    <TrendingUp size={18} className="text-emerald-600" />
                  </div>
                  <div className="text-2xl sm:text-3xl font-black font-mono text-emerald-600">
                    ৳ {invoices.reduce((acc, inv) => acc + Number(inv.paid_amount || 0), 0).toLocaleString()}
                  </div>
                  <p className="text-[11px] text-emerald-600 font-semibold mt-1">Liquid capital received</p>
                </div>

                <div className="p-6 bg-white border border-slate-200/90 rounded-2xl shadow-sm">
                  <div className="flex items-center justify-between text-slate-500 mb-3">
                    <span className="text-xs font-mono uppercase tracking-wider font-semibold">Outstanding Due</span>
                    <Clock size={18} className="text-rose-600" />
                  </div>
                  <div className="text-2xl sm:text-3xl font-black font-mono text-rose-600">
                    ৳ {invoices.reduce((acc, inv) => acc + Number(inv.due_amount || 0), 0).toLocaleString()}
                  </div>
                  <p className="text-[11px] text-rose-600 font-semibold mt-1">Pending client settlements</p>
                </div>

                <div className="p-6 bg-white border border-slate-200/90 rounded-2xl shadow-sm">
                  <div className="flex items-center justify-between text-slate-500 mb-3">
                    <span className="text-xs font-mono uppercase tracking-wider font-semibold">Active Clients</span>
                    <Users size={18} className="text-indigo-600" />
                  </div>
                  <div className="text-2xl sm:text-3xl font-black font-mono text-slate-900">
                    {clients.length}
                  </div>
                  <p className="text-[11px] text-slate-500 mt-1">Verified partner enterprises</p>
                </div>
              </div>

              {/* Quick Actions & Recent Activity */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="p-6 bg-white border border-slate-200/90 rounded-2xl shadow-sm space-y-4">
                  <h3 className="font-heading font-bold text-slate-900 text-base">Quick Executive Actions</h3>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      onClick={handleOpenCreateInvoice}
                      className="p-4 rounded-xl bg-blue-50 border border-blue-200 hover:bg-blue-100 text-blue-700 text-left transition-colors font-semibold text-xs flex flex-col gap-1"
                    >
                      <Plus size={18} className="text-blue-600 mb-1" />
                      <span>Create New Invoice</span>
                      <span className="text-[11px] font-normal text-blue-600/80">With live preview & auto due</span>
                    </button>
                    <button
                      onClick={() => setShowClientModal(true)}
                      className="p-4 rounded-xl bg-slate-50 border border-slate-200 hover:bg-slate-100 text-slate-800 text-left transition-colors font-semibold text-xs flex flex-col gap-1"
                    >
                      <Users size={18} className="text-slate-600 mb-1" />
                      <span>Add New Client</span>
                      <span className="text-[11px] font-normal text-slate-500">Corporate directory entry</span>
                    </button>
                  </div>
                </div>

                <div className="p-6 bg-white border border-slate-200/90 rounded-2xl shadow-sm space-y-4">
                  <h3 className="font-heading font-bold text-slate-900 text-base">Recent Invoices</h3>
                  {invoices.slice(0, 4).map(inv => (
                    <div key={inv.id} className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-200/60 text-xs">
                      <div>
                        <p className="font-bold text-slate-900">{inv.client_name}</p>
                        <p className="font-mono text-[11px] text-slate-500">{inv.invoice_number} • {inv.issue_date}</p>
                      </div>
                      <div className="text-right">
                        <span className="font-mono font-bold text-slate-900">৳ {Number(inv.total || 0).toLocaleString()}</span>
                        <span className={`block text-[10px] font-mono font-bold uppercase ${
                          inv.status === 'paid' ? 'text-emerald-600' : inv.status === 'partial' ? 'text-amber-600' : 'text-rose-600'
                        }`}>
                          {inv.status === 'paid' ? 'Paid' : inv.status === 'partial' ? `Due: ৳${inv.due_amount}` : 'Due'}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          )}

          {/* 2. INVOICES TAB */}
          {activeTab === 'invoices' && (
            <div className="bg-white border border-slate-200/90 rounded-2xl shadow-sm overflow-hidden">
              <div className="p-5 border-b border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
                <div className="relative w-full sm:w-72">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search invoices by client or #..."
                    className="w-full pl-9 pr-3.5 py-2 bg-slate-50 border border-slate-300 rounded-xl text-xs text-slate-900 focus:outline-none focus:border-blue-600"
                  />
                  <Search size={15} className="absolute left-3 top-2.5 text-slate-400" />
                </div>

                <div className="flex items-center gap-2">
                  {['all', 'paid', 'partial', 'pending'].map(st => (
                    <button
                      key={st}
                      onClick={() => setStatusFilter(st)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-mono font-semibold capitalize transition-colors ${
                        statusFilter === st ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                      }`}
                    >
                      {st === 'partial' ? 'Partially Paid' : st === 'pending' ? 'Payment Due' : st}
                    </button>
                  ))}
                </div>
              </div>

              {/* Invoices Table */}
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead className="bg-slate-50 border-b border-slate-200 font-mono uppercase text-[10px] text-slate-600 font-bold">
                    <tr>
                      <th className="py-3 px-4">Invoice #</th>
                      <th className="py-3 px-4">Client</th>
                      <th className="py-3 px-4">Issue Date</th>
                      <th className="py-3 px-4 text-right">Total (৳)</th>
                      <th className="py-3 px-4 text-right">Paid (৳)</th>
                      <th className="py-3 px-4 text-right">Balance Due (৳)</th>
                      <th className="py-3 px-4 text-center">Status</th>
                      <th className="py-3 px-4 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {invoices
                      .filter(inv => {
                        const matchesQuery = inv.client_name?.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          inv.invoice_number?.toLowerCase().includes(searchQuery.toLowerCase());
                        const matchesStatus = statusFilter === 'all' || inv.status === statusFilter;
                        return matchesQuery && matchesStatus;
                      })
                      .map((inv) => (
                        <tr key={inv.id} className="hover:bg-slate-50/70 transition-colors">
                          <td className="py-3.5 px-4 font-mono font-bold text-slate-900">{inv.invoice_number}</td>
                          <td className="py-3.5 px-4 font-semibold text-slate-900">{inv.client_name}</td>
                          <td className="py-3.5 px-4 text-slate-600 font-mono">{inv.issue_date || 'N/A'}</td>
                          <td className="py-3.5 px-4 text-right font-mono font-bold text-slate-900">
                            ৳ {Number(inv.total || 0).toLocaleString()}
                          </td>
                          <td className="py-3.5 px-4 text-right font-mono text-emerald-700 font-semibold">
                            ৳ {Number(inv.paid_amount || 0).toLocaleString()}
                          </td>
                          <td className={`py-3.5 px-4 text-right font-mono font-bold ${
                            Number(inv.due_amount || 0) > 0 ? 'text-rose-700' : 'text-slate-400'
                          }`}>
                            ৳ {Number(inv.due_amount || 0).toLocaleString()}
                          </td>
                          <td className="py-3.5 px-4 text-center">
                            <span className={`px-2.5 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider ${
                              inv.status === 'paid' 
                                ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                                : inv.status === 'partial'
                                ? 'bg-amber-50 text-amber-700 border border-amber-200'
                                : 'bg-rose-50 text-rose-700 border border-rose-200'
                            }`}>
                              {inv.status === 'paid' ? 'Paid in Full' : inv.status === 'partial' ? 'Partial' : 'Payment Due'}
                            </span>
                          </td>
                          <td className="py-3.5 px-4 text-right">
                            <div className="flex items-center justify-end gap-1.5">
                              <button
                                onClick={() => handleOpenEditInvoice(inv)}
                                className="p-1.5 rounded-lg bg-slate-100 hover:bg-blue-50 text-slate-600 hover:text-blue-600 transition-colors"
                                title="Edit & Record Payment"
                              >
                                <Edit size={14} />
                              </button>
                              <button
                                onClick={() => {
                                  handleOpenEditInvoice(inv);
                                }}
                                className="p-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors"
                                title="Print / PDF View"
                              >
                                <Printer size={14} />
                              </button>
                              <button
                                onClick={() => handleDeleteInvoice(inv.id)}
                                className="p-1.5 rounded-lg bg-slate-100 hover:bg-rose-50 text-slate-600 hover:text-rose-600 transition-colors"
                                title="Delete Invoice"
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
            </div>
          )}

          {/* 3. CLIENTS TAB */}
          {activeTab === 'clients' && (
            <div className="bg-white border border-slate-200/90 rounded-2xl shadow-sm overflow-hidden">
              <div className="p-5 border-b border-slate-200">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search client directory..."
                  className="w-full sm:w-72 pl-3.5 pr-3.5 py-2 bg-slate-50 border border-slate-300 rounded-xl text-xs text-slate-900 focus:outline-none focus:border-blue-600"
                />
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead className="bg-slate-50 border-b border-slate-200 font-mono uppercase text-[10px] text-slate-600 font-bold">
                    <tr>
                      <th className="py-3 px-4">Client Name</th>
                      <th className="py-3 px-4">Company</th>
                      <th className="py-3 px-4">Phone</th>
                      <th className="py-3 px-4">Email</th>
                      <th className="py-3 px-4">Address</th>
                      <th className="py-3 px-4 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {clients
                      .filter(c => c.name?.toLowerCase().includes(searchQuery.toLowerCase()) || c.company?.toLowerCase().includes(searchQuery.toLowerCase()))
                      .map((c) => (
                        <tr key={c.id} className="hover:bg-slate-50/70 transition-colors">
                          <td className="py-3.5 px-4 font-bold text-slate-900">{c.name}</td>
                          <td className="py-3.5 px-4 text-slate-700">{c.company || '—'}</td>
                          <td className="py-3.5 px-4 font-mono text-slate-600">{c.phone || '—'}</td>
                          <td className="py-3.5 px-4 text-slate-600">{c.email || '—'}</td>
                          <td className="py-3.5 px-4 text-slate-600">{c.address || '—'}</td>
                          <td className="py-3.5 px-4 text-right">
                            <button
                              onClick={() => handleDeleteClient(c.id)}
                              className="p-1.5 rounded-lg bg-slate-100 hover:bg-rose-50 text-slate-600 hover:text-rose-600 transition-colors"
                              title="Delete Client"
                            >
                              <Trash2 size={14} />
                            </button>
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* 4. APPLICATIONS TAB */}
          {activeTab === 'applications' && (
            <div className="bg-white border border-slate-200/90 rounded-2xl shadow-sm overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead className="bg-slate-50 border-b border-slate-200 font-mono uppercase text-[10px] text-slate-600 font-bold">
                    <tr>
                      <th className="py-3 px-4">Candidate</th>
                      <th className="py-3 px-4">Role</th>
                      <th className="py-3 px-4">Email</th>
                      <th className="py-3 px-4">Phone</th>
                      <th className="py-3 px-4">Experience</th>
                      <th className="py-3 px-4">Portfolio</th>
                      <th className="py-3 px-4 text-right">Date</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {applications.map((app) => (
                      <tr key={app.id} className="hover:bg-slate-50/70 transition-colors">
                        <td className="py-3.5 px-4 font-bold text-slate-900">{app.name}</td>
                        <td className="py-3.5 px-4 font-semibold text-blue-600">{app.position || 'Engineering'}</td>
                        <td className="py-3.5 px-4 text-slate-600">{app.email}</td>
                        <td className="py-3.5 px-4 font-mono text-slate-600">{app.phone || '—'}</td>
                        <td className="py-3.5 px-4 text-slate-600">{app.experience || '—'}</td>
                        <td className="py-3.5 px-4">
                          {app.portfolio_url ? (
                            <a href={app.portfolio_url} target="_blank" rel="noreferrer" className="text-blue-600 hover:underline flex items-center gap-1 font-mono">
                              <span>Link</span>
                              <ExternalLink size={12} />
                            </a>
                          ) : '—'}
                        </td>
                        <td className="py-3.5 px-4 text-right font-mono text-slate-500">
                          {new Date(app.created_at).toLocaleDateString()}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* 5. INQUIRIES TAB */}
          {activeTab === 'inquiries' && (
            <div className="bg-white border border-slate-200/90 rounded-2xl shadow-sm overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead className="bg-slate-50 border-b border-slate-200 font-mono uppercase text-[10px] text-slate-600 font-bold">
                    <tr>
                      <th className="py-3 px-4">Client Name</th>
                      <th className="py-3 px-4">Email</th>
                      <th className="py-3 px-4">Subject</th>
                      <th className="py-3 px-4">Message</th>
                      <th className="py-3 px-4 text-right">Date</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {inquiries.map((inq) => (
                      <tr key={inq.id} className="hover:bg-slate-50/70 transition-colors">
                        <td className="py-3.5 px-4 font-bold text-slate-900">{inq.name}</td>
                        <td className="py-3.5 px-4 text-slate-600">{inq.email}</td>
                        <td className="py-3.5 px-4 font-semibold text-slate-800">{inq.subject || 'Project Inquiry'}</td>
                        <td className="py-3.5 px-4 text-slate-600 max-w-xs truncate">{inq.message}</td>
                        <td className="py-3.5 px-4 text-right font-mono text-slate-500">
                          {new Date(inq.created_at).toLocaleDateString()}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* 6. MODERATORS & ACCESS CONTROL TAB */}
          {activeTab === 'moderators' && (
            <div className="space-y-6">
              <div className="bg-white border border-slate-200/90 rounded-2xl shadow-sm p-6 space-y-4">
                <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                  <div>
                    <h3 className="font-heading font-bold text-slate-900 text-lg">
                      Team Moderators & Role-Based Permissions
                    </h3>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Grant staff access to specific modules (Invoices, Clients, etc.) or Full Access.
                    </p>
                  </div>
                  <button
                    onClick={() => setShowModeratorModal(true)}
                    className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-semibold flex items-center gap-1.5 shadow-sm"
                  >
                    <Plus size={15} />
                    <span>Add Moderator</span>
                  </button>
                </div>

                {/* Moderators List */}
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs">
                    <thead className="bg-slate-50 border-b border-slate-200 font-mono uppercase text-[10px] text-slate-600 font-bold">
                      <tr>
                        <th className="py-3 px-4">Moderator Name</th>
                        <th className="py-3 px-4">Email</th>
                        <th className="py-3 px-4">Access Type</th>
                        <th className="py-3 px-4">Allowed Modules</th>
                        <th className="py-3 px-4 text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {moderators.length === 0 ? (
                        <tr>
                          <td colSpan={5} className="py-8 text-center text-slate-400 font-mono">
                            No secondary moderators added yet. Master Admin has full privileges.
                          </td>
                        </tr>
                      ) : (
                        moderators.map((mod) => (
                          <tr key={mod.id} className="hover:bg-slate-50/70 transition-colors">
                            <td className="py-3.5 px-4 font-bold text-slate-900">{mod.name}</td>
                            <td className="py-3.5 px-4 text-slate-700 font-mono">{mod.email}</td>
                            <td className="py-3.5 px-4">
                              <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase ${
                                mod.access_type === 'full' 
                                  ? 'bg-blue-50 text-blue-700 border border-blue-200'
                                  : 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                              }`}>
                                {mod.access_type === 'full' ? 'Full Access' : 'Selective'}
                              </span>
                            </td>
                            <td className="py-3.5 px-4">
                              <div className="flex flex-wrap gap-1">
                                {(mod.permissions || []).map((perm, i) => (
                                  <span key={i} className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 text-[10px] font-mono capitalize">
                                    {perm}
                                  </span>
                                ))}
                              </div>
                            </td>
                            <td className="py-3.5 px-4 text-right">
                              <div className="flex items-center justify-end gap-2">
                                <button
                                  onClick={() => {
                                    setResetPassModerator(mod);
                                    setNewPasswordValue('');
                                  }}
                                  className="px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-[11px] font-semibold flex items-center gap-1 transition-colors"
                                >
                                  <Key size={12} />
                                  <span>Reset Pass</span>
                                </button>
                                <button
                                  onClick={() => handleDeleteModerator(mod.id)}
                                  className="p-1 rounded-lg hover:bg-rose-50 text-slate-400 hover:text-rose-600 transition-colors"
                                  title="Delete Moderator"
                                >
                                  <Trash2 size={14} />
                                </button>
                              </div>
                            </td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>

              </div>
            </div>
          )}

        </div>

      </main>

      {/* =================================================================== */}
      {/* C. MODALS (Client, Add Moderator, Reset Password)                   */}
      {/* =================================================================== */}

      {/* Add Client Modal */}
      {showClientModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm">
          <div className="w-full max-w-md bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-2xl text-slate-900">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-5">
              <h3 className="font-heading font-bold text-lg text-slate-900">Add New Enterprise Client</h3>
              <button onClick={() => setShowClientModal(false)} className="text-slate-400 hover:text-slate-700">
                <X size={18} />
              </button>
            </div>
            <form onSubmit={handleSaveClient} className="space-y-3.5 text-xs">
              <div>
                <label className="font-semibold block mb-1">Client Contact Name *</label>
                <input
                  type="text"
                  required
                  value={clientForm.name}
                  onChange={(e) => setClientForm({ ...clientForm, name: e.target.value })}
                  placeholder="e.g. Tahsin Ahmed"
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl"
                />
              </div>
              <div>
                <label className="font-semibold block mb-1">Company / Organization</label>
                <input
                  type="text"
                  value={clientForm.company}
                  onChange={(e) => setClientForm({ ...clientForm, company: e.target.value })}
                  placeholder="e.g. Apex Technologies"
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl"
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="font-semibold block mb-1">Phone Number</label>
                  <input
                    type="text"
                    value={clientForm.phone}
                    onChange={(e) => setClientForm({ ...clientForm, phone: e.target.value })}
                    placeholder="+880 1..."
                    className="w-full px-3.5 py-2 bg-slate-50 border border-slate-300 rounded-xl"
                  />
                </div>
                <div>
                  <label className="font-semibold block mb-1">Email Address</label>
                  <input
                    type="email"
                    value={clientForm.email}
                    onChange={(e) => setClientForm({ ...clientForm, email: e.target.value })}
                    placeholder="client@mail.com"
                    className="w-full px-3.5 py-2 bg-slate-50 border border-slate-300 rounded-xl"
                  />
                </div>
              </div>
              <div>
                <label className="font-semibold block mb-1">Physical Address</label>
                <textarea
                  rows={2}
                  value={clientForm.address}
                  onChange={(e) => setClientForm({ ...clientForm, address: e.target.value })}
                  placeholder="Office address..."
                  className="w-full px-3.5 py-2 bg-slate-50 border border-slate-300 rounded-xl resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold text-xs transition-colors mt-2"
              >
                Save Client to Directory
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Add Moderator Modal */}
      {showModeratorModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm">
          <div className="w-full max-w-md bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-2xl text-slate-900">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-5">
              <h3 className="font-heading font-bold text-lg text-slate-900">Create Staff Moderator Account</h3>
              <button onClick={() => setShowModeratorModal(false)} className="text-slate-400 hover:text-slate-700">
                <X size={18} />
              </button>
            </div>
            <form onSubmit={handleSaveModerator} className="space-y-4 text-xs">
              <div>
                <label className="font-semibold block mb-1">Moderator Full Name *</label>
                <input
                  type="text"
                  required
                  value={moderatorForm.name}
                  onChange={(e) => setModeratorForm({ ...moderatorForm, name: e.target.value })}
                  placeholder="e.g. Shafaur Rahman"
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl"
                />
              </div>
              <div>
                <label className="font-semibold block mb-1">Email Address (Login Username) *</label>
                <input
                  type="email"
                  required
                  value={moderatorForm.email}
                  onChange={(e) => setModeratorForm({ ...moderatorForm, email: e.target.value })}
                  placeholder="moderator@tsssoft.com"
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl"
                />
              </div>
              <div>
                <label className="font-semibold block mb-1">Password *</label>
                <input
                  type="password"
                  required
                  value={moderatorForm.password}
                  onChange={(e) => setModeratorForm({ ...moderatorForm, password: e.target.value })}
                  placeholder="••••••••••••"
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl"
                />
              </div>

              <div>
                <label className="font-semibold block mb-1.5">Access Privilege Type</label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setModeratorForm({ ...moderatorForm, access_type: 'full' })}
                    className={`py-2 px-3 rounded-xl border text-center font-semibold transition-all ${
                      moderatorForm.access_type === 'full'
                        ? 'bg-blue-600 text-white border-blue-600 shadow-sm'
                        : 'bg-slate-50 text-slate-700 border-slate-200'
                    }`}
                  >
                    Full Access (All)
                  </button>
                  <button
                    type="button"
                    onClick={() => setModeratorForm({ ...moderatorForm, access_type: 'selective' })}
                    className={`py-2 px-3 rounded-xl border text-center font-semibold transition-all ${
                      moderatorForm.access_type === 'selective'
                        ? 'bg-blue-600 text-white border-blue-600 shadow-sm'
                        : 'bg-slate-50 text-slate-700 border-slate-200'
                    }`}
                  >
                    Selective Access
                  </button>
                </div>
              </div>

              {moderatorForm.access_type === 'selective' && (
                <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl space-y-2">
                  <span className="font-semibold block text-[11px] text-slate-700">Choose Allowed Modules:</span>
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      { id: 'invoices', label: 'Invoices' },
                      { id: 'clients', label: 'Clients' },
                      { id: 'applications', label: 'Applications' },
                      { id: 'inquiries', label: 'Inquiries' }
                    ].map(mod => {
                      const isChecked = moderatorForm.permissions.includes(mod.id);
                      return (
                        <label key={mod.id} className="flex items-center gap-2 cursor-pointer text-slate-800">
                          <input
                            type="checkbox"
                            checked={isChecked}
                            onChange={(e) => {
                              if (e.target.checked) {
                                setModeratorForm(prev => ({ ...prev, permissions: [...prev.permissions, mod.id] }));
                              } else {
                                setModeratorForm(prev => ({ ...prev, permissions: prev.permissions.filter(p => p !== mod.id) }));
                              }
                            }}
                            className="rounded border-slate-300 text-blue-600 focus:ring-0"
                          />
                          <span>{mod.label}</span>
                        </label>
                      );
                    })}
                  </div>
                </div>
              )}

              <button
                type="submit"
                className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold text-xs transition-colors mt-2 shadow-md"
              >
                Create Moderator Account
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Reset Password Modal */}
      {resetPassModerator && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm">
          <div className="w-full max-w-sm bg-white border border-slate-200 rounded-3xl p-6 shadow-2xl text-slate-900">
            <h3 className="font-heading font-bold text-base text-slate-900 mb-1">
              Reset Password for {resetPassModerator.name}
            </h3>
            <p className="text-xs text-slate-500 mb-4">{resetPassModerator.email}</p>
            <input
              type="password"
              placeholder="Enter new password..."
              value={newPasswordValue}
              onChange={(e) => setNewPasswordValue(e.target.value)}
              className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs mb-4"
            />
            <div className="flex items-center justify-end gap-2 text-xs">
              <button
                onClick={() => setResetPassModerator(null)}
                className="px-3 py-2 rounded-xl text-slate-600 hover:bg-slate-100"
              >
                Cancel
              </button>
              <button
                onClick={handleResetPassword}
                className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold"
              >
                Save New Password
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
