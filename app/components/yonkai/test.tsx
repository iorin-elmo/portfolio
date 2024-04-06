import React, {useState, useEffect} from 'react';
import Modal from 'react-modal';

export default function Yonkai() {
  return (
    <main>
      <div className='text-xs md:text-9xl'>
        こんにちは
      </div>
      <div className='hidden md:block'>a</div>
      <div className='md:hidden'>b</div>
    </main>
  );
}