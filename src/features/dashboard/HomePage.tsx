import { Navigate, Route, Routes } from 'react-router-dom';
import { Header } from './components/Header';
import { Tabs, TabsList } from '@/components/ui/tabs';
import { TabTrigger } from './components/TabTrigger';
import { SchemasPage } from './pages/Schemas';
import { AccountPage } from './pages/Account';
import { HelpPage } from './pages/Help';

export function HomePage() {
  return (
    <>
      <Header />
      <main className="p-4">
        <Tabs defaultValue="schemas">
          <TabsList>
            <TabTrigger to="schemas">Schemas</TabTrigger>
            <TabTrigger to="account">Account</TabTrigger>
            <TabTrigger to="help">Help</TabTrigger>
          </TabsList>
          <div className="mx-1 my-4 rounded border border-gray-300 p-4">
            <Routes>
              <Route path="/" element={<Navigate to="schemas" />} />
              <Route path="schemas" element={<SchemasPage />} />
              <Route path="account" element={<AccountPage />} />
              <Route path="help" element={<HelpPage />} />
            </Routes>
          </div>
        </Tabs>
      </main>
    </>
  );
}
