import React, { useEffect } from 'react';

function AboutPage({ history, location, match }) {
    useEffect(() => {
        console.log("history", history);
        console.log("location", location);
        console.log("match", match);
    }, []);

    const onClick = () => {
        history.goBack();
    };

    return (
        <div>
            AboutPage
            <button onClick={onClick}>Back to main</button>
        </div>
    );
}

export default AboutPage;
