import React, { useState, useEffect } from "react";
import ProductCard from "../../../components/cards/productCard";
import Filtertab from '../filterTab/filterTab';

function ListingCard() {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState({});
    useEffect(() => {
        fetch(`http://localhost:3001`)
            .then(res => res.json())
            .then(allListings => {
                console.log(allListings); // Log the data
                setData(allListings);
                setLoading(false);
            })
    }, []);
    return (
        <>
            {loading ? (
                <div style={{ color: 'blue', fontSize: '20px', textAlign: 'center' }}>Loading...</div>
            ) : (
                <>
                    <Filtertab />
                    <div className="row row-cols-lg-3 row-cols-lg-2 row-cols-lg-1 mt-5" style={{ justifyContent: "center" }}>
                        <div className="listingdata">
                            {data.allListings ? data.allListings.map((item) => (
                                <div key={item._id}>
                                    <ProductCard listing={item} />
                                </div>
                            )) : null}
                        </div>
                    </div>
                </>)}
        </>
    );
}

export default ListingCard;