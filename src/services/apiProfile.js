import supabase, { supabaseUrl } from './supabase';

export async function getProfileDetails() {
  const { data, error } = await supabase.from('profiles').select('*');
  if (error) throw new Error(error.message);

  return data;
}


export async function editProfileDetails(obj) {
  const { data: user } = await supabase.auth.getUser();

  // BEFORE WE UPLOAD A NEW AVATAR, WE DELETE THE PREVIOUS AVATAR

  // 1. retrieve avatar from user
  const { data: profileAvatar } = await supabase
    .from('profiles')
    .select('avatar')
    .eq('id', user.user.id)
    .single();

  // 2. delete the retrieved avatar if it exists
  if (profileAvatar.avatar) {
    // retrieve avatar name
    const oldImageName = profileAvatar.avatar.split('/').pop();

    const { error: deleteError } = await supabase.storage
      .from('profile-avatars')
      .remove([oldImageName]);

    if (deleteError) throw new Error('Previous avatar could not be deleted');
  }

  // UPLOAD AVATAR

  // 3. create image name
  const imageName = `${Math.random()}-${obj.avatar[0].name}`.replaceAll(
    '/',
    '',
  );

  // 4. create image path
  const imagePath = `${supabaseUrl}/storage/v1/object/public/profile-avatars/${imageName}`;

  // update data
  const { data } = await supabase
    .from('profiles')
    .update({ ...obj, avatar: imagePath })
    .eq('id', user.user.id)
    .select()
  

  // 5. upload image
  const { error: storageError } = await supabase.storage
    .from('profile-avatars')
    .upload(imageName, obj.avatar[0]);

  if (storageError) throw new Error('Avatar could not be uploaded');

  return data;
}
