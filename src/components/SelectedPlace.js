import React from 'react';
import Card from 'react-bootstrap/Card';


class SelectedPlace extends React.Component {

  render() {
    return (
      <>
        <Card style={{ width: '60%' }}>
          <Card.Body>
            <Card.Title>Location: {this.props.cityData.display_name}</Card.Title>
            <Card.Text>Lat: {this.props.cityData.lat}</Card.Text>
            <Card.Text>Lon: {this.props.cityData.lon}</Card.Text>
          </Card.Body>
          <Card.Img variant="bottom" src={this.props.mapUrl} />
        </Card>
      </>
    )
  }
}

export default SelectedPlace;