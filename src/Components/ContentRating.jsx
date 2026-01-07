
import React, { Component } from 'react';
import './ContentRating.css';

class ContentRating extends Component {
  constructor() {
    super();
     this.state = {
      likes: 0,
      dislikes: 0
    };
  }
  render() {
    return (
     <>
    <div className='content-rating'>
    <p>
    i am happy because i am sad
    </p>
     <div className='rating-buttons'></div>
    </div>
     </>
    );
  }
}

export default ContentRating;
