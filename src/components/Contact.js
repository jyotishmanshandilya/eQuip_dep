import * as React from 'react';
import Typography from '@mui/material/Typography';
import { Link } from '@mui/material';
import insta from '../images/instagram.svg';
import linkedin from '../images/linkedin.svg';
import email from '../images/mail.svg';

export default function Contact() {
  return (
    <div id="contact">
      <h1 className='contact--header'>Contact Us</h1>
      <div className='social-media'>
        <Link href="https://www.instagram.com/_equipyourself_/" className="link">
            <img src={insta} alt='Instagram Icon'/>
        </Link>
        <Link href="https://www.linkedin.com/in/equip-yourself/" className="link">
            <img src={linkedin} alt='LinkedIn Icon'/>
        </Link>
        <Link href="mailto:yourself.equip@gmail.com" className="link">
            <img src={email} alt='Email Icon'/>
        </Link>
      </div>
    </div>
  );
}
