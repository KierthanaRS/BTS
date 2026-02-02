import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useReducer, useRef } from "react"; 

import './Albumpage.scss';
const AlbumPage = () => {
  
  
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const id= urlParams.get('id');
  const [album, setAlbum] = useState(null);
  const [pic1, setPic1] = useState(null);
  const [pic2, setPic2] = useState(null);
  const [pic3, setPic3] = useState(null);
  const [pic4, setPic4] = useState(null);
  const [pic5, setPic5] = useState(null); 
  const [name, setName] = useState(null);
  const [year, setYear] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:5000/album/${id}`);
        const data = await response.json();
        setAlbum(data[0]);
        
        
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [id]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:5000/albumpic/${id}`);
        const data = await response.json();
        setPic1(data[0].cp_1);
        setPic2(data[0].cp_2);
        setPic3(data[0].cp_3);
        setPic4(data[0].cp_4);
        setPic5(data[0].cp_5);
        setName(data[0].NAME);
        setYear(data[0].YEAR);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [id]);
  const slides = [
    {
      title: name,
      subtitle: year,
      description: "Adventure is never far away",
      image: pic1
    },
    {
      title: name,
      subtitle: year,
      description: "Let your dreams come true",
      image: pic2
    },
    {
      title: name,
      subtitle: year,
      description: "A piece of heaven",
      image: pic3
    },
    {
      title: name,
      subtitle: year,
      description: "A piece of heaven",
      image: pic4
    },
    {
      title: name,
      subtitle: year,
      description: "A piece of heaven",
      image: pic5
    }
  ];
  function useTilt(active) {
    const ref = useRef(null);
  
    useEffect(() => {
      if (!ref.current || !active) {
        return;
      }
  
      const state = {
        rect: undefined,
        mouseX: undefined,
        mouseY: undefined
      };
      let el = ref.current;

    const handleMouseMove = (e) => {
      if (!el) {
        return;
      }
      if (!state.rect) {
        state.rect = el.getBoundingClientRect();
      }
      state.mouseX = e.clientX;
      state.mouseY = e.clientY;
      const px = (state.mouseX - state.rect.left) / state.rect.width;
      const py = (state.mouseY - state.rect.top) / state.rect.height;

      el.style.setProperty("--px", px);
      el.style.setProperty("--py", py);
    };
    el.addEventListener("mousemove", handleMouseMove);

    return () => {
      el.removeEventListener("mousemove", handleMouseMove);
    };
  }, [active]);

  return ref;
}
const initialState = {
  slideIndex: 0
};

const slidesReducer = (state, event) => {
  if (event.type === "NEXT") {
    return {
      ...state,
      slideIndex: (state.slideIndex + 1) % slides.length
    };
  }
  if (event.type === "PREV") {
    return {
      ...state,
      slideIndex:
        state.slideIndex === 0 ? slides.length - 1 : state.slideIndex - 1
    };
  }
};
function Slide({ slide, offset }) {
  const active = offset === 0 ? true : null;
  const ref = useTilt(active);

  return (
    <div
      ref={ref}
      className="slide"
      data-active={active}
      style={{
        "--offset": offset,
        "--dir": offset === 0 ? 0 : offset > 0 ? 1 : -1
      }}
    >
      <div
        className="slideBackground"
        style={{
          backgroundImage: `url('${slide.image}')`
        }}
      />
      <div
        className="slideContent"
        style={{
          backgroundImage: `url('${slide.image}')`
        }}
      >
        <div className="slideContentInner">
          <h2 className="slideTitle">{slide.title}</h2>
          <h3 className="slideSubtitle">{slide.subtitle}</h3>
          <p className="slideDescription">{slide.description}</p>
        </div>
      </div>
    </div>
  );
}
const [state, dispatch] = useReducer(slidesReducer, initialState);
  if (!album) {
    return navigate('/notfound');
  }

  return (
    <div className='album-container'>
      <h1 className='album-title'>{album.NAME}</h1>
      <section class="product">
	<div class="product__photo">
		<div class="photo-container">
			<div class="photo-main">
        <img className='album'  src={`${process.env.PUBLIC_URL}/Images/${album.pic}`} alt={album.NAME} /> 
				
			</div>
			
		</div>
	</div>
	<div class="product__info">
		<div class="title">
			<h1>BTS</h1>
			<span>{album.NAME}</span>
		</div>

		<div class="description">
			<h3>ABOUT</h3>

      <p>{album.DESCRIPTION}</p>
		</div>
		
	</div>
</section>
<br></br><br></br>
<div className='album-video'>
      <div className='video-title'>VIDEO</div>
      <iframe width="560" height="315" src={`${album.videolink}`} title="YouTube video" frameborder="0" allowfullscreen></iframe> 
  </div>

  <div>
      <h1 className='track-title'>Tracks</h1>
      <ol className="ol-days" >
        {/* List items */}
        {album.songs &&
          album.songs.split('\r\n').map((line, index) => (
            <li key={index} className={index % 2 === 0 ? 'even' : 'odd'}>
              {/* <div className="month"></div>  */}
              <div className="counter"></div>
              <div className="track-details">
                <span>{line}</span>
              </div>
            </li>
          ))}
      </ol>
    </div>
    <h1 className='cp'>Concept Photos</h1>
    <div className="slides">
    
      <button onClick={() => dispatch({ type: "PREV" })}>‹</button>

      {slides.map((slide, i) => {
        let offset = state.slideIndex - i;
        return <Slide slide={slide} offset={offset} key={i} />;
      })}
      <button onClick={() => dispatch({ type: "NEXT" })}>›</button>
    </div>
    </div>
  );
};

export default AlbumPage;
