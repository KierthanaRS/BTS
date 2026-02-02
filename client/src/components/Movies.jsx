import React from "react";
import { GoArrowRight } from "react-icons/go";
import { useState,useEffect } from "react";
import "./Movies.scss";

const Movies = () => {
  const [dataList, setDataList] = useState([]);
  const [selectedSeason, setSelectedSeason] = useState(1);
  useEffect(() => {
    const fetchdata= async()=>{
      const response = await fetch("http://localhost:5000/runbts");
      const data = await response.json();
      setDataList(data.runbts);
    }
    fetchdata();
  },[]);
  
  
  const images = [
    "https://pictures.betaseries.com/fonds/poster/c7f5afb4a87bf909d8b0e5c7522b6bf9.jpg",
    "https://pbs.twimg.com/media/ECYRtTFU0AA-LSX.jpg",
    "https://0.soompi.io/wp-content/uploads/2017/02/14221549/C4rJ2ymVcAAdPyU.jpg",
    "https://m.media-amazon.com/images/M/MV5BN2E2ZDA4YTktZmQ0Ni00ZjI0LWFhOGItMTkwZDg5MWYxNGQ0XkEyXkFqcGdeQXVyNTI5NjIyMw@@._V1_.jpg",
    "https://miro.medium.com/v2/resize:fit:1065/1*So3ObZp7vCacXfdN_mHdiQ.jpeg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhdgJcQNXhAX1Zu7uqDCqzBnpqe5og2T-5TA&usqp=CAU",
    "https://m.media-amazon.com/images/M/MV5BMzk3NDQ2NGUtOWY5Zi00MmVmLTg1MTAtNzhmMjhkOTc3YjU2XkEyXkFqcGdeQXVyMTIyNjk5MTE3._V1_.jpg",
    "https://m.media-amazon.com/images/I/81+ggV5X6SL.jpg",
    "https://i.pinimg.com/originals/8b/f9/86/8bf986c6e7eb5819b99acda3df6ba9c8.jpg",
    "https://m.media-amazon.com/images/M/MV5BOTU3NzBlZWMtYzliNS00NjU1LTg1NGMtODQ3MGRkM2MwNjk5XkEyXkFqcGdeQXVyMTEzMTI1Mjk3._V1_.jpg"
  ];
  
  const gallery = [
    { src: "https://m.media-amazon.com/images/M/MV5BNzkxOGE0NzgtYzAwYS00NWE4LTk4Y2EtMWE4YTQ0YjVlMTdiXkEyXkFqcGdeQXVyMTU3ODQxNDYz._V1_.jpg", alt: "image1", caption: "Where Dreams Meet Reality" },
    { src: "https://static.toiimg.com/thumb/msid-101637276,width-1070,height-580,imgsize-48688,resizemode-6,overlay-toi_sw,pt-32,y_pad-40/photo.jpg", alt: "image2", caption: "Conquering Heights, One Note at a Time" },
    { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkKU8miwYiZjqtTt7_n-2yK1gUjYqR888fUA&usqp=CAU", alt: "image3", caption: "When the beat drops, we rise" },
    { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZPTY1EHoaF2scMDGr5iZrI9YxyR-TtCwlXQ&usqp=CAU", alt: "image4", caption: "In the spotlight, we find our galaxy" },
    { src: "https://www.koimoi.com/wp-content/new-galleries/2023/10/bts-massive-popularity-surpassed-collective-efforts-of-global-health-institutions-during-the-covid-19-pandemic-01.jpg", alt: "image4", caption: "Global Impact" },
    { src: "https://p2.trrsf.com/image/fget/cf/774/0/images.terra.com/2023/06/14/441085099-bts.jpg", alt: "image5", caption: "Confident Vibes" },
    { src: "https://www.j-14.com/wp-content/uploads/2022/09/bts-22202322.png?fit=2575%2C1608&quality=86&strip=all", alt: "image6", caption: "Visual Icons" },
    { src: "https://resize.indiatvnews.com/en/centered/newbucket/1200_675/2023/05/bts-1684751104.jpg", alt: "image7", caption: "Individual Charisma" },
    { src: "https://www.hyundai.com/content/dam/hyundai/ww/en/images/worldcup/08-bts/worldcup-bts-social.jpg", alt: "image8", caption: "Hyundai Collab" },
    { src: "https://media.gq-magazine.co.uk/photos/5e442958995fbc00086126ad/16:9/w_2580,c_limit/20191219-BTS-04.jpg", alt: "image9", caption: "Iconic Pose" },
    { src: "https://images.indianexpress.com/2023/02/K-Pop-Band-BTS.jpg?w=414", alt: "image10", caption: "Synchronized Elegance" },
    { src: "https://images.yourstory.com/cs/210/a0bad530ce5d11e9a3fb4360e4b9139b/YSlife3-1666360894535.png?w=1152&fm=auto&ar=2:1&mode=crop&crop=faces", alt: "image11", caption: "Vibrant Harmony" },
    { src: "https://assets.telegraphindia.com/telegraph/2023/May/1685512882_bts.jpg", alt: "image12", caption: "Elegance Unleashed" },
    { src: "https://st1.bollywoodlife.com/wp-content/uploads/2021/06/SSR-4-1-1.png?impolicy=Medium_Widthonly&w=412&h=290", alt: "image13", caption: "Soulful Gaze" },
    { src: "https://media.newyorker.com/photos/62ab8b198d131ea1e4635750/master/w_1600%2Cc_limit/kim-bts05.jpg", alt: "image14", caption: "Captivating Intensity" }
  ];
  const linktoyt = (link) => {
    window.open(link);
  }
  const filteredDataList = dataList.filter(data => data.season === selectedSeason)
  return (
    <div>
    <div className="movie">
      <img src="https://ibighit.com/bts/images/bts/schedule/schedule-kv.jpg" className="hero-movies" alt="hero-section"/>
    <div className="movies">
      <div className="wrapper-images">
        
          <div  className="images-line">
          {images.map((imageUrl, index) => (
            <div key={index} className="line" style={{ backgroundImage: `url(${imageUrl})` }}>
              <div className="img" style={{ backgroundImage: `url(${imageUrl})` }}></div>
            </div>
            ))}
          </div>
        
      </div>
    </div>
    </div>
    <h1 className="gal-title"> BTS Memories</h1>
    <div className="movie-gallery">
      
    <div id="mz-gallery-container">
      <div id="mz-gallery">
        {gallery.map((image, index) => (
          <figure key={index}>
            <img src={image.src} alt={image.alt} width="700" height="700" />
            <figcaption>{image.caption}</figcaption>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </figure>
        ))}
      </div>
    </div>
    </div>
    <h1 className="run-title"> RUN BTS</h1>
    <div className="season-selector">
        {[1, 2, 3].map(season => (
          <button
            key={season}
            className={selectedSeason === season ? 'active' : ''}
            onClick={() => setSelectedSeason(season)}
          >
            Season {season}
          </button>
        ))}
      </div>
    <div className="run-bts">
    {filteredDataList.map(data => (
        <div key={data.id} className="container-bts">
          <img
            src={data.image}
            alt={data.name}
            className="image-runbts"
          />
          <div className="container__text">
            <h1>{data.NAME}</h1>
            <p>{data.epdesc}</p>
            <div className="container__text__timing">
              <div className="container__text__timing_time">
                <h2>Episode</h2>
                <p>{data.epno}</p>
              </div>
              <div className="container__text__timing_time">
                <h2>Season</h2>
                <p>{data.season}</p>
              </div>
              <div className="container__text__timing_time">
                <h2>Rating</h2>
                <p>{data.rating}</p>
              </div>
            </div>
            <button className="btn-bts" onClick={()=>{linktoyt(data.link)}}>Watch Episode<GoArrowRight/></button>
          </div>
        </div>
      ))}
    </div>
 
    </div>
  );
};

export default Movies;

