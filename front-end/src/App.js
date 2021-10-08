import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Post from './components/Post';

const App = () => {
    const [posts, setPosts] = useState([]);

    useEffect(async () => {
        try {
            const { data } = await axios.get('http://127.0.0.1:8000/api/posts');
            console.log(data.posts);
            setPosts(data.posts);
        } catch (error) {
            console.error('Error App useEffect() => ', error);
        }
    }, []);

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                {posts.map((post) => (
                    <Post post={post} key={post.user_id}></Post>
                ))}
            </header>
            <content></content>
        </div>
    );
};

export default App;
