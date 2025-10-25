import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://ehndoeyythwvbhtczxky.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVobmRvZXl5dGh3dmJodGN6eGt5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjE0MDI2MDAsImV4cCI6MjA3Njk3ODYwMH0.-HLlCOXwx87FgAnGcz0zxajeSDJyGMFPhGklOwJG-pg';

const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default supabase;