import React, {useEffect, useState} from 'react';
import BallPit from './components/BallPit';
import Main from './components/Main';
import Title from './components/Title';
import Cursor from './components/Cursor';
import { useScroll } from 'framer-motion';

export default function App() {
  const [pageNumber, setPageNumber] = useState(0);
  
  const pageNumberFilter = (prevInt, delta) => {
    if (prevInt === 0 && delta < 0) {
      return prevInt;
    } else if (prevInt === 3 && delta > 0) {
      return prevInt;
    } else {
      return prevInt + delta / 2
    }
  }

  useEffect(() => {
    window.addEventListener("wheel", event => {
      const delta = Math.sign(event.deltaY);
      setPageNumber(prevInt => pageNumberFilter(prevInt, delta ));
      console.info(delta);
    });
  }, [])

  // useEffect(() => {
  //   console.log(pageNumber);
  // }, [pageNumber])
  
  return (
    <>
      <Cursor />
      <Title />
      <BallPit/>
      <Main pageNumber={pageNumber} setPageNumber={setPageNumber}/>
    </>
  )
}
