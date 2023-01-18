import React from 'react';
import Weather from './Weather';
import Movies from './Movies';


class Main extends React.Component {

  render() {
    return (
      <>

        {this.props.weatherData.map((e, idx) => {
          return (
            <Weather
              date={e.date}
              description={e.description}
              lowTemp={e.lowTemp}
              highTemp={e.maxTemp}
              key={idx}

            />
          )
        })}
           {this.props.movieData.map((e, idx) => {
          return (
            <Movies
              title={e.title}
              overview={e.overview}
              key={idx}

            />
          )
        })}



      </>
    )
  }
}

export default Main;