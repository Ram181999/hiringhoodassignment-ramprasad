import React from 'react'
import ChooseStateComponents from './ChooseState';
import WeekInfoCardComponents from "./weekinfoCard/index";
import HumidityComponents from './Humidity';
import LeftComponents from './Left';

const Home = () => {
  return (
    <>
      <div className='homeWrap'>
      <div className='weatherSection'>
        <LeftComponents/>
        <div className='rigthside'>
            <ChooseStateComponents/>
            <WeekInfoCardComponents/>   
            <HumidityComponents/>
        </div>
      </div>
      
      </div>
    </>
  );
}

export default Home