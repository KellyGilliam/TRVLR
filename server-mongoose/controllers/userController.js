const User = require('./../models/userModel');


const userController = {};

userController.getAllUsers = (next) => {
    User.find({}, next);
};

userController.createUser = (req, res) => {
    if (req.body.username && req.body.password) {
        User.findOne({username:req.body.username}, function(err, found) {
            if (!found) {
                User.create({
                    username: req.body.username,
                    password: req.body.password
                }, (err, doc) => {
                    if (err) {
                        res.send(err);
                    } else {
                        res.send(doc);
                    }
                });
            }
            else {
                res.send(err);
            }
        })
}
    // let login = new User(req.body)
    // login.username = req.body.username;
    // login.password = req.body.password;


    // else {
    //     res.status(404);
    //     console.log('error')
    // }
}
userController.login = (req,res) => {
    User.findOne({username:req.body.username, password:req.body.password}, function(err,find) {
        if(err) {
            console.log("dv err", err)
            res.send(err)
        }
        if(find) {
            res.send(find)
        }
        if(!find) {
            console.log('keyll')
        }
    })
}


// userController.login = (req,res) => {
//     User.findOne({username:req.body.username, password:req.body.password})
//         .then((pass)=> {
//             if(pass) res.send(pass)
//         }
//         ,function(err) {
//             console.log(err)
//         })
//         }

// userController.login = (req,res) => {
//     User.findOne({username:req.body.username})
//         .then((user)=> {
//             if(user) {
//                 User.findOne({password:req.body.password})
//                     .then((pass) => {
//                         if(pass) {
//                             res.send(pass)                            
//                         }
//                         else {
//                             res.send(err)
//                         }
//                     })
//             }
//             else {
//                 console.log('err')
//             } 
//         })
// }
module.exports = userController;