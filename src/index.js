import React from 'react';
import { PostStore } from './platform/posts'
import { render } from 'react-dom';
// Imagine this lives in npm and is static.
import {helloFactory} from "./components/hellofactory";

const postStore = new PostStore();
const {Hello} = helloFactory(postStore);
// This is your route/page, etc
// You compose the components from that npm library
// after you have satisfied their context dependencies
const Home = () => {
    return <div><Hello/></div>
};

// Create and assemble dependency graph here
// using property or constructor injection.
// This is inversion of control


// ComponentProvider describes its own dependencies
// with interfaces. This is dependency inversion
export const App = () => (
    <Home/>
);

render(<App />, document.getElementById('root'));