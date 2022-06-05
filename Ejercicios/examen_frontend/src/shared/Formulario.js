import React, { useState }  from 'react';
import Swal from 'sweetalert2';
import'./Formulario.css';

export const Formulario = () => {


    const [formState, setformState] = useState({
        name: '',
        email: '',
        message: ''
    });

    const {name, email, message} = formState; 

    const [nameValid, setNameValid] = useState(true);
    const [emailValid, setEmailValid] = useState(true);
    const [messageValid, setMessageValid] = useState(true);
    const [setFormFileValid] = useState(true);


    const handleInputChange = ({target}) => {
      setformState({
        ...formState,
        [target.name]: target.value
      });
    }

    const handleSubmit = (e) => {
      e.preventDefault();
    }

    const validInput = (nameInput) => {
         if(nameInput === 'name'){
            const pattName = new RegExp(/^[A-Za-z0-9\s]+$/g);
            let resName = pattName.test(name);
            setNameValid(resName);
         }

         if(nameInput === 'email'){
            const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;
            let resEmail = regEx.test(email);
            setEmailValid(resEmail);
         }

         if(nameInput === 'message'){
            if(message.length>250){
                setMessageValid(false);
            }else{
                setMessageValid(true);
            }
         }

         if(nameInput === 'formFile'){
             
             var formFileCV = document.getElementById("formFile").files[0].size; 
             if(formFileCV>52428800){
                Swal.fire('Watch out!','The size of the selected file is greater than 50MB, select a file with a valid size'); 
                setFormFileValid(false);
             }else{
                setFormFileValid(true);
             }
         }
        
    }

    return (
        <>         
            <h2 class="color-white-font">Apply for job</h2> 
            <div className="color-white-backgound">
                <form onSubmit={handleSubmit}>  
                    <div className="mb-3 row">
                        <label htmlFor="name" className="col-sm-2 col-form-label">Full name</label>
                        <div className="col-sm-10 form-group">
                            <input 
                                type="text" 
                                className="form-control" 
                                id="name" 
                                name="name" 
                                autoComplete="off"
                                value={name}
                                onChange={handleInputChange}
                                onBlur={ ()=>{validInput('name')}}
                            />
                            { (nameValid === false) && <span className="color-error">Full name invalid, only alphanumeric and space are accepted.</span>}

                        </div>

                    </div>
                    <hr />
                    <div className="mb-3 row">
                        <label htmlFor="email" className="col-sm-2 col-form-label">Email address</label>
                        <div className="col-sm-10 form-group">
                            <input 
                                type="text" 
                                className="form-control" 
                                id="email" 
                                name="email" 
                                placeholder="examle@email.com"
                                autoComplete="off"
                                value={email}
                                onChange={handleInputChange}
                                onBlur={ ()=>{validInput('email')}}
                            />
                             { (emailValid === false) && <span className="color-error">Enter a valid email</span>}
                        </div>
                    </div>
                    <hr />
                    <div className="mb-3 row">
                        <label htmlFor="message" className="col-sm-2 col-form-label">Message</label>
                        <div className="col-sm-10 form-group">
                            <textarea 
                                className="form-control" 
                                id="message" 
                                name="message" 
                                rows="3" 
                                placeholder="Message sent to the employer"
                                autoComplete="off"
                                value={message}
                                onChange={handleInputChange}
                                onBlur={ ()=>{validInput('message')}}
                            ></textarea>
                             { (messageValid === false) && <span className="color-error">Enter a valid message, the message must not exceed 250 characters.</span>}
                        </div>
                    </div>
                    <hr />
                    <div className="mb-3 row">
                        <label htmlFor="formFile" className="col-sm-2 col-form-label">Upload CV</label>
                        <div className="col-sm-10 form-group">
                            <input 
                                className="form-control" 
                                type="file" 
                                id="formFile" 
                                onChange={ ()=>{validInput('formFile')}}
                            />
                            <span className="color-span">Upload your CV/Resume or any relevant file. Max file size 50MB.</span>
                        </div>
                    </div>
                    <hr />
                    <button type="submit" className="btn btn-primary">Send Application</button>
                </form>
            </div>                                                                                                                                                                                                                   
           
        </>
      )
}
