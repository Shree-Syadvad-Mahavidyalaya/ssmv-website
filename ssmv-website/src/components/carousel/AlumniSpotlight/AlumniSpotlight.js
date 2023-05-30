import React from 'react';
import './AlumniSpotlight.css';
import ASTIndiv from './ASTIndiv';
import Carousel from 'react-material-ui-carousel'
// import { Paper, Button } from '@mui/material'
import { AlumData} from "./DataAlum";
// import { productData} from "../../events/Data";
// import EventsIndiv from "../../events/EventsIndiv";

const AlumniSpotlight = () => {
  
  const data = AlumData.map((item) => (
    <ASTIndiv
      name={item.name}
      url={item.imageurl}
      designation={item.designation}
    />
  ));
  // console.log(data_alum);
  // const product = productData.map((item) => (
  //   <EventsIndiv
  //     name={item.name}
  //     url={item.imageurl}
  //     price={item.price}
  //     description={item.description}
  //   />
  // ));

  return (
    <div className="Alumni-container">
      <h1 id='alum'>Alumni Spotlight</h1>
      <Carousel sx = {{ width : " 200px" }}>
      {data}
      </Carousel>
      <div className='alumni-about'><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asp</p></div>
    </div>
  );
}

export default AlumniSpotlight;
