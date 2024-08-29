import React, { useState } from 'react';
import Modal from 'react-modal'; // Import the Modal component
import styles from '../style';
import { product1, productImg1, productImg2, productImg3, productImg4 } from '../assets';

// Set up the modal root element (required for react-modal)
Modal.setAppElement('#root');

const Products = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalImg, setModalImg] = useState('');

  const productsInfo = [
    { id: 1, name: 'بلسم', price: '110 ريال', img: productImg1 },
    { id: 2, name: 'بلسم الكيراتين ', price: '110 ريال', img: productImg2 },
    { id: 3, name: 'شامبو كيراتين', price: '110 ريال', img: productImg3 },
    { id: 4, name: 'شامبو كيراتين', price: '110 ريال', img: product1 },
    { id: 5, name: 'شامبو كيراتين', price: '110 ريال', img: productImg4 },
  ];

  const openModal = (img) => {
    setModalImg(img);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setModalImg('');
  };

  return (
    <section id='products' className={`relative min-h-[100vh] flex flex-col gap-5 ${styles.padding}`}>
      <div className='gradient-circle4'></div>
      <h1 className={`${styles.title} text-center relative`}>
        صور المنتج
      </h1>
      <div className={`${styles.marginY} w-full flex flex-wrap flex-row gap-24 justify-center items-star`}>
        {productsInfo.map((item) => (
          <div key={item.id} className='relative w-[280px] h-[350px] rounded-[25px] bg-[#a8d8bb] overflow-hidden group'>
            <img
              src={item.img}
              className='w-[100%] h-[100%] object-cover rounded-[25px] cursor-pointer'
              alt="product img"
              onClick={() => openModal(item.img)}
            />
            <div className='absolute top-[78%] mx-5 mb-5 p-5 w-[80%] h-[60px] flex justify-between items-center rounded-[10px] bg-[gray] bg-opacity-50 backdrop-filter backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
              <h4 className='text-white font-semibold'>{item.name}</h4>
              <p className='text-[orange] font-semibold'>{item.price}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal for displaying the enlarged image */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="fixed inset-0 flex items-center z-50 justify-center bg-black bg-opacity-75"
        overlayClassName="fixed inset-0"
        contentClassName="relative flex items-center justify-center"
      >
        <button
          onClick={closeModal}
          className="absolute top-4 right-4 text-white text-2xl"
        >
          &times;
        </button>
        <img
          src={modalImg}
          alt="Enlarged"
          className="sm:max-w-full max-w-[80%] max-h-[80%] rounded-[25px] object-contain m-5"
        />
      </Modal>
    </section>
  );
};

export default Products;
