import React from 'react';

function SignOut({ auth }) {
    return auth.currentUser && (
        <div>
            <button onClick={() => auth.signOut()}>
                Sign out
          </button>
        </div>
    )
}
export default SignOut;