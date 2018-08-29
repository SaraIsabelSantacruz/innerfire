import React from 'react';
import './article.css'
function ArticleContainer(props){
  return(
    <div className='article-container'>
      {props.children}
    </div>
  )
}

export default ArticleContainer;
