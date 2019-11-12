//During the test the env variable is set to test
process.env.NODE_ENV = 'test';

//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../../Copied Server/index.js');
let should = chai.should();

chai.use(chaiHttp);


it('it should GET the index.html file', (done) => {
	chai.request(server)
		.get('/index.html')
		.end((err, res) => {
			res.should.have.status(200);
			res.should.be.html;
		done();
        });
});
it('it should return 404', (done) => {
	chai.request(server)		.get('/index2.html')
		.end((err, res) => {
			res.should.have.status(404);
		done();
		});
});
it('it should GET all the gadgets', (done) => {
        var gadget = new gadget({
                "Yoo":"Jane",
                "Hoo":"Doe",
                "ID":"1234"
        });
        user.save((err, user) => {
        chai.request(server)
            .get('/api/gadgets')
            .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('array');
            res.body.length.should.be.eql(3);
            res.body[0].should.be.a('object');
            res.body[0].should.have.property('Yoo');
            res.body[0].should.have.number('Hoo');
            done();
        });
it('it should GET all the gadgets based on an ID', (done) => {
         var gadget = new gadget({
                        "Yoo":"Jane",
                        "Hoo":"Doe",
                        "ID":"1234"
                });
         gadget.save((err, gadget) => {
                    chai.request(server)
                        .get('/api/gadget/' + gadget._id)
                        .send(user)
                        .end((err, res) => {
                            res.should.have.status(200);
                            res.body.should.be.a('array');
                            res.body.length.should.be.eql(3);
                            res.body[0].should.be.a('object');
                            res.body[0].should.have.property('Yoo');
                            res.body[0].should.have.number('Hoo');
                            done();
                });
         });
it('it should Post a gadget', (done) => {
           var gadget = {
                        "Yoo":"Jane",
                        "Hoo":"Doe",
                        "GadgetID":"1234"
                }
            chai.request(server)
                        .post('/api/gadgets')
                        .send(gadget)
                        .end((err, res) => {
                        res.should.have.status(201);
                        res.body[0].should.have.property('Yoo');
                        res.body[0].should.have.number('Hoo');
                         done();
                    });
it('it should Update a gadget', (done) => {
           var gadget = {
           "Yoo":"Jane",
            "Hoo":"Doe",
            "ID":"1234"
}
            gadget.save((err, gadget) => {

            chai.request(server)
            .put('/api/gadgets'+gadgetID)
            .send({
                "GadgetID":GadgetID,
                "Yoo":"Jane",
                "Woo":"Doe"
                .end((err, res)=>{
                     res.should.have.status(200);
                     res.body.should.be.a('object');
                     res.body.should.have.property('email').eql('yoo@hoo.edu');
                     res.body.should.have.property('firstName').eql('Joey');
                     done()
                }),
            });
                    
it('it should Delete a gadget', (done) => {
        var gadget = new gadget ({
            "GadgetID":GadgetID,
            "Yoo":"Jane",
            "Woo":"Doe"
        });
        user.save((err, user) => {
            chai.request(server)
            .delete('/api/users/' + user.id)
            .end((err, res) => {
                res.should.have.status(200);
                    done();
            });
      });
  });})})})})})})