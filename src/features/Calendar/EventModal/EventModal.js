import React from 'react';
import moment from 'moment';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import PropTypes from 'prop-types';

const propTypes = {
  show: PropTypes.bool.isRequired,
  event: PropTypes.objectOf(PropTypes.any).isRequired,
  closeModal: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSave: PropTypes.func.isRequired,
};

const EventModal = ({ show, closeModal, event, handleChange, handleSave }) => {
  const handleClose = () => closeModal();
  /**
   * List of tag styles that will be used when adding an event
   */
  const tags = [
    'event-primary-fill',
    'event-success-fill',
    'event-warning-fill',
    'event-primary',
    'event-success',
    'event-warning',
  ];

  return (
    <>
      <Modal className="event-modal" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add event</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Event title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter event title"
                value={event.title}
                onChange={e =>
                  handleChange({ ...event, title: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Event start date</Form.Label>
              <Form.Control
                type="date"
                value={moment(event.start).format('YYYY-MM-DD')}
                onChange={e =>
                  handleChange({
                    ...event,
                    start: e.target.value,
                  })
                }
              />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Event end date</Form.Label>
              <Form.Control
                type="date"
                value={moment(event.end).format('YYYY-MM-DD')}
                onChange={e => handleChange({ ...event, end: e.target.value })}
              />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Choose a tag</Form.Label>
              <ButtonToolbar>
                <ToggleButtonGroup
                  type="radio"
                  name="options"
                  defaultValue={tags[0]}
                >
                  {tags.map(tag => (
                    <ToggleButton
                      className={`tag ${tag}`}
                      value={tag}
                      key={tag}
                      onChange={e =>
                        handleChange({ ...event, className: e.target.value })
                      }
                    />
                  ))}
                </ToggleButtonGroup>
              </ButtonToolbar>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

EventModal.propTypes = propTypes;

export default EventModal;
