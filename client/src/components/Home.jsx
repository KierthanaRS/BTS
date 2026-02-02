import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Styles/Home.css';


const Home = () => {
  const [index, setIndex] = useState(0);
  const navigate = useNavigate();
  const imageSources = [`${process.env.PUBLIC_URL}/Images/bts-1.jpg`,`${process.env.PUBLIC_URL}/Images/bts-2.jpg`,`${process.env.PUBLIC_URL}/Images/bts-3.jpg`,`${process.env.PUBLIC_URL}/Images/bts-4.jpg`,`${process.env.PUBLIC_URL}/Images/bts-5.jpg`];

  
  const soloalbums = [
    { id: 10, name: 'Yours (2021)', image: `${process.env.PUBLIC_URL}/Images/sa1.jpg` },
    { id: 11, name: 'The Astronaut (2022)', image: `${process.env.PUBLIC_URL}/Images/sa2.jpg` },
    { id: 12, name: 'August D (2016)', image: `${process.env.PUBLIC_URL}/Images/sa3.jpg` },
    { id: 13, name: 'D-2 (2020)', image: `${process.env.PUBLIC_URL}/Images/sa4.jpg` },
    { id: 14, name: 'Jack-in the Box (2022)', image: `${process.env.PUBLIC_URL}/Images/sa5.jpg` },
    { id: 15, name: 'Indigo (2022)', image: `${process.env.PUBLIC_URL}/Images/sa6.jpg`},
    { id: 16, name: 'Face (2023)', image: `${process.env.PUBLIC_URL}/Images/sa7.jpg`},
    { id: 17, name: 'layover(2023)', image: `${process.env.PUBLIC_URL}/Images/sa8.jpg`},
    { id: 18, name: 'Golden (2023)', image: `${process.env.PUBLIC_URL}/Images/sa9.jpg`}
  ];
  const albums = [
    { id: 1, name: 'Dark & Wild (2014)', image: `${process.env.PUBLIC_URL}/Images/album1.jpg` },
    { id: 2, name: 'Wings (2016)', image: `${process.env.PUBLIC_URL}/Images/album2.jpg` },
    { id: 3, name: 'Love Yourself: Her (2017)', image: `${process.env.PUBLIC_URL}/Images/album3.jpg` },
    { id: 4, name: 'Love Yourself: Tear (2018)', image: `${process.env.PUBLIC_URL}/Images/album4.jpg` },
    { id: 5, name: 'Love Yourself: Answer (2018)', image: `${process.env.PUBLIC_URL}/Images/album5.jpg` },
    { id: 6, name: 'Map of the Soul: Persona (2019)', image: `${process.env.PUBLIC_URL}/Images/album6.jpg`},
    { id: 7, name: 'Map of the Soul: 7 (2020)', image: `${process.env.PUBLIC_URL}/Images/album7.jpg`},
    { id: 8, name: 'Be (2020)', image: `${process.env.PUBLIC_URL}/Images/album8.jpg`},
    { id: 9, name: 'Proof (2022)', image: `${process.env.PUBLIC_URL}/Images/album9.jpg`}
  ];
  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % imageSources.length);
    }, 5000);

    return () => clearInterval(intervalId);
  });
  const items = [
    { id: 1, name: 'Jin', image: `${process.env.PUBLIC_URL}/Images/jin.jpg` ,description:"With his captivating visuals and warm personality, Jin brings a touch of humor and elegance to BTS, showcasing his talents not only in singing but also in acting."},
    { id: 2, name: 'Suga', image: `${process.env.PUBLIC_URL}/Images/suga.jpg` ,description:"Suga is a multi-talented artist, known for his introspective lyrics and producing skills. He is also a gifted pianist and has a knack for photography."},
    { id: 3, name: 'R M', image: `${process.env.PUBLIC_URL}/Images/rm.jpg` ,description:"The charismatic leader known for his profound lyricism and thoughtful insights, RM guides BTS with his rap skills, intelligence, and global perspective."},
    { id: 4, name: 'J-Hope', image: `${process.env.PUBLIC_URL}/Images/jhope.jpg`,description:"J-Hope is a versatile performer, showcasing his talents in rapping, singing, and dancing. He is also a skilled songwriter and producer." },
    { id: 5, name: 'V', image: `${process.env.PUBLIC_URL}/Images/v.jpg` ,description:"V is a multi-talented artist, known for his deep, soulful vocals and acting skills. He is also a gifted photographer and has a passion for fashion."},
    { id: 6, name: 'Jimin', image: `${process.env.PUBLIC_URL}/Images/jimin.jpg`,description:"Jimin is a versatile performer, showcasing his talents in singing and dancing. He is also a skilled songwriter and producer." },
    { id: 7, name: 'JungKook', image: `${process.env.PUBLIC_URL}/Images/jk.jpg`,description:"Jungkook is a multi-talented artist, known for his powerful vocals and dancing skills. He is also a skilled songwriter and producer." },
  ];
  const  handleAlbumClick = (id) => {
    navigate(`/album?id=${id}`);
  }
  const  handleMemberClick = (id) => {
    console.log(id);
    navigate(`/member?id=${id}`);
  }
  return (
    <div>
    <div className="image-slider">
      <figure className="slide">
        <img
          id="image"
          style={{ width: '100%', height: '600px' }}
          src={imageSources[index]}
          alt={`Slide ${index + 1}`}
        />

        {/* <div className="containers">
                 <button className="btn" onClick={handleScroll}>Learn More</button>
        </div> */}
      </figure>
    </div>
    <div id="about">
    <div class="column-2 large-profile"></div>
        <div class="column-2">
            <h1>BTS</h1>
            <div className="section-content">
          <p>
            Bangtan Sonyeondan, widely known as BTS, is a South Korean boy band formed by Big Hit Entertainment.
            Debuted on June 13, 2013, BTS consists of seven members: RM, Jin, Suga, J-Hope, Jimin, V, and Jungkook.
          </p>
          <p>
            BTS has made a profound impact on the global music scene, breaking numerous records and achieving unparalleled success.
            Their music transcends genres, incorporating elements of hip-hop, R&B, and pop, coupled with socially conscious lyrics.
          </p>
          <p>
            The group's name, "Bangtan Sonyeondan," translates to "Bulletproof Boy Scouts," symbolizing their resistance against societal expectations and norms.
            BTS has become a global phenomenon, earning a dedicated fanbase known as the ARMY (Adorable Representative M.C. for Youth).
          </p>
          {/* <p>
            Over the years, BTS has received numerous awards and accolades, including Billboard Music Awards, MTV Europe Music Awards, and American Music Awards.
            Their groundbreaking achievements extend beyond music, with contributions to philanthropy, UNICEF campaigns, and addressing social issues.
          </p>
          <p>
            BTS continues to evolve as artists, storytellers, and cultural ambassadors, leaving an indelible mark on the entertainment industry.
            With their authenticity, talent, and dedication, BTS inspires millions around the world, fostering a global community united by music and love.
          </p> */}
        </div>
 
            </div>
        
        
    </div>
    <div className='members'>
      <h1>Members</h1>
    <div className="grid" id="members" >
      {items.map((item, index) => (
        <div key={index} className="grid--item">
          <div className="img" style={{ backgroundImage: `url(${item.image})` }} onClick={()=>handleMemberClick(item.id)}></div>
          <div className="container" onClick={()=>handleMemberClick(item.id)}>
            <h2>{item.name}</h2>
            <p className="desc">{item.description}</p>
          </div>
        </div>
      ))}
      
    </div>
    </div>

    <div id="achivements" className='achivements'>
      
      <h1>Achivements</h1>
     <br></br>
            <ul>
            <li style={{ '--accent-color': '#8e44ad' }}>
                    {/* <div className="icon"><FaCodepen /></div> */}
                    <div className="title">Best New Artist</div>
                    <div className="subtitle">Circle Chart Music Awards</div>
                    <div className="year">2014</div>
                    <div className="descr"></div>
                </li>
                <li style={{ '--accent-color': '#C39BD3'}}>
                    {/* <div className="icon"><FaCodepen /></div> */}
                    <div className="title">Disc Bonsang-Dark & Wild</div>
                    <div className="subtitle">Golden Disc Awards</div>
                    <div className="year">2015</div>
                    <div className="descr"></div>
                </li>
                <li style={{ '--accent-color':'#E8DAEF' }}>
                    {/* <div className="icon"><FaCodepen /></div> */}
                    <div className="title">Artist of the Year</div>
                    <div className="subtitle">Melon Music award</div>
                    <div className="year">2016</div>
                    <div className="descr"></div>
                </li>
                <li style={{ '--accent-color': '#F5B7B1' }}>
                    {/* <div className="icon"><FaHtml5 /></div> */}
                    <div className="title">Top Social Artist</div>
                    <div className="subtitle">Billboard Music Awards</div>
                    <div className="year">2017</div>
                    <div className="descr"></div>
                </li>
                <li style={{ '--accent-color': '#F8C9DD' }}>
                    {/* <div className="icon"><FaCss3 /></div> */}
                    <div className="title">Popularity Award- Music</div>
                    <div className="subtitle">Asian Artist Awards</div>
                    <div className="year">2018</div>
                    <div className="descr"></div>
                   
                </li>
                <li style={{ '--accent-color': '#FADBD8' }}>
                    {/* <div className="icon"><FaJs /></div> */}
                    <div className="title">Group of The year</div>
                    <div className="subtitle">Bravo Music Awards</div>
                    <div className="year">2019</div>
                    <div className="descr"></div>
                </li>
                <li style={{ '--accent-color': '#FDEDEC' }}>
                    {/* <div className="icon"><FaGithub /></div> */}
                    <div className="title">Best Single-Dance- Dynamite</div>
                    <div className="subtitle">Genie Music Awards</div>
                    <div className="year">2020</div>
                    <div className="descr"></div>
                </li>
                <li style={{ '--accent-color':  '#EAECEE' }}>
                    {/* <div className="icon"><FaCodepen /></div> */}
                    <div className="title">Global Recording Artist</div>
                    <div className="subtitle">IFPI Awards</div>
                    <div className="year">2021</div>
                    <div className="descr"></div>
                </li>
                <li style={{ '--accent-color': '#E1F5FE ' }}>
                    {/* <div className="icon"><FaCodepen /></div> */}
                    <div className="title">Best Music Video-Butter</div>
                    <div className="subtitle">iHeartRadio Music Awards</div>
                    <div className="year">2022</div>
                    <div className="descr"></div>
                </li>
                <li style={{ '--accent-color': '#3498db'  }}>
                    {/* <div className="icon"><FaCodepen /></div> */}
                    <div className="title">Worldwide Icon of the year</div>
                    <div className="subtitle">MAMA Awards</div>
                    <div className="year">2023</div>
                    <div className="descr"></div>
                </li>
            </ul>
            <p className="many-more">And many more...</p>
            <br></br><br></br>
        </div>
        <div id="Albums" className='albums'>
          <h1>Albums</h1>
          <div className="hover_wrap">
      {albums.map((albums) => (
        <figure key={albums.id} className="hover6">
          <img 
          src={albums.image} 
          alt={`Caption: ${albums.name},  Text: ${albums.name}`} 
          onClick={() => handleAlbumClick(albums.id)}/>
          <figcaption onClick={() => handleAlbumClick(albums.id)}>
            <strong>{albums.name}</strong>
          </figcaption>
        </figure>
      ))}
    </div>
    </div>
    <br></br>
    <div id="SoloAlbums" className='albums'>
          <h1>Solo Albums</h1>
          <div className="hover_wrap">
      {soloalbums.map((soloalbums) => (
        <figure key={soloalbums.id} className="hover6">
          <img src={soloalbums.image} alt={`Caption: ${soloalbums.name}, Text: ${soloalbums.name}`}
          onClick={() => handleAlbumClick(soloalbums.id)} />
          <figcaption onClick={() => handleAlbumClick(soloalbums.id)}>
            <strong>{soloalbums.name}</strong>
          </figcaption>
        </figure>
      ))}
    </div>
    </div>
    
    </div>
  );
};

export default Home;
