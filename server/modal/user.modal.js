import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    fullname: {
        type: String,
        required: [true, 'Fullname is required']
    },
    emailid: {
        type: String,
        required: [true, 'Email is required'],
        unique: true,
        validate: {
            validator: (value) => {
                return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
            },
            message: 'Invalid email address'
        }
    },
    password: {
        type: String,
        required: [true, 'Password is required']
    }
});

const User = mongoose.model("User", userSchema);

export default User;
