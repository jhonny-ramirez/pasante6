// Requerir las dependencias necesarias
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../app');
let should = chai.should();

// Decirle a chai que use chai-http
chai.use(chaiHttp);

// Describir el grupo de pruebas
describe('Prueba de la ruta /test', function() {
  // Describir el caso de prueba
  it('debe responder con Hello world!', function(done) {
    // Hacer una petición GET a la ruta /test
    chai.request(server)
      .get('/test')
      .end(function(err, res) {
        // Verificar que no haya errores
        should.not.exist(err);
        // Verificar que el código de estado sea 200 (OK)
        res.should.have.status(200);
        // Verificar que el cuerpo de la respuesta sea un objeto
        res.body.should.be.a('object');
        // Verificar que el cuerpo de la respuesta tenga las propiedades esperadas
        res.body.should.have.property('msg').eql('Hello world!');
        // Terminar la prueba
        done();
      });
  });
});
