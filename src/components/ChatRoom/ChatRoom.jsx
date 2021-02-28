import React, { useRef, useState, useEffect } from 'react';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import firebase from 'firebase';

//components
import { ChatMessage } from '../ChatMessage';

function ChatRoom({ firestore, auth }) {

    // use Ref
    const dummy = useRef();

    //query data 
    const messagesRef = firestore.collection('messages');
    const query = messagesRef.orderBy('createdAt')

    const [messages] = useCollectionData(query, { idField: 'id' });

    // state 
    const [formValue, setFormValue] = useState('');

    const sendMessage = async (e) => {
        e.preventDefault();

        const { uid, photoURL } = auth.currentUser;

        await messagesRef.add({
            text: formValue,
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            uid,
            photoURL
        })

        setFormValue('');
        dummy.current.scrollIntoView({ behavior: 'smooth' });
    };

    // scroll when income message 
    useEffect(() => {
        dummy.current.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);
    
    return (
        <div>
            <main>
                {messages && messages.map(msg => {
                    return <ChatMessage key={msg.id} message={msg} auth={auth} />
                })}
                <span ref={dummy}></span>
                <form onSubmit={sendMessage}>
                    <input
                        value={formValue}
                        onChange={(e) => setFormValue(e.target.value)}
                        placeholder="type here ...."
                    />
                    <button type="submit" disabled={!formValue}>SEND</button>
                </form>
            </main>

        </div>
    )
}
export default ChatRoom;