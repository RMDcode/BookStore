import User from "../modal/user.modal.js";
import bcrypt from "bcryptjs";

export const signup = async (req, res) => {
    try {
        const { fullname, emailid, password } = req.body;
        const userExists = await User.findOne({ emailid });

        if (userExists) {
            return res.status(400).json({ message: "User already exists..." });
        }
        const hashPassword = await bcrypt.hash(password,10)
        const newUser = new User({
            fullname: fullname,
            emailid: emailid,
            password: hashPassword,
        });

        await newUser.save();

        res.status(201).json({ message: "User created successfully",user:{
            _id : newUser._id,
            fullname : newUser.fullname,
            emailid : newUser.emailid,
        } });
    } catch (error) {
        console.log("Error: " + error.message);
        res.status(500).json({ message: "Internal server error" });
    }
};

export const login = async (req,res) =>{
    try{
        const {emailid,password} = req.body;
        const user = await User.findOne({emailid});
        const isMatch = await bcrypt.compare(password, user.password)
        if(!user || !isMatch)
        {
            return res.status(400).json({message:"Invalid username or password"});
        }
        else{
            return res.status(200).json({message:"Login Succesfull",
            user:{
                _id:user._id,
                fullname:user.fullname,
                emailid:user.emailid
                }
            }
        );
        }
    }
    catch(error)
    {
        console.log("Error: "+error.message);
        res.status(500).json({message:"Internal server error"});
    }

}