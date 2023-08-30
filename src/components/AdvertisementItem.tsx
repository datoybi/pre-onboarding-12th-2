import { styled } from 'styled-components';

const Advertisement = () => {
  return (
    <Wrapper href="https://www.wanted.co.kr/">
      <img
        src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Flogo_wanted_black.png&w=110&q=100"
        alt="wanted-Advertisement"
      />
    </Wrapper>
  );
};
export default Advertisement;

const Wrapper = styled.a`
  display: flex;
  justify-content: center;
`;
