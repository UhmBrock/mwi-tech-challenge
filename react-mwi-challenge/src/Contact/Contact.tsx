import './Contact.css';

import HeaderGroup from '../HeaderGroup/HeaderGroup';
import React from 'react';

type ContactProps = {

};

const Contact = ({}: ContactProps): JSX.Element => {

    return (
        <div className="negate-navbar-padding">
            <div className="row"> 
                <div className="black-bg col-md-6 col-12 d-flex align-items-center">
                    <div className="col-12 px-5">
                        <HeaderGroup headerText="Heading One">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia voluptates dolores commodi minus a, culpa error perferendis 
                                nulla obcaecati similique, dolor iusto itaque assumenda, praesentium cum neque sint ratione libero!
                            </p>
                        </HeaderGroup>           
                    </div>
                </div>
                <div className="white-bg col-md-6 col-12 d-flex align-items-center">
                    <div className="col-12 px-5">
                        <form className="row">
                            <div className="col-12 mb-3">
                                <h1 className="form-header">Heading Two</h1>
                            </div>
                            <div className="col-md-6 col-sm-12 mb-3">
                                <input type="text" className="form-control grey-input" placeholder="First name" aria-label="First name"/>
                            </div>
                            <div className="col-md-6 col-sm-12 mb-3">
                                <input type="text" className="form-control grey-input" placeholder="Last name" aria-label="Last name"/>
                            </div>
                            <div className="col-md-6 col-sm-12 mb-3">
                                <input type="text" className="form-control grey-input" placeholder="Title" aria-label="Title"/>
                            </div>
                            <div className="col-md-6 col-sm-12 mb-3">
                                <input type="email" className="form-control grey-input" placeholder="Email" aria-label="Email"/>
                            </div>
                            <div className="col-12 mb-3">
                                <textarea className="form-control grey-input" placeholder="Message" aria-label="Message"/>
                            </div>
                            <div className="w-100 text-center mb-3">
                                <button type="submit" className="card-button">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>            
        </div>
    )

}

export default Contact;
