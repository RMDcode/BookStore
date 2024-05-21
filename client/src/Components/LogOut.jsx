import React from 'react';
import { useAuth } from '../Context/AuthProvider';
import { toast } from 'react-hot-toast';

function LogOut() {
  const { authUser, setAuthUser } = useAuth();

  const handleLogout = () => {
    try {
      setAuthUser(null);
      localStorage.removeItem('Users');
      toast.success('Logout Successfully');
      setTimeout(() => {
        window.location.reload();
      }, 3000);
    } catch (error) {
      toast.error('Error: ' + error.message);
    }
  };

  return (
    <>
      {authUser && (
        <div>
          <button
            className="px-3 py-2 bg-red-500 text-white rounded-md cursor-pointer"
            onClick={handleLogout}
          >
            LogOut
          </button>
        </div>
      )}
    </>
  );
}

export default LogOut;
