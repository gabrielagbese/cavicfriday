import React from 'react';
import { ReactEmbeddedGoogleCalendar } from 'react-embedded-google-calendar';



export default function Events() {
  return (
    <div className='events-wrapper'>
        <div className='events-side'>
          <p className='events-name'> Events</p>
          <p className='upcoming-title'> Upcoming Event:</p>
          <p className='upcoming-event'> Gallery Exhibition</p>
          <p className='upcoming-date'> 1st January 2001</p>
          <div className='calendar'>
            <ReactEmbeddedGoogleCalendar publicUrl ="https://calendar.google.com/calendar/embed?src=cavicnigeriainfo%40gmail.com&ctz=UTC"/>
          </div>
        </div>
        <div className='events-list'>
            <div className='event-item'>1</div>
            <div className='event-item'>2</div>
            <div className='event-item'>3</div>
            <div className='event-item'>4</div>
            <div className='event-item'>5</div>
            <div className='event-item'>6</div>
            <div className='event-item'>7</div>
            <div className='event-item'>8</div>
        </div>
    </div>
  )
}
