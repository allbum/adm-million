var express = require('express');
var router = express.Router();
var HomeController = require('../app/controllers/home_controller');
var AdmController = require('../app/controllers/adm_controller');
const TOKEN = "12345213455";

/* GET home page. */
router.all("*", (req, res, next) => {
    if(req.headers.token == TOKEN){
        next();
      }
      else{
        res.status(401).send({error: "Acesso negado a API, Token invalido"});
      }
    console.log("teste"); 
  });
router.get('/', HomeController.index);
router.get('/adm.json', AdmController.index);
router.post('/adm.json', AdmController.create);
router.put('/adm/:adm_id.json', AdmController.change);
router.delete('/adm/:adm_id.json', AdmController.delete);

module.exports = router;

