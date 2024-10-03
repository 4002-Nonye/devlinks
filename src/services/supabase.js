import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://nanmlwxcbnxvreavixog.supabase.co';
const supabaseKey =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5hbm1sd3hjYm54dnJlYXZpeG9nIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjc1NDQ2NDYsImV4cCI6MjA0MzEyMDY0Nn0.s9OvfHUTk5nom9YRLm9iSyzUNaFj_10YrZyQX5qIShI';
const supabase = createClient(supabaseUrl, supabaseKey);

// little hack
// export const supabase2= createClient(supabaseUrl,supabaseKey,{
//     auth:{
//         storageKey:'s1'
//     }
// })


export default supabase;


