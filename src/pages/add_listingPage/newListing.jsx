import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function NewListing() {
    const [username, setUsername] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            const user = JSON.parse(storedUser);
            setUsername(user.username);
        } else {
            navigate('/login');
        }
    }, [history]);


    return (
        <>
            <div class="row">
                <div class="col-8 offset-2">
                    <h2>Create new Listing</h2>
                    <form action="/listings/new?_method=PUT" method="POST" novalidate class="needs-validation"
                        enctype="multipart/form-data">
                        <div class="mb-3" id="mb-3">
                            <label htmlFor="title" class="form-label">Title</label>
                            <input type="text" class="form-control" required placeholder="Title" name="title" />
                            <div class="valid-feedback">
                                Looks good!
                            </div>
                        </div>

                        <div class="mb-3" id="mb-3">
                            <label htmlFor="image" class="form-label">Image</label>
                            <input type="file" class="form-control" placeholder="Image link/url" name="image" required />
                        </div>
                        <div class="mb-3" id="mb-3">
                            <label htmlFor="description" class="form-label">Description</label>
                            <textarea class="form-control" placeholder="Description" name="description" cols="10" rows="5"
                                required></textarea>
                        </div>

                        <div class="row mb-3" id="mb-3">
                            <div class="col-md-4">
                                <label htmlFor="price" class="form-label">Price</label>
                                <input type="number" class="form-control" placeholder="Price" name="price" required />
                                <div class="invalid-feedback">
                                    Please enter a valid Price.
                                </div>
                            </div>

                            <div class="col-md-8" id="mb-3">
                                <label htmlFor="country" class="form-label">Country</label>
                                <input type="text" class="form-control" placeholder="Country" name="country" required />
                                <div class="invalid-feedback">
                                    Please enter a valid Country.
                                </div>
                            </div>

                        </div>

                        <div class="mb-3" id="mb-3">
                            <label htmlFor="location" class="form-label">Location</label>
                            <input type="text" class="form-control" placeholder="Location" name="location" required />
                            <div class="invalid-feedback">
                                Please enter a valid Location.
                            </div>
                        </div>

                        <button class="btn btn-dark mb-2">Add</button>
                    </form>
                </div>
            </div>

        </>
    );

}


export default NewListing;