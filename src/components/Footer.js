import React from 'react';
import {
	FacebookShareButton,
	FacebookIcon,
	TwitterShareButton,
	TwitterIcon,
	LinkedinShareButton,
	LinkedinIcon
} from 'react-share';

const Footer = ()=>{
	return(
		<div id="footer" className="footer">
		   <div className="container">
              <div className="row">
                 <div className="col-lg-4 col-md-6 col-sm-6">
                   <div className="d-flex">
                      <p> Rostock </p>
                   </div>
                    <div className="d-flex">
                      <a href="tel:555-555-555">+49 555-555</a>
                   </div>
                    <div className="d-flex">
                      <p>dhurata_avdiu@yahoo.com</p>
                   </div>
                 </div>
                 <div className="col-lg-3 col-md-2 col-sm-6">
                   <div className="row">
                      <div className="col">
                        <a className="footer-nav">Home</a>
                        <br/>
                        <a className="footer-nav">About me</a>
                      </div>
                        <div className="col">
                        <a className="footer-nav">Portfolio</a>
                        <br/>
                        <a className="footer-nav">Contacts</a>
                      </div>
                       
                   </div>
                 </div>
                 <div className="col-lg-5 col-md-5 col-sm-6 align-items-center">
                    <div className="d-flex justify-content-center">
                        <FacebookShareButton
                          url={"https://www.facebook.com/"}
                          quote={"Front-end Developer"}
                          hashtag={"#javascript"}>
                           <FacebookIcon className="icon"/>
                        </FacebookShareButton>
                        <TwitterShareButton
                          url={"https://www.twitter.com/"}
                          quote={"Front-end Developer"}
                          hashtag={"#javascript"}>
                           <TwitterIcon className="icon"/>
                        </TwitterShareButton>
                        <LinkedinShareButton
                          url={"https://www.linkedin.com/"}
                          quote={"Front-end Developer"}
                          hashtag={"#javascript"}>
                           <LinkedinIcon className="icon"/>
                        </LinkedinShareButton>
                    </div>

                   <p className="pt-3 text-center">
                     Copyright&copy;
                     {new Date().getFullYear()}&nbsp; Dhurata Avdiu | All Rights Reserved
                   </p> 
                 </div>
              </div>
		   </div>
		</div>
	)
}


export default Footer;