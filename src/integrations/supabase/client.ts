import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = "https://yxplquxjgztisgbvopfr.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl4cGxxdXhqZ3p0aXNnYnZvcGZyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njk0MzA0NjcsImV4cCI6MjA4NTAwNjQ2N30.dWfTHlqnXNTN9rlfXumCY2LcJx0f9U4Ly3sak2TvDhs";

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
