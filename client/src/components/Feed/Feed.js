import React, { useEffect, useState } from 'react';
import './Feed.css';
import Post from './Post';
import TweetBox from './TweetBox';
import { db } from '../../config';

function Feed() {
    const [Posts, setPosts] = useState([]);

    // useEffect(() => {
    //     db.collection("posts").onSnapshot((snapshot) => {
    //         setPosts(snapshot.docs.map((doc) => doc.data()));
    //     });
    // }, []);

    return (
        <div className="feed">
            <div className="feed__header">
                <h2>Home</h2>
            </div>
            <TweetBox />
            {Posts.map((post) => (
                <Post
                    displayName={post.displayName}
                    username={post.username}
                    verified={post.verified}
                    text={post.text}
                    avatar={post.avatar}
                    image={post.image}
                />
            ))}
        </div>
    );
}

export default Feed;
