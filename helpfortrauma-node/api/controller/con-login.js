const Register = require('../model/user-info.vo');
const Password = require('../model/user-pass.vo');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

/* ****************************Login User and Authenticate**************************** */
exports.authenticate = (req, res, next) => {
    console.log('login init');
    Register.findOne({ email: req.body.email })
        .then(data => {
            if (data) {
                Password.findOne({ usrId: data._id })
                    .then(passData => {
                        console.log('xxxxxxx xxxxxxxx xxxxxxx xxxxx pass data is ', passData);
                        let isPassMatch = bcrypt.compareSync(req.body.pass, passData.pass);
                        if (isPassMatch) {
                            const token = _getToken(data);
                            res.status(201).json({
                                message: "Login successful",
                                success: true,
                                body: token
                            });
                        } else {
                            res.status(400).json({
                                message: "Wrong username or password",
                                success: false
                            });
                        }
                    }).catch(err => {
                        console.log(err);
                    });

            } else {
                res.status(400).json({
                    message: "Wrong username or password",
                    success: false
                });
            }

        }).catch(err => {
            console.log('xxxxxxxx xxxxxxxx xxxxxx error is ' + err);
        })
}

/* ****************************Private functions**************************** */
function _getToken(data) {
    const tokenData = _setDataForToken(data);
    const secret = "JWT_TOKEN_SECRET";
    const token = jwt.sign(tokenData, secret,
        {
            expiresIn: "1h"
        });
    return token;
}
function _setDataForToken(data) {
    const tokenData = {
        _id: data._id,
        fName: data.fName,
        lName: data.lName,
        email: data.email,
        cell: data.cell,
        profession: data.profession,
        address: data.address,
        city: data.city,
        state: data.state,
        zip: data.zip,
        username: data.username,
    }
    return tokenData;
}

function _getPass(usrId) {
    Password.findOne({ usrId: usrId })
        .then(data => {
            console.log('pass', data);
            return data;
        }).catch(err => {
            console.log(err);
        });
}
