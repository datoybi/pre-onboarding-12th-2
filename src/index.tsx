import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './pages/App/App';
import { IssueContextProvider } from './contexts/IssueContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  // <React.StrictMode>
  //   <Router>
  //     <App />
  //   </Router>
  // </React.StrictMode>
  <IssueContextProvider>
    <Router>
      <App />
    </Router>
  </IssueContextProvider>
);
