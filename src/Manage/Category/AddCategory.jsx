import { useState } from 'react';
import Layout from '../../Components/Layout/Layout';
import { useNavigate } from 'react-router-dom';
import usePost from '../../usePost';

function AddCategory() {
    const [name, setName] = useState('');
    const [image, setImage] = useState(null);
    const [login, setLogin] = useState('Add Category');
    const navigate = useNavigate();

    // Using the custom hook for POST request
    const BASE_URL = import.meta.env.KCLIENT_BASE_URL;

    const { dataRes, isPostPending, err, postData } = usePost(`${BASE_URL}/admin/post-all/category`, true);

    const handleSubmit = (e) => {
        e.preventDefault();

        // Create a FormData object
        const formData = new FormData();
        formData.append('name', name);
        formData.append('image', image);

        // Trigger the POST request using the postData function from the hook
        // console data in the form data
        // for (let [key, value] of formData.entries()) {
        //     console.log(`${key}: ${value}`);
        //   }
        postData(formData);
    };

    // Navigate after successful submission
    if (dataRes && !isPostPending && !err) {
        navigate("/category");
    }

    return (
        <>
            <Layout />
            <main id="main" className="main">
                <div className="pagetitle">
                    <h1>Main Category</h1>
                    <nav>
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href=" ">Home</a></li>
                            <li className="breadcrumb-item">Manage Goods</li>
                            <li className="breadcrumb-item active"><a href="">MainCategory</a></li>
                            <li className="breadcrumb-item">Add Category</li>
                        </ol>
                    </nav>
                </div>

                <div className="col-lg-6">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Add the Category below</h5>

                            <form method="POST" action="" encType="multipart/form-data" onSubmit={handleSubmit}>
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

export default AddCategory;
