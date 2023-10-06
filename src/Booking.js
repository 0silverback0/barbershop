// import React from 'react';
// import { InlineWidget } from 'react-calendly'; // Import the specific component

// function Booking() {
//     return (
//         <div className="container mt-5">
//             <div className="row">
//                 <div className="col-md-8 col-12 offset-md-2">
//                     <div className="card">
//                         <div className="card-body p-0">
//                             <h2 className="card-title">Book an Appointment</h2>
//                             <p className="card-text text-sm">
//                                 Choose a convenient time for your appointment.
//                             </p>
//                             <div className="calendly-container">
//                                 <div className="custom-inline-widget">
//                                     <InlineWidget url="https://calendly.com/fourmarz" />
//                                     {/* Use InlineWidget component */}
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Booking;

import React from 'react';

function Booking() {
    return (
        <div className="container mt-5">
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
