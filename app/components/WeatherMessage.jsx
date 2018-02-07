var React = require('react');

var WeatherMessage = React.createClass({

  render: function() {
    var temp = this.props.temp;
    var location = this.props.location;
    var desc = this.props.desc;
    return (<div className="page-title">
      <div>
        <h3 className="text-center">It is {temp} degree Celcius in {location}</h3>
      </div>
      <div>
        <h4 className="text-center">Also, it's going to be {desc}
        </h4>
      </div>
    </div>)
  }
})

module.exports = WeatherMessage;
