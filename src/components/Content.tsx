import { Header } from './Header';
import { MovieCard } from './MovieCard';

import { HeaderProps } from './Header';
import { MovieProps } from '../App';

interface ContentProps extends HeaderProps {
  movies: MovieProps[];
}

export function Content({ selectedGenreTitle, movies }: ContentProps) {
  return(
    <div className="container">
      <Header selectedGenreTitle={selectedGenreTitle} />
      <main>
        <div className="movies-list">
          {movies.map(movie => (
            <MovieCard key={movie.imdbID} title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
          ))}
        </div>
      </main>
    </div>
  )
}