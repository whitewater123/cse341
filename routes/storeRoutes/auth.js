const express = require('express');
const { check, body } = require('express-validator/check');

const authController = require('../../controllers/storeControllers/auth');
const User = require('../../models/storeModels/user')

const router = express.Router();

router.get('/login', authController.getLogin);

router.get('/signup', authController.getSignup);

router.post('/login', [
    body('email')
    .isEmail()
    .withMessage('Please enter a valid email')
    .normalizeEmail(),
    body('password', 'Password must be at least 4 characters in length, with numbers and letters only.')
    .isLength({min: 4})
    .isAlphanumeric()
    .trim()
],
authController.postLogin);

router.post('/signup',
[
check('email')
.isEmail()
.withMessage('Please enter a valid email address')
.custom((value, {req}) => {
    //if (value === 'test@test.com') {
    //    throw new Error('Please enter a real email address')
    //}
    //return true;
    return User.findOne({ email: value })
    .then(userDoc => {
      if (userDoc) {
        return Promise.reject('E-Mail exists already, please pick a different one.')
      }
    });
})
.normalizeEmail(),
body('password',
'Password does not meet guidlines. Must be at least 4 characters, letters & numbers only.')
.isLength({min: 4})
.isAlphanumeric()
.trim(),
body('confirmPassword')
.trim()
.custom((value, { req }) => {
    if (value !== req.body.password) {
        throw new Error('Passwords do not match');
    }
    return true;
})
],
authController.postSignup);

router.post('/logout', authController.postLogout);

router.get('/reset', authController.getReset);

module.exports = router;