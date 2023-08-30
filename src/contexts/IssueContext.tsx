import { ReactNode, createContext, useRef, useState } from 'react';
import { getIssues } from '../apis/remotes';
import { Issues } from '../types/Issue';

interface GlobalContextPops {
  issues: Issues;
  isLoading: boolean;
  isError: boolean;
  fetchIssues: () => void;
}

const GlobalContext: GlobalContextPops = {
  issues: [],
  isLoading: false,
  isError: false,
  fetchIssues: () => {
    throw new Error();
  },
};

export const IssueContext = createContext(GlobalContext);

export function IssueContextProvider({ children }: { children: ReactNode }) {
  const [issues, setIssues] = useState<Issues>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const pageRef = useRef(1);
  const isEndRef = useRef(false);

  const fetchIssues = async () => {
    if (isEndRef.current) return;
    setIsLoading(true);

    try {
      const newIssues = await getIssues(pageRef.current);
      if (newIssues.length === 0) {
        isEndRef.current = true;
        return;
      }
      pageRef.current = pageRef.current + 1;
      setIssues(prevIssues => [...prevIssues, ...newIssues]);
    } catch (error) {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <IssueContext.Provider value={{ issues, isLoading, fetchIssues, isError }}>
      {children}
    </IssueContext.Provider>
  );
}
