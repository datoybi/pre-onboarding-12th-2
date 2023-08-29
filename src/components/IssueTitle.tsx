import { styled } from 'styled-components';
// import { ReactNode } from 'react';
// TODO: type:  list, detail

export default function IssueTitle(props: any) {
  const { type = 'list', children, ...rest } = props;

  return (
    <Wrapper type={type}>
      <div>
        <Title>#111 issue title</Title>
        <SubTitle>작성자: name, 작성일: 2019년 12월 31일</SubTitle>
      </div>
      <Comment>코멘트: 67</Comment>
    </Wrapper>
  );
}

const Wrapper = styled.div<{ type: string }>`
  display: flex;
  justify-content: space-between;
  padding: 15px;
  border-bottom: ${({ type }) => (type === 'list' ? '1px solid #c3c3c3' : '0')};

  &:hover {
    box-shadow: ${({ type }) =>
      type === 'list' ? '0 0 10px rgba(0, 0, 0, 0.3)' : 'none'};
    cursor: ${({ type }) => (type === 'list' ? 'pointer' : 'unset')};
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
