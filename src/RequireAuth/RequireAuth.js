import React from 'react';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../firebase.init';
import Loading from '../Loading/Loading';


const RequireAuth = ({ children }) => {
   const [user, loading] = useAuthState(auth);
   const location = useLocation();
   const [sendEmailVerification] = useSendEmailVerification(auth);

   if (loading) {
      return <Loading />
   }

   if (!user) {
      return <Navigate to="/login" state={{ from: location }} replace />;
   }

   if (user.providerData[0]?.providerId === 'password' && !user.emailVerified) {
      return <div className='text-center mt-5'>
          <h3 className='text-danger'>Your Email is not verified!!</h3>
          <h5 className='text-success'> Please Verify your email address</h5>
          <button
          className='btn btn-primary'
              onClick={async () => {
                  await sendEmailVerification();
                  toast('Mail send again ...');
              }}
          >
              Send Verification Email Again
          </button>
      </div>
  }
   return children;
};

export default RequireAuth;