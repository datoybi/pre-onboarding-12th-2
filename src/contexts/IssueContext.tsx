import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from 'react';
import { Issues, Issue } from '../types/Issue';

interface GlobalContextPops {
  issue: any;
  issues: Issues;
  setIssue: Dispatch<SetStateAction<Issue>>;
  setIssues: Dispatch<SetStateAction<Issues>>;
}

const GlobalContext: GlobalContextPops = {
  issue: {},
  issues: [],
  setIssue: () => {
    throw new Error();
  },
  setIssues: () => {
    throw new Error();
  },
};

// export const IssueContext = createContext(GlobalContext);
export const IssueContext = createContext(GlobalContext);

export function IssueContextProvider({ children }: { children: ReactNode }) {
  const [issues, setIssues] = useState<Issues>([]);
  const [issue, setIssue] = useState<any>({});

  return (
    <IssueContext.Provider
      value={{
        issues,
        issue,
        setIssue,
        setIssues,
      }}
    >
      {children}
    </IssueContext.Provider>
  );
}
