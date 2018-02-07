var React = require('react');

var WeatherMessage = React.createClass({

  render : function(){
    var temp = this.props.temp;
    var location = this.props.location;

    return (
      <h4>It is {temp} degree Celcius in {location}</h4>
    )
  }
})

module.exports = WeatherMessage;
