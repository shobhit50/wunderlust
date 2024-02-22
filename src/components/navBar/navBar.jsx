import React from 'react';

function NavBar({ currUser }) {
    const toggleDropdown = (dropdownId) => {
        var dropdown = document.getElementById(dropdownId);
        if (dropdown.style.display === "block") {
            dropdown.style.display = "none";
        } else {
            dropdown.style.display = "block";
        }
    }

    // this is for the dropdown menu close when click outside
    document.addEventListener('click', function (event) {
        var dropdown = document.getElementById('userDropdown');
        var triggerElement = document.querySelector('.navdrop2');

        if (!triggerElement.contains(event.target) && !dropdown.contains(event.target)) {
            dropdown.style.display = 'none';
        }
    });

    return (
        <nav className="navbar navbar-expand-md bg-body-tertiary  border-bottom sticky-top">
            <div className="container-fluid">
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <a className="navbar-brand" href="/listings"><i className="fa-regular fa-compass"></i></a>
                    <li id="Explore">
                        <a className="nav-link" href="/listings">Explore</a>
                    </li>
                </div>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav" style={{ width: '100%', alignItems: 'center' }}>
                        <li className="nav-item">
                            <a className="nav-link" href="/listings">Explore</a>
                        </li>

                        <li className="nav-item navbar-nav ms-auto" id="search-nav">
                            <form className="d-flex" action="/Search/data" method="POST" style={{ borderRadius: '2rem', backgroundColor: 'white', padding: '0.5rem 1rem 0.5rem 1rem', boxShadow: '0px 0px 11px -5px' }}>
                                <div className="input-group">
                                    <input className="form-control me-2" type="search" placeholder="Enter Cuntery | City"
                                        aria-label="Search" name="search" style={{ border: 'none' }} />
                                </div>
                                <button className="btn btn-outline-success" type="submit" style={{ backgroundColor: '#fe424d !important', borderRadius: '2rem', color: 'white' }}><i className="fas fa-search"></i></button>
                            </form>
                        </li>

                        <div className="navdrop">
                            {currUser && <p className="drop"><i className="fa-regular fa-circle-user"></i>{currUser.username}</p>}
                        </div>

                        <li className="nav-item navbar-nav ms-auto" id="nav-item" style={{ alignItems: 'center' }}>
                            <a className="nav-link" href="/listings/new">Airbnb your home</a>
                            {!currUser && <a className="nav-link " aria-current="page" href="/signup"> <b>SignUp</b></a>}
                            {!currUser && <a className="nav-link" href="/login"> <b>Login</b></a>}

                            {currUser &&
                                <div className="navdrop2">
                                    <p className="drop" onClick={() => toggleDropdown('userDropdown')}><i className="fa-regular fa-circle-user"></i>{currUser.username}</p>
                                    <div className="dropdown" id="userDropdown">
                                        <a className="nav-link" href="/listings/new">Airbnb your home</a>
                                        <hr />
                                        <a className="nav-link" href="/logout"><b></b>LogOut</a>
                                    </div>
                                </div>
                            }

                            <div className="navdrop">
                                {currUser && <a className="nav-link" href="/logout"><b></b>LogOut</a>}
                            </div>
                        </li>
                    </ul>
                </div>

                <div className="navbar-nav ms-auto" id="navbar-1" style={{ alignItems: 'center' }}></div>
            </div>
        </nav>
    );
}

export default NavBar;