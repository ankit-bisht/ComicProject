var User = require('../models/user');
var Series = require('../models/series');
var Season = require('../models/season');
var Comics = require('../models/comics');

//USERS CRUD
exports.postUser = function (req, res) {
    var user = new User({
        username: req.body.username,
        password: req.body.password,
        name: req.body.name,
        usertype: req.body.usertype
    });

    user.save(function (err, response) {
        if(err) {
            return customHandleError(req, res, next, err);
        }

        res.json({
            success: true,
            body: response
        })

    });
};

//Users get
exports.getUser=function(req,res){
    User.find({}, function(err, response){
        if(err) {
            return res.json(req, res, err);
        }

        res.json(response);
    })
}
//Users Search
exports.searchUser = function (req, res) {
  console.log(req.params.reg);
  var regex = RegExp(req.params.reg);
  User.find({
    name: regex
  },
    function (err, response) {
      console.log(err,response);
      if (err) {
        res.json({
          status: false,
          respData: {
            data: err
          }
        });
      }
      if (!response) {
        return res.json({
          status: true,
          respData: {
            data: "data doesnt exist"
          }
        });
      }else{
      return res.json({
        status: true,
        respData: {
          data: response
        }
      });
    }
    })};
//user Verify
// exports.verifyuser = function (req, res) {
//     console.log(req.params.reg);
//     var username1 = req.body.username;
//     var password1 = req.body.password;
//     User.findOne({username:username1,password:password1}, function (err, response) {
//         if (err) {
//             res.json({
//                             "status": false,
//                             "respData": {
//                         "data": err
//                                 }
//                             });
//         }
//         if ((response || []).length === 0){
//             return res.json({
//                     "status": false,
//                     "respData": {
//                     "data": "User Doesn't exist"
//                         }
//                     });
//         }
//         return res.json({
//             "status": true,
//             "respData": {
//              "data":response.role
//             }
//         });
//     })
// };

exports.verifyUser = function (req, res) {

    username1 = req.body.username;
    password1 = req.body.password;
    console.log(username1);
    User.findOne({
        username: username1,
        password: password1
    }, function (err,user) {
        if (err) {
            res.json(err);
        }
        if (user) {
            res.json({
                "status": true,
                "respData": {
                    "data": user
                }
            });
        }
        else {
            res.json({
                "status": false,
                "respData": {
                    "data": "user does not exist"
                }
            });
        }
    });
}
//Users delete
exports.deleteUser=function(req,res){
    var username = req.params.username;
    User.findOne({username: username}, function(err, user){
        if(err){
            res.json(err);
        }

        if(user){
           User.remove({username: username}, function(err){
                if(err){
                    res.json(err);
                }

                res.json("success");
            })
       }else{
            res.json("User doesnt exist");
       }

    })
}

//SERIES CRUD
//Series Post
exports.postSeries = function (req, res) {
    var series = new Series({
        name: req.body.name,
        description: req.body.description,
        createddate: req.body.createddate,
        updatedate: req.body.updatedate,
        createdby: req.body.createdby
    });

    series.save(function (err, response) {
        if(err) {
            return customHandleError(req, res, next, err);
        }

        res.json({
            success: true,
            body: response
        })

    });
};
//Series get
exports.getSeries=function(req,res){
    Series.find({}, function(err, response){
        if(err) {
            return res.json(req, res, err);
        }

        res.json(response);
    })
}
//Series Search
exports.searchSeries = function (req, res) {
  console.log(req.params.reg);
  var regex = RegExp(req.params.reg);
  Series.find({
    name: regex
  },
    function (err, response) {
      console.log(err,response);
      if (err) {
        res.json({
          status: false,
          respData: {
            data: err
          }
        });
      }
      if (!response) {
        return res.json({
          status: true,
          respData: {
            data: "data doesnt exist"
          }
        });
      }else{
      return res.json({
        status: true,
        respData: {
          data: response
        }
      });
    }
    })};
//Series delete
exports.deleteSeries=function(req,res){
    var name = req.params.name;
    User.findOne({name: name}, function(err, user){
        if(err){
            res.json(err);
        }

        if(user){
           User.remove({name: name}, function(err){
                if(err){
                    res.json(err);
                }

                res.json("success");
            })
       }else{
            res.json("Series doesnt exist");
       }

    })
}

//SEASON CURD
//season post
exports.postSeason = function (req, res) {
    var season = new Season({
      name: req.body.name,
      description: req.body.description,
      startson: req.body.startson,
      endson: req.body.endson,
      createddate: req.body.createddate,
      updatedate: req.body.updatedate
    });

    season.save(function (err, response) {
        if(err) {
            return customHandleError(req, res, next, err);
        }

        res.json({
            success: true,
            body: response
        })

    });
};
//Season get
exports.getSeason=function(req,res){
    Season.find({}, function(err, response){
        if(err) {
            return res.json(req, res, err);
        }

        res.json(response);
    })
}
//Season Search
exports.searchSeason = function (req, res) {
  console.log(req.params.reg);
  var regex = RegExp(req.params.reg);
  Season.find({
    name: regex
  },
    function (err, response) {
      console.log(err,response);
      if (err) {
        res.json({
          status: false,
          respData: {
            data: err
          }
        });
      }
      if (!response) {
        return res.json({
          status: true,
          respData: {
            data: "data doesnt exist"
          }
        });
      }else{
      return res.json({
        status: true,
        respData: {
          data: response
        }
      });
    }
    })};
//Season delete
exports.deleteSeason=function(req,res){
    var name = req.params.name;
    User.findOne({name: name}, function(err, user){
        if(err){
            res.json(err);
        }

        if(user){
           User.remove({name: name}, function(err){
                if(err){
                    res.json(err);
                }

                res.json("success");
            })
       }else{
            res.json("Season doesnt exist");
       }

    })
}

//COMICS CURD
//comics post
exports.postComic = function (req, res) {
    var comics = new Comics({
      name: req.body.name,
      image: req.body.image,
      story: req.body.story,
      createddate: req.body.createddate,
      updatedate: req.body.updatedate
    });

    comics.save(function (err, response) {
        if(err) {
            return customHandleError(req, res, next, err);
        }

        res.json({
            success: true,
            body: response
        })

    });
};
//comics search
exports.searchComic = function (req, res) {
  console.log(req.params.reg);
  var regex = RegExp(req.params.reg);
  Comics.find({
    name: regex
  },
    function (err, response) {
      console.log(err,response);
      if (err) {
        res.json({
          status: false,
          respData: {
            data: err
          }
        });
      }
      if (!response) {
        return res.json({
          status: true,
          respData: {
            data: "data doesnt exist"
          }
        });
      }else{
      return res.json({
        status: true,
        respData: {
          data: response
        }
      });
    }
    })};
//comics get
exports.getComic=function(req,res){
    Comics.find({}, function(err, response){
        if(err) {
            return res.json(req, res, err);
        }

        res.json(response);
    })
}
//Comics Delete
exports.deleteComic=function(req,res){
    var name = req.params.name;
    User.findOne({name: name}, function(err, user){
        if(err){
            res.json(err);
        }

        if(user){
           User.remove({name: name}, function(err){
                if(err){
                    res.json(err);
                }

                res.json("success");
            })
       }else{
            res.json("comic doesnt exist");
       }

    })
}
