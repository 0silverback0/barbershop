import React from 'react';
import Gallery from 'react-responsive-gallery';

function ImageGallery() {
    // Define an array of image objects with src and caption properties
    const images = [
        {
            src: '/images/cuts.png', // Replace with your image URLs
            caption: 'Image 1',
        },
        // {
        //     src: '/images/curtandcrew.jpg',
        //     caption: 'Image 2',
        // },
        // {
        //     src: '/images/chillen.jpg',
        //     caption: 'Image 2',
        // },
        // {
        //     src: '/images/kidscut.jpg',
        //     caption: 'Image 2',
        // },
        {
            src: '/images/photo1b.jpg.crdownload',
            caption: 'Image 2',
        },
        {
            src: '/images/photo4b.jpg.crdownload',
            caption: 'Image 2',
        },
    ];

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-12">
                    <h2 className='text-center'>Image Gallery</h2>
                    <Gallery images={images} />
                </div>
            </div>
        </div>
    );
}

export default ImageGallery;
