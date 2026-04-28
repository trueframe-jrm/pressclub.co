const { createClient } = window.supabase_js || supabase;

const supabaseUrl = 'https://yitgtgwbphqvrjriroqg.supabase.co'
const supabaseKey = 'sb_publishable_yCqdjTJans7FmjbxiOHdSA_T96Kdrq3'

window.supabase = createClient(supabaseUrl, supabaseKey)

console.log('Supabase connected')
