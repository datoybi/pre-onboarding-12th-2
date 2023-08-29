import { styled } from 'styled-components';

export default function IssueDetail() {
  return (
    <>
      <Item>
        <img src="http://via.placeholder.com/50x50" alt="" />
        <div>
          <Title>#111 issue title</Title>
          <SubTitle>작성자: name, 작성일: 2019년 12월 31일</SubTitle>
        </div>
        <Comment>코멘트: 67</Comment>
      </Item>
      <Content>There is currently no way</Content>
    </>
  );
}

const Item = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 15px;
  border-bottom: 1px solid #c3c3c3;
  align-items: center;

  /* &:hover {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    cursor: pointer;
  } */

  & > img {
    margin: 0 auto;
    height: 50px;
    width: 50px;
  }
`;

const Comment = styled.p`
  display: flex;
  align-items: center;
  padding: 10px;
`;

const Title = styled.p`
  padding: 5px 10px;
`;

const SubTitle = styled.p`
  padding: 5px 10px;
  font-size: 0.9rem;
`;

const Content = styled.div`
  height: 500px;
`;
