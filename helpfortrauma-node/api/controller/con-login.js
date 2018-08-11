const Register = require('../model/user-info.vo');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

/* ****************************Login User and Authenticate**************************** */
exports.authenticate = (req, res, next) => {
    console.log('login init');
    Register.findOne({ email: req.body.email })
        .then(data => {
            if (data) {
                let isPassMatch = bcrypt.compareSync(req.body.pass, data.pass);
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
    const secret =  "JWT_TOKEN_SECRET";
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
