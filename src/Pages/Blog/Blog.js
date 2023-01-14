import React from 'react';

const Blog = () => {
    return (
        <div className='text-center mt-8 p-10'>
            <div className='bg-white shadow-lg p-10 lg:w-[1000px] block mx-auto rounded-lg mb-10' data-aos="fade-left"
                data-aos-anchor="#example-anchor"
                data-aos-offset="500"
                data-aos-duration="500">
                <h2 className='text-2xl lg:text-4xl font-bold'>What is cors?</h2>
                <p className='text-lg mt-5 font-semibold'>Cross-origin resource sharing is a mechanism that allows restricted resources on a web page to be requested from another domain outside the domain from which the first resource was served. A web page may freely embed cross-origin images, stylesheets, scripts, iframes, and videos.</p>
            </div>

            <div className='bg-white shadow-lg p-10 lg:w-[1000px] block mx-auto rounded-lg  mb-10' data-aos="fade-left"
                data-aos-anchor="#example-anchor"
                data-aos-offset="500"
                data-aos-duration="500">
                <h2 className='text-2xl lg:text-4xl font-bold mt-12'>Why are you using firebase? What other options do you have to implement authentication?</h2>
                <p className='text-lg mt-5 font-semibold'>The Firebase Realtime Database lets you build rich, collaborative applications by allowing secure access to the database directly from client-side code. Data is persisted locally, and even while offline, realtime events continue to fire, giving the end user a responsive experience. Usually, authentication by a server entails the use of a user name and password. Other ways to authenticate can be through cards, retina scans, voice recognition, and fingerprints.</p>
          </div>

            <div className='bg-white shadow-lg p-10 lg:w-[1000px] block mx-auto rounded-lg mb-10' data-aos="fade-left"
                data-aos-anchor="#example-anchor"
                data-aos-offset="500"
                data-aos-duration="500">
                <h2 className='text-2xl lg:text-4xl font-bold mt-12'> How does the private route work?</h2>
                <p className='text-lg mt-5 font-semibold'>The react private route component renders child components which is also known as Children if the user is logged in. If not logged in the user is redirected to the /login page with the return url passed in the location state property.</p>
          </div>
            
            <div className='bg-white shadow-lg p-10 lg:w-[1000px] block mx-auto rounded-lg' data-aos="fade-left"
                data-aos-anchor="#example-anchor"
                data-aos-offset="500"
                data-aos-duration="500">
                <h2 className='text-2xl lg:text-4xl font-bold mt-12'>What is Node? How does Node work?</h2>
                <p className='text-lg mt-5 font-semibold'>Node. js is a JavaScript runtime environment that achieves low latency and high throughput by taking a “non-blocking” approach to serving requests. In other words, Node. js wastes no time or resources on waiting for I/O requests to return.</p>
           </div>
        </div>
    );
};

export default Blog;