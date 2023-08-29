import { useEffect, useState } from 'react';
import IssueTitle from '../components/IssueTitle';
import { getIssues } from '../apis/remotes';

export default function IssueListPage() {
  const [issues, setIssues] = useState([]);

  useEffect(() => {
    const fetchIssues = async () => {
      setIssues(await getIssues(1));
    };
    fetchIssues();
  }, []);

  console.log(issues);
  const issueElements = issues.map(
    ({ id, number, body, comments, title, user, updated_at }: any) => (
      <li key={id}>
        <IssueTitle
          issueId={id}
          issueNumber={number}
          content={body}
          comments={comments}
          title={title}
          userUrl={user.avatar_url}
          date={updated_at}
          author={user.login}
        />
      </li>
    )
  );
  return <ul>{issueElements}</ul>;
}
