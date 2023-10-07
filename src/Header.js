import React from 'react';

function Header() {
    return (
        <header>
            <img
                src="/images/header.crdownload"
                alt="house"
                className="img-fluid"
                style={{ width: '100%', marginTop: '0px' }}
            />
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    {/* <a className="navbar-brand" href="#book">
                        Westend Barbershop II
                    </a> */}
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="#book">
                                    Book Appointment
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    target="_blank"
                                    className="nav-link"
                                    href="https://www.google.com/maps/dir//West+End+Barbershop+LLC/data=!4m8!4m7!1m0!1m5!1m1!1s0x89c45fbfe3290c37:0x771b325f277c923b!2m2!1d-75.3888315!2d40.9253461"
                                >
                                    Get directions
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    target="_blank"
                                    className="nav-link"
                                    href="tel:+1-570-733-3203"
                                >
                                    Call now
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;

