import { useEffect, useState } from 'react';
import IssueTitle from '../components/IssueTitle';
import { getIssues } from '../apis/remotes';
import { useNavigate } from 'react-router-dom';

export default function IssueListPage() {
  const navigate = useNavigate();
  const [issues, setIssues] = useState([]);

  useEffect(() => {
    const fetchIssues = async () => {
      setIssues(await getIssues(1));
    };
    fetchIssues();
  }, []);

  const handleClickItem = (issueNumber: number) => {
    navigate(`/issue/${issueNumber}`);
  };

  console.log(issues);
  const issueElements = issues.map(
    ({ id, number, comments, title, user, updated_at }: any) => (
      <li key={id} onClick={() => handleClickItem(number)}>
        <IssueTitle
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
