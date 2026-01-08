
import React, { Component } from 'react';
import './ContentRating.css';

class ContentRating extends Component {
  constructor() {
    super();
     this.state = {
      likes: 0,
      dislikes: 0,
      totalRatings: 0,
//  event handlers
    handleLike: () => {
        this.setState((prevState) => ({
          likes: prevState.likes + 1,
          totalRatings: prevState.totalRatings + 1
        }));

      },
    handleDislike: () => {
        this.setState((prevState) => ({
          dislikes: prevState.dislikes + 1,
          totalRatings: prevState.totalRatings + 1
        }));
      }
  }
}
  render() {
    return (
     <>
       <div className='content-rating'>
        <p>
        i am happy
        </p>
        <div className='rating-buttons'>
        <button className="like-button" onClick={this.state.handleLike}>
            Like ({this.state.likes})
          </button>
          <button className="dislike-button" onClick={this.state.handleDislike}>
            Dislike ({this.state.dislikes})
          </button>
        </div>
       
        <p>Total Ratings: ({this.state.totalRatings})</p>
        
    </div>
     </>
    );
  }
}
export default ContentRating;
// In the above code, the arrow functions, handleLike and handleDislike, are called when the user clicks the "like" or "dislike" button, respectively.
// The functions utilize the setState method to update the component's state. Inside setState, the previous state (prevState) is accessed, which holds the previous state of the component before the update.
// Then the likes or dislikes count is incremented by one and set as the new state value.
// This ensures that each button click accurately updates the corresponding count in the component's state.