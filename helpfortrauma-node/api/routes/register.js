const express = require('express');
const router = express.Router();
const Register = require('../model/user-info.vo');

/* ****************************Get all registered user**************************** */
router.get('/user/all', (req, res, next) => {
    Register.find({}, (err, users) => {
		res.status(200).json({
			message: 'get request for details',
			body: users
		});
	});
});

/* *******************************User Registration************************************* */
router.post('/user', (req, res, next) => {
	if (req.body._id) {
		User.findByIdAndUpdate(req.body._id, {
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
            pass: req.body.pass,
            created: new Date()
		}, { new: true })
			.then(data => {
				res.status(201).json({
					message: 'Data Updated successfully',
				});
			}).catch(err => {
				console.log(err);
			});

	}
	else {
        Register.findOne({ email: req.body.email})
        .then( data => {
            if(data) {
                res.status(201).json({
                    message: "User already registerd try with another email",
                });
            } else {
                const user = new Register({
                    fName: req.body.fName,
                    lName: req.body.lName,
                    email: req.body.email,
                    profession: req.body.profession,
                    address: req.body.address,
                    address2: req.body.address2,
                    city: req.body.city,
                    state: req.body.state,
                    zip: req.body.zip,
                    username: req.body.username,
                    pass: req.body.pass,
                    created: new Date()
                    });
        
                user.save()
                    .then(data => {
                        res.status(201).json({
                            message: 'Data added successfully',
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
});

module.exports = router;