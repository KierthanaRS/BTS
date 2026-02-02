// App.js
import React from 'react';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Front from './pages/frontpage.jsx';
import Song from './pages/Song.jsx';
import Army from './pages/Army.jsx';
import Album from './pages/Album.jsx';
import Loader from './components/loader.jsx';
import NotFound from './components/NotFound.jsx';
import Memberinfo from './pages/Memberinfo.jsx';
import Movie from './pages/Movie.jsx';

// import '@fortawesome/fontawesome-free/css/all.min.css';





import './App.css';

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Loader />}></Route>
      <Route path="/home" element={<Front />}/>
      <Route path="/song" element={<Song />} />
      <Route path='/army' element={<Army/>} />
      <Route path='/album' element={<Album/>} />
      <Route path="/notfound" element={<NotFound />} />
      <Route path="/member" element={<Memberinfo />} />
      <Route path="/movie" element={<Movie />} />

    </Routes>
  </BrowserRouter>
  );
};

export default App;
