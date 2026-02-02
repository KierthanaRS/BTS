import React from 'react';
import Songcomp from '../components/Songcomp';
import Navbar from '../components/Navbar';


import { memo } from 'react';
const Song = () => {
    return (
       <div>
            <Navbar />
            <Songcomp />
            
        </div>
    );
    }
export default memo(Song);