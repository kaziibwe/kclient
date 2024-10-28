import { useState } from 'react';
import Layout from '../../../Components/Layout/Layout';
import { useNavigate } from 'react-router-dom';
import usePost from '../../../usePost';

function AddAdmin() {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [role, setRole] = useState('admin');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const [location, setLocation] = useState('');



    const [image, setImage] = useState(null);
    const [login, setLogin] = useState('Add Admin');
    const navigate = useNavigate();

    // Using the custom hook for POST request
    const BASE_URL = import.meta.env.KCLIENT_BASE_URL;

    const { dataRes, isPostPending, err, postData } = usePost(`${BASE_URL}/admin/post-all/admin`, true);

    const handleSubmit = (e) => {
        e.preventDefault();

        // Create a FormData object
        const formData = new FormData();
        formData.append('name', name);
        formData.append('email', email);
        formData.append('phone', phone);
        formData.append('role', role);
        formData.append('location', location);
        formData.append('password', password);


        formData.append('image', image);

        // Trigger the POST request using the postData function from the hook
        // console data in the form data
        // for (let [key, value] of formData.entries()) {
        //     console.log(`${key}: ${value}`);
        // }
        postData(formData);
    };

    // Navigate after successful submission
    if (dataRes && !isPostPending && !err) {
        navigate("/admin");
    }

    return (
        <>
            <Layout />
            <main id="main" className="main">
                <div className="pagetitle">
                    <h1>Main admin</h1>
                    <nav>
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href=" ">Home</a></li>
                            <li className="breadcrumb-item">Manage Goods</li>
                            <li className="breadcrumb-item active"><a href="">MainAdmin</a></li>
                            <li className="breadcrumb-item">Add Admin</li>
                        </ol>
                    </nav>
                </div>

                <div className="col-lg-6">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Add the Admin below</h5>

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

                                    <div className="row mb-3">
                                        <label htmlFor="inputNumber" className="col-sm-2 col-form-label">Location</label>
                                        <div className="col-sm-10">
                                            <input
                                                className="form-control"
                                                type="text"
                                                id="formFile"
                                                name={location}
                                                onChange={(e) => setLocation(e.target.value)}
                                            />
                                        </div>
                                    </div>



                                    <div className="row mb-3">
                                        <label htmlFor="inputNumber" className="col-sm-2 col-form-label">Email</label>
                                        <div className="col-sm-10">
                                            <input
                                                className="form-control"
                                                type="text"
                                                id="formFile"
                                                name={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                            />
                                        </div>
                                    </div>



                                    <div className="row mb-3">
                                        <label htmlFor="categorySelect" className="col-sm-2 col-form-label">Role</label>
                                        <div className="col-sm-10">
                                            <select
                                                className="form-control"
                                                id="categorySelect"
                                                name="role"  // Name should be a string representing the field name
                                                value={role}  // Controlled component, `value` is tied to state
                                                onChange={(e) => setRole(e.target.value)}  // Updates state when value changes
                                            >
                                                <option value="admin">Admin</option>
                                                <option disabled value="other">Other</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <label htmlFor="categorySelect" className="col-sm-2 col-form-label">Phone</label>
                                        <div className="col-sm-10">
                                            <input
                                                className="form-control"
                                                type="text"
                                                id="formFile"
                                                name={phone}
                                                onChange={(e) => setPhone(e.target.value)}
                                            />
                                        </div>
                                    </div>

                                    <div className="row mb-3">
                                        <label htmlFor="inputNumber" className="col-sm-2 col-form-label">Password</label>
                                        <div className="col-sm-10">
                                            <input
                                                className="form-control"
                                                type="text"
                                                id="formFile"
                                                name={password}
                                                onChange={(e) => setPassword(e.target.value)}
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

export default AddAdmin;