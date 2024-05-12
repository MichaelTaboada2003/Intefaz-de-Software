import React, { useRef } from 'react';
import './Slider.css';  
const ImageSlider = () => {
    const sliderRef = useRef(null);

    const scrollLeft = () => {
        if (sliderRef.current) {
            sliderRef.current.scrollLeft -= 300;
        }
    };

    const scrollRight = () => {
        if (sliderRef.current) {
            sliderRef.current.scrollLeft += 300;
        }
    };

    return (
        <div className="container">
            <img className="control prev" src="https://i.postimg.cc/W47WzSmc/img1.png" alt="Scroll Left" onClick={scrollLeft} />
            <div className="slider" ref={sliderRef}>
                <img src="https://i.postimg.cc/3Nzww1RC/Rutas-X-101.png" alt="Pretroncal" />
                <img src="https://i.postimg.cc/c4MHWRWY/Rutas-X-102.png" alt="Pretroncal" />
                <img src="https://i.postimg.cc/htsfL93g/Rutas-X103-Act-Min.png" alt="Pretroncal" />
                <img src="https://i.postimg.cc/zDhvtmPx/Rutas-X-104.png" alt="Pretroncal"/>
                <img src="https://i.postimg.cc/prKdp8nw/Rutas-X-105.png" alt="Pretroncal" />
                <img src="https://i.postimg.cc/7Zw5JB9m/Rutas-X-106.png" alt="Pretroncal" />
                <img src="https://i.postimg.cc/5yzXLTDk/RT100E.png" alt="Troncal" />
                <img src="https://i.postimg.cc/6642k4TL/RT101.png1&w=500" alt="Troncal" />
            </div>
            <img className="control next" src="https://i.postimg.cc/hjPCdxMz/img2.png" alt="Scroll Right" onClick={scrollRight} />
        </div>
    );
};

export default ImageSlider;
