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
                <input type="text" placeholder='Nome de Usuario'/>
                <input type="text" placeholder='Email' onChange={(e) => setEmail(e.target.value)}/>
                <input type="password" placeholder='Senha' onChange={(e) => setPassword(e.target.value)}/>
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
