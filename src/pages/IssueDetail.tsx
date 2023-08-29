import { styled } from 'styled-components';
import IssueTitle from '../components/IssueTitle';

export default function IssueDetail() {
  return (
    <>
      <Title>
        <img src="http://via.placeholder.com/50x50" alt="" />
        <IssueTitle type="detail" />
      </Title>
      <Content />
    </>
  );
}

const Title = styled.h2`
  display: flex;
  justify-content: space-between;
  padding: 15px;
  border-bottom: 1px solid #c3c3c3;
  align-items: center;

  & > img {
    margin: 0 auto;
    height: 50px;
    width: 50px;
  }
`;

const Content = styled.div`
  height: 500px;
`;
