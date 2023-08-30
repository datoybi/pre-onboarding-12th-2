import { useState, useEffect } from 'react';
import { styled } from 'styled-components';
import IssueInfo from '../../components/IssueInfo';
import { useParams } from 'react-router-dom';
import { getIssue } from '../../apis/remotes';
import IssueContent from '../../components/IssueContent';
import { Issue } from '../../types/Issue';

export default function IssueDetail() {
  const [issue, setIssue] = useState<Issue>();
  const { id: issueId } = useParams() as { id: string };

  useEffect(() => {
    const fetchIssue = async () => {
      setIssue(await getIssue(issueId));
    };
    fetchIssue();
  }, [issueId]);

  return (
    <>
      <Title>
        <img src={issue?.user?.avatar_url} alt={issue?.title} />
        <IssueInfo
          type="detail"
          issueNumber={issue?.number}
          comments={issue?.comments}
          title={issue?.title}
          date={issue?.updated_at}
          author={issue?.user?.login}
        />
      </Title>
      <IssueContent content={issue?.body || ''} />
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
