import React from 'react'
import Layout from '../../../Components/Layout/Layout'
import useFetch from '../../../useFetch'
import useDelete from '../../../useDelete'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';



function Admin() {
    const BASE_URL = import.meta.env.KCLIENT_BASE_URL;
    const IMAGE_URL = import.meta.env.KCLIENT_IMAGE_URL;

    // console.log(BASE_URL);
    const [loading, setLoading] = useState(false);
    const url = `${BASE_URL}/admin/get-all/admin`;
    const query = {
        perPage: '50',
        orderBy: "desc",
    };

    const { data, isPending, error } = useFetch(url, query);





    return (
        <>
            <Layout />
            <main id="main" className="main">
                <div class="pagetitle">
                    <h1>Main admin</h1>
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
                        <Link to={`/addadmin`} class="btn btn-primary">Add Admin</Link>

                        <h5 class="card-title">Manage admin</h5>

                        <table class="table table-hover">
                            <thead>
                                <tr>
                                    <th scope="col">SN</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">image</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Phone</th>
                                    <th scope="col">Location</th>
                                    <th scope="col">Role</th>

                                </tr>
                            </thead>
                            <tbody>

                                {error ? (
                                    <tr>
                                        <td colSpan="3">Error: {error}</td>
                                    </tr>
                                ) : data ? (
                                    data.results.data.map((admin, index) => (
                                        <tr key={admin.id}>
                                            <th scope="row">{index + 1}</th>
                                            <td>{admin.name}</td>
                                            <td>
                                                <img
                                                    src={`${IMAGE_URL}/${admin.image}`}
                                                    alt={admin.name}
                                                    className="rounded-circle"
                                                    width="50px" height="50px"
                                                />
                                            </td>
                                            <td>{admin.email}</td>

                                            <td>{admin.phone}</td>

                                            <td>{admin.location}</td>

                                            <td>{admin.role}</td>

                                           

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

export default Admin;
