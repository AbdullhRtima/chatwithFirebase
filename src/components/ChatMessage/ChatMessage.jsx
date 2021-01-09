import React from 'react'

function ChatMessage(props) {
    const { text, uid, photoURL } = props.message;

    const messageClass = uid === props.auth.currentUser.uid ? 'sent' : 'received';

    return (
        <div className={`message ${messageClass}`}>
            <img src={photoURL || 'https://api.adorable.io/avatars/23/abott@adorable.png'} />
            <p> {text}</p>
        </div>
    )
}
export default ChatMessage;