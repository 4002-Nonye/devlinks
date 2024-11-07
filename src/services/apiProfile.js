import supabase, { supabaseUrl } from './supabase';

export async function getProfileDetails() {
  const { data: user } = await supabase.auth.getUser();
  const { data, error } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', user.user.id);
  if (error) throw new Error(error.message);

  return data;
}
export async function getProfileDetailsbyId(id) {
  const { data, error } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', id);
  if (error) throw new Error(error.message);

  return data;
}
export async function editProfileDetails(obj) {
  const { data: user } = await supabase.auth.getUser();

  // Get the avatar info asynchronously (no need to wait for it before continuing)
  const { data: profileAvatar, error: avatarError } = await supabase
    .from('profiles')
    .select('avatar')
    .eq('id', user.user.id)
    .single();

  // Initialize an array to track tasks
  const tasks = [];

  // Delete the previous avatar if it exists
  if (profileAvatar?.avatar && !avatarError) {
    const oldImageName = profileAvatar.avatar.split('/').pop();
    const deleteTask = supabase.storage
      .from('profile-avatars')
      .remove([oldImageName]);

    tasks.push(deleteTask); // Push to tasks array to await later
  }

  // Prepare new avatar upload
  const imageName = `${Math.random()}-${obj.avatar[0].name}`.replaceAll('/', '');
  const imagePath = `${supabaseUrl}/storage/v1/object/public/profile-avatars/${imageName}`;

  // Upload the new avatar asynchronously
  const uploadTask = supabase.storage
    .from('profile-avatars')
    .upload(imageName, obj.avatar[0]);

  tasks.push(uploadTask); // Push to tasks array to await later

  // Update profile details
  const updateProfileTask = supabase
    .from('profiles')
    .update({ ...obj, avatar: imagePath })
    .eq('id', user.user.id)
    .select();

  tasks.push(updateProfileTask); // Push to tasks array to await later

  // Wait for all tasks to finish
  const results = await Promise.all(tasks);

  // Check for errors in any task
  const [deleteResult, uploadResult, updateProfileResult] = results;

  // Handle errors if any
  if (deleteResult?.error) throw new Error('Previous avatar could not be deleted');
  if (uploadResult?.error) throw new Error('Avatar could not be uploaded');
  if (updateProfileResult?.error) throw new Error('Profile update failed');

  return updateProfileResult?.data;
}
