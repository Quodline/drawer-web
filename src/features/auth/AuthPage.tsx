import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Header } from './components/Header';
import { LoginForm } from './components/LoginForm';
import { RegisterForm } from '@/features/auth/components/RegisterForm';

export function AuthPage() {
  return (
    <>
      <Header />
      <main className="grid min-h-screen place-items-center">
        <Tabs defaultValue="login" className="min-w-[24rem]">
          <TabsList className="border">
            <TabsTrigger value="login">Sign in</TabsTrigger>
            <TabsTrigger value="register">Create an account</TabsTrigger>
          </TabsList>
          <TabsContent value="login">
            <LoginForm />
          </TabsContent>
          <TabsContent value="register">
            <RegisterForm />
          </TabsContent>
        </Tabs>
      </main>
    </>
  );
}
