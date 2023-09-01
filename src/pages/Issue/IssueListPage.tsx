import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';
import IssueInfo from '../../components/Issue/IssueInfo';
import Advertisement from '../../components/Issue/AdvertisementItem';
import useInfinityScroll from '../../hooks/useInfinityScroll';
import { IssueContext } from '../../contexts/IssueContext';
import { Error, Loading } from '../../components/UI';
import useIssues from '../../hooks/useIssues';

export default function IssueListPage() {
  const navigate = useNavigate();
  const { fetchIssues, isLoading, error } = useIssues();
  const { issues } = useContext(IssueContext);
  const observeRef = useInfinityScroll({
    callback: fetchIssues,
  });

  const handleClickIssue = (issueNumber: number) => {
    if (!issueNumber) return;
    navigate(`/issues/${issueNumber}`);
  };

  const hasAdvertisement = (idx: number) => (idx + 1) % 5 === 0;

  const issueElements = issues.map(
    (
      { id, number: issueNumber, comments, title, user, updated_at },
      issueIdx
    ) => (
      <li key={id}>
        <IssueInfo
          issueNumber={issueNumber}
          comments={comments}
          title={title}
          date={updated_at}
          author={user.login}
          handleClickIssue={() => {
            handleClickIssue(issueNumber);
          }}
        />
        {hasAdvertisement(issueIdx) && <Advertisement />}
      </li>
    )
  );

  return (
    <ul>
      {issueElements}
      {isLoading && <Loading />}
      {error ? <Error /> : <ObserveRef ref={observeRef} />}
    </ul>
  );
}

const ObserveRef = styled.li`
  height: 20px;
`;
