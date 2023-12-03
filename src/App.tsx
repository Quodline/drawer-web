import { Route, Routes } from 'react-router-dom';
import { ProtectedRoute } from '@/ProtectedRoute.tsx';
import { HomePage } from '@/features/dashboard';
import { LoginPage, RegisterPage } from '@/features/auth';

function App() {
  return (
    <main>
      <Routes>
        <Route element={<ProtectedRoute />}>
          <Route path="/" element={<HomePage />} />
        </Route>
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </main>
  );
}

export default App;
