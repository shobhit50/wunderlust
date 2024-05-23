import React, { useState, useEffect } from "react";
import ProductCard from "../../../components/cards/productCard";
import Filtertab from '../filterTab/filterTab';
import ButtonContext from "../../../components/context/Buttoncontext";
import axios, { all } from "axios";


function ListingCard() {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState({});
    const [isButtonClicked, setIsButtonClicked] = useState(false);
    const [trigger, setTrigger] = useState(0);



    const [url, setUrl] = useState('http://localhost:3001');
    const [formData, setFormData] = useState(null);

    useEffect(() => {
        setLoading(true);
        if (formData !== null) {
            axios.post(url, formData)
                .then(res => {
                    if (!res.ok && res.status !== 200) {
                        throw new Error(`HTTP error! status: ${res.status}`);
                    }
                    console.log('res: ', res);
                    return res.data;
                }).then(allListings => {
                    setData(allListings);
                    console.log('allListings: ');
                    setLoading(false);


                }).catch(error => {
                    console.log('Fetch error: ', error);
                });

        }
        else {
            fetch(url).then(res => {
                if (!res.ok) {
                    throw new Error(`HTTP error! status: ${res.status}`);
                }
                console.log('res: ', res);
                return res.json();
            }).then(allListings => {
                setData(allListings);
                console.log('allListings: ', allListings);
                setLoading(false);
            }).catch(error => {
                console.log('Fetch error: ', error);
            });
        }

    }, [url, trigger]);





    return (
        <>
            <ButtonContext.Provider value={{ isButtonClicked, setIsButtonClicked }}>
                {loading ? (
                    <div style={{ color: 'blue', fontSize: '20px', textAlign: 'center' }}>Loading...</div>
                ) : (
                    <>
                        <Filtertab setUrl={setUrl} setFormData={setFormData} setTrigger={setTrigger} />
                        <div className="row row-cols-lg-3 row-cols-lg-2 row-cols-lg-1 mt-5" style={{ justifyContent: "center" }}>
                            <div className="listingdata">
                                {data.allListings ? data.allListings.map((item) => (
                                    <div key={item._id}>
                                        <ProductCard listing={item} />
                                    </div>
                                )) : <div style={{ color: 'red', fontSize: '20px', textAlign: 'center' }}>No data found</div>}
                            </div>
                        </div>
                    </>)}
            </ButtonContext.Provider>
        </>
    );
}

export default ListingCard;