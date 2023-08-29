import { Routes } from './Routes';
import { PageLayout } from './PageLayout';
import GlobalStyle from '../../GlobalStyle';

function App() {
  return (
    <>
      <GlobalStyle />
      <PageLayout>
        <Routes />
      </PageLayout>
    </>
  );
}

export default App;
