// App.js
import React from 'react';
import { useRef,useState,useEffect } from 'react';
import Player from './player.jsx';



const Songcomp = () => {
  const [selectedSong, setSelectedSong] = useState(null);
  const [songs, setSongs] = useState([]);
  const [selectedSongName, setSelectedSongName] = useState('');
  const [selectedSongLyrics, setSelectedSongLyrics] = useState('');;
  const [isplaying, setisplaying] = useState(false);
  const [currentSong, setCurrentSong] = useState('');
  const audioElem = useRef();
  useEffect(() => {
    if (isplaying) {
      audioElem.current.play();
    }
    else {
      audioElem.current.pause();
    }
  }, [isplaying, currentSong])
  const onPlaying = () => {
    const duration = audioElem.current.duration;
    const ct = audioElem.current.currentTime;

    setCurrentSong({ ...currentSong, "progress": ct / duration * 100, "length": duration })

  }
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5000/songs');
        const data = await response.json();
   
        setSongs(data.songs);
        
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
   
  const handleSongClick = async (id) => {
    setSelectedSong(id);
    try {
      const response = await fetch(`http://localhost:5000/getSongById/${id}`);
      const data = await response.json();
      setCurrentSong(data[0]);
      console.log(data[0])
      setSelectedSongName(data[0].name);
      setSelectedSongLyrics(data[0].Lyrics);
      setisplaying(true);
      
    } catch (error) {
      console.error('Error fetching song lyrics:', error);
    }
  };
  const formattedLyrics = selectedSongLyrics.split('\r\n').map((line, index) => <p key={index}>{line}</p>);
  // const picurl=`${process.env.PUBLIC_URL}/Images/${currentSong.pic}`;
  return (
    <div 
      //style={currentSong.pic ? { 
      //backgroundImage: `url(${picurl})`
      // backgroundRepeat: 'no-repeat'
      // backgroundSize: 'cover'
    //} : null}
    >
    
    <div className="song" >
      <div className="sidebar">
      <h3 className='songshead'>SONGS</h3>
        {songs.map((song) => (
          <div
            key={song.id}
            className={`song-item ${selectedSong === song.id ? 'active' : ''}`}
            onClick={() => handleSongClick(song.id)}
          >
            {song.name}
          </div>
        ))}
      </div>
      <div className="main-content">
        {selectedSong ? (
          <>
            <h2>{songs.find((song) => song.id === selectedSong).name}</h2>
            <div>{formattedLyrics}</div>
            
          </>
        ) : (
          <p>Select a song to view lyrics and play</p>
        )}
      </div>
      <br></br><br></br>
      </div>
     
      <div className="music-player">
      <audio src={`${process.env.PUBLIC_URL}/audio/${currentSong.musicUrl}`}  ref={audioElem} onTimeUpdate={onPlaying} /> 
      <Player songs={songs} isplaying={isplaying} setisplaying={setisplaying} audioElem={audioElem} currentSong={currentSong} setCurrentSong={setCurrentSong} />
        </div>
    </div>
  
  );
};

export default Songcomp;
