import React from 'react';

const Blog = () => {
    return (
        <div className='px-16 bg-base-200'>
            <h1 className='text-3xl text-center font-bold text-secondary'>Question and Answer</h1>
            {/* qus1 */}
            <div className='pt-6'>
                <h1 className='text-xl font-bold '>1. How will we improve the performance of a React Application?</h1>
                <span className='pl-4 font-bold'>i.Using Immutable Data Structures</span>
                <p>Data immutability is not an architecture or design pattern, it's an opinionated way of writing code. This forces you to think about how you structure your application data flow. In my opinion, data immutability is a practice that revolves around a strict unidirectional data flow.</p>
                <span className='pl-4 font-bold'>ii.Using Production Mode Flag in Webpack</span>
                <p>If we are using webpack 4 as a module bundler for our app, we can consider setting the mode option to production. This basically tells webpack to use the built-in optimization.</p>

                <span className='pl-4 font-bold'>iii. Dependency optimization</span>
                <p>When considering optimizing the application bundle size, it's worth checking how much code you are actually utilizing from dependencies. For example, you could be using Moment.js which includes localized files for multi-language support. If you don't need to support multiple languages, then you can consider using moment-locales-webpack-plugin to remove unused locales for your final bundle.</p>

                <span className='pl-4 font-bold'>iv. Avoid Inline Function Definition in the Render Function.</span>
                <p>Since functions are objects in JavaScript, the inline function will always fail the prop diff when React does a diff check. Also, an arrow function will create a new instance of the function on each render if it's used in a JSX property. This might create a lot of work for the garbage collector.</p>

                <span className='pl-4 font-bold'>iv.Spreading props on DOM elements.</span>

                <p>we should avoid spreading properties into a DOM element as it adds unknown HTML attribute, which is unnecessary and a bad practice.</p>

            </div>

            {/* qus 2 */}
            <div className='py-6'>
                <h1 className='text-xl font-bold '>2.What are the different ways to manage a state in a React application?</h1>
                <p>The state management libraries available in React at our disposal at the time of this article are enormous. Therefore, knowing what state management library to choose for a particular project not to get carried away by the noise and news from the React community is a significant factor in facilitating the development of an application.</p>

                <span className='font-bold'>Redux</span>
                <p>The first on our list is Redux; It has been around for a while, pretty much the first react-based state management library.
                    The state management library Redux was created to address the problem in our eCommerce app. It provides a JavaScript object called the store, which, once set up, includes all states in your application and updates them when necessary. Here is a simplified visualization of how Redux works.</p>
                <p>Redux is one of the most popular React state management libraries as of the time of this article.
                    In this section, we would look closely into when to use Redux in an application.

                    Firstly, Redux allows you to manage your app's state in a single place and keep changes in your app more predictable and traceable. It makes occurring changes in your app easier to figure out. Unfortunately, all of these benefits come with specific constraints and tradeoffs.
                    Frequently, developers feel using Redux adds up some boilerplate code, making little things seemingly overwhelming; however, that depends solely on the app's architectural decision.

                    One of the easiest ways to know when you genuinely need to use Redux is when managing state locally begins to look messy.
                    As the application grows, so does state sharing across components gets tedious.</p>
            </div>
            {/* ques 3 */}
            <div>
                <h1 className='text-xl font-bold '>3. How does prototypical inheritance work?</h1>
                <p>JavaScript is a prototype-based, Object Oriented programming language.

                    JavaScript is the most common of the prototype-capable languages, and its capabilities are relatively unique. When used appropriately, prototypical inheritance in JavaScript is a powerful tool that can save hours of coding.

                    Simply put, prototypical inheritance refers to the ability to access object properties from another object. We use a JavaScript prototype to add new properties and methods to an existing object constructor. We can then essentially tell our JS code to inherit properties from a prototype. Prototypical inheritance allows us to reuse the properties or methods from one JavaScript object to another through a reference pointer function.</p>
                <p>The Prototype Chain
                    Prototypal inheritance uses the concept of prototype chaining. Let’s explore that concept. Every object created contains [[Prototype]], which points either to another object or null. Envision an object C with a [[Prototype]] property that points to object B. Object B’s [[Prototype]] property points to prototype object A. This continues onward, forming a kind of chain called the prototype chain.

                    This concept is used when searching our code. When we need to find a property in an object, it is first searched for in the object, and if not found, it is searched for on that object’s prototype, and so on. Thus, the entire prototype chain is traversed until the property is found or null is reached.

                    In the following sections, we’ll take a look at some implementations using the handling of accounts in a streaming service.</p>
            </div>
            {/* ques 4 */}
            <div>
                <h1 className='text-xl font-bold '>3. Why you do not set the state directly in React.For example, if you have const[products, setProducts]= useState([]).Why you do not set products =[...]instead, you use the setProducts</h1>
                <p>One should never update the state directly because of the following reasons:</p>
                <p>If we update it directly, calling the setState() afterward may just replace the update you made.</p>
                <p>When we directly update the state, it does not change this.state immediately. Instead, it creates a pending state transition, and accessing it after calling this method will only return the present value.</p>
                <p>we will lose control of the state across all components.</p>

                <h1 className='text-xl font-bold '> Why you do not set products = [...] instead, you use the setProducts</h1>
                <p>Set products mean a new product set in this array. When we are set a new array then we use set products in a state.</p>
                <p>And the spread operator can be used to take an existing array and add another element to it while still preserving the original array. Whe we are updating arrays, combining arrays, or converting node lists into arrays, it is an easy way to get the job done.</p>


            </div>



            {/* ques 5 */}
            <div>
                <h1 className='text-xl font-bold '>5. What is a unit test? Why should write unit tests?</h1>
                What is a unit test? Why should write unit tests?
                <p>UNIT TESTING is a type of software testing where individual units or components of a software are tested. The purpose is to validate that each unit of the software code performs as expected. Unit Testing is done during the development (coding phase) of an application by the developers. Unit Tests isolate a section of code and verify its correctness. A unit may be an individual function, method, procedure, module, or object.</p>
                <p>Unit Testing is important because software developers sometimes try saving time doing minimal unit testing and this is myth because inappropriate unit testing leads to high cost Defect fixing during System Testing, Integration Testing and even Beta Testing after application is built. If proper unit testing is done in early development, then it saves time and money in the end.</p>
            </div>
        </div>
    );
};

export default Blog;