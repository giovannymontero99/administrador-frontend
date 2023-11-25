import { ChangeEvent, FormEvent, useState } from 'react';
import { Button } from 'react-bootstrap';
import './Login.component.css';
import { loginDataDefault } from '../config/valoresPorDefecto';
import { requestUtils } from '../services/requestUtils';


function Login() {


    
    const [ loginData, setLoginData ] = useState(loginDataDefault)


    const handleLoginSubmit = async( event : FormEvent<HTMLFormElement> ): Promise<void> =>{
        event.preventDefault();
        const endPoint: string = requestUtils.apiEndpoint + 'login';
        
        const response = await fetch(endPoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
                },
            body: JSON.stringify( loginData ),
            credentials: 'include'
        }  )

        console.log(response);

    }

    const handleValues = ( event: ChangeEvent<HTMLInputElement>)=> {
        setLoginData({
            ...loginData, 
            [ event.target.name ] : event.target.value
        })
    }



    return (
        <div className="login-container" >
            <form onSubmit={ e => handleLoginSubmit(e) } className="border" style={{width: '30rem', padding: '2rem', backgroundColor: 'white'}} >
                <div className="mb-3">
                    <label
                        htmlFor="userLoginForm"
                        className="form-label">
                        User
                    </label>
                    <input
                        onChange={ (e) =>  handleValues(e) }
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
                        onChange={ (e) =>  handleValues(e) }
                        name="passwordLoginForm"
                        type="password"
                        required
                        className="form-control"
                        id="passwordLoginForm"
                         />
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