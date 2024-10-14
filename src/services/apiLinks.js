import supabase from './supabase';

export async function getLinks() {
  const { error, data } = await supabase.from('links').select('*');
  
  if (error) throw new Error(error);

  return data[0].userLinks;
}

export async function updateLinks(link) {
  
  const { data: user } = await supabase.auth.getUser();
  
  const { data, error } = await supabase
    .from('links')
    .update(link)
    .eq('id', user.user.id)
    .select();

  if (error) throw new Error('could not update user links');

  return data;
}
