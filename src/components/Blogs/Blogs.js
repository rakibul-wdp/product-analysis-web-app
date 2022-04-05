import React from 'react';

const Blogs = () => {
  return (
    <div>
      <div>
        <h2>What is Context Api...???</h2>
        <p>
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
      <div>
        <h2>What is </h2>
      </div>
    </div>
  );
};

export default Blogs;