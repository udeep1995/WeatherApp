TO START APPLICATION

// Installing webpack on local machine
RUN  'npm install webpack -g'  

// Creating bundle
RUN 'webpack'

// Creating express server
RUN 'node server.js'

//Open web app in browser at localhost:3000
