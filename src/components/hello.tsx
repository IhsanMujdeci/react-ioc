import React from 'react';
import {ComponentProvider, PostStore} from './context'
import { useSubscribe } from 'use-subscribe'


export default (postStore: PostStore) => function Hello(){

    const posts = useSubscribe(postStore.posts);

    const addPost = () => {
        const postText = prompt('Enter post value');
        postStore.add(postText)
    };

    return (
        <ComponentProvider value={{ postStore }}>
            <div>
                <button
                    onClick={addPost}>
                    Add Post
                </button>
                {
                    posts.map(post => <div
                        style={{ marginBottom: '4px' }}
                        key={post.id}>
                        {post.title}
                    </div>)
                }
            </div>
        </ComponentProvider>)
};