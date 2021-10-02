import express from 'express';

const app = express();

app.get('/test', (request, response) => {
  response.send('Olá teste');
});

app.post('/test-post', (request, response) => {
  response.send('Olá teste post');
});

app.listen(3000, () => console.log('Server is running'));
