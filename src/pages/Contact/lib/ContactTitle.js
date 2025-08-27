import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faMap, faCircleUser, faPhone, faBookmark, faRightToBracket } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router'

const ContactTitle = () => { 
  return (
    <div>

      <div className='contact_img'>
        <div className='title'>
            <span className='title1'><Link to='/home'>Home</Link>/ Contact </span> 
            <h3>Contact Us</h3>
        </div>
      </div>

    </div>
  )
}

export default ContactTitle











// import { Link } from 'react-router';
// import styled from 'styled-components';
// import bgImage from '../../../assets/images/contact_dashboard/page-heading-bg.jpg';

// const ContactImage = styled.div`
//   background-image: url(${bgImage});
//   background-position: center bottom;
//   background-repeat: no-repeat;
//   background-size: cover;
//   padding: 110px 0px;
//   text-align: center;
// `;

// const TitleContainer = styled.div`
//   text-align: center;
// `;

// const TitleSpan = styled.span`
//   background-color: #fff;
//   color: #1e1e1e;
//   font-size: 14px;
//   font-weight: 500;
//   text-transform: uppercase;
//   padding: 10px 25px;
//   display: inline-block;
//   margin-bottom: 30px;

//   a {
//     text-decoration: none;
//     color: #1e1e1e;

//     &:hover {
//       text-decoration: underline;
//     }
//   }
// `;

// const TitleHeading = styled.h3`
//   font-size: 48px;
//   font-weight: 900;
//   text-transform: uppercase;
//   color: #fff;
// `;

// const ContactTitle = () => {
//   return (
//     <ContactImage>
//       <TitleContainer>
//         <TitleSpan>
//           <Link to="/home">Home</Link> / Contact
//         </TitleSpan>
//         <TitleHeading>Contact Us</TitleHeading>
//       </TitleContainer>
//     </ContactImage>
//   );
// };

// export default ContactTitle;