import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://vosrczpnfrsfwvokxqsy.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZvc3JjenBuZnJzZnd2b2t4cXN5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDUzNTA2NjIsImV4cCI6MjAyMDkyNjY2Mn0.0QwNVwTPr331YF-_ls_1pV6DLSt_9HclN5F0mIuKhZM'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)