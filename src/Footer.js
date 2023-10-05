import React from 'react';

function Footer() {
    return (
        <footer className="footer bg-light">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <p>&copy; {new Date().getFullYear()} Westend Barbershop</p>
                    </div>
                    <div className="col-md-6 text-md-end">
                        <p>Web Development by DesignNDev</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
