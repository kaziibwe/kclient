import React from 'react'
import Layout from '../../Components/Layout/Layout'
import useFetch from '../../useFetch'
// import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


function Category() {

    const url = 'http://127.0.0.1:8000/api/v1/admin/get-all/category';

    const query = {
        perPage: '3',
        orderBy: "desc",  
    };
    const DataToSend=null;

    const { data,isPending,error} = useFetch(url,query);

    console.log(data)



    return (
        <>
            <Layout />
            <main id="main" className="main">
                <div class="pagetitle">
                    <h1>Main product</h1>
                    <nav>
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><a href="">Home</a></li>
                            <li class="breadcrumb-item">Manage Goods</li>
                            <li class="breadcrumb-item active">Category</li>
                        </ol>
                    </nav>
                </div>
                <div class="card">
                    <div class="card-body"> <br />
                        <Link to={`/addcategory`} class="btn btn-primary">Add product</Link>

                        <h5 class="card-title">Manage product</h5>

                        <table class="table table-hover">
                            <thead>
                                <tr>
                                    <th scope="col">SN</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">image</th>
                                    <th scope="col">Manage</th>
                                </tr>
                            </thead>
                            <tbody>


                             


                                {error ? (
                                    <tr>
                                        <td colSpan="3">Error: {error}</td>
                                    </tr>
                                ) : data ? (
                                    data.results.data.map((category, index) => (
                                        <tr key={category.id}>
                                            <th scope="row">{index + 1}</th>
                                            <td>{category.name}</td>
                                            <td>
                                                <img
                                                    src={`http://127.0.0.1:8000/storage/${category.image}`}
                                                    alt={category.name}
                                                    className="rounded-circle"
                                                    width="50px" height="50px"
                                                />
                                            </td>

                                            <td>

                                                <Link to={`/editcategory/${category.id}`} class="btn btn-success">Edit</Link>

                                            </td>
                                            <td>

                                                <form method="post" >
                                                    <button type="submit" class="btn btn-danger">Delete</button>
                                                </form>


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

export default Category
