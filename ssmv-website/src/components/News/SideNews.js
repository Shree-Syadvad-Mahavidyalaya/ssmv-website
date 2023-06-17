import React, { useState,useEffect } from "react";
import "../News/SideNews.css";
import MainNews from "./MainNews";
import Delete from "../CRUD/Delete/Delete";
import Update from "../CRUD/Update/Update";
import Create from "../CRUD/Create/Create";
import axios from 'axios';
import "../CRUD/Create/Create.css";

const Card = (props) => {
  return (
    <>
    <Update url={'/add-item/EditNews'} id={props.value._id}/><Delete/>
    <div className="cardlist">
      
      <img src={props.value.imagesurl} alt="img" width="100px" height="100px" className="img1" />
      <div className="text">
        <p className="date">{props.value.date}</p>
        <p className="desc">
          <b className="side-bold">{props.value.description}</b>
        </p>
      </div>
    </div>
    </>
  );
};

const SideNews = (props) => {
  const [mainNewsId, setMainNewsId] = useState(0);
  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = async () => {
    try {
      const response = await fetch("https://test-moid.vercel.app/ssmv/news/");
      const data = await response.json();
      if (response.ok) {
        setNewsData(data.news);
      } else {
        console.error("Failed to fetch news data");
        // Handle errors or display error messages
      }
    } catch (error) {
      console.error("Error fetching news data:", error);
      // Handle errors or display error messages
    }
  };

  const renderNews = () => {
    if (props.NewsId === "HomeNews") {
      return (
        <div className="side-news">
          <Create url={"/add-item/news"} />
          {newsData.map((item, index) =>
            index === mainNewsId ? null : (
              <div onClick={() => setMainNewsId(index)}>
                <Card value={item} key={index} />
              </div>
            )
          )}
        </div>
      );
    } else if (
      props.NewsId === "VideoNews" || props.NewsId === "PlaylistNews" || props.NewsId === "CommunityNews" || props.NewsId === "ChannelNews"
    ) {
      return (
        <div className="side-news">
          <Create url={"/add-item/news"} />
          {newsData.map((item, index) =>
            index === mainNewsId ? null : (
              <div onClick={() => setMainNewsId(index)}>
                <Card value={item} key={index} />
              </div>
            )
          )}
        </div>
      );
    }
    return null;
  };

  return (
    <>
      <div className="side-news" items={newsData}></div>
      {newsData.map((item, index) =>
        index === mainNewsId ? <MainNews items={item} /> : null
      )}
      {renderNews()}
    </>
  );
};

export default SideNews;


// const Card = (props) => {
//   return (
//     <>
//     <Update url={'/add-item/EditNews'} id={props.value._id}/><Delete/>
//     <div className="cardlist">
      
//       <img src={props.value.imagesurl} alt="img" width="100px" height="100px" className="img1" />
//       <div className="text">
//         <p className="date">{props.value.date}</p>
//         <p className="desc">
//           <b className="side-bold">{props.value.description}</b>
//         </p>
//       </div>
//     </div>
//     </>
//   );
// };


// const SideNews = (props) => {
//   const [mainNewsId, setMainNewsId] = useState(0);

//   const news = [
//     {
//       img: "https://source.unsplash.com/random/?500x500news",
//       date: "24th July 2020",
//       description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//     },
//     {
//       img: "https://source.unsplash.com/random/150x150/?news",
//       date: "24th July 2001",
//       description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//     },
//     {
//       img: "https://source.unsplash.com/random/150x150/?news",
//       date: "24th July 2001",
//       description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//     },    {
//       img: "https://source.unsplash.com/random/150x150/?news",
//       date: "24th July 2001",
//       description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//     },
//     {
//       img: "https://source.unsplash.com/random/150x150/?news",
//       date: "24th July 2001",
//       description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
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
