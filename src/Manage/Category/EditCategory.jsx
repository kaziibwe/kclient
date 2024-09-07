import { React, useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import Layout from '../../Components/Layout/Layout'
import useFetch from '../../useFetch'


function EditCategory() {
    const { id } = useParams();
    const { data,error} = useFetch(`http://127.0.0.1:8000/api/v1/admin/get/category/${id}`);

    const url = 'http://127.0.0.1:8000/api/v1/admin/post-all/category';

    // Create a FormData object to hold the data
    const formData = new FormData();
    formData.append('name', name); // Append the name field
    formData.append('image', image);

    // login='add Category'


   const { } = use(url,e,formData);

   console.log(data)
   
   return (
        <>
            <Layout />
            <main id="main" className="main">

                <div class="pagetitle">
                    <h1>Main Category</h1>
                    <nav>
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><a href=" ">Home</a></li>
                            <li class="breadcrumb-item">Manage Goods</li>
                            <li class="breadcrumb-item active"><a href="">MainCategory</a></li>
                            <li class="breadcrumb-item">Edit Category </li>

                        </ol>
                    </nav>
                </div>

                <div class="col-lg-6">

                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">Edit the Category below</h5>

                            <form method="POST" action="" enctype="multipart/form-data"   >

                                {data ? (
                                    <div>
                                       

                                  <div class="row mb-3">
                                    <label for="inputText" class="col-sm-2 col-form-label">Name</label>
                                    <div class="col-sm-10">
                                        <input type="text" name="name" class="form-control" value={data.data.category.name} onChange={(e) => setName(e.target.value)}

                                        />

                                    </div>
                                    <br /> <br /> <br />

                                    <div class="col-sm-10">

                                    <img
                                            src={`http://127.0.0.1:8000/storage/${data.data.category.image}`} // Assuming image path is correct
                                            alt={data.name}
                                            className="rounded-circle"
                                            width="200px"
                                            height="200px"
                                        /> </div> <br /> <br /> <br />
                                    <div class="row mb-3">
                                        <label for="inputNumber" class="col-sm-2 col-form-label">Image</label>
                                        <div class="col-sm-10">
                                            <input class="form-control" type="file" id="formFile" name="image" onChange={(e) => setImage(e.target.value)}

                                            />
                                        </div>
                                    </div>
                                </div>
                                    </div>
                                ) : (
                                    <div className=' justify-content-center align-items-center'>
                                    <div class="spinner-border  " role="status">
                                        <span class="visually-hidden">Loading...</span>
                                    </div>
                                </div>                 
                               )}


                            


                                <div class="row mb-3">
                                    <div class="col-sm-10">
                                        <button className="btn btn-primary " type="submit">{isPending? 
                          
                          isPending &&  
                              <div class="spinner-border" role="status">
                              <span class="visually-hidden">Loading...</span>
                            </div>
                            :login}</button>

                                    </div>
                                </div>

                            </form>

                        </div>
                    </div>

                </div>
            </main>
        </>
    )
}

export default EditCategory
