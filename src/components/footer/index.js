import React from 'react';
import { Link } from "react-router-dom";
import './footer.css';

class Footer extends React.Component{
  render()
  {
    return (
        <>
            <div className='container-fluid mt-5' id="footer">
                <div className='row d-flex justify-content-center m-4'>
                    <div className="col-10 col-xs-10 col-sm-10 col-md-5 col-lg-5 col-xl-5 d-flex justify-content-center">
                        <p id="footer-text">
                            Lorem Ipsum
                        </p>
                    </div>
                    <div className="col-10 col-xs-10 col-sm-10 col-md-5 col-lg-5 col-xl-5 d-flex justify-content-center">
                        <Link 
                            to="/contact" 
                            className='btn btn-secondary contact-button'>Contact
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
  }
}

export default Footer;
