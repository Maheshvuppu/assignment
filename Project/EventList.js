// EventList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import EventDetail from './EventDetail';

const EventList = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios.get('/api/events/')
      .then(response => {
        setEvents(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h1>Events</h1>
      {events.map(event => (
        <EventDetail key={event.id} event={event} />
      ))}
    </div>
  );
};

export default EventList;
