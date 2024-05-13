import React, { useState, useRef } from 'react';
import './Slider.css';

const ImageSlider = () => {
    const sliderRef = useRef(null);
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedImage, setSelectedImage] = useState('');

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

    const openModal = (imgSrc) => {
        setSelectedImage(imgSrc);
        setModalVisible(true);
    };

    const closeModal = () => {
        setModalVisible(false);
    };

    return (
        <div className="container">
            <img className="control prev" src="https://i.postimg.cc/W47WzSmc/img1.png" alt="Scroll Left" onClick={scrollLeft} />
            <div className="slider" ref={sliderRef}>
                {['https://i.postimg.cc/3Nzww1RC/Rutas-X-101.png', 'https://i.postimg.cc/c4MHWRWY/Rutas-X-102.png', 'https://i.postimg.cc/htsfL93g/Rutas-X103-Act-Min.png', 'https://i.postimg.cc/zDhvtmPx/Rutas-X-104.png', 'https://i.postimg.cc/prKdp8nw/Rutas-X-105.png', 'https://i.postimg.cc/7Zw5JB9m/Rutas-X-106.png', 'https://i.postimg.cc/5yzXLTDk/RT100E.png', 'https://i.postimg.cc/6642k4TL/RT101.png', 'https://i.postimg.cc/fTx3L4cV/RT102.png'].map((src, index) => (
                    <img key={index} src={src} alt="Rutas" onClick={() => openModal(src)} />
                ))}
            </div>
            <img className="control next" src="https://i.postimg.cc/hjPCdxMz/img2.png" alt="Scroll Right" onClick={scrollRight} />
            {modalVisible && (
                <div className="modal">
                    <span className="close" onClick={closeModal}>&times;</span>
                    <img className="modal-content" src={selectedImage} alt="Expanded view" />
                </div>
            )}
        </div>
    );
};

export default ImageSlider;



