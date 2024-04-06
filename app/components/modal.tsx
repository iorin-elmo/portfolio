import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import Modal from 'react-modal';

export default function DescModal(props:{title: String, descriptions: String, link: String}) {
  const [isOpen, setModal] = useState(false);
  const modalStyle: Modal.Styles = {
    content: {
      position: 'fixed',
      top: '25%',
      left: '25%',
      width: '50%',
      height: '50%'
    }
  }

  return (
    <div>
      <button onClick = {() => setModal(true)}>
        {props.title}
      </button>
      <Modal
          isOpen = {isOpen}
          onRequestClose = {() => setModal(false)}
          style = {modalStyle}
      >
        <div className='text-black'>
          <h1>{props.title}</h1>
          <div>
            descriptions:{props.descriptions}
          </div>
          <div>
            link:
            <a
              href={props.link}
              className='text-blue-600 underline'
            >
              {props.link}
            </a>
          </div>
        </div>
      </Modal>
    </div>
  );
};