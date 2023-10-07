import React from 'react';
import Gallery from 'react-responsive-gallery';

function ImageGallery() {
    const images = [
        {
            src: '/images/cuts.png',
            caption: 'Image 1',
        },
        {
            src: '/images/photo4b.jpg.crdownload',
            caption: 'Image 3',
        },
    ];

    return (
    
        <div className="container mt-5">
            
            <div className="row justify-content-center">
                <div className="col-md-12">
                    <h2 className='text-center'>Gallery</h2>
                    <Gallery images={images} />
                </div>
            </div>
        </div>
    );
}

export default ImageGallery;
