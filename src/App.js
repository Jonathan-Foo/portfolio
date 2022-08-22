import React, {useState} from 'react';
import BallPit from './components/BallPit';
import Main from './components/Main';
import Title from './components/Title';
import Cursor from './components/Cursor';

export default function App() {
  const[audio, setAudio] = useState(false);

  return (
    <>
      <Cursor />
      <Title />
      <BallPit audio={audio}/>
      <Main audio={audio}/>
    </>
  )
}
