var React = require ('react');
var About = React.createClass({
  render:function(){
    return (
      <div>
        <h1 className="text-center page-title">About</h1>
        <p>This is a weather application build on React</p>
        <p>
          Here are some of tools used:
        </p>
        <ul>
            <li>
                <a href="https://facebook.github.io/react">React</a>- This javascript framework was used
            </li>
            <li>
              <a href="http://openweathermap.org">Open Weather Map</a>- Open Weather Map Api's are used to search weather
            </li>
        </ul>
      </div>
    )
  }
})
module.exports = About;
