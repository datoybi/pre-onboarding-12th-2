import { Route, Routes as ReactRouterRoutes } from 'react-router-dom';
import IssueListPage from '../Issue/IssueListPage';
import IssueDetailPage from '../Issue/IssueDetailPage';
import NotFoundPage from './404';

export const Routes = () => {
  return (
    <ReactRouterRoutes>
      <Route path="/" element={<IssueListPage />} />
      <Route path="/issues" element={<IssueListPage />} />
      <Route path="/issues/:id" element={<IssueDetailPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </ReactRouterRoutes>
  );
};
