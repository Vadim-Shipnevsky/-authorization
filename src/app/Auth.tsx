'use client'

import { signIn, signOut, useSession } from 'next-auth/react';

const Auth = () => {
    const { data: session } = useSession();
    return (
        <div>
            <p>
                {
                    !session &&
                    <button onClick={() => signIn()}>sign in</button>
                }
                {
                    session &&
                    <>
                        <span>{session.user?.email}</span>
                        <button onClick={() => signOut()}>sign Out</button>
                    </>
                }
            </p>
        </div>
    )
}

export default Auth