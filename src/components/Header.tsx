import { styled } from 'styled-components';

export default function Header() {
  return (
    <Wrapper>
      <h1>Angular/Angular-cli</h1>
    </Wrapper>
  );
}

const Wrapper = styled.header`
  width: 500px;
  margin: 0 auto;
  padding: 20px;
  margin-bottom: 50px;

  & > h1 {
    font-weight: normal;
    text-align: center;
  }
`;
