import React, { useState } from 'react';
import './Reviews.css';
import { FaThumbsUp, FaThumbsDown } from 'react-icons/fa';

const reviews = [
  { name: 'John Doe', rating: 5, comment: 'Great service and fast delivery. The staff was very helpful and the product quality is top-notch.', useful: 5 },
  { name: 'Jane Smith', rating: 4, comment: 'Good selection of products. I found exactly what I was looking for. The delivery was a bit slow, but the product was worth the wait.', useful: 3 },
  { name: 'Bob Johnson', rating: 3, comment: 'Average service. The product was as described, but the delivery took longer than expected.', useful: 4 },
  { name: 'Alice Brown', rating: 5, comment: 'Excellent experience overall. From browsing to checkout, everything was smooth. Highly recommend!', useful: 6 },
  { name: 'Michael Lee', rating: 4, comment: 'Impressed with the range of brands available. Got a great deal on my new phone.', useful: 7 },
  { name: 'Sarah Adams', rating: 2, comment: 'Disappointed with the customer service. It took multiple attempts to get a response regarding my order status.', useful: 1 },
  { name: 'David Wilson', rating: 5, comment: 'Fantastic prices and quick shipping. Will definitely shop here again.', useful: 8 },
  { name: 'Emily White', rating: 3, comment: 'Decent selection, but had some issues with the website loading slowly.', useful: 2 },
  { name: 'James Taylor', rating: 4, comment: 'Overall satisfied with my purchase. The product arrived in good condition and works perfectly.', useful: 3 },
  { name: 'Olivia Martinez', rating: 5, comment: 'Amazing customer support. They went above and beyond to help me resolve an issue with my order.', useful: 4 },
  { name: 'Sophia Clark', rating: 4, comment: 'Had a minor issue with my order, but the customer service team handled it promptly and professionally.', useful: 3 },
  { name: 'Daniel Harris', rating: 5, comment: 'The best electronics store I have ever shopped from. Excellent products and unbeatable prices.', useful: 5 },
  { name: 'Ethan Moore', rating: 3, comment: 'Decent experience. The product arrived on time, but the packaging was damaged.', useful: 2 },
];

export default function Reviews() {
  const [likes, setLikes] = useState(Array(reviews.length).fill(0));
  const [dislikes, setDislikes] = useState(Array(reviews.length).fill(0));
  const [likedComments, setLikedComments] = useState([]);
  const [dislikedComments, setDislikedComments] = useState([]);

  const handleLike = (index) => {
    if (!likedComments.includes(index)) {
      const newLikes = [...likes];
      newLikes[index]++;
      setLikes(newLikes);
      setLikedComments([...likedComments, index]);
      showAlert('You liked this comment');
    } else {
      showAlert('You have already liked this comment');
    }
  };

  const handleDislike = (index) => {
    if (!dislikedComments.includes(index)) {
      const newDislikes = [...dislikes];
      newDislikes[index]++;
      setDislikes(newDislikes);
      setDislikedComments([...dislikedComments, index]);
      showAlert('You disliked this comment');
    } else {
      showAlert('You have already disliked this comment');
    }
  };

  const showAlert = (message) => {
    const alertDiv = document.createElement('div');
    alertDiv.classList.add('alert');
    alertDiv.textContent = message;
    document.body.appendChild(alertDiv);
    setTimeout(() => {
      alertDiv.remove();
    }, 3000);
  };

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < rating; i++) {
      stars.push(<span key={i} className="star">&#9733;</span>);
    }
    return stars;
  };
 return (
    <div className="reviews-container">
      <h1 className="reviews-heading">REVIEWS ABOUT OUR COMPANY</h1>
      {reviews.map((review, index) => (
        <div key={index} className="review">
          <h2>{review.name}</h2>
          <p>{renderStars(review.rating)}</p>
          <p className="comment">{review.comment}</p>
          <p className="useful">{review.useful} people find this useful</p>
          <div className="action-buttons">
            <FaThumbsUp onClick={() => handleLike(index)} className={likedComments.includes(index) ? "like-icon liked" : "like-icon"} />
            <span className="like-count">{likes[index]}</span>
            <FaThumbsDown onClick={() => handleDislike(index)} className={dislikedComments.includes(index) ? "dislike-icon disliked" : "dislike-icon"} />
            <span className="dislike-count">{dislikes[index]}</span>
          </div>
        </div>
      ))}
    </div>
  );
} 