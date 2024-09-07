import { useState, useEffect } from 'react';
import Layout from '../../Components/Layout/Layout'
import {usePost} from '../../useFetch'
import { useNavigate  } from 'react-router-dom'



function AddCategory() {

    const [name, setName] = useState('');
    const [image, setImage] = useState(null);

    // Create a FormData object
    const formData = new FormData();
    formData.append('name', name);
    formData.append('image', image);

    // Use the reusable usePost hook
    const url = 'http://127.0.0.1:8000/api/v1/admin/post-all/category';
    const { data, isPending, error, handleSubmit } = usePost(url, formData);


    // const [isPending, setIsPending] = useState(false);
    // const [error, setError] = useState(false);
    // const [login, setLogin] = useState('Add Category');

    // const [name, setName] = useState('');
    // const [image, setImage] = useState(null); // Use null for image file initially
    // const navigate = useNavigate()



    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     setIsPending(true)

    //     // Create a FormData object to hold the data
    //     const formData = new FormData();
    //     formData.append('name', name); // Append the name field
    //     formData.append('image', image);
    //     // Fetching data from an API
    //     fetch('http://127.0.0.1:8000/api/v1/admin/post-all/category', {
    //         method: 'POST', // Specify the method
    //         headers: {
    //             // 'Content-Type': 'application/json', // Ensure you're sending JSON
    //             // 'Authorization': `Bearer ${localStorage.getItem('token')}`
    //             Accept:'application/json'
    //             //   Authorization: 'Bearer YOUR_ACCESS_TOKEN', // Add a barrier token (if required)
    //         },
    //         body: formData, // Use FormData as the body, no need to stringify
    //     }
    //     )
    //         .then((response) => {
    //             if (!response.ok) {
    //                 throw new Error(`HTTP error! status: ${response.status}`);
    //             }
    //             console.log('Response:', response); // Log the full response object
    //             return response.json(); // Parse the JSON from the response
    //         })
    //         .then((data) => {
    //             setIsPending(false)
    //             navigate("/category")
             
    //         })
    //         .catch((error) => {
    //             setIsPending(false)

    //             console.error('Error:', error); // Log the error
    //             setError(error.message); // Set the state with error message
    //         });
    //     };



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
                                <li class="breadcrumb-item">Add Category </li>

                            </ol>
                        </nav>
                    </div>

                    <div class="col-lg-6">

                        <div class="card">
                            <div class="card-body"> 
                                <h5 class="card-title">Add the Category below</h5>

                                <form method="POST" action="" enctype="multipart/form-data"   onSubmit={handleSubmit}>

                                    <div class="row mb-3">
                                        <label for="inputText" class="col-sm-2 col-form-label">Name</label>
                                        <div class="col-sm-10">
                                            <input type="text" name="name" class="form-control" value={name}
                                              onChange={(e) => setName(e.target.value)}/>

                                        </div>
                                        <br /> <br /> <br />
                                        <div class="row mb-3">
                                            <label for="inputNumber" class="col-sm-2 col-form-label">Image</label>
                                            <div class="col-sm-10">
                                                <input class="form-control" type="file" id="formFile" name="image"
                                                     onChange={(e) => setImage(e.target.files[0])}  />
                                            </div>
                                        </div>
                                    </div>


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

    export default AddCategory
