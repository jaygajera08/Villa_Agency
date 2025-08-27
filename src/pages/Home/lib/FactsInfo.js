import styled from 'styled-components';

const FactsWrapper = styled.div`
  margin: 60px 0;
  display: flex;
  justify-content: center;
`;

const FactsContainer = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  @media (max-width: 868px) {
    justify-content: center;
  }
`;

const FactBox = styled.div`
  width: 22%;
  background-color: #f7dfd7;
  display: flex;
  align-items: center;
  padding: 30px;
  border-radius: 15px;

  h2 {
    margin-right: 25px;
    font-size: 40px;
    color: #f35525;
  }

  p {
    text-align: left;
    font-size: 16px;
    color: #1e1e1e;
    font-weight: 700;
    line-height: 28px;
  }

  @media (max-width: 868px) {
    width: 40%;
    margin: 20px;
  }

  @media (max-width: 568px) {
    width: 80%;
    margin: 10px;
  }
`;

const FactsInfo = (props) => {
  const recoveryarray = props.data; 

  return (
    <FactsWrapper>
      <FactsContainer>
        {recoveryarray.map((fact) => (
          <FactBox key={fact.id}>
            <h2>{fact.num}</h2>
            <p>{fact.info}</p>
          </FactBox>
        ))}
      </FactsContainer>
    </FactsWrapper>
  );
};

export default FactsInfo;
