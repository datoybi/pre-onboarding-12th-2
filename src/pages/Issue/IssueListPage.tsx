import { useEffect, useState } from 'react';
import IssueInfo from '../../components/IssueInfo';
import { getIssues } from '../../apis/remotes';
import { useNavigate } from 'react-router-dom';
import { Issues } from '../../types/Issue';

export default function IssueListPage() {
  const navigate = useNavigate();
  const [issues, setIssues] = useState<Issues>([]);
  console.log('render?');
  console.log(issues);

  useEffect(() => {
    const fetchIssues = async () => {
      setIssues(await getIssues(1));
    };
    fetchIssues();
  }, []);

  const handleClickItem = (issueNumber: number) => {
    navigate(`/issues/${issueNumber}`);
  };

  const issueElements = issues.map(
    ({ id, number, comments, title, user, updated_at }) => (
      <li key={id} onClick={() => handleClickItem(number)}>
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
  return <ul>{issueElements}</ul>;
}
