import React from 'react';
import author from '../me.png';
const AboutMe = () => {
	return(
		<div id="about" className=" container">
		   <div className="row">
              <div className="col-lg-6 col-xm-12">
                 <div className="photo-wrap mb-5">
                     <img  className="profile-img" src={author} alt="author"/>
                    </div>
              </div>
              <div className="col-lg-6 col-xm-12">
              <h1 className="about-heading waypoint animated slide-in-left" data-animation="slide-in-left" >About me</h1>
                <p className="parag">
                Hello! I am Dhurata. I have a 
                Bachelor degree on Computer Science at "Aleksander Moisiu" University.
                Always excited to learn how things work - or don't. If I don't know it, I learn it. If I don't understand it, I learn it more!
                I write code and improve my skills everyday.
                I create responsive websites that are displayed on all devices desktops and smartphones. Websites that load fast and  are dynamic.I love making pages come to life.
                </p>
              </div>
		   </div>

		</div>
	);
}

export default AboutMe;