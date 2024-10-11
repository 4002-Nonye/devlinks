import supabase from './supabase';

export async function getProfileDetails() {
  // const { data: user } = await supabase.auth.getUser();

  const { data, error } = await supabase.from('profiles').select('*');

  if (error) throw new Error(error.message);

  return data;
}

export async function editProfileDetails(obj) {
  const { data: user } = await supabase.auth.getUser();

  const { data, error } = await supabase
    .from('profiles')
    .update({ ...obj })
    .eq('id', user.user.id)
    .select();

  if (error) throw new Error(error.message);

  return data;
}
