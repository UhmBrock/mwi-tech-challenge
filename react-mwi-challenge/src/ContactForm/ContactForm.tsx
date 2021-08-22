import './ContactForm.css';

import React from 'react';

type FormData = {
    [index: string]: string
}

const ContactForm = (): JSX.Element => {

    const [formData, setFormData] = React.useState<FormData>({
        first_name: "",
        last_name: "",
        title: "",
        email: "",
        message: ""
    });

    const [formError, setFormError] = React.useState<{[index: string]: boolean}>({
        first_name: false,
        last_name: false,
        title: false,
        email: false,
        message: false
    });


    const handleChange = (event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {

        const {name, value} = event.currentTarget;

        const newFormData = {...formData};
        newFormData[name] = value;

        setFormData(
            newFormData
        );
    }

    const handleSubmit = (event: React.FormEvent) => {
        
        event.preventDefault();
        
        if(formData.email.length === 0 || !formData.email.split('').includes('@')) {
            const newFormError = {...formError};
            newFormError['email'] = true;
            setFormError(newFormError);
            return;
        }

        const jsonForm = JSON.stringify(formData);

        fetch('http://localhost:8080/contact', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: jsonForm
        }).then((response) => {
            return response.json();
        }).then((jsonData) => {
            console.log(jsonData);
        })
        .catch((error) => {
            console.error(error);
        });
    }

    return (
        <form className="row" onSubmit={handleSubmit}>
            <div className="col-12 mb-3">
                <h1 className="form-header">Heading Two</h1>
            </div>
            <div className="col-md-6 col-sm-12 mb-3">
                <input type="text" className={`form-control grey-input ${formError['firstname'] ? 'required-field' : ''}`} name="firstname" onChange={handleChange} placeholder="First name" aria-label="First name"/>
            </div>
            <div className="col-md-6 col-sm-12 mb-3">
                <input type="text" className={`form-control grey-input ${formError['lastname'] ? 'required-field' : ''}`} name="lastname" onChange={handleChange}  placeholder="Last name" aria-label="Last name"/>
            </div>
            <div className="col-md-6 col-sm-12 mb-3">
                <input type="text" className={`form-control grey-input ${formError['title'] ? 'required-field' : ''}`} name="title" onChange={handleChange}  placeholder="Title" aria-label="Title"/>
            </div>
            <div className="col-md-6 col-sm-12 mb-3">
                <input type="text" className={`form-control grey-input ${formError['email'] ? 'required-field' : ''}`} name="email" onChange={handleChange}  placeholder="Email" aria-label="Email"/>
            </div>
            <div className="col-12 mb-3">
                <textarea className={`form-control grey-input ${formError['message'] ? 'required-field' : ''}`} name="message" onChange={handleChange}  placeholder="Message" aria-label="Message"/>
            </div>
            <div className="w-100 text-center mb-3">
                <button type="submit" className="card-button">Submit</button>
            </div>
        </form>
    )
}

export default ContactForm;
