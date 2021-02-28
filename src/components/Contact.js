import React, {useState} from 'react';
import emailjs from 'emailjs-com';
import {useForm} from 'react-hook-form';

const Contact = ()  => {
   const [successMessage,setSuccessMessage] = useState("");
   const {register,handleSubmit,errors} = useForm();


   const serviceID= "service_ID";
   const templateID ="template_ID";
   const userID ="user_DA5IafA8pNL9oPvXHB0pg";

  const onSubmit = (data,reset)=>{
      sendEmail(
      	serviceID,
      	templateID,
      	{
      		name:data.name,
      		phone:data.phone,
      		email :data.email,
      		subject:data.subject,
      		description:data.description
      	},
      	userID
      	)
      reset.target.reset();

  }  

  const sendEmail= (serviceID, templateID, variables, userID) =>{

    emailjs.send(serviceID, templateID, variables, userID)
      .then(() => {
         setSuccessMessage("From sent succesfully! I'll contact you as soon as possible.");
      }).catch(err =>console.error("Something went wrong! $(err)"));
  }
     
	return (
		<div id="contact" className ="contact">
		   <div className="text-center">
			   <h1>Contact me</h1>
			   <p>Please fill out the form
			    and describe your project needs and I`ll contact you as soon as possible.</p>
           
             <span className="success-message">{successMessage}</span> 
           </div>
           <div className="container">
           <form onSubmit={handleSubmit(onSubmit)}>
              <div className="row">
                  <div className="col-md-6  col-xs-12">
                     <input
                     id="name"
                     type="text"
                     className="form-control"
                     placeholder="Name"
                     name="name"
                     ref={
                     	register({
                     		required:"Please enter your name",
                     		maxLength:{
                     			value:20,
                     			message:"Please enter a name with fewer than 20 characters"
                     		}
                     	})
                     } 
                     />
                     <div className="line"></div>
                     <span className="error-message">
                        {errors.name && errors.name.message}
                     </span>
           
                      <input
                      id="phone"
                      type="text"
                     className="form-control"
                     placeholder="Phone Number"
                     name="phone" 
                     ref={
                     	register({
                     		required:"Please enter your phone number",
                     	})
                     } 
                     />
                      <div className="line"></div>
                        <span className="error-message">
                        {errors.phone && errors.phone.message}
                     </span>
                      <input
                      id="email"
                      type="email"
                     className="form-control"
                     placeholder="Email"
                     name="email" 
                       ref={
                     	register({
                     		required:"Please enter your email",
                     		pattern : {
                     			value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                     			message:"Invalid email"
                     		}
                     	})
                     } 
                     />
                      <div className="line"></div>
                       <span className="error-message">
                        {errors.email && errors.email.message}
                     </span>
                      <input
                      id="subject"
                      type="text"
                     className="form-control"
                     placeholder="Subject"
                     name="subject" 
                      ref={
                     	register({
                     		required:"Ops , you forgot to add the subject",
                     	})
                     } 
                     />
                      <div className="line"></div>
                       <span className="error-message">
                        {errors.subject && errors.subject.message}
                     </span>
                  </div>
                <div className="col-md-6 col-xs-12">
                <textarea 
                id="description"
                type="text"
                className="form-control"
                placeholder="Please describe shortly your project..."
                name="description"
                 ref={
                     	register({
                     		required:"Please describe shortly the project needs...",
                     	})
                     } 
                ></textarea>
                  <div className="line"></div>
                   <span className="error-message">
                        {errors.description && errors.description.message}
                     </span>
                <button className="btn-main-offer contact-btn" type="submit">Contact me</button>
                </div>
              </div>
            </form>
           </div>
		</div>
   
		)
}

export default Contact;