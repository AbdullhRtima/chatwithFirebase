import React from 'react'
import firebase from 'firebase';

function SignIn({ auth }) {

    // sign in 
    const signInWithGoogle = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider);
    };

    return (
        <div>
            <button onClick={signInWithGoogle}>
                SIGN IN WITH GOOGLE
            </button>
        </div>
    )
}
export default SignIn;