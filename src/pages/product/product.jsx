import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { useContext } from 'react';

function Product({ _id, isButtonClicked }) {
    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const [allListings, setAllListings] = useState({});
    const [avg, setAvg] = useState(0);
    const [currUser, setcurrUser] = useState(null);


    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            const user = JSON.parse(storedUser);
            setcurrUser(user);

        }
    }, []);

    useEffect(() => {
        fetch(`http://localhost:3001/listings/${id}`)
            .then(res => res.json())
            .then(data => {
                setAllListings(data.allListings);
                setAvg(data.avg);
                setLoading(false);
            })
    }, [id]);


    return (
        loading ? (
            <div style={{ color: 'blue', fontSize: '20px', textAlign: 'center' }}>Loading...</div>
        ) : (
            <div className="Show_page">
                <div>
                    <h2>
                        {allListings.title}
                    </h2>
                    <div className="page_continar">
                        <div className="img_box">
                            <div className="img_1">
                                <img src={allListings.image?.url} className="card-img-top show-img img-fluid" alt="..." />
                            </div>
                            <div className="img_box2">
                                <img src={allListings.image.url} className="box_img" alt="..." style={{ borderRadius: "0 0.5rem 0 0" }} />
                                <img src={allListings.image.url} className="box_img" alt="..." style={{ borderRadius: "0 0 0.5rem 0" }} />
                            </div>
                        </div>
                        <div className="data_continer">
                            <div className="page_data">
                                <h5>
                                    {allListings.title}
                                </h5>
                                <hr />
                                <p>
                                    <i className="fa-regular fa-circle-user"></i> Hosted by {allListings.owner.username}
                                    <br />
                                    {avg && avg}
                                </p>
                                <hr />
                                <div>
                                    <div className="page_data2">
                                        <div><i className="fa-solid fa-location-dot" style={{ fontSize: "clamp(16px, 2.5vw, 1.5rem)", color: "#fe424d" }}></i></div>
                                        <div>
                                            <h3>Great location</h3>
                                            <p>93% of recent guests gave the location a 5-star rating.</p>
                                        </div>
                                    </div>
                                    <div className="page_data2">
                                        <div><i className="fa-solid fa-key" style={{ fontSize: "clamp(16px, 2.5vw, 1.5rem)", color: "#fe424d" }}></i></div>
                                        <div>
                                            <h3>Great check-in experience</h3>
                                            <p>100% of recent guests gave the check-in process a 5-star rating.</p>
                                        </div>
                                    </div>
                                </div>
                                <hr />
                                <p>
                                    {allListings.description}
                                </p>
                            </div>
                            <div className="price_card">
                                <h3>
                                    {allListings.price !== null && typeof allListings.price === 'number' ? `₹${allListings.price.toLocaleString("en-in")} / night` : 'Price Not Available'}
                                </h3>
                                <p>
                                    {allListings.location}, {allListings.country}
                                </p>
                                <p style={{ margin: 0 }}>18% tax +</p>
                                <hr />
                                <h6>Total After taxes: ₹{(allListings.price * (18 / 100) + allListings.price).toLocaleString("en-in")}</h6>
                                {currUser && (allListings.owner._id === currUser.id || currUser.isAdmin) && (
                                    <div className="delete-btn">
                                        <a href={`/listings/Edit/${allListings._id}`} className="btn btn-primary show-btn">Edit</a>
                                        <button type="submit" className="btn btn-primary">Delete</button>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>)
    );
}

export default Product;