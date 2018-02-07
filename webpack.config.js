module.exports = {
  entry: ['./app/app.jsx'],
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    modules:[
      __dirname,
      __dirname +'/node_modules',
      __dirname + '/app/components',
      __dirname + '/app/api'
    ],
    alias: {
      Main:'Main.jsx',
      Nav:'Nav.jsx',
      Weather : 'Weather.jsx',
      About : 'About.jsx',
      Examples : 'Examples.jsx',
      WeatherForm: 'WeatherForm.jsx',
      WeatherMessage:'WeatherMessage.jsx',
      openWeatherMap :'openWeatherMap.jsx'
    },
    extensions: ['.js', '.jsx']
  },
  module: {
    loaders: [{
      loader: 'babel-loader',
      query: {
        presets: ['react', 'es2015','stage-0']
      },
      test: /\.jsx?$/,
      exclude: /(node_modules|bower_components)/
    }]
  }
}
