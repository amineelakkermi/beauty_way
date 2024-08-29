import React from 'react'
import styles, { layout } from '../style'
import {video } from '../assets' // تأكد من أن لديك مسار الفيديو صحيح

const ProductDescription = () => {
  return (
    <section id='about' className={`relative -z-0 min-h-[100vh] bg-gray-200 ${layout.section}  ${styles.padding}`}>
      <div className='gradient-circle2'></div>
      <div className={`${layout.sectionInfo} gap-5 `}>
        <h1 className={`${styles.title} font-[600] z-50`}>
        شعرك متكسر ولا ينمو ؟
        </h1>
        <p className={`${styles.paragraph} z-50`}>
          شامبو الكيراتين من شركة كرم يقدم لك الحل ,  يطيل الشعر و يحميه من التساقط
        </p>
        <a href="https://salla.sa/beautyway24" target='_blank' className="buy-now z-50 gap-2 justify-center  bg-[#252D48] w-[200px] h-[70px] my-5 text-white font-semibold flex items-center">
        <span>اطلبيه الآن</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-arrow-right-short text-white ml-2 transform scale-x-[-1]" viewBox="0 0 16 16">
        <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"/>
        </svg>
        </a>
        

        </div>
      <div className={`${layout.sectionImg} `}>
        <div className='w-[550px] h-[600px]'>
          <video 
            src={video} 
            className='object-cover w-[100%] h-[100%] rounded-[25px]' 
            controls 
            autoPlay 
            loop 
            muted 
            alt="product video"
          />
        </div>
      </div>
    </section>
  )
}

export default ProductDescription
