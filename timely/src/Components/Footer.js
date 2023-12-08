import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
        <section className="footer mt-5">
  <div className="container">
    <footer className="py-5">
      <div className="row d-flex justify-content-center">
        <div className="col-6 col-md-2 mb-3">
          <h5 className="fs-3 ">About Shop</h5>
          <ul className="nav flex-column mt-3">
            <li className="nav-ite mb-2"><a href="#" className="nav-link p-0 text-light"><i className="fa-solid fa-location-dot me-2" />Address</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-light"><i className="fa-solid fa-phone me-2" />+01 1234567890</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-light"><i className="fa-solid fa-envelope me-2" />demo@gmail.com</a></li>
          </ul>
        </div>
        <div className="col-6 col-md-2 mb-3">
          <h5 className="fs-3">Informations</h5>
          <p className="mt-3">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque, at!</p>
        </div>
        <div className="col-md-5 offset-md-1 mb-3">
          <form>
            <h5 className="fs-3">Subscribe to our newsletter</h5>
            <p className="mt-3">Monthly digest of what's new and exciting from us.</p>
            <div className="d-flex flex-column flex-sm-row w-100 gap-2">
              <label htmlFor="newsletter1" className="visually-hidden">Email address</label>
              <input id="newsletter1" type="text" className="form-control" placeholder="Email address" fdprocessedid="ivoicm" />
              <button className="btn btn-primary" type="button" fdprocessedid="3wv8">Subscribe</button>
            </div>
          </form>
        </div>
      </div>
      <div className="d-flex flex-column  align-items-center py-4  border-top" id="social-icon">
        <div>
          <ul className="list-unstyled d-flex fs-2">
            <li className="ms-3 text-dark"><a className="link-body-emphasis " href="#"><i className="fa-brands fa-twitter" /></a>
            </li>
            <li className="ms-3"><a className="link-body-emphasis" href="#"><i className="fa-brands fa-instagram " /></a></li>
            <li className="ms-3"><a className="link-body-emphasis" href="#"><i className="fa-brands fa-facebook" /></a></li>
            <li className="ms-3"><a className="link-body-emphasis" href="#"><i className="fa-brands fa-youtube" /></a></li>
          </ul>
        </div>
        <div>
          <p>© 2023 Company, Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  </div>
</section>

  )
}

export default Footer
