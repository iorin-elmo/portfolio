import React from 'react';
import {Link} from 'react-router-dom';
import Modal from 'react-modal';
import DescModal from './modal';

export default function Home() {

  return (
    <main>
      <header className='bg-green-400 justify-center flex'>
        <div className='header'>
          iorin a.k.a. GochiusaLover
        </div>
      </header>
      <div className='bg-blue-300'>
        <h1>link</h1>
        <div>
        </div>
        <h1>skill</h1>
        <div>
          <ul>
            <li>
              <a href='https://github.com/iorin-elmo'>
                github
              </a>
            </li>
          </ul>
        </div>
        <h1>work</h1>
        <div>
          <ul>
            <li>
              <DescModal
                title = 'ChaosTheory'
                link = 'https://iorin-elmo.github.io/elm-ChaosTheory'
                descriptions = 'Attractor simulation of Chaos Theory using Elm'
              />
            </li>
            <li>
              <DescModal
                title = "Langton's Ant"
                link = 'https://iorin-elmo.github.io/elm-LangtonsAnt'
                descriptions = 'langtons ant'
              />
            </li>
          </ul>
        </div>
      </div>
      <Link to="/test">test</Link>
      <br/>
      <Link to="/sankai">sankai</Link><br/>
      <Link to="/yonkai">yonkai</Link>
      <footer className='bg-green-400 justify-center flex'>
        <a href='#top'>back to top</a>
      </footer>
    </main>
  );
}