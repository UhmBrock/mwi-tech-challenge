/* eslint-disable react-hooks/exhaustive-deps */

import './Contact.css';

import ContactForm from '../ContactForm/ContactForm';
import HeaderGroup from '../HeaderGroup/HeaderGroup';
import React from 'react';

type ContactJSONData = {
    success: boolean,
    data: Array<{
            content: string,
            created_at: string,
            id: number,
            page_id: number,
            title: string,
            updated_at: string
        }>
};

type HeadingData = {
    [index: number]: {
        title: string,
        content: string
    }
}

const Contact = (): JSX.Element => {

    const [jsonData, setJsonData] = React.useState<ContactJSONData>();
    const [headingData, setHeadingData] = React.useState<HeadingData>({
        4: { title: "Failed to Load Content", content: "Please try refreshing the page"}
    });

    React.useEffect(() => {
        fetch('https://api.mwi.dev/content/contact').then(
            response => response.json()
        ).then((responseJson) => {
            setJsonData(responseJson);
            console.log(responseJson);
        })
        .catch((error) => {
            console.error(error);
        });
    },[])

    React.useEffect(() => {

        if(jsonData === undefined || !jsonData.success || jsonData.data.length === 0) {
            return;
        }

        const newHeadingData: HeadingData = {...headingData};

        for(let headingJSON of jsonData.data) {
            newHeadingData[headingJSON.id] = { title: headingJSON.title, content: headingJSON.content };
        }
        
        setHeadingData(newHeadingData);
        
    },[jsonData]);

    return (
        <div className="negate-navbar-padding">
            <div className="row"> 
                <div className="black-bg col-md-6 col-12 d-flex align-items-center">
                    <div className="col-12 px-5">
                        <HeaderGroup headerText={headingData[4].title}>
                            <p>{headingData[4].content}
                            </p>
                        </HeaderGroup>           
                    </div>
                </div>
                <div className="white-bg col-md-6 col-12 d-flex align-items-center">
                    <div className="col-12 px-5">
                        <ContactForm/>
                    </div>
                </div>
            </div>            
        </div>
    )

}

export default Contact;
