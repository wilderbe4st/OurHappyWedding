import React,{useState,Component}  from 'react';
import NavbarTop from '../Navbar/Navbar';
import '../../index.css';
import './styles.css';

const laptopImg = require('./headerlaptop.jpg');
const divStyle = {
    width: '910px',
    height: '606px',
    backgroundImage: `url(${laptopImg})`,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    marginLeft: '7%',
    marginRight: '7%'
};

function Home1(props){
    return(
        <div>
            <div className='header-wrapper'>
                <div className='title'>
                Our Happy Wedding
                </div>
                <NavbarTop/>
            </div>
            <div className='body-wrapper'>
                <div className='sec-1' style={divStyle}>
                    <div className='img-text'>
                    Make your wedding special with your own personalized wedding website
                    </div>
                    <div className='buttons'>
                        <div className='demo-btn'>View Demo</div>
                        <div className='getur-btn'>Get Yours!</div>
                    </div>
                </div>
                <div className='sec-2'>
                    <img src={require('../../resources/images/HomePage/leaf.png')} style={{marginTop:'3%',width:'60px'}}/>
                    <div style={{marginTop: '3%',marginBottom: '3%',color: '#607286',fontWeight:'450px',fontSize:'25px'}}>WHY OUR WEBSITE'S ARE THE BEST!</div>
                    <div className='features'>
                        <div className='feature1'>
                       <div className='img-wrap'>
                           <img className='icon-img' src={require('../../resources/images/HomePage/letter.png')}/>
                       </div>
                       <div className='ft-txt1' style={{textAlign: 'center',width:'155px',marginTop:'10px',marginBottom:'30%'}}>
                           Send customized invitations
                       </div>
                        </div>
                        <div className='feature2 '>
                        <div className='img-wrap'>
                        <img className='icon-img' src={require('../../resources/images/HomePage/doc.png')}/>
                       </div>
                       <div className='ft-txt2' style={{textAlign: 'center',width:'155px',marginTop:'10px'}}>
                           Put your wedding schedule online for guests
                       </div>
                        </div>
                        <div className='feature3 '>
                        <div className='img-wrap'>
                        <img className='icon-img' src={require('../../resources/images/HomePage/album.png')}/>
                       </div>
                       <div className='ft-txt3' style={{textAlign: 'center',width:'155px',marginTop:'10px'}}>
                           Take your wedding albums online
                       </div>
  
                        </div>
                    </div>
                </div>
                <div className='sec-3' style={{marginTop: '300px'}}>
hahaia
                </div>
            </div> 
        </div>
    );
}
export default Home1;