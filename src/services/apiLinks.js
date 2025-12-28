import supabase from './supabase';

export async function getLinks() {
  const { data: user } = await supabase.auth.getUser();
  
  const { error, data } = await supabase
    .from('links')
    .select('*')
    .eq('id', user.user.id);

  if (error) throw new Error(error);
console.log(data)
  return data;
}

export async function getLinkById(id) {
  const { data, error } = await supabase.from('links').select('*').eq('id', id);

  if (error) throw new Error(error.message);

  return data;
}

// overwriting entire links :fix in later development
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
