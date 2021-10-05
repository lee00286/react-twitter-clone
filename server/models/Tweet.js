const mongoose = require('mongoose');
const validate = require('mongoose-validator');

const tweetSchema = mongoose.Schema({
    user: { // 트윗 작성자
        type: String,
        maxlength: 50
    },
    tweetText: {
        type: String
    },
    threadId: { // 스레드 or 멘션
        ttype: String
    }
});

const Tweet = mongoose.model('Tweet', tweetSchema);

module.exports = { Tweet };
