import React from "react";
import { useNavigate } from "react-router-dom";
import { useEffect,useState} from "react";
import Slider from "./Slider";
import "./members.scss";



const Members = () => {
    const navigate = useNavigate();
    const [members, setMembers] = useState([]);
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [images, setImage] = useState("");
    const [viewbox, setViewbox] = useState("");
    const [role, setRole] = useState("");
    const [insta, setInsta] = useState("");
    const [twitter, setTwitter] = useState("");
    const[weverse, setWeverse] = useState("");
    const [pass, setPass] = useState("");
    const [isheart, setisHeart] = useState(false);
    const [piclist, setPiclist] = useState([]);
    const [albumList, setAlbum] = useState("");
    const [ytlist, setYtlist] = useState([]);
    const [ytname, setYtname] = useState("");
    const [videoList, setVideoList] = useState([]);
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const id= urlParams.get('id');
    const [gallery, setGallery] = useState([]);
    // const n = 5; // number of columns/rows, adjust as needed
    // const image = "https://assets.codepen.io/1480814/1059-800x800.jpg";
    // setisHeart(localStorage.getItem('isHeart'));
  
    useEffect(() => {
        const fetchdata = async () => {
            const response = await fetch(`http://localhost:5000/memberinfo/${id}`)
            const data = await response.json();
            setName(data[0].memberName);
            setDescription(data[0].DESCRIPTION);
            setImage(data[0].pic);
            setRole(data[0].role_bts);
            setViewbox(data[0].viewgrid);
            setInsta(data[0].insta);
            setTwitter(data[0].twitter);
            setWeverse(data[0].weverse);
            setPass(data[0].pass);
            setPiclist(data[0].pic_1.split('\r\n'));
            setAlbum(data[0].album.split('\r\n'));
            setYtlist(data[0].yt.split('\r\n'));
            setYtname(data[0].yt_name.split('\r\n'));
            if (data[0].gallery) setGallery(data[0].gallery.split('\r\n'));
        }
        fetchdata();
        
    },[id]);
    useEffect(() => {
      if (piclist.length > 0 && albumList.length > 0) {
          // check if the last element is empty
          if (piclist[piclist.length - 1] === '') {
              piclist.pop();
          }
          const combinedList = piclist.map((pic, index) => ({ pic, album: albumList[index] }));
          setMembers(combinedList);
      }
      if (ytlist.length > 0 && ytname.length > 0) {
        
        const videoList_1 = ytlist.map((videoSrc, index) => ({ videoSrc, title: ytname[index] }));
        setVideoList(videoList_1);
        
    }
  }, [piclist, albumList,ytlist,ytname]);
  
    if (!name) {
        return navigate('/notfound');
      }
      function heart() {
        setisHeart(!isheart);
        localStorage.setItem('isHeart', isheart);
      } 
      
    return (
        <div>

 <div class="infocardContainer">
  <div id="main">
    <img src={images} alt="pic" />
  </div>
  <div id="textbois">
    <h2>{name}</h2>
    <h4>{role}</h4>
    <div id="hotlinks">
      <a className="link-mem" href={insta}>
        <img id="codepenio" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpX91rfGtggSDFm-x1VS3GdRLSntDDwO0mxQ&usqp=CAU" target="_blank" alt="pic1" />
      </a>
      <a className="link-mem" href={twitter}>
        <img id="codepenio" src="https://w7.pngwing.com/pngs/515/1/png-transparent-twitter-logo-computer-icons-logo-twitter-icon-computer-wallpaper-monochrome-bird-thumbnail.png" target="_blank" alt="pic3"/>
      </a>
      <a  className="link-mem" href={weverse}>
              <img id="codepenio" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEhNCSrIn25GkQbq8TGmY4Gw39dgOp3nd0RA&usqp=CAU" target="_blank" alt="pic4"/>
      </a>
    </div>
  </div>
</div>
<div class="profile">
<div class="card">
  <div class="img-avatar">
  <img className="viewbox" src={pass} alt="pic" />
  </div>
  <div class="card-text">
    <div class="portada">
    <img className="img-portada" src={viewbox} alt="pic" /> 
    </div>
    <div class="title-total">   
      <div class="title">{name} </div>
      <h2>{role}</h2>
  
  <div class="desc">{description}</div>
  <div class="actions">
    <button className={`button-ele ${isheart ? 'red' : ''}`} onClick={()=>heart()}><i className={`far fa-heart ${isheart ? 'red' : ''}`}></i></button>
     {/* <button className="button-ele"><i class="far fa-envelope"></i></button> 
     <button  className="button-ele"><i class="fas fa-user-friends"></i></button>  */}
  </div></div>
 
  </div>
</div>
</div>
<div className="album-title-mem">Albums</div>

<div className="album-mem">
<div className="container-mem">
{members.map(({ pic, album }, index) => (
        <div className="box" key={index}>
          <div className="imgBox">
            <img src={pic} alt={album} />
          </div>
          <div className="content">
            <h2>
            {album}
              <br />
              <span>{name}</span>
            </h2>
          </div>
        </div>
      ))}
    </div>
    </div>
    <div className="album-title-mem">Featured Videos</div>
    <Slider slides={videoList} repeat={false} noArrows={false} noBullets={false} />
    <div className="gallery-title">Gallery</div>
    <div className="gallery-body">

    <div className="gallery">
      {gallery.map((imageUrl, index) => (
        <span key={index} style={{ '--i': index + 1 }}>
          <img src={imageUrl} alt={`${index + 1}`} />
        </span>
      ))}
    </div>
    </div>

    </div>
    );
    }

export default Members;