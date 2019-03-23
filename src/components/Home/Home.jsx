import React from 'react';
import HeroComp from '../HeroComp/HeroComp';
import MissionSt from '../MissionSt./MissionSt';
import HeadShotOne from '../HeadShotOne/HeadShotOne';
import HeadShotTwo from '../HeadShotTwo/HeadShotTwo';
import Featured from '../Featured/Featured';


const Home = () => {
    return (
        <>
          <HeroComp />
          <MissionSt />
          <HeadShotOne />
          <HeadShotTwo />
          <Featured />
        </>
    )
}
export default Home;