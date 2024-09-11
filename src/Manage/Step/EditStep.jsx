import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../../Components/Layout/Layout';
import { useNavigate, useParams } from "react-router-dom";
import useFetch from '../../useFetch';
import usePost from '../../usePost';



function EditStep() {

    const IMAGE_URL =import.meta.env.KCLIENT_IMAGE_URL;

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    const [price, setPrice] = useState('');
    const [discount, setDiscount] = useState('');
    const [active, setActive] = useState('');
    const [featured, setFeatured] = useState('');
    // const [product_id, setproduct_id] = useState('');

    const [image, setImage] = useState(null);
    const [login, setLogin] = useState('Edit ProductGallary');
    const navigate = useNavigate();


    const { id } = useParams();
    const BASE_URL = import.meta.env.KCLIENT_BASE_URL;

  
    const { data: ProductGallary, error } = useFetch(`${BASE_URL}/cart/get/ProductGallary/${id}`);

    // console.log(product.data.product)
    const [product_id, setProduct_id] = useState('');
        
    useEffect(() => {
      if (ProductGallary && ProductGallary.data.ProductGallary.product_id) {
        setProduct_id(ProductGallary.data.ProductGallary.product_id);
       
      }
    }, [ProductGallary]);

        

    const url = `${BASE_URL}/cart/get-all/product`;

    const query = {
        perPage: '100',
        orderBy: "desc",
    };

    const { data:product, isPending } = useFetch(url, query);




    // Using the custom hook for POST request
    const { dataRes, isPostPending, err, postData } = usePost(`${BASE_URL}/admin/update-all/ProductGallary/${id}`, true);

    const handleSubmit = (e) => {
        e.preventDefault();

        // Create a FormData object
        const formData = new FormData();
        formData.append('product_id', product_id);
        if (image) {
            formData.append('image', image);
        }
       

        // Trigger the POST request using the postData function from the hook
          for (let [key, value] of formData.entries()) {
                    console.log(`${key}: ${value}`);
                  }
        postData(formData);
    };

    // Navigate after successful submission
    if (dataRes && !isPostPending && !err) {
        navigate("/ProductGallary");
    }

    return (
        <>
            <Layout />
            <main id="main" className="main">
                <div className="pagetitle">
                    <h1>Main Product</h1>
                    <nav>
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href=" ">Home</a></li>
                            <li className="breadcrumb-item">Manage Goods</li>
                            <li className="breadcrumb-item active"><a href="">MainProduct</a></li>
                            <li className="breadcrumb-item">Add Product</li>
                        </ol>
                    </nav>
                </div>

                <div className="col-lg-6">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Add the Product below</h5>

                            <form method="POST" action="" encType="multipart/form-data" onSubmit={handleSubmit}>



                                {/* Select product */}
                                <div className="row mb-3">
                                    <label htmlFor="productSelect" className="col-sm-2 col-form-label">product</label>
                                    <div className="col-sm-10">
                                    <select
    className="form-select"
    id="productSelect"
    name="product_id"
    value={product_id} // This ensures the correct product is selected
    onChange={(e) => setProduct_id(e.target.value)}
>
    <option value="">Select the product</option>
    {error ? (
        <option>Error: {error}</option>
    ) : isPending ? (
        <option>Loading categories...</option>
    ) : (
        product && product.results.data.length > 0 ? (
            product.results.data.map((product) => (
                <option
                    key={product.id}
                    value={product.id}
                >
                    {product.name}
                </option>

                
            ))
        ) : (
            <option>No Categories Found</option>
        )
    )}
</select>
                                    </div>
                                </div>


                                {ProductGallary ? (
                                    <div className="row mb-3">
                                     
                                        <br/> <br /><br />

                                        <div className="col-sm-10">
                                            <img
                                                src={`${IMAGE_URL}/${ProductGallary.data.ProductGallary.image}`} // Assuming image path is correct
                                                alt={ProductGallary.data.ProductGallary.name}
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
    )
}

export default EditStep ;



