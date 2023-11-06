import React from "react";
import { BsDownload } from "react-icons/bs";

const Blogs = () => {
  return (
    <div className="container my-3 py-3">
      <div>
        <h1 className="text-left " style={{ color: "black" }}>
          Privacy Policy
        </h1>
        <hr />
        <p
          className="lead text-left"
          style={{ fontSize: "18px", fontWeight: "370", color: "grey" }}
        >
          1/ Introduction<br></br>
          Welcome to Bitss.fr Cyber Security. This Privacy Policy outlines how
          we collect, use, disclose, and safeguard your personal information
          when you access our website and utilize our cyber security services.
          Protecting your privacy and personal data is of utmost importance to
          us, and we are committed to ensuring the security and confidentiality
          of the information you provide.
        </p>
        <p
          className="lead text-left"
          style={{ fontSize: "18px", fontWeight: "370", color: "grey" }}
        >
          2/ Information We Collect<br></br>
          a. Personal Information: When you interact with our website or engage
          with our cyber security services, we may collect personal information
          such as your name, email address, contact details, and any other
          information you provide voluntarily.<br></br>
          <br></br>
        </p>
      </div>
      <div className="container my-5">
        <div className="row">
          <div className="col-md-6 pt-3">
            <small className="text-uppercase" style={{ color: "#9B5DE5",fontSize:17,fontWeight:700 }}>
              About us
            </small>
            <h1 className="h2 mb-4" style={{ fontWeight: 600 }}>
              About Our <span style={{ color: "#9B5DE5" }}>Company</span>
            </h1>
            <p className="text-secondary" style={{ lineHeight: 2 }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
              repellat iure laboriosam cum voluptatum, nam minima deserunt aut?
              Distinctio voluptatibus dolor quaerat quo omnis illo sequi at
              velit, odit quod!
            </p>
            <p
              href="#"
              style={{ backgroundColor: "#9B5DE5", width: "240px" }}
              className="btn px-4 py-3 mt-4 text-white d-flex align-items-center justify-content-between"
            >
              <span>Download Profile</span>
              <BsDownload style={{width:25,enableBackground: "new 0 0 489 489",fontSize:20}}/>
             
            </p>
          </div>
          <div className="col-md-6 text-center">
            <div className="row">
              <div className="col-md-6 mb-3">
                <img
                  src="https://images.pexels.com/photos/3184433/pexels-photo-3184433.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  className="w-100 rounded"
                  alt=""
                 
                />
              </div>
              <div className="col-md-6 mb-3">
                <img
                  src="https://images.pexels.com/photos/3184431/pexels-photo-3184431.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  className="w-100 rounded"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
