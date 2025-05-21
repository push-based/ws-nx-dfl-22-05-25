import { useContext } from 'react';
import useMovieDetails from './use-movie-details';
import { Paper, useTheme } from '@mui/material';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { ChevronLeft } from '@mui/icons-material';
import { useFavorites } from '@react-monorepo/movies-data-access';
import { FavoriteButton } from '@react-monorepo/shared-ui';
import { AuthContext } from '@react-monorepo/shared-auth-data-access';
import { IMAGE_PATH } from '@react-monorepo/shared-core-utils';


export default function MovieDetails() {
  const { movie, isLoading, error } = useMovieDetails();
  const { isFavorite, toggleFavorite } = useFavorites();
  const { user } = useContext(AuthContext);
  const theme = useTheme();

  return (
    <div>
      {isLoading && <div>Loading...</div>}
      {error && <div>Error: {error}</div>}
      {movie && (
        <>
          <Link to="/">
            <Button variant="contained" color="primary">
              <ChevronLeft />
              Go back
            </Button>
          </Link>

          <Paper
            elevation={3}
            sx={{ padding: theme.spacing(3), marginTop: theme.spacing(2) }}
          >
            <Grid container spacing={3}>
              {/* Poster Image */}
              <Grid item xs={12} sm={4}>
                <Box>
                  <img
                    src={`${IMAGE_PATH + movie.poster_path}`}
                    alt={movie.title}
                    loading="lazy"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                    }}
                  />
                </Box>
              </Grid>

              {/* Details */}
              <Grid item xs={12} sm={8}>
                <Typography variant="h4" gutterBottom>
                  {movie.title} ({new Date(movie.release_date).getFullYear()})
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                  User Rating: {movie.vote_average} / 10
                </Typography>
                <Typography
                  variant="body1"
                  paragraph
                  sx={{ marginTop: theme.spacing(2) }}
                >
                  {movie.overview}
                </Typography>
                {user && (
                  <FavoriteButton
                    isFavorite={isFavorite(movie)}
                    handleClick={() => toggleFavorite(movie)}
                  />
                )}
              </Grid>
            </Grid>
          </Paper>
        </>
      )}
    </div>
  );
}
