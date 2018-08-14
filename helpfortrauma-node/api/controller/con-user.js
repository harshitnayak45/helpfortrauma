const Register = require('../model/user-info.vo');
const fs = require('fs');
/* ****************************Delete User by Id**************************** */
exports.deleteUser = (req, res, next) => {
    console.log("xxxxxxxxxxxxxxxxxxx xxxxxxxx delete init " + req.params._id);
    Register.findByIdAndRemove(req.params._id)
        .then(data => {
            if (!data || !req.userData._id || data._id != req.userData._id) {
                return res.status(404).send({
                    message: "Unauthorized",
                    success: false
                });
            }
            res.status(201).json({
                message: 'Deleted successfully',
                success: true
            });
        }).catch(err => {
            console.log(err);
        });
}

/* ****************************Get User by Id**************************** */
exports.getUserById = (req, res, next) => {
    console.log("xxxxxxxxxxxxxxxxxxx xxxxxxxx get init " + req.params._id);
    Register.findOne({ _id: req.params._id })
        .then(data => {
            if (!data || !req.userData._id || data._id != req.userData._id) {
                return res.status(404).send({
                    message: "Unauthorized",
                    success: false
                });
            } else {
                res.status(201).json({
                    message: "User got successfully",
                    success: true,
                    body: data
                })
            }
        }).catch(err => {
            console.log("xxxxxxxx xxxxxxx xxxxx error is " + err);
        });
}

/* ****************************Upload User Image**************************** */
exports.uploadUserImage = (req, res, next) => {
    res.send({
        message: 'uploaded succesfully',
        success: false,
        body: {}
    });
}

/* ****************************Download User Image**************************** */
exports.downloadUserImage = (req, res, next) => {
    const path = 'storage/uploads/user-images/';
    let message; let success; let body;
    fs.readdir(path, (err, files) => {
        files.forEach(file => {
            if (file == req.userData._id + '.jpeg') {
                message = "successful";
                body = file;
                success = true;

            } else {
                message = "Not found";
                body = {};
                success = false;
            }
        });
        res.status(201).json({
            message: message,
            success: success,
            body: body
        });
    });

}

/* ****************************Private functions**************************** */
