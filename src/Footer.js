import React from 'react';

function Footer() {
    return (
        <footer className="footer bg-light mt-5 text-center p-3">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <p>&copy; {new Date().getFullYear()} Westend Barbershop II</p>
                    </div>
                    <div className="col-md-6 text-md-end">
                        <p><i>Web Development by Marcell</i></p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
