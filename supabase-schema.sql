-- =========================================================
-- TSS SOFT — SUPABASE DATABASE SCHEMA
-- Run this in your Supabase SQL Editor:
-- https://supabase.com/dashboard/project/zhkkcherqhupogojgxky/sql
-- =========================================================

-- 1. Create Contacts / Inquiries Table
CREATE TABLE IF NOT EXISTS public.contacts (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  service TEXT,
  message TEXT NOT NULL,
  status TEXT DEFAULT 'new', -- 'new', 'in_progress', 'contacted', 'archived'
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. Create Job Applications Table
CREATE TABLE IF NOT EXISTS public.applications (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  position TEXT NOT NULL,
  portfolio_url TEXT,
  experience TEXT,
  message TEXT,
  status TEXT DEFAULT 'pending', -- 'pending', 'reviewing', 'shortlisted', 'rejected'
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 3. Enable Row Level Security (RLS)
ALTER TABLE public.contacts ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.applications ENABLE ROW LEVEL SECURITY;

-- 4. RLS Policies: Allow public visitors to submit inquiries & applications
DROP POLICY IF EXISTS "Allow public insert to contacts" ON public.contacts;
CREATE POLICY "Allow public insert to contacts" ON public.contacts
  FOR INSERT WITH CHECK (true);

DROP POLICY IF EXISTS "Allow public insert to applications" ON public.applications;
CREATE POLICY "Allow public insert to applications" ON public.applications
  FOR INSERT WITH CHECK (true);

-- 5. RLS Policies: Allow viewing, updating, and managing submissions
DROP POLICY IF EXISTS "Allow full access to contacts" ON public.contacts;
CREATE POLICY "Allow full access to contacts" ON public.contacts
  FOR ALL USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "Allow full access to applications" ON public.applications;
CREATE POLICY "Allow full access to applications" ON public.applications
  FOR ALL USING (true) WITH CHECK (true);

