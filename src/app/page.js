"use client"
import React from 'react';
import Signin from '@/pages/auth/signin';
import Publicroute from '@/components/auth/publicroute';

export default function Home() {
  return (
    <Publicroute>
     <Signin/>
     </Publicroute>
  )
}
