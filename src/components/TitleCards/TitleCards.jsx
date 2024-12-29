import React, { useEffect, useRef, useState } from 'react'
import './TitleCards.css'
import cards_data from '../../assets/cards/Cards_data'


const TitleCards = ({title, category}) => {

  // States
  const [apiData,setApiData] = useState([])
  const cardsRef = useRef();


  // handler
  const handleWheel = (event)=>{
    event.preventDefault();
    cardsRef.current.scrollLeft += event.deltaY;
  }


  // Api
  useEffect(()=>{

    fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing" }?language=en-US&page=1`, options)
    .then(res => res.json())
    .then(res => setApiData(res.results))
    .catch(err => console.error(err));


    cardsRef.current.addEventListener('wheel', handleWheel);
  },[])


  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NDYzYjdiYTdmZTAwZDI1M2E0OGEzYTNhZmE0NTUwNiIsIm5iZiI6MTcyNzA4ODQxNi42MTMsInN1YiI6IjY2ZjE0NzIwMDIyMDhjNjdjODhkMTU2NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Nuafqc0sMcvTd5OW8fNiSN_35veMqRE6txtLZYTPZSE'
    }
  };
  
  






  return (
    <div className='title-cards'>
        <h2>{title? title : "Popular on Netflix"}</h2>

        <div className="card-list" ref={cardsRef}>
          {apiData.map((card, index)=>{
            return <div className="card" key={index}>
              <img src={`https://image.tmdb.org/t/p/w500`+card.backdrop_path} alt="not found" />
              <p>{card.original_title}</p>
            </div>
          })}
        </div>
    </div>
  )
}

export default TitleCards