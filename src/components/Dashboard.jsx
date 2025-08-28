import React from 'react'
import { supabase } from '../supabaseClient';
import { useNavigate } from 'react-router-dom';
export const Dashboard = () => {
  let navigate=useNavigate();
  async function signOut() {
    const { error } = await supabase.auth.signOut();
    if (error) {
        console.error('Logout error:', error.message);
    } else {
        console.log('User logged out.');
    }
    navigate('/');
}

  return (
    <div>Dashboard

      <button onClick={() => signOut()}>Sign out</button>

    </div>
    
  )
}

