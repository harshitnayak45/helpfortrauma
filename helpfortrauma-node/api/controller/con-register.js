const Register = require('../model/user-info.vo');
const bcrypt = require('bcrypt');

/* *******************************User Registration************************************* */
exports.addUpdateUser = (req, res, next) => {
    const reqObj = _setReqData(req);
    if (req.body._id) {
        User.findByIdAndUpdate(req.body._id, reqObj, { new: true })
            .then(data => {
                res.status(201).json({
                    message: 'Data Updated successfully',
                    success: true
                });
            }).catch(err => {
                console.log(err);
            });
    }
    else {
        Register.findOne({ email: req.body.email })
            .then(data => {
                if (data) {
                    res.status(201).json({
                        message: "User already registerd try with another email",
                        success: false
                    });
                } else {
                    const user = new Register(reqObj);
                    user.save()
                        .then(data => {
                            res.status(201).json({
                                message: 'Data added successfully',
                                success: true
                            });
                        }).catch(err => {
                            console.log(err);
                        });
                }
            }).catch(err => {
                res.status(400).json({
                    message: err,
                });
            })
    }
}

/* ****************************Get all registered user**************************** */
exports.getAllregisterUser = (req, res, next) => {
    Register.find({}, (err, users) => {
        res.status(200).json({
            message: 'all registerd users',
            success: true,
            body: users
        });
    });
}

/* ****************************Private functions**************************** */
function _setReqData(req) {
    let hash = bcrypt.hashSync(req.body.pass, 10);
    const reqObj = {
        fName: req.body.fName,
        lName: req.body.lName,
        email: req.body.email,
        cell: req.body.cell,
        profession: req.body.profession,
        address: req.body.address,
        address2: req.body.address2,
        city: req.body.city,
        state: req.body.state,
        zip: req.body.zip,
        username: req.body.username,
        pass: hash,
        created: new Date()
    }
    return reqObj;
}