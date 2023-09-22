"use client"
import React, { useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Loader from '../common/loader';

function Publicroute({ children }) {
  const  session  = useSession();
  const router = useRouter();


  if(session != undefined && session.status == "loading"){
    return <Loader/>;
  }
  // Render the protected content if the user is authenticated
  return session != undefined &&  (session.data == undefined && session.data == null) ? children : router.replace('/dashboard');
}

export default Publicroute;
