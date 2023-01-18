import React from 'react';
import Weather from './Weather';
import Card from 'react-bootstrap/Card';


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