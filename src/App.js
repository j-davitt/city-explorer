
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
      movieData: [],
      movieError: true,
      cityChosen: false
    }
  }

  getCityData = async (e) => {
    e.preventDefault();
    this.handleGetMovies();

    try {
      let url = `https://us1.locationiq.com/v1/search?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&q=${this.state.city}&format=json`

      let cityDataFromAxios = await axios.get(url);
      let lat = cityDataFromAxios.data[0].lat;
      let lon = cityDataFromAxios.data[0].lon;

      this.handleGetWeather(lat, lon);

      console.log(cityDataFromAxios.data);
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

  handleInput = (e) => {
    this.setState({
      city: e.target.value
    })
  }

  handleGetWeather = async (lat, lon) => {
    // e.preventDefault();
    // TODO: BUILD OUT FUNCTIONALITY TO CALL MY SERVER TO GET DATA
    try {
      // TODO: BUILD OUT URL FOR AXIOS TO HIT
      let url = `${process.env.REACT_APP_SERVER}/weather?searchQuery=${this.state.city}&lat=${lat}&lon=${lon}`

      let weatherDataFromAxios = await axios.get(url);

      // TODO: SET STATE WITH THE INFORMATION COMING BACK FROM AXIOS
      this.setState({
        weatherData: weatherDataFromAxios.data,
        weatherError: false
      })

      console.log(weatherDataFromAxios.data);



    } catch (error) {
      console.log(error.message);
      this.setState({
        weatherError: true
      })
    }
  }

  handleGetMovies = async () => {
    try {

      let url = `${process.env.REACT_APP_SERVER}/movies?searchQuery=${this.state.city}`

      let movieDataFromAxios = await axios.get(url);

      console.log(movieDataFromAxios.data);

      this.setState({
        movieData: movieDataFromAxios.data,
        movieError: false
      })

    } catch (error) {
      console.log(error.message);
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
              movieData={this.state.movieData}
            />
        }

      </>
    )
  }

}



export default App;
