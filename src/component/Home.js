import '../App.scss';
import { Link } from 'react-router-dom';
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const sliderSettings = {
  dots: true,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  pauseOnHover: true,
      responsive: [
        {
          breakpoint: 1100,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
}


function Home() {
  return (
    <div className="container">
        <header className='header mb-header'>
        <div className='deskheader'>
        <h3 className=' logo heading__3 '>Fiber</h3>
        <nav className='nav'>
         <ul className='nav__list'>
           <li className='nav_items'> <a href='http://localhost:3000/' className='nav__link'>Community</a></li>
           <li className='nav_items'> <a href='http://localhost:3000/' className='nav__link'>Princing</a></li>
           <li className='nav_items'> <a href='http://localhost:3000/' className='nav__link'>Features</a></li>
         </ul>
        </nav>
        <div className=' nav register'>
        <h4 className='heading__3'> <a href='http://localhost:3000/' className='nav__link sign'>Sign In</a></h4>
        <button className='btn__signup'><Link to="/signup" className='btn__link'>Sign Up</Link> </button>
       
        </div>
        </div>

        {/* MOBILE NAV */}
        <h3 className=' logo mb-logo'>Fiber</h3>
           <div className="hamburger1">
             <input id="toggle" type="checkbox"/>

                <label htmlFor ="toggle" className="hamburger">
                     <div className="top-bun"></div>
                     <div className="meat"></div>
                     <div className="bottom-bun"></div>
                  </label>
                   <div className="nav">
                   <div className="nav-wrapper">
                      <nav>
                        <ul className="mb-list">
                         <li className="mb-items"><a href="http://localhost:3000/" className="mb-link">Community</a></li>
                         <li className="mb-items"><a href="http://localhost:3000/" className="mb-link">Pricing</a></li>
                         <li className="mb-items"><a href="http://localhost:3000/" className="mb-link">Features</a></li>
                          <Link to="/signup" className='mb-signup'>Sign Up</Link>
                          </ul>
                          </nav>
                                    
                        </div> 
                        </div>
                      </div>
        </header>
        
        
       <section className='section__container mb-sec-container'>
       <div className='section__1'>
        <div className='section__icon'>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" className='section__icon-star'>
            <path d="M9 0.440247L11.751 6.11625L18 6.9795L13.452 11.3505L14.562 17.5597L9 14.5845L3.43725 17.5597L4.548 11.3505L0 6.9795L6.249 6.11625L9 0.440247Z" fill="#FF9529"/>
            </svg>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" className='section__icon-star'>
            <path d="M9 0.440247L11.751 6.11625L18 6.9795L13.452 11.3505L14.562 17.5597L9 14.5845L3.43725 17.5597L4.548 11.3505L0 6.9795L6.249 6.11625L9 0.440247Z" fill="#FF9529"/>
            </svg>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" className='section__icon-star' >
            <path d="M9 0.440247L11.751 6.11625L18 6.9795L13.452 11.3505L14.562 17.5597L9 14.5845L3.43725 17.5597L4.548 11.3505L0 6.9795L6.249 6.11625L9 0.440247Z" fill="#FF9529"/>
            </svg>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" className='section__icon-star'>
            <path d="M9 0.440247L11.751 6.11625L18 6.9795L13.452 11.3505L14.562 17.5597L9 14.5845L3.43725 17.5597L4.548 11.3505L0 6.9795L6.249 6.11625L9 0.440247Z" fill="#FF9529"/>
            </svg>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" className='section__icon-star'>
            <path d="M9 0.440247L11.751 6.11625L18 6.9795L13.452 11.3505L14.562 17.5597L9 14.5845L3.43725 17.5597L4.548 11.3505L0 6.9795L6.249 6.11625L9 0.440247Z" fill="#FF9529"/>
            </svg>
            <p className='section__p'>Rated 4.8/5 (243 reviews) </p>
        </div>

          <div className='text-con'>     
              <h2 className='heading__2'> Create your portfolio in minutes.</h2>
              <p className='para'>With Fiber, you can setup your own personal portfolio in minutes with dozens of premade, beautiful templates</p>
            <div className='linkbtn'>
             <span className='btn '>Start Free Trial</span>
              <h4><a href='http://localhost:3000/'  className='link-view'> View Examples</a></h4>
            </div>
          </div>

         <div className='check__con'>
            <div className='section__icon2'>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className='section__icon-check'>
            <path d="M12 0C5.373 0 0 5.373 0 12C0 18.627 5.373 24 12 24C18.627 24 24 18.627 24 12C24 5.373 18.627 0 12 0ZM10.75 17.292L6.25 12.928L8.107 11.07L10.75 13.576L16.393 7.792L18.25 9.649L10.75 17.292Z" fill="#45B19E"/>
            </svg> 
            <p >No Credit Card Required</p>
            </div>
            
            <div className='section__icon2'>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className='section__icon-check'>
            <path d="M12 0C5.373 0 0 5.373 0 12C0 18.627 5.373 24 12 24C18.627 24 24 18.627 24 12C24 5.373 18.627 0 12 0ZM10.75 17.292L6.25 12.928L8.107 11.07L10.75 13.576L16.393 7.792L18.25 9.649L10.75 17.292Z" fill="#45B19E"/>
            </svg> 
            <p > 10 Free Templates</p>
            </div>
         </div>
      </div>

      <div className='section__2'>
        <img src='img/hero.png' alt='illustration' className='hero'/>
      </div>
       </section>
     

      <section className='features mb-features'>
        <div className='features__header'>
        <h4>Why fiber ?</h4>
        <h2 className='heading__2'>A good portfolio means good employability</h2>
        </div>
        
         
        <div className='features__use'>
          
          <div className='features__icon'>
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M21.6666 20L20.52 13.3333H19.505L18.3333 20C17.34 20.5783 16.6666 21.64 16.6666 22.8717C16.6666 24.7117 18.16 26.205 20 26.205C21.84 26.205 23.3333 24.7117 23.3333 22.8717C23.3333 21.64 22.66 20.5783 21.6666 20ZM20 6.66667C10.7966 6.66667 3.33331 14.1283 3.33331 23.3333C3.33331 32.5383 10.7966 40 20 40C29.2033 40 36.6666 32.5383 36.6666 23.3333C36.6666 14.1283 29.2033 6.66667 20 6.66667ZM20 36.6667C12.6483 36.6667 6.66665 30.685 6.66665 23.3333C6.66665 15.9817 12.6483 10 20 10C27.3516 10 33.3333 15.9817 33.3333 23.3333C33.3333 30.685 27.3516 36.6667 20 36.6667ZM16.6666 3.635V0H23.3333V3.635C20.9366 3.23 19.0133 3.23833 16.6666 3.635ZM31.965 7.345L34.31 5L36.6666 7.35667L34.465 9.55833C33.695 8.75167 32.8583 8.015 31.965 7.345ZM10.8333 23.3333C10.8333 23.7933 10.46 24.1667 9.99998 24.1667C9.53998 24.1667 9.16665 23.7933 9.16665 23.3333C9.16665 22.8733 9.53998 22.5 9.99998 22.5C10.46 22.5 10.8333 22.8733 10.8333 23.3333ZM30.8333 23.3333C30.8333 23.7933 30.46 24.1667 30 24.1667C29.54 24.1667 29.1666 23.7933 29.1666 23.3333C29.1666 22.8733 29.54 22.5 30 22.5C30.46 22.5 30.8333 22.8733 30.8333 23.3333ZM20.8333 33.3333C20.8333 33.7933 20.46 34.1667 20 34.1667C19.54 34.1667 19.1666 33.7933 19.1666 33.3333C19.1666 32.8733 19.54 32.5 20 32.5C20.46 32.5 20.8333 32.8733 20.8333 33.3333ZM14.1666 30C14.1666 30.46 13.7933 30.8333 13.3333 30.8333C12.8733 30.8333 12.5 30.46 12.5 30C12.5 29.54 12.8733 29.1667 13.3333 29.1667C13.7933 29.1667 14.1666 29.54 14.1666 30ZM27.5 30C27.5 30.46 27.1266 30.8333 26.6666 30.8333C26.2066 30.8333 25.8333 30.46 25.8333 30C25.8333 29.54 26.2066 29.1667 26.6666 29.1667C27.1266 29.1667 27.5 29.54 27.5 30ZM14.1666 15C14.1666 15.46 13.7933 15.8333 13.3333 15.8333C12.8733 15.8333 12.5 15.46 12.5 15C12.5 14.54 12.8733 14.1667 13.3333 14.1667C13.7933 14.1667 14.1666 14.54 14.1666 15ZM27.5 15C27.5 15.46 27.1266 15.8333 26.6666 15.8333C26.2066 15.8333 25.8333 15.46 25.8333 15C25.8333 14.54 26.2066 14.1667 26.6666 14.1667C27.1266 14.1667 27.5 14.54 27.5 15Z" fill="#4D13D1"/>
          </svg>
          <h4 className='heading__4'>Build in minutes</h4>
          <p className='para'>with a selection of premade templates, you can build out a portfolioin less than 10 minutes.</p>
          </div>

          <div className='features__icon'>
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M31.6667 0H8.33333C3.73167 0 0 3.73167 0 8.33333V31.6667C0 36.2683 3.73167 40 8.33333 40H31.6667C36.27 40 40 36.2683 40 31.6667V8.33333C40 3.73167 36.27 0 31.6667 0ZM18.3333 16.9983L12.2667 20L18.3333 22.9933V26.6667L8.33333 21.775V18.2233L18.3333 13.3333V16.9983ZM31.6667 21.775L21.6667 26.6667V22.9933L27.7333 20L21.6667 16.9983V13.3333L31.6667 18.225V21.775Z" fill="#4D13D1"/>
          </svg>
          <h4 className='heading__4'>Add custom CSS</h4>
          <p className='para'>
            Customize your personal portfolio even more with the ability to add your own custom CSS style
          </p>
          </div>

          <div className='features__icon'>
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M22.605 40H3.33333C1.49333 40 0 38.5067 0 36.6667V3.33333C0 1.49333 1.49333 0 3.33333 0H26.6667C28.5067 0 30 1.49333 30 3.33333V10H26.6667V5H3.33333V33.3333H21.6667V37.5C21.6667 38.3733 21.97 39.4583 22.605 40ZM37.5 11.6667C38.88 11.6667 40 12.7867 40 14.1667V37.5C40 38.8767 38.8817 40 37.5 40H25.8333C24.4517 40 23.3333 38.875 23.3333 37.5V14.1667C23.3333 12.7883 24.455 11.6667 25.8333 11.6667H37.5ZM15 35C15.92 35 16.6667 35.7467 16.6667 36.6667C16.6667 37.5867 15.92 38.3333 15 38.3333C14.08 38.3333 13.3333 37.5867 13.3333 36.6667C13.3333 35.7467 14.08 35 15 35ZM31.6667 38.3333C30.745 38.3333 30 37.5867 30 36.6667C30 35.7467 30.745 35 31.6667 35C32.5867 35 33.3317 35.7467 33.3317 36.6667C33.3317 37.5867 32.5867 38.3333 31.6667 38.3333ZM38.3333 33.3333V16.6267H25V33.3333H38.3333ZM32.5 15C32.9583 15 33.3333 14.6267 33.3333 14.1667C33.3333 13.7067 32.9583 13.3333 32.5 13.3333H30.8333C30.3733 13.3333 30 13.7067 30 14.1667C30 14.6267 30.3733 15 30.8333 15H32.5Z" fill="#4D13D1"/>
           </svg>
          <h4 className='heading__4'> Responsive</h4>
          <p className='para'>All fiber templates are fully responsive to ensure the experience is seamless across all devices.</p>
          </div>
        </div>
{/*  */}
        <div className='features__box'>  
            <div className='features__box-details'>
            <h2 className='heading__2 '> Diversify your portfolio.</h2>
            <p className='para'> Create an even more impressive portfolio by creating case studies for your projects. Simply follow our step-by-step guide. </p>
            <button className='btn features__btn'>Start Free trial</button>
            </div>

            <figure className='features__box-img'>
                <img src='img/page.png' alt='page' className='features__img'/>
            </figure> 
        </div>

       <div className='features__reviews' >
        
        <Slider {...sliderSettings} >
          <div className='case'>
          <div  className='features__profile'>
           <div className='features__story'>
             <img  src='img/Avatar 32.svg' alt='avatar' className='features__avatar'/> 
             <p> <h4 className='features__heading'>Janice Dave</h4> $120k in revenue</p>
            </div>
            <p className='para'>I only just started freelancing this month and have already made more than i ever made in my full-time job.the templates are so amazing.</p>
            <button className=' features__btn-2'>View janice's portfolio</button>
           </div>
          </div>

          <div  className='case'> 
            <div  className='features__profile'>
            <div className='features__story'>
            <img  src='img/Avatar.svg' alt='avatar' className='features__avatar'/>
            <p> <h4 className='features__heading'>Sarah Andrews</h4> $130k in revenue</p>
              </div>
              <p className='para'>Setting up my portfolio with fiber toomk no more than 10 minutes. Since then, my portfolio has attracted a lot of clients and made me  more than $130k</p>
              <button className=' features__btn-2'>View Sarah's portfolio</button>
            </div> 
          </div>

          <div  className='case'>
              <div  className='features__profile'>
              <div className='features__story'>
                <img  src='img/Avatar 2.svg' alt='avatar' className='features__avatar'/>
                <p> <h4 className='features__heading'>Matthew's Higgins</h4> $20k in revenue</p>
                </div>
                <p className='para'>I have been getting A LOT of leads ever since i used Fiber's premade templates, now i just need to work on my case studies and i'll be ready to go!</p>
                <button className=' features__btn-2'>View Sarah's portfolio</button>
              </div>
          </div>

          <div  className='case'>
               <div  className='features__profile'>
               <div className='features__story'>
                <img  src='img/Avatar 2.svg' alt='avatar' className='features__avatar'/>
                <p> <h4 className='features__heading'>Matthew's Higgins</h4> $20k in revenue</p>
                </div>
                <p className='para'>I have been getting A LOT of leads ever since i used Fiber's premade templates, now i just need to work on my case studies and i'll be ready to go!</p>
                <button className=' features__btn-2'>View Sarah's portfolio</button>
              </div>
          </div>

          <div  className='case'>
             <div  className='features__profile'>
             <div className='features__story'>
              <img  src='img/Avatar.svg' alt='avatar' className='features__avatar'/>
              <p> <h4 className='features__heading'>Sarah Andrews</h4> $130k in revenue</p>
              </div>
              <p className='para'>Setting up my portfolio with fiber toomk no more than 10 minutes. Since then, my portfolio has attracted a lot of clients and made me  more than $130k</p>
              <button className=' features__btn-2'>View Sarah's portfolio</button>
            </div> 
          </div>

          <div  className='case'>
            <div  className='features__profile'>
              <div className='features__story'>
              <img  src='img/Avatar.svg' alt='avatar' className='features__avatar'/>
              <p> <h4 className='features__heading'>Sarah Andrews</h4> $130k in revenue</p>
                </div>
                <p className='para'>Setting up my portfolio with fiber toomk no more than 10 minutes. Since then, my portfolio has attracted a lot of clients and made me  more than $130k</p>
                <button className=' features__btn-2'>View Sarah's portfolio</button>
              </div> 
          </div>
          </Slider>
       </div>
            
       
      </section>

      <footer className='footer mb-footer'>
         {/* <div className='footer__container'> */}
            <div className='footer__fiber'>
              <h4>Fiber</h4>
              <p>with fiber, you can set up your own personal portfolioin minutes with dozens of premade, beautiful templates</p>
              <p>made with &hearts; in the Netherlands</p>
            </div>

            {/* <div className='footer__nav'> */}
            <div className='footer__sitemap'>
               <ul className='footer__list'>
               <h4>Sitemap</h4>
                 <li className='footer__item'><a href='http://localhost:3000/' className='footer__link'>Homepage</a></li>
                 <li className='footer__item'><a href='http://localhost:3000/' className='footer__link'>Pricing</a></li>
                 <li className='footer__item'><a href='http://localhost:3000/' className='footer__link'>Testimonials</a></li>
                 <li className='footer__item'><a href='http://localhost:3000/' className='footer__link'>Features</a></li>
               </ul>
            </div>

            <div className='footer__resources'>
               <ul className='footer__list'>
               <h4>Resources</h4>
                 <li className='footer__item'><a href='http://localhost:3000/' className='footer__link'>Support</a></li>
                 <li className='footer__item'><a href='http://localhost:3000/' className='footer__link'>Contact</a></li>
                 <li className='footer__item'><a href='http://localhost:3000/' className='footer__link'>FAQ</a></li>
               </ul>
            </div>

            <div className='footer__company'>
               <ul className='footer__list'>
               <h4>Company</h4>
                 <li className='footer__item'><a href='http://localhost:3000/' className='footer__link'>Support</a></li>
                 <li className='footer__item'><a href='http://localhost:3000/' className='footer__link'>Contact</a></li>
                 <li className='footer__item'><a href='http://localhost:3000/' className='footer__link'>FAQ</a></li>
               </ul>
            </div>

            <div className='footer__portfolios'>
               <ul className='footer__list'>
               <h4>portfolio</h4>
                 <li className='footer__item'><a href='http://localhost:3000/' className='footer__link'>Sarah Andrews</a></li>
                 <li className='footer__item'><a href='http://localhost:3000/' className='footer__link'>Matthew Higgins</a></li>
                 <li className='footer__item'><a href='http://localhost:3000/' className='footer__link'>Janice Dave</a></li>
               </ul>
            </div>

            {/* </div> */}
         {/* </div> */}
      </footer>
    </div>
  );
}

export default Home;

