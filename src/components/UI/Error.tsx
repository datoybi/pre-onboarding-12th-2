import { styled } from 'styled-components';

export default function Error() {
  return (
    <Wrapper>
      <h1>알 수 없는 에러가 발생하였습니다❗</h1>
      <h2>잠시 후 다시 시도해주세요.</h2>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 500px;
  margin: 0 auto;
  padding: 20px;
  margin-bottom: 50px;

  & > h1 {
    font-size: 2rem;
    text-align: center;
    line-height: 2.5rem;
  }

  & > h2 {
    font-size: 1.2rem;
    margin-top: 50px;
    text-align: center;
  }
`;
