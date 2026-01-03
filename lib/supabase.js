
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "https://frudrxnhacuntqjuuxtu.supabase.co";
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZydWRyeG5oYWN1bnRxanV1eHR1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njc0MTA5NjQsImV4cCI6MjA4Mjk4Njk2NH0.NQXT1umM9L66kgleBK2ssmjN23dSvmHiDh06mXI-uNA";

export const supabase = createClient(supabaseUrl, supabaseKey);
