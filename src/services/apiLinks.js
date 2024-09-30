import supabase from './supabase';

export async function getLinks() {
  const { error, data } = await supabase.from('links').select('*');

  if (error) throw new Error(error);
  console.log(data);
  return data;
}
