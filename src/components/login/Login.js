import React from "react";
import { Button } from "react-bootstrap";
import NavBar from "../navBar/NavBar";
import { Breadcrumb } from "react-bootstrap";

const Login = () => {
  return (
    <div className="vh-100">
      <NavBar/>
      <div>
      <Breadcrumb className="breadcrumb">
        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
        <Breadcrumb.Item href="/cart">Cart</Breadcrumb.Item>
        <Breadcrumb.Item active>Login</Breadcrumb.Item>
      </Breadcrumb>
      </div>
      <form
        method="post"
        className="container-fluid py-5 d-flex flex-column flex-wrap justify-content-center align-items-center"
      >
        <div class="form-floating mb-3 col-4">
          <input
            type="email"
            class="form-control"
            id="floatingInput"
            placeholder="name@example.com"
          />
          <label for="floatingInput">Email address</label>
        </div>
        <div class="form-floating col-4">
          <input
            type="password"
            class="form-control"
            id="floatingPassword"
            placeholder="Password"
          />
          <label for="floatingPassword">Password</label>
        </div>
        <Button variant="primary" type="submit" className="my-5 col-auto">
          login
        </Button>
      </form>
    </div>
  );
};

export default Login;
