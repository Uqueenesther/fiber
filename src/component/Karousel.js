import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const sliderSettings = {
  slidesToShow: 3,
  slidesToScroll: 1,
  infinite: false,

  responsive: [
    {
      breakpoint: 1024,
      settings: {
       slidesToShow: 3,
      }
    },
    {
      breakpoint: 600,
      settings: {
       slidesToShow: 2,
      }
     }
  ]
}



export default function Carousel() {
  const reviewCards = [
    {
      imageSrc:
       'img/Avatar.svg',
       name: 'Matthew Higgins',
       pricingText: 'USD 50/Day',
      description: 'Lorem ipsum dolor sit amet, consectur dolori',
      // features: ['Free Wifi', 'Free breakfast'],
    },
    {
      imageSrc:
      'img/Avatar 2.svg',
      name: 'Deluxe Room',
      description: 'Lorem ipsum dolor sit amet, consectur dolori',
      pricingText: 'USD 80/Day',
      // features: ['Free Wifi', 'Free breakfast'],
    },
    {
      imageSrc:
      'img/Avatar 32.svg',
        name: 'King Deluxe Room',
      description: 'Lorem ipsum dolor sit amet, consectur dolori',
      pricingText: 'USD 150/Day',
      // features: ['Free Wifi', 'Free breakfast', 'Discounted Meals'],
    },
   
  ]

  return (
    <div className='content'>
      <Slider {...sliderSettings}>
        {reviewCards.map((card, index) => (
          <div key={index}>
            <h2>{card.name}</h2>
            <img alt={card.name} src={card.imageSrc} width="100" height="100" />
            <p>{card.description}</p>
            
            <button className='btn'>Buy Now</button>
          </div>
        ))}
      </Slider>
    </div>
    // <div className='features__reviews'>

    //   <Slider {...sliderSettings} >
    //           {reviewCards.map((card, index) => (
    //             <div key={index}  className='features__profile'>
    //               <div className ="features__story"> 
    //               <img alt={card.name} src={card.imageSrc} className='features__avatar'  />
    //                 <h4 className='features__heading'>{card.name}</h4>
    //                 <p>{card.pricingText}</p>
    //               <p className='para'>{card.description}</p>     
    //           <button className='btn features__btn-2'>View Sarah's portfolio</button>
    //                </div>
    //             </div>
    //           ))}
    //         </Slider> 

           
    // </div>
    
  )
}














































































// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";

// const responsive = {
//   desktop: {
//     breakpoint: { max: 3000, min: 1024 },
//     items: 3,
//     slidesToSlide: 3 // optional, default to 1.
//   },
//   tablet: {
//     breakpoint: { max: 1024, min: 464 },
//     items: 2,
//     slidesToSlide: 2 // optional, default to 1.
//   },
//   mobile: {
//     breakpoint: { max: 464, min: 0 },
//     items: 1,
//     slidesToSlide: 1 // optional, default to 1.
//   }
// };
// function Karousel(){
// return(
//     <div>
//       <Carousel
//   // swipeable={false}
//   // draggable={false}
//   // showDots={true}
//   responsive={responsive}
//   ssr={true} // means to render carousel on server-side.
//   infinite={true}
//   // autoPlay={this.props.deviceType !== "mobile" ? true : false}
//   autoPlaySpeed={1000}
//   keyBoardControl={true}
//   customTransition="all .5"
//   transitionDuration={500}
//   containerClass="carousel-container"
//   removeArrowOnDeviceType={["tablet", "mobile"]}
//   // deviceType={this.props.deviceType}
//   dotListClass="custom-dot-list-style"
//   itemClass="carousel-item-padding-40-px"
// >
//   <div>Item 1</div>
//   <div>Item 2</div>
//   <div>Item 3</div>
//   <div>Item 4</div>
// </Carousel>;  
//     </div>
// )
// }

// export default Karousel;