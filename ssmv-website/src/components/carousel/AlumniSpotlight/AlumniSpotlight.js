import React from 'react';
import './AlumniSpotlight.css';
import ASTIndiv from './ASTIndiv';
import Carousel from 'react-material-ui-carousel'
import { AlumData} from "./DataAlum";
import Create from '../../CRUD/Create/Create';

const AlumniSpotlight = () => {
  
  const data = AlumData.map((item) => (
    <ASTIndiv
      name={item.name}
      url={item.imageurl}
      designation={item.designation}
      description={item.description}
    />
  ));
  return (
    <>
      <h2 id='alum'>Alumni Spotlight <Create url={'/add-item/alumni-details'}/></h2>
      <Carousel>
      {data}
      </Carousel>
    </>
  );
}

export default AlumniSpotlight;
