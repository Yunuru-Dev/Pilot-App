//  React component for handling password reset
import { useState, useEffect } from 'react';
import { supabase } from '../supabaseClient'; // Assuming your Supabase client setup
import { Link } from 'react-router-dom';

const ResetPassword = () => {
  const [newPassword, setNewPassword] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    supabase.auth.onAuthStateChange(async (event, session) => {
      if (event === 'PASSWORD_RECOVERY') {
        const newPasswordInput = prompt('What would you like your new password to be?');
        if (newPasswordInput) {
          const { error } = await supabase.auth.updateUser({
            password: newPasswordInput,
          });
          if (error) {
            setMessage('Error updating password: ' + error.message);
          } else {
            setMessage('Password updated successfully! You can now log in with your new password.');
          }
        }
      }
    });
  }, []);

  return (
    <div>
      <h2>Reset Password</h2>
      {message && <p>{message}<Link to='/'>Login</Link></p>}
      {/* Optionally, you can include a form here to collect the new password directly */}
      {/* <input type="password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} /> */}
      {/* <button onClick={handleUpdatePassword}>Update Password</button> */}
    </div>
  );
};

export default ResetPassword;
