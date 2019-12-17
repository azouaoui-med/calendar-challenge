import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import withDragAndDrop from 'react-big-calendar/lib/addons/dragAndDrop';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import 'react-big-calendar/lib/addons/dragAndDrop/styles.css';
import '../../scss/calendar/calendar.scss';
import Event from './Event/Event';
import Toolbar from './Toolbar/Toolbar';
import Oval from '../../components/Oval/Oval';
import EventModal from './EventModal/EventModal';
import eventsList from './eventsList';

const localizer = momentLocalizer(moment);
const DnDCalendar = withDragAndDrop(Calendar);

const BigCalendar = () => {
  /**
   * The intial event will be used in the model to initialize the values
   */
  const intialEvent = {
    start: new Date(),
    end: new Date(),
    title: '',
    className: 'event-primary-fill',
  };

  const [events, setEvents] = useState(eventsList);
  const [showModal, setShowModal] = useState(false);
  const [event, setevent] = useState(intialEvent);

  /**
   * This function wil be called when the solt(day box) is clicked
   */
  const handleSelectSlot = ({ start, end }) => {
    setevent({ ...intialEvent, start, end });
    setShowModal(true);
  };

  /**
   * This function will be called when the Oval button is clicked
   */
  const hanldeOvalClick = () => {
    setevent(intialEvent);
    setShowModal(true);
  };

  /**
   * This function wil be called when selecting an exisiting event
   */
  const handleSelectEvent = selectdEvent => {
    setevent(selectdEvent);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  /**
   * save event will be called from the modal event
   */
  const handleSaveEvent = () => {
    const eventsToSave = [...events];
    if (event.id) {
      const index = eventsToSave.findIndex(
        eventItem => eventItem.id === event.id,
      );
      eventsToSave[index] = event;
    } else eventsToSave.push({ ...event, id: events.length + 1 });
    setEvents(eventsToSave);
    setShowModal(false);
  };

  /**
   * any changes that happens in the modal event will call this function to update the event state
   * with the new event object
   */
  const handleChangeEvent = eventObject => {
    setevent(eventObject);
  };

  /**
   * update the event list when droping the event box
   */
  const handleEventDrop = eventObject => {
    const eventsToUpdate = [...events];
    const index = eventsToUpdate.findIndex(
      eventItem => eventItem.id === eventObject.event.id,
    );
    eventsToUpdate[index] = {
      ...eventObject.event,
      start: eventObject.start,
      end: eventObject.end,
    };
    setEvents(eventsToUpdate);
  };

  return (
    <div className="calendar">
      <DnDCalendar
        localizer={localizer}
        defaultDate={new Date()}
        defaultView="month"
        selectable
        onSelectSlot={handleSelectSlot}
        events={events}
        style={{ height: '100%' }}
        onEventDrop={handleEventDrop}
        onSelectEvent={handleSelectEvent}
        components={{
          event: Event,
          toolbar: Toolbar,
        }}
      />
      <Oval handleClick={hanldeOvalClick} />
      <EventModal
        closeModal={handleCloseModal}
        show={showModal}
        handleSave={handleSaveEvent}
        handleChange={handleChangeEvent}
        event={event}
      />
    </div>
  );
};

export default BigCalendar;
