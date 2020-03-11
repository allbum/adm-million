var Adm = require('../../app/models/adm');

it('Deve retornar o modelo de Adm', ()=> {
    let adm = Adm;
    expect(adm =! undefined).toBe(true);
    });