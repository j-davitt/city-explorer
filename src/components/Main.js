import React from 'react';
import Weather from './Weather';


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


      </>
    )
  }
}

export default Main;