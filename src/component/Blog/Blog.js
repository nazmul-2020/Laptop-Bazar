import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div className='blog-container'>
            <h1>Blog</h1>
            <div className='blog'>
                <div className='blog-text'>
                    <h3>How React Works?</h3>
                    <p>React is a popular JavaScript framewoek used for user interface development.Browser render engine recieves HTML file and CSS file then parse them and creates a DOM tree and a CSSOM tree. After DOM tree and  CSSOM tree creating ,browser engine creates a Render tree which goes through a layout phase which decides where every element should be placed.So when we manupulate DOM everytime and change the data to the UI. Render tree re calculate the hole process again which is very inefficient. Here React uses Virtual DOM.When any state is changed Virtual DOM creates a replica of real DOM and compares through diff algorithm.</p>
                </div>
                <div className='blog-text'>
                    <h3>How useState Works?</h3>
                    <p>useState is called React's hook. useState is a function itself when we call in our code it returns a variable to store data and a setter function to modify data of that variable under the hood. When we call useState it keeps e initial value and store it behind the scene. By calling it's setter function pass data through argument it simply compares the previous value and the new value. If any changes found it sets the new value to the variable, else it keep the previous data same.</p>
                </div>
            </div>
        </div>
    );
};

export default Blog;