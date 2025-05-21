import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { useContext, useMemo } from 'react';
import { MovieCard } from '@react-monorepo/movies-ui';
import { AuthContext } from '@react-monorepo/shared-auth-data-access';
import { useFavorites, useMovies } from '@react-monorepo/movies-data-access';
import { useSearchParams } from 'react-router-dom';
import { searchMoviesByTitle } from '@react-monorepo/movies-utils';

export default function Homepage() {
  const { user } = useContext(AuthContext);
  const [searchParams] = useSearchParams();
  const { movies } = useMovies();
  const { isFavorite, toggleFavorite } = useFavorites();

  const search = searchParams.get('search');

  const filteredMovies = useMemo(
    () => searchMoviesByTitle(movies, search),
    [movies, search]
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        {filteredMovies.map((movie) => (
          <Grid item xs={12} sm={6} md={3} key={movie.title}>
            <MovieCard
              movie={movie}
              showActions={!!user}
              isFavorite={isFavorite(movie)}
              onFavoriteClick={() => toggleFavorite(movie)}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
