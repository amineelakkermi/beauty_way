import React from 'react'
import styles, { layout } from '../style'
import { beauty_way, product1 } from '../assets'

const WhyChooseUs = () => {
  return (
    <section id='why_us' className={`relative min-h-[100vh] bg-gray-200 ${layout.section} -z-0 ${styles.padding}`}>
       <div className="gradient-circle2"></div>
      <div className={`${layout.sectionImg}`}>
      <div className='md:max-w-[550px] max-w-[450px]  h-[450px]'>
      <img src={beauty_way} alt="product img" className='object-cover w-[100%] h-[100%] rounded-[25px]'/>
      </div>
     </div>
     <div className={`${layout.sectionInfo} gap-5`}>
      <h1 className={`${styles.title} font-[600]`}>
      لماذا تختار منتجاتنا ؟
      </h1>
      <p className={`${styles.paragraph}`}>
      في بيوتي واي، نقدم لك منتجات صحية عضوية 100% وحاصلة على شهادات معتمدة. نحن نلتزم بتوفير منتجات خالية من المواد الكيميائية الضارة، مع ضمان أعلى معايير الجودة والسلامة. كل منتج في مجموعتنا يُصنع بدقة لتلبية احتياجاتك الجمالية بطرق طبيعية وآمنة. اختر بيوتي واي لتجربة جمال نقية وصحية.
      </p>
     </div>
    </section>
  )
}

export default WhyChooseUs