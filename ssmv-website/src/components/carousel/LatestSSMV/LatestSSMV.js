import React from 'react';
import './LatestSSMV.css';
import { LatestData, responsive } from "./LatestData";
import LatestItem from "./LatestItem";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const LatestSSMV = () => {

  const Latest = LatestData.map((item) => (
    <LatestItem
      title={item.Title}
      url={item.imageurl}
      body={item.body}
    />
  ));

  return (
    <>
    <h2 id='Latest'>Latest @SSMV</h2>
    <div className='Latest-container'>
      {/* <div className='latest-sub-container'>
        <div className='body-cont'>
            <h3>NEWS NAME</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asp</p>
        </div>
        <div className='image-cont'><img src='' alt=''/></div>
      </div> */}
      <Carousel responsive={responsive}>
        {Latest}
      </Carousel>
    </div>
    </>
  )
}

export default LatestSSMV;

