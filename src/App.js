
import './App.css';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import SelectedPlace from './components/SelectedPlace';
import Main from './components/Main';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: '',
      cityData: [],
      mapUrl: '',
      error: false,
      errorMessage: '',
      weatherData: [],
      weatherError: true,
      cityChosen: false
    }
  }

  getCityData = async (e) => {
    e.preventDefault();
    this.handleGetWeather();

    try {
      let url = `https://us1.locationiq.com/v1/search?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&q=${this.state.city}&format=json`

      let cityDataFromAxios = await axios.get(url);


      console.log(cityDataFromAxios);
      this.setState({
        cityData: cityDataFromAxios.data[0],
        error: false,
        cityChosen: true,
        mapUrl: `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&center=${cityDataFromAxios.data[0].lat},${cityDataFromAxios.data[0].lon}&zoom=10`
      })

    } catch (error) {
      this.setState({
        error: true,
        errorMessage: error.message
      })
    }
  }

  handleGetWeather = (e) => {
    this.setState({
      city: e.target.value
    })
  }

  handleSubmit = async (e) => {
    // e.preventDefault();
    // TODO: BUILD OUT FUNCTIONALITY TO CALL MY SERVER TO GET DATA
    try {
      // TODO: BUILD OUT URL FOR AXIOS TO HIT
      let url = `${process.env.REACT_APP_SERVER}/weather?searchQuery=${this.state.city}&lat=${this.state.cityData.lat}&lon=${this.state.cityData.lon}`

      let weatherData = await axios.get(url);

      // TODO: SET STATE WITH THE INFORMATION COMING BACK FROM AXIOS
      this.setState({
        weatherData: weatherData.data,
        weatherError: false
      })

      console.log(weatherData);



    } catch (error) {
      console.log(error.message);
      this.setState({
        weatherError: true
      })
    }
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
            : this.state.cityChosen
              ? <SelectedPlace
                cityData={this.state.cityData}
                mapUrl={this.state.mapUrl}
              />
              : null
        }
        {
          this.state.weatherError
            ? null
            : <Main
              weatherData={this.state.weatherData}
            />
        }

      </>
    )
  }

}



export default App;
