import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../../Components/Layout/Layout';
import { useNavigate, useParams } from "react-router-dom";
import useFetch from '../../useFetch';
import usePost from '../../usePost';



function EditProduct() {

    const IMAGE_URL =import.meta.env.KCLIENT_IMAGE_URL;

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    const [price, setPrice] = useState('');
    const [discount, setDiscount] = useState('');
    const [active, setActive] = useState('');
    const [featured, setFeatured] = useState('');
    // const [category_id, setCategory_id] = useState('');

    const [image, setImage] = useState(null);
    const [login, setLogin] = useState('Edit product');
    const navigate = useNavigate();


    const { id } = useParams();
    const BASE_URL = import.meta.env.KCLIENT_BASE_URL;

  
    const { data: product, error } = useFetch(`${BASE_URL}/admin/get/product/${id}`);

    // console.log(product.data.product)
        const [category_id, setCategory_id] = useState('');
        
        useEffect(() => {
          if (product && product.data.product.category_id) {
            setCategory_id(product.data.product.category_id);
            setName(product.data.product.name);
            setDescription(product.data.product.description);
            setPrice(product.data.product.price);
            setDiscount(product.data.product.discount);
          }
        }, [product]);

        

    const url = `${BASE_URL}/admin/get-all/category`;

    const query = {
        perPage: '100',
        orderBy: "desc",
    };

    const { data:category, isPending } = useFetch(url, query);




    // Using the custom hook for POST request
    const { dataRes, isPostPending, err, postData } = usePost(`${BASE_URL}/admin/update-all/product/${id}`, true);

    const handleSubmit = (e) => {
        e.preventDefault();

        // Create a FormData object
        const formData = new FormData();
        formData.append('name', name);
        formData.append('category_id', category_id);
        formData.append('description', description);
        if (image) {
            formData.append('image', image);
        }
                formData.append('price', price);
        formData.append('discount', discount);
        formData.append('active', active);
        formData.append('featured', featured);

        // Trigger the POST request using the postData function from the hook
        //   for (let [key, value] of formData.entries()) {
        //             console.log(`${key}: ${value}`);
        //           }
        postData(formData);
    };

    // Navigate after successful submission
    if (dataRes && !isPostPending && !err) {
        navigate("/product");
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



                                {/* Select Category */}
                                <div className="row mb-3">
                                    <label htmlFor="categorySelect" className="col-sm-2 col-form-label">Category</label>
                                    <div className="col-sm-10">
                                    <select
    className="form-select"
    id="categorySelect"
    name="category_id"
    value={category_id} // This ensures the correct category is selected
    onChange={(e) => setCategory_id(e.target.value)}
>
    <option value="">Select the Category</option>
    {error ? (
        <option>Error: {error}</option>
    ) : isPending ? (
        <option>Loading categories...</option>
    ) : (
        category && category.results.data.length > 0 ? (
            category.results.data.map((category) => (
                <option
                    key={category.id}
                    value={category.id}
                >
                    {category.name}
                </option>

                
            ))
        ) : (
            <option>No Categories Found</option>
        )
    )}
</select>
                                    </div>
                                </div>


                                {product ? (
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
                                        <br /><br /><br />

                                        <div className="col-sm-10">
                                            <img
                                                src={`${IMAGE_URL}/${product.data.product.image}`} // Assuming image path is correct
                                                alt={product.data.product.name}
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


                                        <div className="row mb-3">
                                            <label htmlFor="inputNumber" className="col-sm-2 col-form-label">Price</label>
                                            <div className="col-sm-10">
                                                <input
                                                    className="form-control"
                                                    type="number"
                                                    id="name"
                                                    // value={price}
                                                    value={price}

                                                    onChange={(e) => setPrice(e.target.value)}
                                                />
                                            </div>
                                        </div>

                                        <div className="row mb-3">
                                            <label htmlFor="inputNumber" className="col-sm-2 col-form-label">Discount</label>
                                            <div className="col-sm-10">
                                                <input
                                                    className="form-control"
                                                    type="number"
                                                    id="name"
                                                    // value={discount}
                                                    value={discount}

                                                    onChange={(e) => setDiscount(e.target.value)}
                                                />
                                            </div>
                                        </div>

                                        {/* <div className="row mb-3">
                                       <label htmlFor="inputNumber" className="col-sm-2 col-form-label">Active</label>
                                       <div className="col-sm-10">
                                           <input
                                               className="form-control"
                                               type="text"
                                               id="name"
                                               value={active}
                                               onChange={(e) => setActive(e.target.value)}
                                           />
                                       </div>
                                   </div>

                                   <div className="row mb-3">
                                       <label htmlFor="inputNumber" className="col-sm-2 col-form-label">Featured</label>
                                       <div className="col-sm-10">
                                           <input
                                               className="form-control"
                                               type="text"
                                               id="name"
                                               value={featured}
                                               onChange={(e) => setFeatured(e.target.value)}
                                           />
                                       </div>
                                   </div> */}


                                        <div className="row mb-3">
                                            <label htmlFor="inputNumber" className="col-sm-2 col-form-label">Description</label>
                                            <div className="col-sm-10">
                                                <textarea
                                                    className="form-control"
                                                    type="text"
                                                    id="name"
                                                    // value={description}
                                                    value={description}

                                                    onChange={(e) => setDescription(e.target.value)}
                                                ></textarea>
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

export default EditProduct


