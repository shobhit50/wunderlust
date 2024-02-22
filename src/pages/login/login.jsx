import React from "react";


function Login() {

    return (
        <>

            <div className="row">
                <h2 className="col-6 offset-3">Login</h2>
                <div className="col-6 offset-3">
                    <form action="/login" method="POST" novalidate className="needs-validation">
                        <div className="mb-3">
                            <label htmlFor="username" className="form-label">Username</label>
                            <input type="text" className="form-control" required placeholder="enter username" name="username" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">enter your password</label>
                            <input type="password" className="form-control" required placeholder="password" name="password" />
                        </div>
                        <button className="btn btn-success mb-3" id="btn-success">SingUP</button>
                    </form>
                </div>
            </div>
        </>

    );

};

export default Login;