import { useEffect, useContext } from 'react';
import { styled } from 'styled-components';
import { useParams } from 'react-router-dom';

import { IssueContext } from '../../contexts/IssueContext';
import useIssue from '../../hooks/useIssue';
import IssueInfo from '../../components/Issue/IssueInfo';
import IssueContent from '../../components/Issue/IssueContent';
import { Error, Loading } from '../../components/UI';

export default function IssueDetail() {
  const { issue } = useContext(IssueContext);
  const { id: issueId } = useParams() as { id: string };
  const { fetchIssue, isLoading, error } = useIssue();

  useEffect(() => {
    fetchIssue(issueId);
  }, [issueId]);

  return (
    <>
      {isLoading && <Loading />}
      {error && <Error />}
      {issue && !isLoading && !error && (
        <>
          <IssueTitle>
            <img src={issue?.user?.avatar_url} alt={issue?.title} />
            <IssueInfo
              type="detail"
              issueNumber={issue?.number}
              comments={issue?.comments}
              title={issue?.title}
              date={issue?.updated_at}
              author={issue?.user?.login}
            />
          </IssueTitle>
          <IssueContent content={issue?.body || ''} />
        </>
      )}
    </>
  );
}

const IssueTitle = styled.h2`
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
