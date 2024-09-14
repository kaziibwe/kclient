import React from 'react'
import Layout from '../../../Components/Layout/Layout'
import useFetch from '../../../useFetch'
import useDelete from '../../../useDelete'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';



function Derivaryman() {
    const BASE_URL = import.meta.env.KCLIENT_BASE_URL;
    const IMAGE_URL = import.meta.env.KCLIENT_IMAGE_URL;

    // console.log(BASE_URL);
    const [loading, setLoading] = useState(false);
    const url = `${BASE_URL}/admin/get-all/delivaryman`;
    const query = {
        perPage: '50',
        orderBy: "desc",
    };

    const { data, isPending, error } = useFetch(url, query);



    // // console.log(data) 
    const deleteUrl = `${BASE_URL}/admin/delete/delivaryman`; // The base URL for deleting categories
    const { dataRes, isDeletePending, err, deleteData } = useDelete(deleteUrl); // Using useDelete hook
    const handleDelete = async (id) => {
        if (!window.confirm("Are you sure you want to delete this item?")) return;
        await deleteData(id);
        window.location.reload()

    };

    return (
        <>
            <Layout />
            <main id="main" className="main">
                <div class="pagetitle">
                    <h1>Main derivaryman</h1>
                    <nav>
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><a href="">Home</a></li>
                            <li class="breadcrumb-item">Manage Goods</li>
                            <li class="breadcrumb-item active"><A:blank></A:blank>dmin</li>
                        </ol>
                    </nav>
                </div>
                <div class="card">
                    <div class="card-body"> <br />
                        <Link to={`/addderivaryman`} class="btn btn-primary">Add derivaryman</Link>

                        <h5 class="card-title">Manage derivaryman</h5>

                        <table class="table table-hover">
                            <thead>
                                <tr>
                                    <th scope="col">SN</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">image</th>
                                    <th scope="col">NI_Front</th>
                                    <th scope="col">NI_Back</th>
                                    <th scope="col">Nin</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Phone</th>
                                    <th scope="col">Location</th>
                                    <th scope="col">Manage</th>

                                </tr>
                            </thead>
                            <tbody>

                                {error ? (
                                    <tr>
                                        <td colSpan="3">Error: {error}</td>
                                    </tr>
                                ) : data ? (
                                    data.results.data.map((derivaryman, index) => (
                                        <tr key={derivaryman.id}>
                                            <th scope="row">{index + 1}</th>
                                            <td>{derivaryman.name}</td>
                                            <td>
                                                <img
                                                    src={`${IMAGE_URL}/${derivaryman.image}`}
                                                    alt={derivaryman.name}
                                                    className="rounded-circle"
                                                    width="50px" height="50px"
                                                />
                                            </td>

                                            <td>
                                                <img
                                                    src={`${IMAGE_URL}/${derivaryman.nin_front_image}`}
                                                    alt={derivaryman.name}
                                                    className="rounded-circle"
                                                    width="50px" height="50px"
                                                />
                                            </td>

                                            <td>
                                                <img
                                                    src={`${IMAGE_URL}/${derivaryman.nin_back_image}`}
                                                    alt={derivaryman.name}
                                                    className="rounded-circle"
                                                    width="50px" height="50px"
                                                />
                                            </td>

                                            <td>{derivaryman.nin}</td>

                                            <td>{derivaryman.email}</td>

                                            <td>{derivaryman.phone}</td>

                                            <td>{derivaryman.location}</td>


                                            <td>

                                                <button
                                                    className="btn btn-danger"
                                                    onClick={() => handleDelete(derivaryman.id)}
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

export default Derivaryman;
