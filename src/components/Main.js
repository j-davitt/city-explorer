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

        {this.props.movieData.map((e, idx) => {
          return (
            <Movies
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

export default Main;