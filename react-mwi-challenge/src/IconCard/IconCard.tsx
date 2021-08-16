import './IconCard.css';

import React from 'react';

type IconCardProps = {
    image: string,
    imageAltText?: string,
    title: string,
    text: string,
    buttonUrl: string,
    buttonText: string
};

const IconCard = ({image, imageAltText, title, text, buttonUrl, buttonText}: IconCardProps): JSX.Element => {

    return (
       
        <div className="card h-100 mx-auto">
            <div className="card-body">
                <div className="row icon-holder mb-3">
                    <div className="col-12 my-auto">
                        <img className="img my-auto mx-auto d-block" src={image} alt={imageAltText}/>
                    </div>      
                </div>
                <div className="row">
                    <div className="mx-4">
                        <h2 className="card-title">{title}</h2>
                        <p className="card-text">{text}</p>
                        <div className="w-100 text-center mb-3">
                            <a className="card-button" href={buttonUrl}>{buttonText}</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    )

}

export default IconCard;
