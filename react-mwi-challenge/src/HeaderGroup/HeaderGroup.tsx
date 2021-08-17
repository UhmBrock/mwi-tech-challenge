import './HeaderGroup.css';

import React, { ReactNode } from 'react';

type HeaderGroupProps = {
    headerText: string,
    children: ReactNode
};

const HeaderGroup = ({headerText, children}: HeaderGroupProps): JSX.Element => {

    const headerTextArray = headerText.split(' ');
    const firstHeaderWord = headerTextArray[0];
    var otherHeaderText;

    if(headerTextArray.length > 1) {
        otherHeaderText = headerTextArray.slice(1).join(' ');
    } 

    return (
        <div className="headerGroup">
            <h1 className="mb-5"><span className="underline">{firstHeaderWord}</span> {otherHeaderText}</h1>
            {children}
        </div>
    )

}

export default HeaderGroup;
