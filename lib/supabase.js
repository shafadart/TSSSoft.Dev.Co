import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://zhkkcherqhupogojgxky.supabase.co';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inpoa2tjaGVycWh1cG9nb2pneGt5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTQ0NzQ5NDIsImV4cCI6MjExMDA1MDk0Mn0.hDXgRJdIo-YT42y3IvLlhgZpZlY4I0NZAFS3wviZIUw';

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
  },
});
