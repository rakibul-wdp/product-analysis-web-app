import React from 'react';
import './Blogs.css';

const Blogs = () => {
  return (
    <div className='blog-container'>
      <div className='single-blog-container'>
        <h2 className='blog-question'>What is Context Api...???</h2>
        <p className='blog-para'>
          Context is another way of props drilling. Also it's more than powerful related to props drilling. Context API
          is a way for a React app to effectively produce global variables that can be passed around or any where in
          react components. When we use prop drilling like a tree or parent to child components for passing data one
          components to another components. It's a boring and lengthy process because every components need to pass
          data. But if we use context api for another way of props drilling, it pass data without props. Actually its a
          way to pass data to child components or any others components without pass props every level. And it's so
          powerful because it not only pass props or simple data but also pass any kind of function, array, object,
          variable or many types of data. We can use it by calling createContext with a default value and some simple
          step. Context api share values in between components without having to easily pass a prop through every level
          of the tree.
        </p>
      </div>
      <div className='single-blog-container'>
        <h2 className='blog-question'>What is Semantic Elements or Tags...???</h2>
        <p className='blog-para'>In one sentence, semantic elements means a element with a meaning. What is meaning? Meaning means when we use semantic element it's tell us which type of code or which type of work doing in this element. A semantic element easily and clearly describe its works or meaning to a developer and also browser. Let's see example. If we use use div or span tag, it's tells nothing about in this content. But when we use semantic element like header, nav main, footer etc. its clearly describe about its content. Some example with case wise. Section element use for chapters, introduction, contact information. Article element used for blog posts, user comments, product cards. Footer is more than clear element, its use for copyright info, contact info, authorship info. Nav tag use in header tag for set of navigation links. Other semantic element is article, aside, details, header, main, summary etc. So semantic element are clearly describe their meaning in a developer and also machine. </p>
      </div>
      <div className='single-blog-container'>
        <h2 className='blog-question'>About Inline, Block, Inline-block element</h2>
        <p className='blog-para'>Block-level elements consume full width of available. It starts new line and add some space before and after element. Block elements example are h1 to h6, p, div, ul etc.</p>
        <p className='blog-para'>Inline elements contain exact their content. It doesn't start new line. It takes as much width as necessary. In inline element can't set width or height.</p>
        <p className='blog-para'>Inline-block elements just like inline element, where it doesn't start new line. But it take width and height value. It is the main difference between inline and inline-block elements.</p>
      </div>
    </div>
  );
};

export default Blogs;