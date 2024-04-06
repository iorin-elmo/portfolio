import React, {useState, useEffect} from 'react';
import Modal from 'react-modal';

export default function Sankai() {
  const msg = "sankaime";
  const [number, setNumber] = useState(1);
  const [squaredNum, setSquaredNum] = useState(1);
  const [isModalOpen, setisModalOpen] = useState(false);

  useEffect(() => {
    setSquaredNum(number ** 2)
  }, [number])

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
    <main>
      <Modal
        isOpen = {isModalOpen}
        onRequestClose={() => setisModalOpen(false)}
        style={modalStyle}
      >
        <div className='text-black'>modal</div>
      </Modal>
      <div>
        {msg}
      </div>
      <button onClick = {() => setNumber(number + 1)}>count</button>
      <div>num:{number}</div>
      <div>sq:{squaredNum}</div>
      <button onClick = {() => setisModalOpen(true)}>
        open modal
      </button>
    </main>
  );
}