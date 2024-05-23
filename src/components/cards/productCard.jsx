import React from 'react';
import { useContext } from 'react';
import ButtonContext from '../context/Buttoncontext';
import { useEffect } from 'react';

function ProductCard({ listing }) {
    const { isButtonClicked } = useContext(ButtonContext);

    useEffect(() => {
    }, [listing]);

    const calculateAverageRating = (reviews) => {
        if (!reviews || reviews.length === 0) return 0;
        const totalRating = reviews.reduce((sum, review) => sum + review.rating, 0);
        return parseFloat((totalRating / reviews.length).toFixed(2));
    }
    return (
        <div className="row row-cols-lg-3 row-cols-lg-2 row-cols-lg-1 mt-5" style={{ justifyContent: 'center' }}>
            <div className="listingdata">
                <a href={`/listings/${listing._id}`}>

                    <div className="card" style={{ width: '20rem', border: 'none', marginRight: '20px' }}>
                        <img className="card-img-top" style={{ borderRadius: '1.5em', objectFit: 'cover', height: '20rem' }} src={listing?.image?.url} alt="Card image cap" />
                        <div className="card-img-overlay"></div>
                        <div className="card-body">
                            <p className="card-text">
                                <b>{listing.title}</b><br />
                                {listing.location}, {listing.country}
                                <span style={{ display: 'flex' }}>
                                    {listing.price !== null && typeof listing.price === 'number' ? (
                                        <>
                                            ₹{listing.price.toLocaleString("en-in")} / night
                                            {isButtonClicked && <i>&nbsp; +18%tax</i>}
                                            <i style={{
                                                background: 'linear-gradient(137deg, rgb(255 255 255) 9%, rgb(205 205 205 / 50%) 100%)',
                                                backdropFilter: 'blur(2px)',
                                                boxShadow: '0px 0px 20px 0px rgba(0, 0, 0, 0.134)',
                                                fontSize: '0.9rem',
                                                padding: '0 0.1rem',
                                                borderRadius: '0.2rem',
                                                color: '#000000',
                                                backgroundColor: '#2c2c2c',
                                                position: 'absolute',
                                                right: '0'
                                            }}>
                                                {calculateAverageRating(listing.reviews) !== 0 ? (
                                                    <>
                                                        &#9733;{calculateAverageRating(listing.reviews)}
                                                    </>
                                                ) : (
                                                    <>
                                                        &#9734;0
                                                    </>
                                                )}
                                            </i>
                                        </>
                                    ) : (
                                        'Price Not Available'
                                    )}
                                </span>
                            </p>
                        </div>
                    </div>
                </a>

            </div>
        </div>
    );
}

export default ProductCard;