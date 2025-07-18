import React, { useContext} from "react";
import {Context} from '../context';
import {useRouter} from "next/router";
import axios from "axios";

export default function Auth() {
  const {
    username,
    secret,
    setUsername,
    setSecret
  } = useContext(Context);

  const router = useRouter()

  function onSubmit(e) {
    e.preventDefault()

    if(username.length === 0 || secret.length === 0) return

    axios.put(
      'https://api.chatengine.io/users/',
      {username, secret},
      {headers: {"Private-key": '4c2ab7cb31a9-406c-ae6c-829efcddcaa5'}}
    )
    .then(r => Router.push('/chats'))
  }


  return <div className="background">
    <div className="auth-container">
      <form className="auth-form" onSubmit={e => onSubmit(e)}>
        <div className="auth-title">Chommie Chat</div>
        <div className="input-container">
          <input placeholder="Email" className="text-input" onChange={e => setUsername(e.target.value)}></input>
          <input type="password" placeholder="Password" className="text-input" onChange={e => setSecret(e.target.value)}></input>
          <button type="submit" className="submit-button">
            Login/Sign up
          </button>
        </div>
      </form>
    </div>
  </div>;
}
