import React from 'react';

function MainPage({ history }) {
    const onClick = () => {
        console.log(history);
        history.push('/about');
    };

    return (
        <div>
            <h1>MainPage</h1>
            <button onClick={onClick}>About</button>
        </div>
    );
}

export default MainPage;
