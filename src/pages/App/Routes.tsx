import { Route, Routes as ReactRouterRoutes } from 'react-router-dom';
import IssueList from '../IssueList';
import IssueDetail from '../IssueDetail';

export const Routes = () => {
  // TODO: ROUTER명 바꾸기 /issues , /issue/:id
  return (
    <ReactRouterRoutes>
      <Route path="/" element={<IssueList />} />
      <Route path="/detail" element={<IssueDetail />} />
      <Route path="*" element={<IssueList />} />
    </ReactRouterRoutes>
  );
};
