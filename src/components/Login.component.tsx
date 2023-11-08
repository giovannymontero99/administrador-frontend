import { FormEvent, useRef } from 'react';
import { Button } from 'react-bootstrap';
import './Login.component.css';

function Login() {

    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const handleLoginSubmit = ( event : FormEvent<HTMLFormElement> ):void =>{
        event.preventDefault();
        console.log(emailRef.current.value, passwordRef)
    }



    return (
        <div className="login-container" >
            <form onSubmit={ e => handleLoginSubmit(e) } className="border" style={{width: '30rem', padding: '2rem'}} >
                <div className="mb-3">
                    <label
                        htmlFor="userLoginForm"
                        className="form-label">
                        User
                    </label>
                    <input
                        ref={emailRef}
                        name="userLoginForm"
                        type="text"
                        required
                        className="form-control"
                        id="userLoginForm" />
                </div>
                <div className="mb-3">
                    <label
                        htmlFor="passwordLoginForm"
                        className="form-label">
                        Password
                    </label>
                    <input
                        name="userLoginForm"
                        type="password"
                        required
                        className="form-control"
                        id="passwordLoginForm"
                        ref={passwordRef} />
                </div>
                <div className="mb-3">
                    <Button 
                        variant="primary" 
                        type='submit'>
                        Sign in
                    </Button>
                </div>
            </form>
        </div>

    )
}

export default Login;