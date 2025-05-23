import { Button } from '@mui/material';
import { Link, useRouteError } from 'react-router-dom';
import { MovieDetails } from '@react-monorepo/movies-feature-detail-page';

export default function ErrorPage() {
  const error = useRouteError() as any;
  console.error(error);

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>

      <Link to="/">
        <Button variant="contained" color="primary">
          Go back home
        </Button>
      </Link>
    </div>
  );
}
