import supabase from './supabase';

export async function getProfileDetails() {
  const { data, error } = await supabase.from('profile').select('*');
  if (error) throw new Error(error.message);

  return data;
}

export async function editProfileDetails(obj) {
  const { data, error } = await supabase
    .from('profile')
    .update({ ...obj })
    .eq('id', 1)
    .select();

  if (error) throw new Error(error.message);

  return data;
}
