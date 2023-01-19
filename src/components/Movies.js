import React from 'react';
import Movie from './Movie';



class Movies extends React.Component {

  render() {
    return (
      <>
        {this.props.movieData.map((e, idx) => {
          return (
            <Movie
              title={e.title}
              overview={e.overview}
              poster={e.poster}
              key={idx}

            />
          )
        })}

      </>
    )
  }
}

export default Movies;