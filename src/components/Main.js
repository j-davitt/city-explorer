import React from 'react';
import Weather from './Weather';
import Movies from './Movies';


class Main extends React.Component {

  render() {
    return (
      <>

        <Weather
          weatherData={this.props.weatherData}
        />

        <Movies
          movieData={this.props.movieData}
        />

      </>
    )
  }
}

export default Main;