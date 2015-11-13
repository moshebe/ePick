app.get('/Pick/:pickItem?', app.controllers.pick.generatePick);
app.get('/ProductInfo/:productId', app.controllers.api.getProductInfo);
app.post('/CreatePick', app.controllers.api.createPick);
app.post('/Pick/:pickId/Vote/:productId', app.controllers.pick.vote);
app.post('/Pick/:pickId/Statistics', app.controllers.pick.statistics);


