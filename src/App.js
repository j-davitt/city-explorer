
import './App.css';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Card from 'react-bootstrap/Card';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: '',
      cityData: [],
      mapUrl: '',
      error: false,
      errorMessage: ''
    }
  }

  getCityData = async (e) => {
    e.preventDefault();


    try {
      let url = `https://us1.locationiq.com/v1/search?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&q=${this.state.city}&format=json`

      let cityDataFromAxios = await axios.get(url);

      
      console.log(cityDataFromAxios);
      this.setState({
        cityData: cityDataFromAxios.data[0],
        error: false,
        mapUrl: `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&center=${this.state.cityData.lat},${this.state.cityData.lon}&zoom=10`
      })
      
      // `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&center=${this.state.cityDataFromAxios.data[0].lat},${this.state.cityDataFromAxios.data[0].lon}&zoom=10`

      

    } catch (error) {
      this.setState({
        error: true,
        errorMessage: error.message
      })
    }



  }

  handleInput = (e) => {
    this.setState({
      city: e.target.value
    })
  }


  render() {
    return (
      <>

        <h1>City Explorer</h1>
        <form onSubmit={this.getCityData}>
          <label htmlFor=''>
            <input type='text' onInput={this.handleInput} />
            <button type='submit'>Explore!</button>
          </label>

        </form>

        {
          this.state.error
            ? <p>{this.state.errorMessage}</p>
            : <Card>
              <Card.Body>
                <Card.Title>{this.state.cityData.display_name}</Card.Title>
                <Card.Text>{this.state.cityData.lat}</Card.Text>
                <Card.Text>{this.state.cityData.lon}</Card.Text>
              </Card.Body>
              <Card.Img variant="bottom" src={this.state.mapUrl} />
            </Card>

        }

      </>
    )
  }



}



export default App;
