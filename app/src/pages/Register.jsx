import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '../services/firebaseConfig';
import { Link, useNavigate} from 'react-router-dom';
import './style.scss';
import {React, useState} from 'react';

export function Register() {

    const navigate = useNavigate()

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [createUserWithEmailAndPassword, user, loading, error] = 
    useCreateUserWithEmailAndPassword(auth);

    function HandleSingOut(e) {
        e.preventDefault();
        createUserWithEmailAndPassword(email, password)
        .then((user) => {
            console.log(user)
            if(user){navigate('/')}
        })
    }

    return(
        <div className="LoginContainer">
            <form>
            <div className="formDiv">
                <h1>Cadastrar</h1>
                
                <div className='wrapInput'>
                <input className={email !== "" ? "inputActivated" : "inputForm"} type="text" />
                <span className='focusInput' data-placeholder='Nome de Usuario'></span>
                 </div>
                 <div className='wrapInput'>
                <input className={email !== "" ? "inputActivated" : "inputForm"} type="text" onChange={(e) => setEmail(e.target.value)}/>
                <span className='focusInput' data-placeholder='Email'></span>
                </div>

                <div className='wrapInput'>
                <input className={password !== "" ? "inputActivated" : "inputForm"} type="password" onChange={(e) => setPassword(e.target.value)}/>
                <span className='focusInput' data-placeholder='Senha'></span>
                </div>

                <button onClick={HandleSingOut}>Criar</button>
                <div className='link'>
                    <p>Ja tem uma conta?</p>
                    <Link to="/">Entre aqui!</Link>
                </div>
            </div>
            </form>
       </div>
    )
}
