import React from 'react'
import useFetch from '../../useFetch'
import useDelete from '../../useDelete';
import Layout from '../../Components/Layout/Layout'
import { Link } from 'react-router-dom';


function Step() {
    const BASE_URL = import.meta.env.KCLIENT_BASE_URL;
    const IMAGE_URL =import.meta.env.KCLIENT_IMAGE_URL;


    const url = `${BASE_URL}/cart/get-all/step`;

    const query = {
        perPage: '50',
        orderBy: "desc",  
    };

    const { data,isPending,error} = useFetch(url,query);



    const deleteUrl = `${BASE_URL}/admin/delete/step`; // The base URL for deleting categories
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
                    <h1>Main step</h1>
                    <nav>
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><a href="">Home</a></li>
                            <li class="breadcrumb-item">Manage Goods</li>
                            <li class="breadcrumb-item active">step</li>
                        </ol>
                    </nav>
                </div>
                <div class="card">
                    <div class="card-body"> <br />
                        <Link to={`/addstep`} class="btn btn-primary">Add step</Link>

                        <h5 class="card-title">Manage step</h5>

                        <table class="table table-hover">
                            <thead>
                                <tr>
                                    <th scope="col">SN</th>
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
                                    data.results.data.map((product, index) => (
                                        <tr key={product.id}>
                                            <th scope="row">{index + 1}</th>
                                            <td>
                                              { product.step }
                                            </td>
                                           
                                           

                                            <td>

                                                <Link to={`/editstep/${product.id}`} class="btn btn-success">Edit</Link>

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

export default Step
