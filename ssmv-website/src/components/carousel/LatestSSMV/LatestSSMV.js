import React,{useState,useEffect} from 'react';
import './LatestSSMV.css';
import { LatestData, responsive } from "./LatestData";
import LatestItem from "./LatestItem";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
<<<<<<< HEAD
import axios from 'axios';
=======
import Create from '../../CRUD/Create/Create';
>>>>>>> 4ff6d0cb05a4dfc970c9240c06bb4245985750d6

const LatestSSMV = () => {
  const [latestData, setLatestData] = useState([]);

  useEffect(() => {
    axios.get('https://test-moid.vercel.app/ssmv/alumni/latest/')
      .then(response => {
        const { alumni_latest } = response.data;
        setLatestData(alumni_latest);
      })
      .catch(error => {
        console.error('Error fetching latest data:', error);
      });
  }, []);

  return (
    <>
<<<<<<< HEAD
      <h2 id='Latest'>Latest @SSMV</h2>
      <div className='Latest-container'>
        <Carousel responsive={responsive}>
          {latestData.map(latestItem => (
            <div className="card2" key={latestItem._id}>
              <div className="body-section">
                <h3>{latestItem.name}</h3>
                <p>{latestItem.description}</p>
              </div>
              <img className="img-section" src={latestItem.imagesurl} alt="" />
            </div>
          ))}
        </Carousel>
      </div>
=======
    <h2 id='Latest'>Latest @SSMV <Create url={'/add-item/Image-Desc'}/></h2>
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
>>>>>>> 4ff6d0cb05a4dfc970c9240c06bb4245985750d6
    </>
  );
};

export default LatestSSMV;


{/* <a href='/add-item/Image-Desc'><button className='add-btn'>Add</button></a> */}


