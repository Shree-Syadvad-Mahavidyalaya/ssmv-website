import React from "react";
// import './Footer.css';

const Footer=()=>{
    return(
        <div className="footer">
            <div className="container my-">

            <footer className="text-center text-lg-start border border-white mt-xl-5 pt-4">
            {/* <!-- Grid container --> */}
             <div className="container ">
            {/* <!--Grid row--> */}
            <div className="row">
            {/* <!--Grid column--> */}
            <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
            <h5 className="text-uppercase mb-4">OUR WORLD</h5>

            <ul className="list-unstyled mb-4">
                <li>
                  <a href="#!" class="text-white">About us</a>
                </li>
                <li>
                  <a href="#!" class="text-white">Collections</a>
                </li>
                <li>
                  <a href="#!" class="text-white">Environmental philosophy</a>
                </li>
                <li>
                  <a href="#!" class="text-white">Artist collaborations</a>
                </li>
            </ul>
        </div>
    
    <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
      <h5 className="text-uppercase mb-4">Assistance</h5>

      <ul className="list-unstyled">
        <li>
          <a href="#!" class="text-white">Contact us</a>
        </li>
        <li>
          <a href="#!" class="text-white">Size Guide</a>
        </li>
        <li>
          <a href="#!" class="text-white">Shipping Information</a>
        </li>
        <li>
          <a href="#!" class="text-white">Returns & Exchanges</a>
        </li>
        <li>
          <a href="#!" class="text-white">Payment</a>
        </li>
      </ul>
    </div>
    {/* <!--Grid column--> */}

    {/* <!--Grid column--> */}
    <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
      <h5 className="text-uppercase mb-4">Careers</h5>

      <ul className="list-unstyled">
        <li>
          <a href="#!" class="text-white">Jobs</a>
        </li>
      </ul>
    </div>
    {/* <!--Grid column--> */}

    {/* <!--Grid column--> */}
    <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
      <h5 className="text-uppercase mb-4">For more qeries</h5>

      <div className="fill">
        <div className="email">
        <input type="email" id="form5Example2" class="form-control" />
        <label className="form-label" for="form5Example2">Email address</label>
        </div>
        <div className="query">
        <input type="text" id="form5Example2" class="form-control" />
        <label className="form-label" for="form5Example2">Query</label>
        </div>
        
      </div>

      <button type="submit" class="btn btn-outline-white btn-block">Submit</button>
    </div>
    {/* <!--Grid column--> */}
  </div>
  {/* <!--Grid row--> */}
</div>
{/* <!-- Grid container --> */}

{/* <!-- Copyright --> */}
<div className="text-center p-3 border-top border-white">
  © 2020 Copyright:
  <a className="text-white" href="https://mdbootstrap.com/">MDBootstrap.com</a>
</div>
{/* <!-- Copyright --> */}
</footer>

</div>

        </div>
    )
}
export default Footer