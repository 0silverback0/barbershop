import React from 'react';

function Booking() {
    return (
        <div id='book' className="container mt-5">
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <div className="card">
                        <div className="card-body">
                            <h2 className="card-title">Book an Appointment</h2>
                            <p className="card-text">
                                Choose a convenient time for your appointment.
                            </p>
                            <div className="calendly-container">
                                <iframe
                                    title="Calendly"
                                    src="https://calendly.com/fourmarz"
                                    style={{
                                        width: '100%',
                                        height: '380px', // Adjust the height as needed
                                        border: 'none',
                                    }}
                                    allow="camera; microphone; fullscreen; autoplay"
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Booking;
