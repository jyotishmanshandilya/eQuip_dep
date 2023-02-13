import React from 'react'
import App from '../App';
const banner = require('../images/banner.png');

// const useStyles = makeStyles({
//   root: {
//     position: 'fixed',
//     top: 0,
//     left: 0,
//     width: '100%',
//     height: '100%',
//     backgroundImage: 'url(../images/banner.png)',
//     backgroundSize: 'cover',
//     backgroundRepeat: 'no-repeat',
//     backgroundPosition: 'center',
//   },
// });

const Intro = () => {
  return (
    <div className="intro">
      <img className='banner' src={banner}/>

    </div>
  )
}
// know more nutton will map to about us section
      // <div className='intro--info'>   
      //   <h2 className='intro--heading'></h2>
      //   <p className='intor--para'>At eQuip, our mission is to empower 
      //   businesses to reach their full potential and drive success. We believe 
      //   that every company has the capability to achieve great things, and it's 
      //   our goal to support them on their journey. We are dedicated to 
      //   providing businesses with the resources they need to succeed. We focus
      //   on innovation, excellence, and results, and we work tirelessly to be a 
      //   trusted partner for businesses looking to grow and thrive.</p>
      //   <button>Know More.</button> 
      // </div>

export default Intro;
