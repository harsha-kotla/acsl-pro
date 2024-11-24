import { useAuth } from '../authContext';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function withAuth(Component) {
  return function AuthenticatedComponent(props) {
    const { user, loading } = useAuth();
    const router = useRouter();

    useEffect(() => {
      if (!loading && !user) {
        router.push('/login');
      }
    }, [user, loading]);

    if (loading || !user) {
      return <p>Loading...</p>; // Or a loading spinner
    }

    return <Component {...props} />;
  };
}
