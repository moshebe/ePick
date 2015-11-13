app.get('/Pick/:pickItem?', app.controllers.pick.generatePick);
app.get('/ProductInfo', app.controllers.api.getProductInfo);
app.post('/CreatePick', app.controllers.api.createPick);

