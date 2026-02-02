import React, { useRef,useEffect } from 'react';
import './player.scss';
import {BsFillPlayCircleFill, BsFillPauseCircleFill,BsFillSkipStartCircleFill,BsFillSkipEndCircleFill} from 'react-icons/bs';

const Player = ({audioElem, isplaying, setisplaying, currentSong, setCurrentSong})=> {
  const albumcover=`${process.env.PUBLIC_URL}/Images/${currentSong.pic}` ;
  const clickRef = useRef();

  const PlayPause = ()=>
  {
    setisplaying(!isplaying);

  }
  
  const checkWidth = (e)=>
  {
    let width = clickRef.current.clientWidth;
    const offset = e.nativeEvent.offsetX;
    if (!Number.isFinite(width) || !Number.isFinite(offset)) {
      return; // Handle non-finite values to avoid the error
    }

    const divprogress = offset / width * 100;
    audioElem.current.currentTime = divprogress / 100 * currentSong.length;

  }
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };
  
  useEffect(() => {
    // Use useEffect to add/remove the rotate class based on isplaying
    const albumCoverElem = document.querySelector('.albumcover');

    if (isplaying) {
      albumCoverElem.classList.add('rotate');
    } else {
      albumCoverElem.classList.remove('rotate');
    }
  }, [isplaying]);

  const handleSongClick = async (index) => {
    try {
      const response = await fetch(`http://localhost:5000/getSongById/${index}`);
      const data = await response.json();
      setCurrentSong(data[0]);
      setisplaying(true);

    } catch (error) {
      console.error('Error fetching song data:', error);
    }
  }

  const Playafter = () => {
    let index = currentSong.id + 1;
    handleSongClick(index);
    // console.log(index)
  }

  const Playbefore = () => {
    let index = currentSong.id - 1;
    handleSongClick(index);
    // console.log(index)

  }


  return (
    <div className='player_container'>
      <div className="title">
      <div className='song-info'>
           <img
            className="albumcover"
            src={albumcover}
            alt='Album Cover'
          /> 
        <p>{currentSong.name}</p>
      </div>
      </div>
      <div className="navigation">
      <div className="current-time">
      <p style={{ float:'left'}}>  {audioElem.current ? formatTime(audioElem.current.currentTime) : '0:00'}</p>
      <p style={{ float: 'right' }}> {audioElem.current ? formatTime(audioElem.current.duration) : '0:00'}</p>  
      </div>
        <div className="navigation_wrapper" onClick={checkWidth} ref={clickRef}>
          <div className="seek_bar" style={{width: `${currentSong.progress+"%"}`}}></div>
        </div>
      </div>
      <div className="controls">
      <BsFillSkipStartCircleFill className='btn_action' onClick={Playbefore} />
        {isplaying ? <BsFillPauseCircleFill className='btn_action pp' onClick={PlayPause}/> : <BsFillPlayCircleFill className='btn_action pp' onClick={PlayPause}/>}    
        <BsFillSkipEndCircleFill className='btn_action' onClick={Playafter}/>        
      </div>
    </div>
  
  )
}

export default Player