import styled from 'styled-components';


export const FeaturesWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 90px 0;

  .features-container { 
    width: 90%;
    display: flex;
    justify-content: center;
    align-items: start;

    @media (max-width: 868px) {
      flex-direction: column;
    }
  }

  .features-image-wrapper { 
    width: 30%;
    position: relative;
    padding: 0 10px;

    img {
      width: 100%;
      overflow: hidden;
      padding-left: 55px;
    }

    a {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 110px;
      height: 110px;
      line-height: 110px;
      background-color: #f35525;
      border-radius: 50%;
      text-align: center;
      position: absolute;
      left: 0;
      bottom: -55px;

      img {
        max-width: 60px;
        padding: 0;
      }
    }

    @media (max-width: 868px) {
      width: 70%;
    }

    @media (max-width: 568px) {
      width: 100%;
      padding: 0;
    }
  }

  .features-info {
    width: 40%;
    margin: 0 20px;

    @media (max-width: 868px) {
      width: 100%;
      margin: 100px 0 0 0;
    }

    @media (max-width: 568px) {
      width: 100%;
      margin: 100px 0 0 0;
    }
  }

  .heading { 
    margin-left: 10px;
    margin-right: 10px;
    margin-bottom: 60px;

    h6 {
      color: #ee626b;
      font-size: 15px;
      text-transform: uppercase;
      font-weight: 700;
    }

    h2 {
      width: 70%;
      font-size: 40px;
      font-weight: 700;
      text-transform: capitalize;
      margin-top: 20px;
      line-height: 56px;
    }

    @media (max-width: 568px) {
      margin-left: 0;
      margin-right: 0;
    }
  }

  .features-list {
    width: 22%;

    @media (max-width: 868px) {
      width: 100%;
    }

    @media (max-width: 568px) {
      width: 100%;
    }
  }

  .features-table { 
    padding: 30px;
    border-radius: 10px;
    background-color: #ffffff;
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.15);

    img {
      max-width: 52px;
      padding: 0;
    }

    .info {
      border-bottom: 1px solid #eee;
      padding: 30px 0;
      display: flex;

      &:last-child {
        border: none;
      }
    }

    .information {
      margin-left: 25px;

      p {
        font-size: 15px;
        color: #838282;
        font-weight: 400;
        padding-top: 5px;
      }
    }
  }
`;
