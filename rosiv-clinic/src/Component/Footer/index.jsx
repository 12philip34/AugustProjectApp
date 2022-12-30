import React from 'react'
import './style.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import MessageIcon from '@mui/icons-material/Message';

const Footer = () => {
    const IconStyle = {
        color: 'white'
    }
    return (
        <div>
            <div className="footerBox">
            
                <div className="secondBox">
                    <h1 className="footerLogo">Rosivylle</h1>
                    <h4>keep up with the latest news <br/>
                        from Rosivylle
                    </h4>
                    <div className="linkIconBox">
                   <small className='linkIcon'> <FacebookIcon style={IconStyle}/></small>
                       <small className='linkIcon'> <TwitterIcon style={IconStyle}/> </small>
                    <small className='linkIcon'><LinkedInIcon style={IconStyle}/> </small>
               <small className='linkIcon'> <InstagramIcon style={IconStyle}/> </small>
            </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;