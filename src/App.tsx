import { Navigate, Route, Routes } from 'react-router-dom';
import { ProtectedRoute } from '@/ProtectedRoute.tsx';
import { AuthPage } from '@/features/auth/AuthPage.tsx';
import { HomePage } from '@/features/dashboard/HomePage.tsx';

function App() {
  return (
    <div className="flex min-h-screen flex-col bg-gray-100">
      <Routes>
        <Route path="/" element={<Navigate to="auth" />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/dashboard/*" element={<HomePage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
