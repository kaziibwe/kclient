import React, { useContext, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { AppContext } from "../Contex/AppContext";
import Error from '../Components/Messages/Error';
import { flushSync } from 'react-dom';


const Login = () => {

  const { token, setToken } = useContext(AppContext);

  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(false);
  const [login, setLogin] = useState('login');



  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const navigate = useNavigate()

  axios.defaults.withCredentials = true;
  const handleSubmit = (e) => {
    e.preventDefault()
    setIsPending(true)
    axios.post('/api/adminlogin', { email, password })
      .then(res => {
        // console.log(res.data)
        // console.log(res.data.access_token)
        if (res.data) {
          setIsPending(false)
          localStorage.setItem("access_token", res.data.access_token);
          setToken(res.data.access_token);
          navigate("/")
        } else {
          navigate("/login")
        }
      })
      .catch(err => {
        console.log('not auth');

        setError('Incorect username or password')
        setIsPending(false)

        setTimeout(()=>{
          setError(false)
        },5000)

      })
  }
  return (
    <>
      <main>
        <div className="container">


        




          {/* <div class="alert alert-success bg-success text-light border-0 alert-dismissible fade show" role="alert">
            Not auth
            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="alert" aria-label="Close"></button>
          </div> */}

          <section className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">

                  <div className="d-flex justify-content-center py-4">
                    <a href="index.html" className="logo d-flex align-items-center w-auto">
                      <img src="assets/img/logo.png" alt="" />
                      <span className="d-none d-lg-block">NiceAdmin</span>
                    </a>
                  </div>

                  <div className="card mb-3">

                    <div className="card-body">

                      <div className="pt-4 pb-2">
                        <h5 className="card-title text-center pb-0 fs-4">Login to Your Account</h5>
                        <p className="text-center small">Enter your username & password to login</p>
                      </div>

                      <form className="row g-3 needs-validation" novalidate onSubmit={handleSubmit}>

                        <div className="col-12">
                          <label for="yourUsername" className="form-label">Username</label>
                          <div className="input-group has-validation">
                            <input type="text" name="username" className="form-control" id="yourUsername" required onChange={(e) => setEmail(e.target.value)} />
                            <div className="invalid-feedback">Please enter your username.</div>
                          </div>
                        </div>

                        <div className="col-12">
                          <label for="yourPassword" className="form-label">Password</label>
                          <input type="password" name="password" className="form-control" id="yourPassword" required onChange={(e) => setPassword(e.target.value)} />
                          <div className="invalid-feedback">Please enter your password!</div>
                        </div>
                       {/* <Error error={error}/> */}
                       {error &&
        <div class="alert alert-danger bg-danger text-light border-0 alert-dismissible fade show" role="alert">
          {error}
          <button type="button" class="btn-close btn-close-white" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>

      }
                        <div className="col-12">
                          <button className="btn btn-primary w-100" type="submit">{isPending? 
                          
                        isPending &&  
                            <div class="spinner-border" role="status">
                            <span class="visually-hidden">Loading...</span>
                          </div>
                          :login}</button>

                      
                         


                        </div>
                        <div className="col-12">
                          <p className="small mb-0">Don't have account? <a href="pages-register.html">Create an account</a></p>
                        </div>
                      </form>

                    </div>
                  </div>

                  <div className="credits">

                    Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
                  </div>

                </div>
              </div>
            </div>

          </section>

        </div>
      </main>

      <a href="#" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short"></i></a>
    </>
  );
}

export default Login;