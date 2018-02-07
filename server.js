const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use((req,res,next)=>{
  if (req.headers['x-forwaded-proto'] === 'http' ) {
    next();
  } else{
    res.redirect('http://'+ req.hostname + req.url);
  }
})
app.use(express.static('public'));
app.listen(PORT,()=>{
  console.log(`Server up at ${PORT}`);
})
