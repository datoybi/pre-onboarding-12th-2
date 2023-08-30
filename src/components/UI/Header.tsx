import { styled } from 'styled-components';
import { ORGANIZATION, REPO } from '../../utils/constants';
export default function Header() {
  return (
    <Wrapper>
      <h1>
        {ORGANIZATION}/{REPO}
      </h1>
    </Wrapper>
  );
}

const Wrapper = styled.header`
  width: 500px;
  margin: 0 auto;
  padding: 20px;
  margin-bottom: 50px;

  & > h1 {
    font-size: 2rem;
    text-align: center;
  }
`;
