import { useContext } from 'react';
import IssueInfo from '../../components/IssueInfo';
import { useNavigate } from 'react-router-dom';
import useInfinityScroll from '../../hooks/useInfinityScroll';
import { IssueContext } from '../../contexts/IssueContext';
import { styled } from 'styled-components';

export default function IssueListPage() {
  const navigate = useNavigate();
  const { issues, fetchIssues, isLoading, isError } = useContext(IssueContext);
  const observeRef = useInfinityScroll({ callback: getIssues });

  function getIssues() {
    if (!isLoading) {
      fetchIssues();
    }
  }

  const handleClickIssue = (issueNumber: number) => {
    navigate(`/issues/${issueNumber}`);
  };

  const issueElements = issues.map(
    ({ id, number, comments, title, user, updated_at }) => (
      <li key={id} onClick={() => handleClickIssue(number)}>
        <IssueInfo
          issueNumber={number}
          comments={comments}
          title={title}
          date={updated_at}
          author={user.login}
        />
      </li>
    )
  );

  return (
    <ul>
      {issueElements}
      {isLoading && <>loading...</>}
      {isError ? <>error</> : <ObserveRef ref={observeRef} />}
    </ul>
  );
}

const ObserveRef = styled.li`
  height: 20px;
`;
