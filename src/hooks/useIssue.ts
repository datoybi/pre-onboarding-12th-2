import { useContext } from 'react';
import { getIssue } from '../apis/remotes';
import useHttp from './useHttp';
import { IssueContext } from '../contexts/IssueContext';

const useIssue = () => {
  const { isLoading, sendRequest, error } = useHttp();
  const { setIssue } = useContext(IssueContext);

  async function fetchIssue(issueId: string) {
    const fetchIssue = async () => {
      const selectedIssue = await sendRequest(getIssue, issueId);
      if (!selectedIssue) return {};
      setIssue(selectedIssue);
    };
    fetchIssue();
  }
  return { fetchIssue, isLoading, error };
};

export default useIssue;
