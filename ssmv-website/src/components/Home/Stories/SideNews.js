import React, { useState,useEffect } from "react";
import "./SideNews.css";
import MainNews from "./MainNews";
import Delete from "../../CRUD/Delete/Delete";
import Update from "../../CRUD/Update/Update";
import Create from "../../CRUD/Create/Create";
import Card from './Card';


const SideNews = (props) => {
  var{api,NewsId}=props;
  api=api+NewsId+'/';
  const [mainNewsId, setMainNewsId] = useState(0);
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(api);
        const data = await response.json();

        if (data.success && data[NewsId] && data[NewsId].length > 0) {
          setNews(data[NewsId]);

        }
      } catch (error) {
        console.error('Error fetching news data:', error);
      }
    };
    fetchData();
  }, [api,NewsId]);

  useEffect(() => {
    if (news.length > 0) {
      setMainNewsId(news[0]._id);
    }
  }, [news,NewsId]);

  const renderNews = () => {
      return (
        <div className="side-news">
          <Create {...props} api={api} />
          {news?.map((item) => {
            return (item._id!==mainNewsId && 
              <div onClick={() => {setMainNewsId(item._id);}} key={item._id}>
                <Card items={item} key={item._id} />
                <Delete {...props} api={api+item._id}/> 
                <Update {...props} api={api+item._id} data={item}/>
              </div>
            );
          })}
        </div>
      );
  };

  return (
    <>
      {mainNewsId && <MainNews {...props} api={api} items={news.filter((item) => item._id === mainNewsId)[0]} />}
      {renderNews()}
    </>
  );
};

export default SideNews;