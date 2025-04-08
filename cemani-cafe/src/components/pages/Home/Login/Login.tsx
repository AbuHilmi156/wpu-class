import { FormEvent } from 'react';
import Button from '../../../ui/Button';
import Input from '../../../ui/Input';
import styles from './Login.module.css';
import { login } from '../../../../services/auth.service';
import { setLocalstorage } from '../../../../utils/storage';
import { Navigate } from 'react-router-dom';

const Login = () => {
    const handleLogin = async (event: FormEvent) => {
        event.preventDefault();
        const form = event.target as HTMLFormElement;
        const payload = {
            email: form.email.value,
            password: form.password.value,
        };
        const result = await login(payload);
        setLocalstorage('auth', result.token);  

        return <Navigate to ='/orders' replace/>
    }; 
  return (
    <main className={styles.login}>

        <div className={styles.card}>
            <h1 className={styles.title}>Login</h1>
            <form className={styles.form} onSubmit={handleLogin}>
                <Input label='Email' name='email' 
                id='email' 
                type='email' placeholder='Insert Email' required />
                <Input label='Password' name='password' 
                id='password' 
                type='password' placeholder='Insert password' required />
                <Button type='submit'>Login</Button>
            </form>
        </div>

    </main>
  )
}

export default Login;