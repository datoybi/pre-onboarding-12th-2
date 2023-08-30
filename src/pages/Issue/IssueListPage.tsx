import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';
import IssueInfo from '../../components/Issue/IssueInfo';
import Advertisement from '../../components/Issue/AdvertisementItem';
import Loading from '../../components/UI/Loading';
import useInfinityScroll from '../../hooks/useInfinityScroll';
import { IssueContext } from '../../contexts/IssueContext';

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

  const hasAdvertisement = (idx: number) => (idx + 1) % 5 === 0;

  const issueElements = issues.map(
    ({ id, number, comments, title, user, updated_at }, issueIdx) => (
      <li key={id}>
        <IssueInfo
          issueNumber={number}
          comments={comments}
          title={title}
          date={updated_at}
          author={user.login}
          handleClickIssue={handleClickIssue}
        />
        {hasAdvertisement(issueIdx) && <Advertisement />}
      </li>
    )
  );

  return (
    <ul>
      {issueElements}
      {isLoading && <Loading />}
      {isError ? <>error가 발생하였습니다.</> : <ObserveRef ref={observeRef} />}
    </ul>
  );
}

const ObserveRef = styled.li`
  height: 20px;
`;
