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
      isLoading: true,
      location:undefined,
      temp:undefined,
      desc:'pleasant'
    })
    openWeatherMap.getTemp(location).then((data)=>{
      this.setState({
        location:location,
        temp:data.temp,
        desc:data.desc,
        isLoading:false
      })
    },(err)=>{
      this.setState({
        isLoading:false,
      })
      alert(`${location} city not found`);
    })
  },
  componentDidMount:function(){
    var location = this.props.location.query.location;
    if(location && location.length>0){
      this.handleSearch(location);
      window.location.hash = '#/';
    }
  },
  componentWillReceiveProps:function(newProps){
    var location = newProps.location.query.location;
    if(location && location.length>0){
      this.handleSearch(location);
      window.location.hash = '#/';
    }
  },
  render:function(){
    var {location,temp,desc,isLoading } =this.state;
    function renderMessage(){
      if(isLoading){
      return <h3 className="text-center">Fetching weather ...</h3>
      }
      else if(temp && location && desc){
        return <WeatherMessage temp={temp} location={location} desc={desc}></WeatherMessage>
      }
    }
    return (
      <div>
        <h1 className="text-center page-title">Weather App</h1>
        <WeatherForm onSearch={this.handleSearch}></WeatherForm>
        {renderMessage()}
      </div>
    )
  }
})
module.exports = Weather;
