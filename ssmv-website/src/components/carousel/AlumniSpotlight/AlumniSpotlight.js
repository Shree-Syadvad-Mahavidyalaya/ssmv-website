import React from 'react';
import './AlumniSpotlight.css';
import ASTIndiv from './ASTIndiv';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { AlumData, responsive } from "./DataAlum";
import { productData} from "../../events/Data";
import EventsIndiv from "../../events/EventsIndiv";

const AlumniSpotlight = () => {
  
  const data_alum = AlumData.map((alum) => (
    <ASTIndiv
      name={alum.name}
      url={alum.imageurl}
      designation={alum.designation}
    />
  ));

  // const product = productData.map((item) => (
  //   <EventsIndiv
  //     name={item.name}
  //     url={item.imageurl}
  //     price={item.price}
  //     description={item.description}
  //   />
  // ));
  // console.log(product);
  return (
    <div className="Alumni-container">
      <h1 id='alum'>Alumni Spotlight</h1>
      <Carousel responsive={responsive}>
        {data_alum}
      </Carousel>
      <div className='alumni-about'><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asp</p></div>
    </div>
  )
}

export default AlumniSpotlight;
