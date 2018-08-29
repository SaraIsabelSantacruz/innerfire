import React, { Component } from 'react';
import ImageBannerArticle from '../../../images/banner-article.jpg'
import BannerContainer from '../../containers/banner-container'
import ArticleContainer from '../../containers/article/article-container'


class Article extends Component {
  render(){

    let article = this.props.data.users[0].post[0].article
    let image = this.props.data.users[0].post[0].image
    let imageUser = this.props.data.users[0].imageUser
    console.log(image);
    let style
    if (this.props.viewport.viewport.width > 768) {
      style = {
        backgroundImage: 'url('+ ImageBannerArticle +')'
      };
    }
    else {
      style = {
        backgroundImage: 'url('+ ImageBannerArticle +')'
      };
    }
    return(
      <div>
        <BannerContainer style={style}>
          <h1 className="hidden-xs">
            How To Be Happy: A Scientific Perspective
          </h1>
          <p>18 SEP 2017</p>
        </BannerContainer>
        <ArticleContainer>
          <div className='article-social'>
            <ul>
              <li><a>tweet</a></li>
              <li><a>face</a></li>
              <li><a>tweet</a></li>
            </ul>
          </div>
          <div className='article-text'>
            <h2>
              And even if you’re reading this on your laptop of PC, there’s one thing I want to ask you: How important is your device to you?
            </h2>
            <p>
              {article}
            </p>
            <img src={image} width='100%'/>
            <p>
              {article}
            </p>
            <div className='article-user'>
              <img src={imageUser}/>
              <div className='articleUser-description'>
                <p>Nombre 1</p>
                <p>Description 1</p>
              </div>
            </div>
            <div className='form-article'>
              <h3>Leave a reply</h3>
              <textarea>
              </textarea>
            </div>
          </div>
          <div className='article-user'>
            <img src={imageUser}/>
            <div className='articleUser-description'>
              <p>Nombre 1</p>
              <p>Description 1</p>
            </div>
          </div>
        </ArticleContainer>
      </div>
    )
  }
}

export default Article;
