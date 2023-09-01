import { useRef, useContext } from 'react';
import { getIssues } from '../apis/remotes';
import useHttp from './useHttp';
import { IssueContext } from '../contexts/IssueContext';
import { Issues } from '../types/Issue';

const useIssues = () => {
  const { isLoading, sendRequest, error } = useHttp();
  const { setIssues } = useContext(IssueContext);

  const pageRef = useRef(1);
  const isEndRef = useRef(false);

  async function fetchIssues() {
    if (!isLoading) {
      const newIssues = await sendRequest(getIssues, pageRef.current);
      if (!newIssues) return [];
      if (newIssues.length === 0) {
        isEndRef.current = true;
        return;
      }
      pageRef.current = pageRef.current + 1;
      setIssues((prevIssues: Issues) => [...prevIssues, ...newIssues]);
    }
  }

  return { fetchIssues, isLoading, error };
};

export default useIssues;
