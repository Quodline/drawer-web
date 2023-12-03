import { Route, Routes } from 'react-router-dom';
import { LoginPage, RegisterPage } from './features/auth';
import { HomePage } from './features/dashboard';

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
