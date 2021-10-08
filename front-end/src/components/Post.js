import { useState } from 'react';
import Paper from '@material-ui/core/Paper';
import Collapse from '@material-ui/core/Collapse';
import Button from '@material-ui/core/Button';

const Post = (post) => {
    const [isToggle, setToggle] = useState(false);
    return (
        <>
            <h3>This user with ID {post.post.user_id}, have a Post.</h3>
            <Button
                color="secondary"
                variant="contained"
                onClick={() => {
                    setToggle((prev) => !prev);
                }}
            >
                click me!
            </Button>
            <div style={{ display: 'flex' }}>
                <Collapse in={isToggle}>
                    <Paper elevation={5} style={{ margin: 5 }}>
                        <h4>The Post Contain:</h4>
                        <span>User Id = {post.post.user_id} | </span>
                        <span>Slug = {post.post.slug} | </span>
                        <span>Html = {post.post.html}</span>
                    </Paper>
                </Collapse>
            </div>
        </>
    );
};

export default Post;
