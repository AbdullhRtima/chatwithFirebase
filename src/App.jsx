import './App.css';
import firebase from 'firebase';
import 'firebase/firebase-firestore';
import 'firebase/firebase-auth';
import 'firebase/analytics'

// hooks import 
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

// import component 
import { SignIn } from './components/SignIn';
import { SignOut } from './components/SignOut';
import { ChatRoom } from './components/ChatRoom';

// init firbase 
firebase.initializeApp({
  apiKey: "AIzaSyCt-XAmkSc3xbMqtTC1dYC63P9mOe2Glx8",
  authDomain: "delta-student-237613.firebaseapp.com",
  projectId: "delta-student-237613",
  storageBucket: "delta-student-237613.appspot.com",
  messagingSenderId: "440472777287",
  appId: "1:440472777287:web:c61c61a748deb7f7fbf762",
  measurementId: "G-RG8083N0KC"
});

// constant 
const auth = firebase.auth();
const firestore = firebase.firestore();
const analytics = firebase.analytics();

function App() {

  // hooks 
  const [user] = useAuthState(auth);

  console.log("USER", user?.displayName);

  return (
    <div className="App">

      <header>
        <h1>{user?.displayName}</h1>
        <SignOut
          auth={auth}
        />
      </header>

      <section>
        {
          user ?
            <ChatRoom
              firestore={firestore}
              auth={auth}
            />
            :
            <SignIn
              auth={auth}
            />
        }
      </section>
    </div>
  );
}

export default App;
