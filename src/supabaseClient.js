import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://bocpiwohndgmbjxthtuv.supabase.co";
const supabaseKey = "sb_publishable_7bKeiNRS-s2v1uFdB_srtQ_C683YvA1";

export const supabase = createClient(supabaseUrl, supabaseKey);