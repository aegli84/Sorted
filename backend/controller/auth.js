const user = require('../model/user');
const jwt = require('jsonwebtoken')
const jwtSecretKey = process.env.JWT_SECRET_KEY;

const bcrypt = require('bcrypt');

exports.registerUser = async (req, res) => {
    
    let {email, pass} = req.body;

    pass = await bcrypt.hash(pass, 10)

    const newUser = new user({email, pass})

    user.findOne({email, pass}, (err, doc) =>{
        if(err) {
            console.log(err)
            res.send({status: 'failed', message: err});
        } else if (doc !== null){
            res.status(406).send(({status: 'failed', message: 'Please try a different email'}));
        } else {
            newUser.save((err, doc) =>{
                if(err) {
                    console.log(err)
                    res.send({status: 'failed', message: err});
                } else {
                    console.log(doc)
                    res.send(({status: 'success', message: 'The account has been created successfuly'}));
                }
            });
        }
    });
}

exports.loginUser = (req, res) => {

    let {email, pass} = req.body;

    user.findOne({email}, async (err, doc) => {
        if(err) {
            console.log(err)
            res.send({status: 'failed', message: err});
        } else if (doc == null){
            res.status(406).send(({status: 'failed', message: 'Wrong credentials'}));
        } else {

            const match = await bcrypt.compare(pass, doc.pass);

            if(match) {
                //create token in here and send to frontend
                const token = jwt.sign({id:doc._id}, jwtSecretKey, {expiresIn: '1d'})
                res.send({status: 'success', message: 'User logged in succesfully', token});
            } else {
                res.send({status: 'failed', message: `There's an error, please try again later`});
                }
            };
        });
}