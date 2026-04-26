import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://yitgtgwbphqvrjriroqg.supabase.co/'
const supabaseKey = 'sb_publishable_yCqdjTJans7FmjbxiOHdSA_T96Kdrq3'

export const supabase = createClient(supabaseUrl, supabaseKey)