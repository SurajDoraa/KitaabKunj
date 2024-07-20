import React from 'react';
import { SignUp, ClerkProvider } from '@clerk/nextjs';

export default function Page() {
    return (
        <ClerkProvider>
            <div className='flex items-center justify-center flex-col gap-10'>
                <h1 className='text-4xl font-bold mt-20'>This is signup page</h1>
                <SignUp />
            </div>
        </ClerkProvider>
    );
}