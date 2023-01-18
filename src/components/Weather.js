import React from 'react';
import Card from 'react-bootstrap/Card';


class Weather extends React.Component{

  render(){
    return (
      <>
      <Card style={{ width: '60%' }}>
          <Card.Body>
            <Card.Title>Forecast for {this.props.date}</Card.Title>
            <Card.Text>Low of {this.props.lowTemp}, High of {this.props.highTemp}, with {this.props.description}</Card.Text>
            {/* <Card.Text>{this.props.lowTemp}</Card.Text> */}
            {/* <Card.Text>{this.props.highTemp}</Card.Text> */}
          </Card.Body>
        </Card>
      </>
    )
  }
}

export default Weather;