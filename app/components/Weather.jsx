var React = require ('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require ('WeatherMessage');
var openWeatherMap = require('openWeatherMap');
var Weather = React.createClass({
  getInitialState:function(){
    return{
      isLoading:false
    }
  },
  handleSearch:function(location){
    this.setState({
      isLoading: true
    })
    openWeatherMap.getTemp(location).then((temp)=>{
      this.setState({
        location:location,
        temp:temp,
        isLoading:false
      })
    },(err)=>{
      this.setState({
        isLoading:false
      })
      alert(err);
    })
  },
  render:function(){
    var {location,temp , isLoading } =this.state;
    function renderMessage(){
      if(isLoading){
      return <h3>Fetching weather ...</h3>
      }
      else if(temp && location){
        return <WeatherMessage temp={temp} location={location}></WeatherMessage>
      }
    }
    return (
      <div>
        <h3>Weather App</h3>
        <WeatherForm onSearch={this.handleSearch}></WeatherForm>
        {renderMessage()}
      </div>
    )
  }
})
module.exports = Weather;
