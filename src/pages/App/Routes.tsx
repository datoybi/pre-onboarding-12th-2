import { Route, Routes as ReactRouterRoutes } from 'react-router-dom';
import IssueListPage from '../IssueListPage';
import IssueDetailPage from '../IssueDetailPage';

export const Routes = () => {
  // TODO: ROUTER명 바꾸기 /issues , /issue/:id
  return (
    <ReactRouterRoutes>
      <Route path="/" element={<IssueListPage />} />
      <Route path="/issues" element={<IssueListPage />} />
      <Route path="/issue/:id" element={<IssueDetailPage />} />
      <Route path="*" element={<IssueListPage />} />
    </ReactRouterRoutes>
  );
};
