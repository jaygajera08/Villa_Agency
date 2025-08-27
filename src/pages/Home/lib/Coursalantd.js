import { Carousel } from 'antd';
import styled from 'styled-components';
import img1 from '../../../assets/images/dashboard/banner-01.jpg'
import img2 from '../../../assets/images/dashboard/banner-02.jpg'
import img3 from '../../../assets/images/dashboard/banner-03.jpg'


const BannerStyled = styled.div`
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 300px 20% 320px 20%;
  margin-top: 0px;
  height: 1000px;
  background-image: url(${props => props.backgroundImage});

  @media (max-width: 868px) {
    padding: 200px 20% 270px 20%;
    height: 800px;
  }
`;

const CategoryStyled = styled.span`
  background-color: #fff;
  color: #1e1e1e;
  font-size: 16px;
  font-weight: 500;
  text-transform: capitalize;
  padding: 6px 15px;
  display: inline-block;
  margin-bottom: 30px;

  em {
    color: #f35525;
  }
`;

const HeadingStyled = styled.h2` 
  font-size: 62px;
  font-weight: 700;
  text-transform: uppercase;
  color: #fff;
  line-height: 72px;
  width: 50%;
  margin-bottom: 0px;

  @media (max-width: 868px) {
    font-size: 52px !important;
    width: 90%;
  }
`;

const Coursalantd = () => (
  <Carousel autoplay={{ dotDuration: true }} autoplaySpeed={5000} arrows>
    <div>
      <BannerStyled backgroundImage={img1}>
        <div>
          <CategoryStyled>Melbourne, <em>Australia</em></CategoryStyled>
          <HeadingStyled>Be Quick! <br/> Get the best villa in town</HeadingStyled>
        </div>
      </BannerStyled>
    </div>
    <div>
      <BannerStyled backgroundImage={img2}>
        <div>
          <CategoryStyled>Torronto, <em>Canada</em></CategoryStyled>
          <HeadingStyled>Hurry! <br/> Get the best villa for you</HeadingStyled>
        </div>
      </BannerStyled>
    </div>
    <div>
      <BannerStyled backgroundImage={img3}>
        <div>
          <CategoryStyled>Miami, <em>South Florida</em></CategoryStyled>
          <HeadingStyled>Act Now! <br/> Get the Highest level penthouse</HeadingStyled>
        </div>
      </BannerStyled>
    </div>
  </Carousel>
);

export default Coursalantd;









// import { Carousel } from 'antd';

// const Coursalantd = () => (
//   <Carousel autoplay={{ dotDuration: true }} autoplaySpeed={5000} arrows>
//     <div>
//       <div className='banner banner_img1'>
//         <div>
//             <span className='catagory'>Melbourne, <em>Australia</em></span>
//             <h2>Be Quick! <br/> Get the best villa in town</h2>
//         </div>
//       </div>
//     </div>
//     <div>
//       <div className='banner banner_img2'>
//         <div>
//             <span className='catagory'>Torronto, <em>Canada</em></span>
//             <h2>Hurry! <br/> Get the best villa for you</h2>
//         </div>
//       </div>
//     </div>
//     <div>
//       <div className='banner banner_img3'>
//         <div>
//             <span className='catagory'>Miami, <em>South Florida</em></span>
//             <h2>Act Now! <br/> Get the Highest level penthouse</h2>
//         </div>
//       </div>
//     </div>
//   </Carousel>
// );
// export default Coursalantd;
