import supabase from './supabase';

export async function signup({ email, password }) {
  // check if there is an existing user before signup
  const { data: savedSessionData } = await supabase.auth.getSession();

  // if there's an existing user, save the session token to local storage
  if (savedSessionData) {
    localStorage.setItem(
      'supabase.auth.token',
      JSON.stringify(savedSessionData),
    );
    await supabase.auth.setSession(savedSessionData.session);
  }

  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });

  if (data?.user?.identities.length === 0) throw new Error('User already exists');

  if (error) throw new Error(error.message)

  return data;
}

export async function login({ email, password }) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) throw new Error(error.message);

  return data;
}

export async function getCurrentUser() {
  const { data: session } = await supabase.auth.getSession();
  if (!session.session) return null;

  const { data: user, error } = await supabase.auth.getUser();
  console.log(user);
  if (error) throw new Error(error.message);

  return user?.user;
}
