// EventDetail.js
import React from 'react';
import LikeButton from './LikeButton';

const EventDetail = ({ event }) => {
  return (
    <div>
      <h2>{event.title}</h2>
      <p>{event.description}</p>
      <p>Date: {event.date}</p>
      <p>Location: {event.location}</p>
      <img src={event.image} alt={event.title} />
      <LikeButton eventId={event.id} />
    </div>
  );
};

export default EventDetail;
