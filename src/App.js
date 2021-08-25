import { Suspense } from 'react';

import Layout from './components/Layout/Layout';
import Routes from './routes/Routes';

/* Suspense Fallback */
import LoadingDots from './components/UI/LoadingDots/LoadingDots';

function App() {
  return (
    <Layout>
      <Suspense fallback={<LoadingDots />}>
        <Routes />
      </Suspense>
    </Layout>
  );
}

export default App;
