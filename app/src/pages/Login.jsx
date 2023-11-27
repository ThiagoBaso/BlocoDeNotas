import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import './style.scss';
import {React, useState} from 'react';
import { auth } from '../services/firebaseConfig';

export function Login() {

  const navigate = useNavigate()

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const [signInWithEmailAndPassword, user, loading, error,] = 
  useSignInWithEmailAndPassword(auth);

  function HandleSingIn(e) {
    e.preventDefault();
    signInWithEmailAndPassword(email, password)
    .then((user) => {
      console.log(user)
      if(user){navigate('/home')}
    })
  }

  return (
    <div className="LoginContainer">
      <form>
        <div className="formDiv">
          <h1>Login</h1>
          
          <div className='wrapInput'>
            <input className={email !== "" ? "inputActivated" : "inputForm"} type="text" onChange={(e) => setEmail(e.target.value)}/>
            <span className='focusInput' data-placeholder='Email'></span>
          </div>

          <div className='wrapInput'>
            <input className={password !== "" ? "inputActivated" : "inputForm"} type="password" onChange={(e) => setPassword(e.target.value)}/>
            <span className='focusInput' data-placeholder='Senha'></span>
          </div>

          <button onClick={HandleSingIn}>Entrar</button>

          <div className='link'>
            <p>Não tem uma conta?</p>
            <Link to="/register">Crie aqui!</Link>
          </div>
        </div>
      </form>
    </div>
  )
}
