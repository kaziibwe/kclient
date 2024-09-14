

import { useState } from 'react';
import Layout from '../../Components/Layout/Layout';
import { useNavigate } from 'react-router-dom';
import usePost from '../../usePost';
import useFetch from '../../useFetch'


function AddStep() {
    const BASE_URL = import.meta.env.KCLIENT_BASE_URL;

    const url = `${BASE_URL}/cart/get-all/product`;

    const query = {
        perPage: '100',
        orderBy: "desc",
    };
    
    const { data, isPending, error } = useFetch(url, query);


  
    const [product_id, setproduct_id] = useState('');

    const [NameStep, setNameStep] = useState(null);
    const [login, setLogin] = useState('Add step');
    const navigate = useNavigate();


    // Using the custom hook for POST request
    const { dataRes, isPostPending, err, postData } = usePost(`${BASE_URL}/admin/post-all/step`, true);

    const handleSubmit = (e) => {
        e.preventDefault();

        // Create a FormData object
        const formData = new FormData();
        formData.append('product_id', product_id);
        formData.append('step', NameStep);
  

                postData(formData);
    };

    // Navigate after successful submission
    if (dataRes && !isPostPending && !err) {
        navigate("/step");
    }

    return (
        <>
            <Layout />
            <main id="main" className="main">
                <div className="pagetitle">
                    <h1>Main step</h1>
                    <nav>
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href=" ">Home</a></li>
                            <li className="breadcrumb-item">Manage Goods</li>
                            <li className="breadcrumb-item active"><a href="">Mainstep</a></li>
                            <li className="breadcrumb-item">Add step</li>
                        </ol>
                    </nav>
                </div>

                <div className="col-lg-6">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Add the step below</h5>

                            <form method="POST" action="" encType="multipart/form-data" onSubmit={handleSubmit}>



                                                            {/* Select product */}
                                                            <div className="row mb-3">
                                    <label htmlFor="productSelect" className="col-sm-2 col-form-label">product</label>
                                    <div className="col-sm-10">
                                        <select
                                            className="form-control"
                                            id="productSelect"
                                            value={product_id}
                                            onChange={(e) => setproduct_id(e.target.value)}
                                        >
                                            <option value="">Select product</option>
                                            {error ? (
                                                <option>Error: {error}</option>
                                            ) : isPending ? (
                                                <option>Loading categories...</option>
                                            ) : (
                                                data && data.results.data.map((product) => (
                                                    <option key={product.id} value={product.id}>
                                                        {product.name}
                                                    </option>
                                                ))
                                            )}
                                        </select>
                                    </div>
                                </div>




                                <div className="row mb-3">
                                   
                                    <div className="row mb-3">
                                        <label htmlFor="inputNumber" className="col-sm-2 col-form-label">Step</label>
                                        <div className="col-sm-10">
                                            <input
                                                className="form-control"
                                                type="text"
                                                id="formFile"
                                                name="NameStep"
                                                onChange={(e) => setNameStep(e.target.value)}
                                            />
                                        </div>
                                    </div>



                                </div>

                                <div className="row mb-3">
                                    <div className="col-sm-10">
                                        <button className="btn btn-primary" type="submit" disabled={isPostPending}>
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

export default AddStep; // Make sure you have this default export
