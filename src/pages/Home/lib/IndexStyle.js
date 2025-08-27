import styled from 'styled-components';
import ContactbgImage from '../../../assets/images/contact_home/contact-bg.jpg';
import VideoBgImg from '../../../assets/images/features/video-bg.jpg';


// Home page contact component css :-

const ContacthomeStyles = styled.div`
  .contact-img-home {
    background-image: url(${ContactbgImage});
    background-position: center bottom;
    background-repeat: no-repeat;
    background-size: cover;
    padding: 100px 0px 250px 0px;
    text-align: center;
  }

  .title h3 {
    font-size: 48px;
    font-weight: 900;
    text-transform: uppercase;
    color: #fff;
  }

  .contact-content-home {
    margin: -160px 0 80px 0;
    display: flex;
    justify-content: center;
  }

  .contact-main {
    width: 90%;
    display: flex;
    justify-content: space-between;
    align-items: start;

    @media (max-width: 868px) {
      flex-direction: column;
    }
  }

  .contact-left {
    width: 50%;

    h6 {
      font-size: 18px;
      color: #f35525;
      margin-bottom: 30px;
    }

    h1 {
      width: 60%;
      font-size: 40px;
      margin-bottom: 30px;
    }

    p {
      font-size: 15px;
      line-height: 1.5;
      margin-bottom: 30px;
    }

    @media (max-width: 868px) {
      width: 100%;
    }
  }

  .contact-grid {
    margin-bottom: 20px;
    border-radius: 10px;
  }

  .map-container iframe {
    border: 0;
    border-radius: 10px;
  }

  .contact-call-container {
    display: flex;
    justify-content: space-between;

    @media (max-width: 568px) {
      display: block;
    }
  }

  .contact-call-box {
    width: 45%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 25px;
    border-radius: 10px;
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.15);
    margin-bottom: 30px;

    i {
      color: #f35525;
      font-size: 30px;
      margin-right: 20px;
    }

    @media (max-width: 868px) {
      width: 49%;
    }

    @media (max-width: 568px) {
      width: 100%;
    }
  }

  .contact-call-text p {
    margin: 0;
  }

  .contact-right {
    width: 45%;
    padding: 40px 30px;
    background-color: #ffffff;
    box-shadow: 0px 0px 20px 10px rgba(0, 0, 0, 0.2);
    border-radius: 10px;

    @media (max-width: 868px) {
      width: 100%;
    }
  }

  .form {
    display: flex;
    flex-direction: column;
    align-items: start;

    label {
      font-size: 15px;
      color: #0d0d0d;
      margin-bottom: 15px;
    }

    input, textarea {
      width: 100%;
      background-color: #f6f6f6;
      border: none;
      font-size: 14px;
    }

    input {
      height: 44px;
      border-radius: 22px;
      padding: 0px 15px;
      margin-bottom: 20px;
    }

    textarea {
      height: 150px; 
      max-height: 180px;
      border-radius: 22px;
      padding: 15px 15px;
      margin-bottom: 20px;
    }

    .form_error{
      color: red;
      font-size: 0.8em;
      margin-bottom: 10px;
      margin-top: -14px;
      display: block;
      padding: 0;
      margin-left: 16px;
      margin-right: 0;
      text-align: left;
      width: 80%;
    }
  } 

  .send-button {
    width: 40%;
    height: 44px;
    border-radius: 22px;
    padding: 0px 20px;
    font-size: 15px;
    font-weight: 500;
    color: #fff;
    border: none;
    background-color: #1e1e1e;
    cursor: pointer;
    margin-top: 20px;

    &:hover {
      background-color: #f35525;
    }
  }
`;

export default ContacthomeStyles;


// Home page propertieshome componenet css :-

export const PropertiesHome = styled.div`
  margin-bottom: 60px;
  display: flex;
  margin: 90px 0;
  flex-direction: column;
  align-items: center;

  .properties_title_home { 
    width: 30%;
    margin: 30px 0 60px 0;
    text-align: center;

    @media (max-width: 868px) {
      width: 90%;
    }

    h6 {
      color: #ee626b;
      font-size: 15px; 
      text-transform: uppercase;
      font-weight: 700;
    }

    h2 {
      font-size: 40px;
      font-weight: 700;
      text-transform: capitalize;
      margin-top: 20px;
      line-height: 56px;
    }
  }
`;


// Home page video component css :-

export const VideoWrapper = styled.div`
  margin: 60px 0;

  .video_content {
    background-image: url(${VideoBgImg}); 
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    padding: 100px 0px 250px 0px;
    position: relative;
    display: flex;
    justify-content: center;
  }

  .video_info {
    width: 15%;
    text-align: center;
    margin-bottom: 70px;

    h6 {
      color: #ee626b;
      font-size: 15px;
      text-transform: uppercase;
      font-weight: 700;
    }

    h2 {
      color: #fff;
      font-size: 40px;
      font-weight: 700;
      text-transform: capitalize;
      margin-top: 20px;
      line-height: 56px;
    }

    @media (max-width: 868px) {
      width: 80%;
    }
  }

  .v_info {
    display: flex;
    justify-content: center;
  }

  .video { 
    position: relative;
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.15);
    width: 70%;
    margin-top: -240px;
    background-color: transparent !important;

    .image { 
      max-width: 100%;
      overflow: hidden;
      padding: 0;
      border-radius: 10px;
    }

    @media (max-width: 868px) {
      .image {
        width: 100%;
      }
    }

    @media (max-width: 568px) {
      margin-top: -240px;
      width: 95%;
      .image {
        width: 100%;
      }
    }
  }
`;