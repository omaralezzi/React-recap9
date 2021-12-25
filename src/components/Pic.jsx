import { useEffect } from 'react';
import Einstein from '../assets/einstein.jpg';

const Pic = () => {
  useEffect(() => {
    let interval = setInterval(() => {
      console.log('mounted');
    }, 1000);

    return () => {
      clearInterval(interval);
      console.log('unMounted');
    };
  }, []);

  return (
    <aside>
      <img src={Einstein} alt='Einstein' />
    </aside>
  );
};

export default Pic;
