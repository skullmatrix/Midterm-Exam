import express from 'express'; //importing express functions

const app = express();  
const PORT = 3000; //server that listens on port 3000

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`); 
});

app.get('/test', (req, res) => { ////defining a route /test that sends a JSON response
    res.send('Express is working! John Manuel Planas');
});
