import React from 'react';
import '../../styles/secondsCounter.css';

const SecondsCounter = ({ uno, dos, tres, cuatro, cinco, seis }) => {
    return (
        <div className="container row">
            <div className="icono col-9 col-sm-9 col-lg-2">
                <i className="fa fa-clock text-white"></i>
            </div>
            <div className="seis col-4 col-sm-4 col-lg-1 text-white">{seis % 10}</div>
            <div className="cinco col-4 col-sm-4 col-lg-1 text-white">{cinco % 10}</div>
            <div className="cuatro col-4 col-sm-4 col-lg-1 text-white">{cuatro % 10}</div>
            <div className="tres col-4 col-sm-4 col-lg-1 text-white">{tres % 10}</div>
            <div className="dos col-4 col-sm-4 col-lg-1 text-white">{dos % 10}</div>
            <div className="uno col-4 col-sm-4 col-lg-1 text-white">{uno % 10}</div>
        </div>
    );
};

export default SecondsCounter;
