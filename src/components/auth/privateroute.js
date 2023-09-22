"use client"
import React, { useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Loader from '../common/loader';

function Privateroute({ children }) {
  // const  session  = useSession();
  // const router = useRouter();
  
  // if(session != undefined && session.status == "loading"){
  //   return <Loader/>;
  // }
  // return session != undefined  && (session.data != undefined || session.data != null) ? children : router.replace('/signin');
  return children;
}

export default Privateroute;
