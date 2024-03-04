import React from 'react'
import classes from './login.module.css'

const Login = () => {
  return (
    <div>
        <div class="row align-items-center vh-100 bg-dark">
        <div class="col-md-3 mx-auto">
        <div class="card">
            <img class="card-img-top" src="https://i.imgflip.com/c68m9.jpg" alt="Title" />
            <div class="card-body text-center">
                
                <p class="card-text text-center">Login here</p>
                <form class="mt-3">
                    <div class="mb-3">
                        <label for="" class="form-label">Email</label>
                        <input
                            type="text"
                            class="form-control"
                            name=""
                            id=""
                            aria-describedby="helpId"
                            placeholder=""
                        />
                        <small id="helpId" class="form-text text-muted">Help text</small>
                    </div>

                    <div class="mb-3">
                        <label for="" class="form-label">Password</label>
                        <input
                            type="password"
                            class="form-control"
                            name=""
                            id=""
                            aria-describedby="helpId"
                            placeholder=""
                        />
                        <small id="helpId" class="form-text text-muted">Help text</small>
                    </div>
                    <button class="btn btn-dark w-100 mt-4"> Submit</button>
                    
                </form>
            </div>
        </div>
        </div>
        </div>
    </div>
  )
}

export default Login;
