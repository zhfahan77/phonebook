const mongoose = require("mongoose")

const contactSchema = new mongoose.Schema({
	name: {
        type: String,
        required: true
    },
    mobileNumber: {
        type: String,
        required: true
    }
}, {
    usePushEach: true
})

mongoose.model('Contact', contactSchema, 'contact')