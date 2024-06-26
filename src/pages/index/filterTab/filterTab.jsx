import { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { stringify } from 'flatted';
import ButtonContext from "../../../components/context/Buttoncontext";
import { useContext } from "react";
import ListingCard from "../listingCard/listingCard";
import { useState } from "react";

function Filtertab({ setUrl, setFormData, setTrigger }) {
    const { isButtonClicked, setIsButtonClicked } = useContext(ButtonContext);
    const [form, setForm] = useState({
        price: '',
        rating: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...form, [name]: value });
    };

    const Filterhandler = async (category) => {
        try {

            // const response = await axios.get(`http://localhost:3001/Search/${category}`);
            // if (response.status === 200) {
            setUrl(`http://localhost:3001/Search/${category.toLowerCase()}`);
            // }
        } catch (error) {
            console.error(error);
        }
    }
    const handleSubmite = async (e) => {
        e.preventDefault();
        try {

            setUrl(`http://localhost:3001/Search/filter`);
            setTrigger(prevCount => prevCount + 1);
            var myModal = new bootstrap.Modal(document.getElementById('myModal'));
            myModal.hide();

        } catch (error) {
            console.error(error);
        }
    }
    return (
        <>

            <div className="rap2">
                <div className="rap">


                    <div className="filters ">
                        <div className="filter " id="Filter">
                            <div><i className="fa-solid fa-fire "></i></div>
                            <Link onClick={() => Filterhandler("Trending")} id="Link">Trending</Link>

                        </div>
                        <div className="filter" id="Filter">
                            <div><i className="fa-solid fa-umbrella-beach"></i></div>
                            {/* <a href="/Search/beach" id="Link"></a> */}
                            <Link onClick={() => Filterhandler("Beach")} id="Link">Beach</Link>
                        </div>
                        <div className="filter" id="Filter">
                            <div><i className="fa-regular fa-snowflake"></i></div>
                            {/* <a href="/Search/arctic" id="Link">Arctic</a> */}
                            <Link onClick={() => Filterhandler("Arctic")} id="Link">Arctic</Link>

                        </div>
                        <div className="filter" id="Filter">
                            <div><i className="fa-solid fa-mountain-city"></i></div>
                            {/* <a href="/Search/mountain" id="Link">mountains</a> */}
                            <Link onClick={() => Filterhandler("mountains")} id="Link">mountains</Link>

                        </div>
                        <div className="filter" id="Filter">
                            <div><i className="fa-solid fa-campground"></i></div>
                            {/* <a href="/Search/camping" id="Link">Camping</a> */}
                            <Link onClick={() => Filterhandler("Camping")} id="Link">Camping</Link>

                        </div>
                        <div className="filter" id="Filter">
                            <div><i className="fa-solid fa-key"></i></div>
                            {/* <a href="/Search/new" id="Link">New</a> */}
                            <Link onClick={() => Filterhandler("New")} id="Link">New</Link>

                        </div>
                        <div className="filter" id="Filter">
                            <div><i className="fa-solid fa-tractor"></i></div>
                            {/* <a href="/Search/Farms" id="Link">Farms</a> */}
                            <Link onClick={() => Filterhandler("Farms")} id="Link">Farms</Link>

                        </div>
                        <div className="filter" id="Filter">
                            <div><i className="fa-solid fa-tree-city"></i></div>
                            {/* <a href="/Search/botes" id="Link">Botes</a> */}
                            <Link onClick={() => Filterhandler("Botes")} id="Link">Botes</Link>

                        </div>
                        <div className="filter" id="Filter">
                            <div><i className="fa-solid fa-ship"></i></div>
                            {/* <p style={{ margin: 0 }}>Botes</p> */}
                            <Link onClick={() => Filterhandler("Botes")} id="Link">Botes</Link>
                        </div>


                        <div className="filter" id="Filter">
                            <div><i className="fa-solid fa-tractor"></i></div>
                            <p style={{ margin: 0 }}>Farms</p>
                        </div>
                        <div className="filter" id="Filter">
                            <div><i className="fa-solid fa-tree-city"></i></div>
                            <p style={{ margin: 0 }}>Botes</p>
                        </div>
                        <div className="filter" id="Filter">
                            <div><i className="fa-solid fa-ship"></i></div>
                            <p style={{ margin: 0 }}>Botes</p>
                        </div>
                        <div className="filter" id="Filter">
                            <div><i className="fa-solid fa-tractor"></i></div>
                            <p style={{ margin: 0 }}>Farms</p>
                        </div>
                        <div className="filter" id="Filter">
                            <div><i className="fa-solid fa-tree-city"></i></div>
                            <p style={{ margin: 0 }}>Botes</p>
                        </div>
                        {/* <!-- <div className="filter" id="Filter">
                            <div><i className="fa-solid fa-ship"></i></div>
                            <p style="margin: 0;">Botes</p>
                        </div>
                        <div className="filter" id="Filter">
                            <div><i className="fa-solid fa-tractor"></i></div>
                            <p style="margin: 0;">Farms</p>
                        </div>
                        <div className="filter" id="Filter">
                            <div><i className="fa-solid fa-tree-city"></i></div>
                            <p style="margin: 0;">Botes</p>
                        </div>
                        <div className="filter" id="Filter">
                            <div><i className="fa-solid fa-ship"></i></div>
                            <p style="margin: 0;">Botes</p>
                        </div> --> */}
                        {/* <!-- 222222 --> */}

                    </div>
                    <div className="text-togule ms-auto">
                        <div className="form-check-reverse form-switch">
                            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={() => setIsButtonClicked(prevState => !prevState)} />
                            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Display total taxes</label>
                        </div>
                    </div>
                    {/* 
                    <!-- modal space  --> */}
                    <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#myModal"
                        id="filterbtn">
                        <i className="fa-solid fa-sliders" style={{ color: '#545657' }}></i>Filters</button>
                </div>
            </div>
            {/* <!-- modal --> */}
            <form on onSubmit={handleSubmite}>
                <div className="modal" tabindex="-1" id="myModal" style={{ zIndex: 1051 }}>
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Filters</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <h5>Price</h5>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="price" value="low_to_high"
                                        id="flexRadioDefault1" onChange={handleChange} />
                                    <label className="form-check-label" htmlFor="flexRadioDefault1">
                                        Low to High
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="price" value="high_to_low"
                                        id="flexRadioDefault2" onChange={handleChange} />
                                    <label className="form-check-label" htmlFor="flexRadioDefault2">
                                        High to Low
                                    </label>
                                </div>
                                <h5>Rating</h5>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="rating" value="rating_top_to_low"
                                        id="flexRadioDefault3" onChange={handleChange} />
                                    <label className="form-check-label" htmlFor="flexRadioDefault3">
                                        Top to Low
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="rating" value="rating_low_to_top"
                                        id="flexRadioDefault4" onChange={handleChange} />
                                    <label className="form-check-label" htmlFor="flexRadioDefault4">
                                        Low to Top
                                    </label>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" id="closeFilterBtn"
                                    style={{
                                        border: 'none',
                                        color: 'white',
                                        backgroundColor: '#000000',
                                        padding: '0.8rem'
                                    }}>Close</button>
                                <button type="submit" className="btn btn-primary" id="saveFilterBtn" data-bs-dismiss="modal" style={{
                                    border: 'none',
                                    color: 'white',
                                    backgroundColor: '#fe424d',
                                    padding: '0.8rem'
                                }}>Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </>
    )

}



export default Filtertab;