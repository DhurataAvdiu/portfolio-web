import React from 'react';
import restaurant from '../images/restaurantpic.png';

import facerecognition from '../images/facerecognitionpic4.png';
import startup from '../images/startuppic.png';
import robofriends from '../images/robofriendspic.png';
import backgroundgenerator from '../images/backgroundpic1.png';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSearchPlus} from '@fortawesome/free-solid-svg-icons';
import {PopupboxManager,PopupboxContainer} from 'react-popupbox';
import 'react-popupbox/dist/react-popupbox.css';

const Portfolio = () =>{
   // Restaurant 
	const openPopupboxRestaurant = () => {
		const content = (
	        <>
			  <img className="portfolio-image-popupbox" src={restaurant} alt="Restaurant Project"/>
			  <p>Complete Responsive Website using HTML,CSS and Javascript.
			   Mobile friendly</p>
			   <b>Github</b> <a className="hyper-link" onClick={() => window.open("https://dhurataavdiu.github.io/DhurataAvdiu.github.io-restaurant/")}> "https://dhurataavdiu.github.io/DhurataAvdiu.github.io-restaurant/"</a>
			</>
	    )
	  PopupboxManager.open({content})

	}

  const popupboxConfigRestaurant = {
        titleBar :{
        	enable:true,
        	text: ""
        },
   fadeIn:  true,
   fadeInSpeed :500  
  }

  //facerecognition
  const openPopupboxFacerecognition = () => {
		const content = (
			<>
			  <img className="portfolio-image-popupbox" src={facerecognition} alt="Face Recognition Project"/>
			  <p>This app uses a machine learning API to recognize faces. It utilizes a sign in system <br/> secured with Bcrypt password hashing.Created with: ReactJS, CSS, NodeJS, PostgreSQL & Clarifai API.
			   Mobile friendly</p>
			   <b>Github</b> <a className="hyper-link" onClick={() => window.open("https://github.com/DhurataAvdiu/facerecognition")}>"https://github.com/DhurataAvdiu/facerecognition"</a>
			   <a className="hyper-link" onClick={() => window.open("https://github.com/DhurataAvdiu/face-detection-api")}>"https://github.com/DhurataAvdiu/face-detection-api</a>
			</>
	    )
	  PopupboxManager.open({content})

	}

  const popupboxConfigFacerecognition = {
        titleBar :{
        	enable:true,
        	text: "",
        },
   fadeIn:  true,
   fadeInSpeed :500  
  }

   //startup
  const openPopupboxStartup = () => {
		const content = (
			<>
			  <img className="portfolio-image-popupbox" src={startup} alt="Start up Project"/>
			  <p>Start up Page. Baking website whitch allows you to follow and subscribe for recipies</p>
			   <b>Github</b> <a className="hyper-link" onClick={() => window.open("https://dhurataavdiu.github.io/")}>"https://dhurataavdiu.github.io/"</a>
			</>
	    )
	  PopupboxManager.open({content})

	}

  const popupboxConfigStartup = {
        titleBar :{
        	enable:true,
        	text: ""
        },
   fadeIn:  true,
   fadeInSpeed :500  
  }

   //robofriends
  const openPopupboxRobofriends = () => {
		const content = (
			<>
			  <img className="portfolio-image-popupbox" src={robofriends} alt="RoboFriends Project"/>
			  <p>A fun front-end React app that displays a friends list with a search function.Created with: ReactJS, CSS & Robohash API.</p>
			   <b>Github</b> <a className="hyper-link" onClick={() => window.open("https://dhurataavdiu.github.io/robofriends/")}>"https://dhurataavdiu.github.io/robofriends/"</a>
			</>
	    )
	  PopupboxManager.open({content})

	}

  const popupboxConfigRobofriends = {
        titleBar :{
        	enable:true,
        	text: ""
        },
   fadeIn: false,
   fadeInSpeed :100000000000000  
  }

    //background-generator
  const openPopupboxBackgroundgenerator = () => {
		const content = (
			<>
			  <img className="portfolio-image-popupbox" src={backgroundgenerator} alt="Background Generator Project"/>
			  <p>A simple website which  you can customise different Background colors.</p>
			   <b>Github</b> <a className="hyper-link" onClick={() => window.open("https://github.com/DhurataAvdiu/background-generator")}>"https://github.com/DhurataAvdiu/background-generator"</a>
			</>
	    )
	  PopupboxManager.open({content})

	}

  const popupboxConfigBackgroundgenerator = {
        titleBar :{
        	enable:true,
        	text: ""
        },
   fadeIn:  true,
   fadeInSpeed :500  
  }
	return (
		<div id="portfolio" className="portfolio-wrapper">
		   <div className = "container">
              <h1 className="text-uppercase text-center py-5"> Portfolio</h1>
				 <div className="image-box-wrapper row justify-content-center">

		      <div className="portfolio-image-box" onClick={openPopupboxRestaurant}>
		       <img  className="portfolio-image" src={restaurant} alt="Restaurant Jolie Project" />

		       <div className="overflow"></div>
		         <FontAwesomeIcon  className="portfolio-icon" icon={faSearchPlus} />
		     
		      </div>
		     
		      <div className="portfolio-image-box" onClick={openPopupboxFacerecognition}>

		         <img  className="portfolio-image" src={facerecognition} alt="Face Recognition Project" />
		         <div className="overflow"></div>
		                <FontAwesomeIcon  className="portfolio-icon" icon={faSearchPlus} />
		      </div>
		       <div className="portfolio-image-box" onClick={openPopupboxStartup}>
                 <img  className="portfolio-image" src={startup} alt="Start up Project" />
                 <div className="overflow"></div>
                        <FontAwesomeIcon  className="portfolio-icon" icon={faSearchPlus} />
		       </div>
		       <div className="portfolio-image-box" onClick={openPopupboxRobofriends}>
                   <img  className="portfolio-image" src={robofriends} alt="Robofriends Project" />
                   <div className="overflow"></div>
                          <FontAwesomeIcon  className="portfolio-icon" icon={faSearchPlus} />
		      </div>
		        <div className="portfolio-image-box" onClick={openPopupboxBackgroundgenerator}>
                  <img  className="portfolio-image" src={backgroundgenerator} alt="Background Generator Project" />
                  <div className="overflow"></div>
                         <FontAwesomeIcon  className="portfolio-icon" icon={faSearchPlus} />
		       </div>
		      </div>
		   </div>

		  <PopupboxContainer {...popupboxConfigRestaurant}/>
		  <PopupboxContainer {...popupboxConfigFacerecognition}/>
		  <PopupboxContainer {...popupboxConfigStartup}/>
		  <PopupboxContainer {...popupboxConfigRobofriends}/>
		  <PopupboxContainer {...popupboxConfigBackgroundgenerator}/>
		</div>
    )
}

export default Portfolio;