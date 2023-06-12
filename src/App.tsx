import { useRoutes } from 'react-router-dom';
import router from './routes';

function App() {
  const content = useRoutes(router);

  return (
    <>
      {content}
    </>
  );
}
export default App;
