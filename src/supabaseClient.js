
import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://kghgbudczaafqsfxvnnb.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtnaGdidWRjemFhZnFzZnh2bm5iIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTMxODMzMjksImV4cCI6MjA2ODc1OTMyOX0.Y7qjAgLmSDSPoOPzoOMU7TxNHQ3YhD8L_dtKB4DKUzc'
export const supabase = createClient(supabaseUrl, supabaseKey);