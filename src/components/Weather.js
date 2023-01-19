import React from 'react';
import WeatherDay from './WeatherDay';


class Weather extends React.Component {

  render() {
    return (
      <>
        {this.props.weatherData.map((e, idx) => {
          return (
            <WeatherDay
              date={e.date}
              description={e.description}
              lowTemp={e.lowTemp}
              highTemp={e.maxTemp}
              key={idx}

            />
          )
        })}
      </>
    )
  }
}

export default Weather;