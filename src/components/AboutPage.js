import React from 'react';

import firstLittlePicture from './AboutPage.res/little-first-picture.webp';
import secondLittlePicture from './AboutPage.res/little-second-picture.webp';

import styles from './AboutPage.res/AboutPage.css';

const AboutPage = props => {
  return (
    <main className={ styles.container }>
      <div className={ styles.topParallax }/>

      <div className={ styles.wrapper }>
        <p className={ styles.aboutInfo }>
          Lonsdale Street Roasters started out as a simple idea: source quality coffee, roast it, pour it; all under the same roof, right in the heart of Canberra.
          <br/><br/>
          After years of working in and around Sydney and Newcastle, Alastair Evans developed a passion for coffee that needed an outlet. That outlet had to be back in their hometown of Canberra, and it had to be on Lonsdale Street. In 2010 this became a reality.
          <br/><br/>
          Previously known for it’s car yards and petrol stations, Lonsdale Street was about to experience a revolution. Alastair had a vision to transform this street into what it is now- a thriving urban hub of boutique stores, restaurants and great coffee.
        </p>
        <div className={ styles.imageWrapper }>
          <img className={ styles.aboutImage } src={ firstLittlePicture } alt=""/>
        </div>
      </div>

      <div className={ styles.bottomParallax }/>

      <div className={ styles.wrapper }>
        <div className={ styles.imageWrapper }>
          <img  src={ secondLittlePicture } className={ styles.aboutImage } alt=""/>
        </div>
        <p className={ styles.aboutInfo }>
          As well as roasting for the café, Lonsdale Street Roasters also supplies to wholesale clients and in 2012 this created a need to expand just up the street. As well as a busy LANE-WAY espresso bar, Lonsdale Street Roasters 23 houses the Diedrich roaster and bagging operations.
          <br/><br/>
          On a busy Saturday customers can get up close to the roasting process taking in the sights, sounds and most importantly, the aroma of freshly roasted coffee. Also popular with locals and visitors alike is our ever-growing retail shop. Here you can purchase our 16 blends and single origin bagged coffee to take home or give as gift. We also regularly provide demonstrations of home machines and pour overs.
          <br/><br/>
          During the week our loyal coffee addicts pop in early to get their remedy before heading off to work to dream about their next fix.
          <br/><br/>
          As the business grows the vision remains the same: serve high standard, quality, locally roasted coffee to the nations capital… but make sure to have fun while you’re doing it.
        </p>
      </div>
    </main>
  );
};

export default AboutPage;