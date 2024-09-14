import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import Layout from '../../Components/Layout/Layout';
import useFetch from '../../useFetch';
import usePost from '../../usePost';

function EditCategory() {
    const { id } = useParams();
    const BASE_URL = import.meta.env.KCLIENT_BASE_URL;
    const IMAGE_URL =import.meta.env.KCLIENT_IMAGE_URL;
    console.log(IMAGE_URL)


    const { data, error } = useFetch(`${BASE_URL}/admin/get/category/${id}`);

    const [name, setName] = useState();
    const [image, setImage] = useState(null);
    const [login, setLogin] = useState('Edit Category');
    const navigate = useNavigate();

    // Using the custom hook for POST request
    const { dataRes, isPostPending, err, postData } = usePost(`${BASE_URL}/admin/update-all/category/${id}`, true);

        // Update name when data is fetched
        useEffect(() => {
            if (data) {
                setName(data.data.category.name);
            }
        }, [data]);
    
    const handleSubmit = (e) => {
        e.preventDefault();

        // Create a FormData object
        const formData = new FormData();
        formData.append('name', name);
        if (image) {
            formData.append('image', image);
        }

        // Trigger the POST request using the postData function from the hook
        postData(formData);
    };

    // Navigate after successful submission
    useEffect(() => {
        if (dataRes && !isPostPending && !err) {
            navigate("/category");
        }
    }, [dataRes, isPostPending, err, navigate]);

    return (
        <>
            <Layout />
            <main id="main" className="main">

                <div className="pagetitle">
                    <h1>Main Category</h1>
                    <nav>
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href=" ">Home</a></li>
                            <li className="breadcrumb-item">Manage Goods</li>
                            <li className="breadcrumb-item active"><a href="">MainCategory</a></li>
                            <li className="breadcrumb-item">Edit Category </li>
                        </ol>
                    </nav>
                </div>

                <div className="col-lg-6">

                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Edit the Category below</h5>

                            <form method="POST" onSubmit={handleSubmit} encType="multipart/form-data">
                                {data ? (
                                    <div>
                                        <div className="row mb-3">
                                            <label htmlFor="inputText" className="col-sm-2 col-form-label">Name</label>
                                            <div className="col-sm-10">
                                                <input
                                                    type="text"
                                                    name="name"
                                                    className="form-control"
                                                    value={name}
                                                    onChange={(e) => setName(e.target.value)}
                                                />
                                            </div>
                                        </div>
                                        <br />
                                        <br />
                                        <br />
                                        <div className="col-sm-10">
                                            <img
                                                src={`${IMAGE_URL}/${data.data.category.image}`} // Assuming image path is correct
                                                alt={data.data.category.name}
                                                className="rounded-circle"
                                                width="200px"
                                                height="200px"
                                            />
                                        </div>
                                        <br />
                                        <br />
                                        <br />
                                        <div className="row mb-3">
                                            <label htmlFor="inputNumber" className="col-sm-2 col-form-label">Image</label>
                                            <div className="col-sm-10">
                                                <input
                                                    className="form-control"
                                                    type="file"
                                                    id="formFile"
                                                    name="image"
                                                    onChange={(e) => setImage(e.target.files[0])}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    <div className='justify-content-center align-items-center'>
                                        <div className="spinner-border" role="status">
                                            <span className="visually-hidden">Loading...</span>
                                        </div>
                                    </div>
                                )}

                                <div className="row mb-3">
                                    <div className="col-sm-10">
                                        <button
                                            className="btn btn-primary"
                                            type="submit"
                                            disabled={isPostPending}
                                        >
                                            {isPostPending ? (
                                                <div className="spinner-border" role="status">
                                                    <span className="visually-hidden">Loading...</span>
                                                </div>
                                            ) : (
                                                login
                                            )}
                                        </button>
                                    </div>
                                </div>
                            </form>

                            {err && <div className="alert alert-danger">{err}</div>}

                        </div>
                    </div>

                </div>
            </main>
        </>
    );
}

export default EditCategory;
