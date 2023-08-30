import { useEffect, useState } from 'react';
import IssueInfo from '../../components/IssueInfo';
import { getIssues } from '../../apis/remotes';
import { useNavigate } from 'react-router-dom';

export default function IssueListPage() {
  const navigate = useNavigate();
  const [issues, setIssues] = useState([]);
  console.log('render?');
  useEffect(() => {
    const fetchIssues = async () => {
      setIssues(await getIssues(1));
    };
    fetchIssues();
  }, []);

  const handleClickItem = (issueNumber: number) => {
    navigate(`/issue/${issueNumber}`);
  };

  const issueElements = issues.map(
    ({ id, number, comments, title, user, updated_at }: any) => (
      <li key={id} onClick={() => handleClickItem(number)}>
        <IssueInfo
          issueId={id}
          issueNumber={number}
          comments={comments}
          title={title}
          date={updated_at}
          author={user.login}
        />
      </li>
    )
  );
  return <ul>{issueElements}</ul>;
}
