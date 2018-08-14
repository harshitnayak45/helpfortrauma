const express = require('express');
const router = express.Router();
const conUser = require('../controller/con-user');
const checkAuth = require('../middleware/check-auth');
const multer = require('multer');
//const upload = multer({dest: 'storage/upload/images/'});

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'storage/uploads/user-images/');
    },
    filename: (req, file, cb) => {
        cb(null, req.userData._id + '.jpeg'  );
    }
});

const fileFilter = (req, file, cb) => {
    // reject a file
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
      cb(null, true);
    } else {
      cb(null, false);
    }
  };
  
  const upload = multer({
    storage: storage,
    limits: {
      fileSize: 1024 * 1024 * 3
    },
    fileFilter: fileFilter
  });

/* ****************************Delete User by Id**************************** */
router.delete('/delete/:_id', checkAuth, conUser.deleteUser);

/* ****************************Delete User by Id**************************** */
router.get('/profile/:_id', checkAuth, conUser.getUserById);

/* ****************************User Image Upload**************************** */
router.post('/image', checkAuth, upload.single('userImage'), conUser.uploadUserImage);

/* ****************************User Image download**************************** */
router.get('/image', checkAuth, conUser.downloadUserImage);
   




module.exports = router;