import React from 'react';

const HeroSection = () => {
  return (
    <section id='home' className="h-screen  flex items-center justify-center text-white p-6">
      <div className="text-center flex flex-col gap-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
         مرحبا بك في بيوتي واي
        </h1>
        <p className="text-xl md:text-2xl mb-6">
        طريقك المبسط للجمال الطبيعي
        </p>
      
        <div className='w-full flex justify-center items-center'>
        <a href="#about" className="button_group bg-blue-500 w-[150px] border border-white hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-block text-center">تعرف علينا</a>  
        </div>
      </div>
    </section>
  );
};

export default HeroSection;