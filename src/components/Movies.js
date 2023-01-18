import React from 'react';
import Card from 'react-bootstrap/Card';


class Movies extends React.Component{

  render(){
    return (
      <>
      <Card style={{ width: '60%' }}>
          <Card.Body>
            <Card.Title>Title: {this.props.title}</Card.Title>
            <Card.Text>Overview: {this.props.overview}</Card.Text>
          </Card.Body>
        </Card>
      </>
    )
  }
}

export default Movies;