import React, { useState,useEffect } from "react";
import "../News/SideNews.css";
import MainNews from "./MainNews";
import Delete from "../CRUD/Delete/Delete";
import Update from "../CRUD/Update/Update";
import Create from "../CRUD/Create/Create";
import Card from './Card';

import "../CRUD/Create/Create.css";

// const Card = (props) => {
//   return (
//     <div className="cardlist">
//       <img src={props.value.img} alt="img" width="100px" height="100px" className="img1" />
//       <div className="text">
//         <p className="date">{props.value.date}</p>
//         <p className="desc">
//           <b className="side-bold">{props.value.desc}</b>
//         </p>
//         <Delete />
//         <Update />
//       </div>
//     </div>
//   );
// };

// const SideNews = (props) => {
//   const [mainNewsId, setMainNewsId] = useState(0);

//   const news = [
//     {
//       img: "https://source.unsplash.com/random/?500x500news",
//       date: "24th July 2020",
//       desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//     },
//     {
//       img: "https://source.unsplash.com/random/150x150/?news",
//       date: "24th July 2001",
//       desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//     },
//     {
//       img: "https://source.unsplash.com/random/150x150/?news",
//       date: "24th July 2001",
//       desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//     },    {
//       img: "https://source.unsplash.com/random/150x150/?news",
//       date: "24th July 2001",
//       desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//     },
//     {
//       img: "https://source.unsplash.com/random/150x150/?news",
//       date: "24th July 2001",
//       desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//     }
//   ];

//   const renderNews = () => {
//     if (props.NewsId === "HomeNews") {
//       return (
//         <div className="side-news">
//           <Create url={'/add-item/news'} />
//           {news.map((item, index) =>
//             index === mainNewsId ? null : (
//               <div onClick={() => setMainNewsId(index)}>
//                 <Card value={item} key={index} />
//               </div>
//             )
//           )}
//         </div>
//       );
//     } else if (props.NewsId === "VideoNews") {
//       return (
//         <div className="side-news">
//           <Create url={'/add-item/news'} />
//           {news.map((item, index) =>
//             index === mainNewsId ? null : (
//               <div onClick={() => setMainNewsId(index)}>
//                 <Card value={item} key={index} />
//               </div>
//             )
//           )}
//         </div>
//       );
//     } else if (props.NewsId === "PlaylistNews") {
//       return (
//         <div className="side-news">
//           <Create url={'/add-item/news'} />
//           {news.map((item, index) =>
//             index === mainNewsId ? null : (
//               <div onClick={() => setMainNewsId(index)}>
//                 <Card value={item} key={index} />
//               </div>
//             )
//           )}
//         </div>
//       );
//     } else if (props.NewsId === "CommunityNews") {
//       return (
//         <div className="side-news">
//           <Create url={'/add-item/news'} />
//           {news.map((item, index) =>
//             index === mainNewsId ? null : (
//               <div onClick={() => setMainNewsId(index)}>
//                 <Card value={item} key={index} />
//               </div>
//             )
//           )}
//         </div>
//       );
//     } else if (props.NewsId === "ChannelNews") {
//       return (
//         <div className="side-news">
//           <Create url={'/add-item/news'} />
//           {news.map((item, index) =>
//             index === mainNewsId ? null : (
//               <div onClick={() => setMainNewsId(index)}>
//                 <Card value={item} key={index} />
//               </div>
//             )
//           )}
//         </div>
//       );
//     }
//     return null;
//   };

//   return (
//     <>
//       <div className="side-news" items={news}></div>
//       {news.map((item, index) =>
//         index === mainNewsId ? <MainNews items={item} /> : null
//       )}
//       {renderNews()}
//     </>
//   );
// };

// export default SideNews;
// import React, { useState, useEffect } from 'react';
// import Card from './Card';
// import Create from './Create';
// import MainNews from './MainNews';

const SideNews = (props) => {
  const [mainNewsId, setMainNewsId] = useState(0);
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://test-moid.vercel.app/ssmv/news/');
        const data = await response.json();

        if (data.success && data.news && data.news.length > 0) {
          setNews(data.news);
        }
      } catch (error) {
        console.error('Error fetching news data:', error);
      }
    };

    fetchData();
  }, []);

  const renderNews = () => {
    if (props.NewsId === "HomeNews" || props.NewsId === "VideoNews" || props.NewsId === "PlaylistNews" || props.NewsId === "CommunityNews" || props.NewsId === "ChannelNews") {
      return (
        <div className="side-news">
          <Create url={'/add-item/news'} />
          {news.map((item, index) => {
            if (index === mainNewsId) return null;
            return (
              <div onClick={() => setMainNewsId(index)} key={index}>
                <Card value={item} /> <Delete/><Update/>
              </div>
            );
          })}
        </div>
      );
    }
    return null;
  };

  return (
    <>
      {/* <div className="side-news" items={news}></div> */}
      {news.map((item, index) =>
        index === mainNewsId ? <MainNews items={item} /> : null
      )}
      {renderNews()}
    </>
  );
};

export default SideNews;
