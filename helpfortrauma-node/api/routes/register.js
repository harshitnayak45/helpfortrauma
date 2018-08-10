const express = require('express');
const router = express.Router();
const Register = require('../model/user-info.vo');

router.get('/', (req, res, next) => {
		res.status(200).json({
			message: 'Welcome to the app ',
		});
});


router.post('/user', (req, res, next) => {
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
		user.save()
			.then(data => {
				res.status(201).json({
					message: 'Data added successfully',
				});
			}).catch(err => {
				console.log(err);
			});
	}
});

router.get('/', (req, res, next) => {
	const id = req.params.id;
	if (id == "vin") {
		res.status(200).json({
			message: 'Name is vinay patidar'
		});

	}
	else {
		res.status(200).json({
			message: 'Wrong Id'
		});
	}
});

module.exports = router;