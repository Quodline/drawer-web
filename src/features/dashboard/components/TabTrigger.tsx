import { NavLink } from 'react-router-dom';
import { PropsWithChildren } from 'react';
import { TabsTrigger } from '@/components/ui/tabs';
import { TabList } from '@/features/dashboard/dashboard';

interface IProps extends PropsWithChildren {
  to: TabList;
}

export function TabTrigger({ to, children }: IProps) {
  return (
    <NavLink to={`/dashboard/${to}`}>
      <TabsTrigger value={to}>{children}</TabsTrigger>
    </NavLink>
  );
}
