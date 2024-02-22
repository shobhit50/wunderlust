import React from "react";



function Register() {


    return (
        <>
            <div className="row">
                <h2 className="col-6 offset-3">SingUP on Wunderlust</h2>
                <div className="col-6 offset-3">
                    <form action="/singup" method="POST" novalidate className="needs-validation">
                        <div className="mb-3">
                            <label htmlFor="username" className="form-label">Username</label>
                            <input type="text" className="form-control" required placeholder="enter username" name="username" />
                            <div className="valid-feedback">
                                Looks good!
                            </div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">email</label>
                            <input type="text" className="form-control" required placeholder="enter email" name="email" />

                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">enter your password</label>
                            <input type="password" className="form-control" required placeholder="password" name="password" />
                            <div className="valid-feedback">
                                Looks good!
                            </div>
                        </div>
                        <button className="btn btn-success mb-3" id="btn-success">SingUP</button>

                    </form>



                </div>
            </div></>
    );

}



export default Register;