import React from 'react'
import useFetch from '../../useFetch'
import useDelete from '../../useDelete';
import Layout from '../../Components/Layout/Layout'
import { Link } from 'react-router-dom';


function Product() {
    const BASE_URL = import.meta.env.KCLIENT_BASE_URL;
    const IMAGE_URL =import.meta.env.KCLIENT_IMAGE_URL;


    const url = `${BASE_URL}/cart/get-all/product`;

    const query = {
        perPage: '20',
        orderBy: "desc",  
    };

    const { data,isPending,error} = useFetch(url,query);



    const deleteUrl = `${BASE_URL}/admin/delete/product`; // The base URL for deleting categories
    const { dataRes, isDeletePending, err, deleteData } = useDelete(deleteUrl); // Using useDelete hook
    const handleDelete = async (id) => {
        if (!window.confirm("Are you sure you want to delete this item?")) return;
        await deleteData(id);
        window.location.reload()

    };

  return (
    <>
    <Layout/>
    <main id="main" className="main">
                <div class="pagetitle">
                    <h1>Main product</h1>
                    <nav>
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><a href="">Home</a></li>
                            <li class="breadcrumb-item">Manage Goods</li>
                            <li class="breadcrumb-item active">product</li>
                        </ol>
                    </nav>
                </div>
                <div class="card">
                    <div class="card-body"> <br />
                        <Link to={`/addproduct`} class="btn btn-primary">Add product</Link>

                        <h5 class="card-title">Manage product</h5>

                        <table class="table table-hover">
                            <thead>
                                <tr>
                                    <th scope="col">SN</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">image</th>
                                    <th scope="col">Price</th>
                                    <th scope="col">Discount</th>
                                    <th scope="col">Active</th>
                                    <th scope="col">Featured</th>
                                    <th scope="col">Manage</th>
                                </tr>
                            </thead>
                            <tbody>

                                {error ? (
                                    <tr>
                                        <td colSpan="3">Error: {error}</td>
                                    </tr>
                                ) : data ? (
                                    data.results.data.map((product, index) => (
                                        <tr key={product.id}>
                                            <th scope="row">{index + 1}</th>
                                            <td>{product.name}</td>
                                            <td>
                                                <img
                                                    src={`${IMAGE_URL}/${product.image}`}
                                                    alt={product.name}
                                                    className="rounded-circle"
                                                    width="50px" height="50px"
                                                />
                                            </td>
                                            <td>{product.price}</td>
                                            <td>{product.discount}</td>
                                            <td>{product.active}</td>
                                            <td>{product.featured}</td>
                                           

                                            <td>

                                                <Link to={`/editproduct/${product.id}`} class="btn btn-success">Edit</Link>

                                            </td>
                                            <td>

                                            <button
                                                    className="btn btn-danger"
                                                    onClick={() => handleDelete(product.id)}
                                                    disabled={isDeletePending}
                                                >
                                                    Delete
                                                </button>
                                                {err && <span className="text-danger">{err}</span>}


                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <div className=' justify-content-center align-items-center'>
                                        <div class="spinner-border  " role="status">
                                            <span class="visually-hidden">Loading...</span>
                                        </div>
                                    </div>

                                )}

                            </tbody>
                        </table>
                    </div>
                </div>
            </main>
      
    </>
  )
}

export default Product
