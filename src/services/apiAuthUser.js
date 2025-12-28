import supabase from './supabase';

export async function getAuthenticatedUser() {
  const { data: user, error } = await supabase.auth.getUser();
  if (error) throw new Error(error.message);
  console.log(user);
  return user;
}
