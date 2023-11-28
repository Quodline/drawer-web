import { Route, Routes } from 'react-router-dom';
import { HomePage, LoginPage, RegisterPage } from './pages';

function App() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </main>
  );
}

export default App;
