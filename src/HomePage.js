import React from 'react';

function HomePage() {
    return (
        <div className='text-center p-3'>
            <h1>Welcome to West End Barbershop II!</h1>

            <p>We're dedicated to providing you with an exceptional haircut experience without breaking the bank.</p>

            <h2>Why Choose Us:</h2>
            <ul className='list-unstyled'>
                <li>Quality Haircuts: Our skilled barbers are here to ensure you leave with a sharp and stylish haircut.</li>
                <li>Affordable Pricing: Enjoy top-notch grooming at prices that won't dent your wallet.</li>
                <li>Convenient Scheduling: Book your appointment with ease or simply walk in. We value your time.</li>
                <a href='#book'>
                <button className='btn btn-primary m-3'>
                    Book Now!
                </button>
                </a>
            </ul>

            <h2>Operating Hours:</h2>
            <p><strong>Monday - Saturday: 10 AM to 6 PM</strong></p>

            <p>
    Ready to elevate your look? Click the button to book an appointment or give Curtis a direct call at <a href="tel:+15702439155">(570) 243-9155</a>.
</p>

            <p>Join us today and discover the West End Barbershop II difference!</p>
        </div>
    );
}

export default HomePage;
 