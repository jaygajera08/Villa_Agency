import styled from 'styled-components';

const ContactStyles = styled.div`
  .contact-wrapper {
    margin: 60px 0;
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

  .contact-info-container {
    display: flex;
    justify-content: space-between;

    @media (max-width: 568px) {
      display: block;
    }
  }

  .contact-info-box {
    width: 48%;
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

  .contact-info-text {
    p {
      margin: 0;
    }
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

  .contact-form {
    display: flex;
    flex-direction: column;
    padding: 0;
    align-items: start;
    overflow: visible;

    label {
      font-size: 15px;
      color: #0d0d0d;
      margin-bottom: 15px;
    }

    input {
      width: 100%; 
      height: 44px;
      border-radius: 22px;
      background-color: #f6f6f6;
      border: none;
      margin-bottom: 20px;
      font-size: 14px;
      padding: 0px 15px;
    }

    textarea {
      width: 100%;
      height: 150px;
      max-height: 180px;
      border-radius: 22px;
      background-color: #f6f6f6;
      border: none;
      margin-bottom: 20px;
      font-size: 14px;
      padding: 15px 15px;
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
    cursor: pointer;
    background-color: #1e1e1e;
    height: 44px;
    border-radius: 22px;
    padding: 0px 20px;
    color: #fff;
    border: none;
    font-size: 15px;
    font-weight: 500;
    margin-top: 20px;

    &:hover {
      background-color: #f35525;
      color: #fff;
    }
  }

  .map-container {
    text-align: center;
    margin-bottom: 100px;
  }
`;

export default ContactStyles;
