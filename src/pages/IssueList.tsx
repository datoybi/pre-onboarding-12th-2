import { styled } from 'styled-components';

export default function IssueList() {
  return (
    <ul>
      <Item>
        <div>
          <Title>#111 issue title</Title>
          <SubTitle>작성자: name, 작성일: 2019년 12월 31일</SubTitle>
        </div>
        <Comment>코멘트: 67</Comment>
      </Item>
      <Item>
        <div>
          <Title>#111 issue title</Title>
          <SubTitle>작성자: name, 작성일: 2019년 12월 31일</SubTitle>
        </div>
        <Comment>코멘트: 67</Comment>
      </Item>
      <Item>
        <div>
          <Title>#111 issue title</Title>
          <SubTitle>작성자: name, 작성일: 2019년 12월 31일</SubTitle>
        </div>
        <Comment>코멘트: 67</Comment>
      </Item>
      <Item>
        <div>
          <Title>#111 issue title</Title>
          <SubTitle>작성자: name, 작성일: 2019년 12월 31일</SubTitle>
        </div>
        <Comment>코멘트: 67</Comment>
      </Item>
      <Item>
        <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Flogo_wanted_black.png&w=110&q=100" />
      </Item>
      <Item>
        <div>
          <Title>#111 issue title</Title>
          <SubTitle>작성자: name, 작성일: 2019년 12월 31일</SubTitle>
        </div>
        <Comment>코멘트: 67</Comment>
      </Item>
      <Item>
        <div>
          <Title>#111 issue title</Title>
          <SubTitle>작성자: name, 작성일: 2019년 12월 31일</SubTitle>
        </div>
        <Comment>코멘트: 67</Comment>
      </Item>
      <Item>
        <div>
          <Title>#111 issue title</Title>
          <SubTitle>작성자: name, 작성일: 2019년 12월 31일</SubTitle>
        </div>
        <Comment>코멘트: 67</Comment>
      </Item>
      <Item>
        <div>
          <Title>#111 issue title</Title>
          <SubTitle>작성자: name, 작성일: 2019년 12월 31일</SubTitle>
        </div>
        <Comment>코멘트: 67</Comment>
      </Item>
    </ul>
  );
}

const Item = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 15px;
  border-bottom: 1px solid #c3c3c3;

  &:hover {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    cursor: pointer;
  }

  & > img {
    margin: 0 auto;
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
