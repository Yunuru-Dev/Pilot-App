// React component for requesting password reset
import { useState } from 'react';
import { supabase } from '../supabaseClient'; 


const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  

  const handleForgotPassword = async (e) => {
    e.preventDefault();
    try {
      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: 'http://localhost:5173/reset-password', // Replace with your actual reset password page URL
       
      });
      if (error) {
        setMessage('Error: ' + error.message);
      } else {
        setMessage('Password reset email sent. Check your inbox!');
      }
    } catch (error) {
      console.error('Error requesting password reset:', error);
      setMessage('Something went wrong. Please try again.');
    }
  };

  return (
    <div>
      <h2>Forgot Password</h2>
      <form onSubmit={handleForgotPassword}>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">Send Reset Email</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};
export default ForgotPassword;