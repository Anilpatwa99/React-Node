import React from 'react'
import './Contact.css'
const Contact = () => {
  return (
      <section className="mt-5" id="contact">
  <div className="container ">
    <div className="row">
      <div className="col-md">
        <form className="row g-3">
          <div className="col-12 fs-1 fw-bold mb-2 text-center text-uppercase">Contact us</div>
          <div className="col-12">
            <input type="email" className="form-control" id="inputEmail4" placeholder="Email" />
          </div>
          <div className="col-12">
            <input type="text" className="form-control" id="inputPassword4" placeholder="Your Name" />
          </div>
          <div className="col-12">
            <input type="text" className="form-control" id="inputAddress" placeholder="Phone Number" />
          </div>
          <div className="col-12 ">
            <input type="text" className="form-control" id="Message" placeholder="Message" />
          </div>
          <div className="col-12 ">
            <button type="submit" className="btn btn-primary text-uppercase" id="send-btn">Send <i className="fa-solid fa-paper-plane ms-2" /></button>
          </div>
        </form>
      </div>
      <div className="col-md" id="contact-image">
        <img src="https://img.freepik.com/free-vector/flat-design-illustration-customer-support_23-2148887720.jpg?size=626&ext=jpg&ga=GA1.1.917600230.1700661846&semt=ais" alt />
      </div>
    </div>
  </div>
</section>

  )
}

export default Contact
