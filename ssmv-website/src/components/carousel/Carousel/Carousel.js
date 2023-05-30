// import React, { useState } from 'react';
// import './Carousel.css';

// const Carousel = ({ cards }) => {
//   const [activeCard, setActiveCard] = useState(0);

//   const handleCardHover = (index) => {
//     setActiveCard(index);
//   };

//   return (
//     <div className="carousel">
//       {cards.map((card, index) => (
//         <div
//           key={index}
//           className={`card ${activeCard === index ? 'active' : ''}`}
//           onMouseOver={() => handleCardHover(index)}
//         >
//           {card}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Carousel;
