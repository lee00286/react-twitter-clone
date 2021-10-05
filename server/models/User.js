const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const moment = require('moment');

const saltRounds = 10;

const userSchema = mongoose.Schema({
    nickName: { // 닉네임
        type: String,
        maxlength: 50
    },
    email: {
        type: String,
        trim: true,
        unique: 1
    },
    userId: {
        type: String
    },
    password: {
        type: String,
        minlength: 5
    },
    profileImg: { // 인장
        type: String
    },
    backgroundImg: { // 헤더
        type: String
    },
    token: {
        type: String
    },
    tokenExp: {
        type: Number
    }
});

// Encryption
userSchema.pre('save', function(next) {
    var user = this;
    if (user.isModified('password')) {
        // Generate salt for the password
        bcrypt.genSalt(saltRounds, function(err, salt) {
            if (err) return next(err);
            bcrypt.hash(user.password, salt, function(err, hash) {
                if (err) return next(err);
                user.password = hash;
                next();
            });
        });
    } else {
        next();
    }
});

// Confirm Password
userSchema.methods.comparePassword = function(plainPasswoord, cb) {
    bcrypt.compare(plainPassword, this.password, function(err, isMatch) {
        if (err) return cb(err);
        cb(null, isMatch);
    });
}

// Generate Token
userSchema.methods.generateToken = function(cb) {
    var user = this;
    var token = jwt.sign(user._iid.toHexString(), 'secret');
    var oneHour = moment().add(1, 'hour').valueOf();
    user.tokenExp = oneHour; // Token is expired after an hour
    user.token = token;
    user.save(function (err, user) {
        if (err) return cb(err);
        cb(null, user);
    });
}

// Find User by Token
userSchema.statics.findByToken = function(token, cb) {
    var user = this;
    jwt.verify(token, 'secret', function(err, decode) {
        user.findOne({ "_id": decode, "token": token }, function(err, user) {
            if (err) return cb(err);
            cb(null, user);
        });
    });
}

const User = mongoose.model('User', userSchema);

module.exports = { User };