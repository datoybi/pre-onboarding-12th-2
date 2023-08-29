import { Route, Routes as ReactRouterRoutes } from 'react-router-dom';

export const Routes = () => {
  return (
    <ReactRouterRoutes>
      <Route path="/todo" element={<div>issue</div>} />
      <Route path="*" element={<div>issue</div>} />
    </ReactRouterRoutes>
  );
};
