var Adm = require('../../app/models/adm');

describe('Modelo Adm', function() {
it('Deve retornar o modelo de Adm', ()=> {
    let adm = Adm;
    expect(adm !== undefined).toBe(true);
    expect(adm.id !== undefined).toBe(true);
    expect(adm.nome !== undefined).toBe(true);
    console.log("========================")
    console.log(typeof adm.todos() == Array)
    console.log("========================")
    expect(adm.todos() !== undefined).toBe(true);
    });
});