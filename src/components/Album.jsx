import React from 'react';
import PropTypes from 'prop-types';
import data from '../assets/data.js'

const Album = props => {
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img className="w-full" src={data[0].album.cover} alt={data[0].title_short}/>
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{data[0].title_short}</div>
                <p className="text-gray-700 text-base">{data[0].title}</p>
            </div>
            <video controls name="media" style={{padding: '10px', height: '10vh', width: '100%'}}><source src={data[0].preview} type="audio/mpeg"/></video>
        </div>
    );
};

Album.propTypes = {
    
};

export default Album;