import HeaderGroup from '../HeaderGroup/HeaderGroup';
import IconCard from '../IconCard/IconCard';
import React from 'react';

type HomeJSONData = {
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

type CardData = {[index: number]: {title:string, content:string}};


const Home = (): JSX.Element => {

    const [challengeComplete, setChallengeComplete] = React.useState(false);
    const [showWarning, setShowWarning] = React.useState(false);
    const [showSuccess, setShowSuccess] = React.useState(false);    
    const [jsonData, setJsonData] = React.useState<HomeJSONData>();
    const [cardData, setCardData] = React.useState<CardData>({
        1: { title: 'Content Failed to Load', content: 'Please try refreshing the page.' },
        2: { title: 'Content Failed to Load', content: 'Please try refreshing the page.' },
        3: { title: 'Content Failed to Load', content: 'Please try refreshing the page.' }
    });

    React.useEffect(() => {
        fetch('https://api.mwi.dev/content/home').then(
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

        const newCardData: CardData = {...cardData};

        for(let cardJSON of jsonData.data) {
            newCardData[cardJSON.id] = { title: cardJSON.title, content: cardJSON.content };
        }       
        
        setCardData(newCardData);
        
    }, [jsonData]);

        
    const onChallengeLinkClick = () => {

        if(challengeComplete) {
            setShowWarning(true);
            if(showSuccess) {
                setShowSuccess(false);
            }
            return;
        }

        const ARRAY1 = [
            'Matt Johnson',
            'Bart Paden',
            'Ryan Doss',
            'Jared Malcolm'
        ];

        const ARRAY2 = [
            'Matt Johnson',
            'Bart Paden',
            'Jordan Heigle',
            'Tyler Viles'
        ]

        const distinctArray = getDistinctArray(ARRAY1, ARRAY2);

        console.log("Input Array 2: \n" + JSON.stringify(ARRAY2));
        console.log("Input Array 1: \n" + JSON.stringify(ARRAY1));
        console.log("Output Array: \n" + JSON.stringify(distinctArray));
        
        setShowSuccess(true);
        setChallengeComplete(true);

    }


    return (
        <> 
            <div className="w-100">
                <div className="row mb-5 mx-4">
                    <div className="col-lg-4 mb-3">
                        <IconCard image={process.env.PUBLIC_URL+'/Talkie.png'} imageAltText="Walkie Talkie" 
                            title={cardData[1].title}  text={cardData[1].content} 
                            buttonText="Learn More" buttonUrl="#"
                        />
                    </div>
                    <div className="col-lg-4 mb-3">
                        <IconCard image={process.env.PUBLIC_URL+'/Rabbit.png'} imageAltText="Running Rabbit" 
                            title={cardData[2].title}  text={cardData[2].content} 
                            buttonText="Learn More" buttonUrl="#"
                        />
                    </div>
                    <div className="col-lg-4 mb-3">
                        <IconCard image={process.env.PUBLIC_URL+'/Shield.png'} imageAltText="Shield" 
                            title={cardData[3].title}  text={cardData[3].content} 
                            buttonText="Learn More" buttonUrl="#"
                        />
                    </div>
                </div>
            </div>
            <div className="mx-5">
                <HeaderGroup headerText="Heading One">
                    <p>Remove the duplicates in 2 Javascript objects and output the list of distinct names in an unordered list when <button onClick={onChallengeLinkClick}>this link</button> is clicked. If the operation has been completed already notify the user that this has already been done</p>
                </HeaderGroup>
                {
                    showSuccess ? 
                    <div className="alert alert-success alert-dismissable" role="alert">
                        <button type="button" className="close" aria-label="Close" onClick={ () => setShowSuccess(false) }>
                            <span aria-hidden="true">&times;</span>
                        </button>
                        <h4 className="alert-heading">List Output!</h4>
                        <p>Check the console to see the results of the operation.</p>
                    </div> : <></>
                }
                {
                    showWarning ?
                    <div className="alert alert-warning alert-dismissable fade show">
                        <button type="button" className="close" aria-label="Close" onClick={ () => setShowWarning(false)}>
                            <span aria-hidden="true">&times;</span>
                        </button>
                        <h4 className="alert-heading">Operation Already Complete!</h4>
                        <p>Check the console to see the previously output results.</p>
                    </div> : <></>
                }
            </div>
        </>
    )
}

function getDistinctArray<T>(array1: T[], array2: T[]): T[] {
    
    
    const unionSet = new Set<T>([...array1, ...array2]);
    
    return Array.from(unionSet);

}




export default Home;
