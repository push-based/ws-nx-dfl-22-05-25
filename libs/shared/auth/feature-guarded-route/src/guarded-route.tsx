import { NotAuthenticated } from '@react-monorepo/shared-auth-ui-not-authenticated-page';
import { useContext } from 'react';

import { AuthContext } from '@react-monorepo/shared-auth-data-access';

export default function GuardedRoute({
  children,
}: {
  children: React.ReactNode;
}) {
  const { user } = useContext(AuthContext);
  if (!user) {
    return <NotAuthenticated />;
  }
  return children;
}
