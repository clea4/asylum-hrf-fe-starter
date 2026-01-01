import { useAuth0 } from '@auth0/auth0-react';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

/**
 * TODO: Ticket 3:
 * Implement authentication using Auth0:
 * - Get the user data from Auth0
 * - Create and style the component
 * - Display the data
 * - Make this page a protected Route
 */
const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const navigate = useNavigate();

  // Redirect to home if not authenticated
  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      navigate('/');
    }
  }, [isAuthenticated, isLoading, navigate]);

  if (isLoading) {
    return (
      <div className='flex justify-center items-center min-h-screen'>
        <div className='text-center'>
          <div className='animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mx-auto mb-4'></div>
          <p className='text-lg text-gray-600'>Loading profile...</p>
        </div>
      </div>
    );
  }

  if (!isAuthenticated || !user) {
    return null;
  }

  return (
    <div className='min-h-screen bg-gradient-to-b from-blue-50 to-white py-12 px-6'>
      <div className='max-w-4xl mx-auto'>
        <div className='bg-white rounded-lg shadow-xl overflow-hidden'>
          {/* Header Section */}
          <div className='bg-gradient-to-r from-blue-600 to-indigo-700 px-8 py-12 text-center'>
            {user.picture && (
              <img
                src={user.picture}
                alt={user.name || 'User'}
                className='w-32 h-32 rounded-full mx-auto border-4 border-white shadow-lg mb-4'
              />
            )}
            <h1 className='text-3xl font-bold text-white mb-2'>
              {user.name || 'User Profile'}
            </h1>
            {user.email && (
              <p className='text-blue-100 text-lg'>{user.email}</p>
            )}
          </div>

          {/* Profile Details Section */}
          <div className='px-8 py-8'>
            <h2 className='text-2xl font-bold text-gray-800 mb-6'>Profile Information</h2>
            
            <div className='space-y-4'>
              {user.name && (
                <div className='flex border-b border-gray-200 pb-3'>
                  <span className='font-semibold text-gray-700 w-40'>Full Name:</span>
                  <span className='text-gray-600'>{user.name}</span>
                </div>
              )}
              
              {user.email && (
                <div className='flex border-b border-gray-200 pb-3'>
                  <span className='font-semibold text-gray-700 w-40'>Email:</span>
                  <span className='text-gray-600'>{user.email}</span>
                </div>
              )}
              
              {user.email_verified !== undefined && (
                <div className='flex border-b border-gray-200 pb-3'>
                  <span className='font-semibold text-gray-700 w-40'>Email Verified:</span>
                  <span className={`font-semibold ${user.email_verified ? 'text-green-600' : 'text-red-600'}`}>
                    {user.email_verified ? '✓ Verified' : '✗ Not Verified'}
                  </span>
                </div>
              )}
              
              {user.nickname && (
                <div className='flex border-b border-gray-200 pb-3'>
                  <span className='font-semibold text-gray-700 w-40'>Nickname:</span>
                  <span className='text-gray-600'>{user.nickname}</span>
                </div>
              )}
              
              {user.updated_at && (
                <div className='flex border-b border-gray-200 pb-3'>
                  <span className='font-semibold text-gray-700 w-40'>Last Updated:</span>
                  <span className='text-gray-600'>
                    {new Date(user.updated_at).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                      hour: '2-digit',
                      minute: '2-digit'
                    })}
                  </span>
                </div>
              )}
              
              {user.sub && (
                <div className='flex border-b border-gray-200 pb-3'>
                  <span className='font-semibold text-gray-700 w-40'>User ID:</span>
                  <span className='text-gray-600 text-sm break-all'>{user.sub}</span>
                </div>
              )}
            </div>
          </div>

          {/* Footer Section */}
          <div className='bg-gray-50 px-8 py-6 text-center'>
            <p className='text-gray-600 text-sm'>
              This profile information is securely managed by Auth0
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
