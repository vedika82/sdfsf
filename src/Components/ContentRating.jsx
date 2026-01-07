
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
        i am happy
        </p>
        <div className='rating-buttons'>
        <button className="like-button">
            Like ({this.state.likes})
          </button>
          <button className="dislike-button">
            Dislike ({this.state.dislikes})
          </button>
        </div>
    </div>
     </>
    );
  }
}

export default ContentRating;
