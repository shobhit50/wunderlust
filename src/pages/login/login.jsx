import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // import the useNavigate hook
import { useCookies } from 'react-cookie';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate(); // get the navigate function
    const [cookies] = useCookies(['user']);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3001/login', { username, password });
            if (response.status === 200) {
                console.log('login success');
                const user = response.data.userForCookie;
                localStorage.setItem('user', JSON.stringify(user));



                // console.log(response)

                navigate(response.data.redirectURL);
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <>
            <div className="row">
                <h2 className="col-6 offset-3">Login</h2>
                <div className="col-6 offset-3">
                    <form novalidate className="needs-validation" onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="username" className="form-label">Username</label>
                            <input type="text" className="form-control" required placeholder="enter username" name="username" value={username} onChange={(e) => setUsername(e.target.value)} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">enter your password</label>
                            <input type="password" className="form-control" required placeholder="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <button className="btn btn-success mb-3" id="btn-success">SingUP</button>
                    </form>
                </div>
            </div>
        </>

    );

};

export default Login;