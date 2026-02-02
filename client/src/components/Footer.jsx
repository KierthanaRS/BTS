import React from 'react';
import './Footer.css';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
    const navigate = useNavigate();
    // const scrollToSection = (sectionId) => {
    //     const section = document.getElementById(sectionId);
    //     if (section) {
    //       section.scrollIntoView({ behavior: 'smooth' });
    //     }
    //   };
      const navigateTo = (sectionId) => { 
        navigate('/home');
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      };
      const navigateToMe = () => {
        navigate('/me');
      };
    return (
        <div className='footer'>
            <footer className="site-footer">
                <div className="container">
                    <div className="row">
                        <div /*className="col-sm-12 col-md-6"*/ > 
                            <h6>About</h6>
                            <p className="text-justify">Welcome to our BTS fan website, where we celebrate the extraordinary talent and creativity of the BTS members. Our mission is to provide a platform for ARMYs to explore the world of BTS and stay updated with their latest news, music, and achievements. From captivating performances to heartfelt messages, we strive to showcase the essence of BTS in its purest form. Join us on this journey as we delve into the fascinating world of BTS and spread love and positivity together.</p>
                            <p onClick={() => navigateToMe()}>About Me</p>
                        </div>

                        <div /*className="col-xs-6 col-md-3"*/>
                            <h6>BTS Websites and Social Media</h6>
                            <ul className="footer-links">
                                <li><a href="https://ibighit.com/bts/eng/profile/">Website</a></li>
                                <li><a href="https://weverse.io/?shortlink=cbdb15ca&c=sitemap&pid=bighit_ibighit_bts&af_click_lookback=1h&source_caller=ui">Weverse</a></li>
                                <li><a href="https://hybecorp.com/eng">HYBE</a></li>
                                <li><a href="https://www.bighitaudition.com/">Big Hit udition</a></li>
                                <li><a href="https://www.weverseshop.io/en/home">Weaverse Shop</a></li>
                            </ul>
                        </div>

                        <div /*className="col-xs-6 col-md-3"*/>
                            <h6>Quick Links</h6>
                            <ul className="footer-links">
                                <li><div onClick={() => navigateTo('about')}>About BTS</div></li>
                                <li><div onClick={() => navigateTo('members')}>Members</div></li>
                                <li><div onClick={() => navigateTo('Albums')}>Albums</div></li>
                                <li><div onClick={() => navigateTo('SoloAlbums')}>Solo Albums</div></li>
                            </ul>
                        </div>
                    </div>
                    <hr />
                </div>
                <div className="container">
                    <div className="row">
                        {/* <div className="col-md-8 col-sm-6 col-xs-12">
                            <p className="copyright-text">Copyright &copy; 2017 All Rights Reserved by <a href="#">Scanfcode</a>.</p>
                        </div> */}

                        <div /*className="col-md-4 col-sm-6 col-xs-12"*/>
                            <ul className="social-icons">
                                <li><a className="facebook" href="#!"><i className="fa fa-facebook"></i></a></li>
                                <li><a className="twitter" href="#!"><i className="fa fa-twitter"></i></a></li>
                                <li><a className="linkedin" href="#!"><i className="fa fa-linkedin"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
