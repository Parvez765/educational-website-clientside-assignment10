import React from 'react';

const Blog = () => {
    return (
        <div className='text-center mt-8 p-10'>
            <h2 className='text-xl font-bold'>What is cors?</h2>
            <p className='text-lg mt-5 font-semibold'>Cross-origin resource sharing is a mechanism that allows restricted resources <br></br>on a web page to be requested from another domain outside the domain from which the first resource was served.<br></br> A web page may freely embed cross-origin images, stylesheets, scripts, iframes, and videos.</p>

            <h2 className='text-xl font-bold mt-12'>Why are you using firebase?<br></br> What other options do you have to implement authentication?</h2>
            <p className='text-lg mt-5 font-semibold'>The Firebase Realtime Database lets you build rich, collaborative applications by allowing secure access to the database directly from client-side code.<br></br> Data is persisted locally, and even while offline, realtime events continue to fire, giving the end user a responsive experience. <br></br><br></br>Usually, authentication by a server entails the use of a user name and password. <br></br>Other ways to authenticate can be through cards, retina scans, voice recognition, and fingerprints.</p>

            <h2 className='text-xl font-bold mt-12'> How does the private route work?</h2>
            <p className='text-lg mt-5 font-semibold'>The react private route component renders child components which is also known as Children <br></br>if the user is logged in. If not logged in the user is redirected to the /login page with the return url passed in the location state property.</p>
            
            <h2 className='text-xl font-bold mt-12'>What is Node? How does Node work?</h2>
            <p className='text-lg mt-5 font-semibold'>Node. js is a JavaScript runtime environment that achieves low latency and high throughput by taking a “non-blocking” approach to serving requests. <br></br>In other words, Node. js wastes no time or resources on waiting for I/O requests to return.</p>
        </div>
    );
};

export default Blog;