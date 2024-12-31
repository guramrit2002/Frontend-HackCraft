import React, { useState } from "react";

const Gallery = ({ mode }) => {
    const [photos, setGalleryPhotos] = useState([{},{}]);

    const handleAddPhoto = () => {
        setGalleryPhotos([...photos, {}]);
        console.log(photos);
    };

    return (
        <section className="gallery">
            <h1>Gallery</h1>
            <p>
                Please provide a well-designed About Us text defining your hackathon. 
                Make it sound interesting because this makes your hackathon look special.
            </p>
            <div className="photos">
                {mode === "form" ? (
                    <>
                        <div className="photo plus" onClick={handleAddPhoto}>
                            <p>+</p>
                        </div>
                        {photos.map((photo, index) => (
                            <div key={index} className="photo">
                                <p>Photo {index + 1}</p>
                            </div>
                        ))}
                    </>
                ) : (
                    <>
                        {photos.length === 0 ? (
                            <p>No photos available.</p>
                        ) : (
                            photos.map((photo, index) => (
                                <div key={index} className="photo">
                                    <p>Photo {index + 1}</p>
                                </div>
                            ))
                        )}
                    </>
                )}
            </div>
        </section>
    );
};

export default Gallery;
