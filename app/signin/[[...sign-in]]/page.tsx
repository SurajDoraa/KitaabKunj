import React from 'react';
import { SignIn, ClerkProvider } from '@clerk/nextjs';

export default function Page() {
    return (
        <ClerkProvider>
            <div className='flex items-center justify-center flex-col gap-10'>
                <h1 className='text-4xl font-bold mt-20'>This is signIn page</h1>
                <SignIn />
            </div>
        </ClerkProvider>
    );
}