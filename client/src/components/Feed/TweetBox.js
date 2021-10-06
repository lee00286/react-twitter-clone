import React, { useState } from 'react';
// Style
import { Avatar, Button } from '@material-ui/core';
import './TweetBox.css';
// Import
import { db } from '../../config';

function TweetBox() {
    const [TweetMessage, setTweetMessage] = useState("");
    const [TweetImage, setTweetImage] = useState("");

    const sendTweet = (e) => {
        e.preventDefault();
        // db.collection("posts").add({
        //     username: "happystark",
        //     displayName: "Atharva Deosthale",
        //     avatar: "https://scontent-bom1-1.xx.fbcdn.net/v/t1.0-1/c0.33.200.200a/p200x200/51099653_766820610355014_8315780769297465344_o.jpg?_nc_cat=101&_nc_sid=7206a8&_nc_ohc=c1qBHkwAgVsAX8KynKU&_nc_ht=scontent-bom1-1.xx&oh=340b05bea693dd1671296e0c2d004bb3&oe=5F84CA62",
        //     verified: true,
        //     text: TweetMessage,
        //     image: TweetImage,
        // });
        setTweetMessage("");
        setTweetImage("");
    };

    return (
        <div className="tweetbox">
            <form>
                {/* TweetBox */}
                <div className="tweetbox__input">
                    <Avatar src="https://scontent-bom1-1.xxh=340b05bea693dd1671296e0c2d004bb3&oe=5F84CA62" />
                    <input
                        value={TweetMessage}
                        onChange={(e) => setTweetMessage(e.target.value)}
                        placeholder="무슨 일이 일어나고 있나요?"
                        type="text"
                    />
                </div>
                <input
                    placeholder="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/p750x750/243121907_3663500650542425_8788664544052209082_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_cat=105&_nc_ohc=P1Cp6kQgoGwAX86Fduy&edm=AP_V10EBAAAA&ccb=7-4&oh=01a6fe58f92d946911682b47fd1460db&oe=6162DB53&_nc_sid=4f375e"
                    value={TweetImage}
                    onChange={(e) => setTweetImage(e.target.value)}
                    type="text"
                    className="tweetbox__image-input"
                />
                {/* Upload Tweet */}
                <Button onClick={sendTweet} type="submit" className="tweetbox__button">
                    Tweet
                </Button>
            </form>
        </div>
    );
}

export default TweetBox;