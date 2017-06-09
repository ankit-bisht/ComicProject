var User = require('../models/user');
var Series = require('../models/series');
var Season = require('../models/season');
var Comics = require('../models/comics');
var Comment = require('../models/comments');
var btoa = require('btoa');
var atob = require('btoa');
const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true, // secure:true for port 465, secure:false for port 587
    auth: {
        user: 'platypusperry24@gmail.com',
        pass: 'newu57zika'
    }
});

//COMMENT
//comment Post
exports.postComment = function (req, res) {
    var comment = new Comment({
        username: req.body.username,
        comment: req.body.comment,
        comicID: req.body.comicID
        });


    comment.save(function (err, response) {
        if(err) {
            return (err);
        }

        res.json({
            success: true,
            body: response
        })

    });
};
//Comment get
exports.getComment=function(req,res){
  var id = req.params.comicID;
    Comment.find({
      comicID:id
    }, function(err, response){
        if(err) {
            return res.json(req, res, err);
        }

        res.json(response);
    })
}

//USERS CRUD
//user Post
exports.postUser = function (req, res) {

    if (req.body.usertype == 1 || req.body.usertype == 2 || req.body.usertype == 3){
      var user = new User({
          username: req.body.username,
          password: btoa(req.body.password),
          name: req.body.name,
          usertype: req.body.usertype,
          email:req.body.email,
          verification: 0,
          code: req.body.code

      });



      let mailOptions = {
          from: '"Comic World!" <platypusperry24@gmail.com>', // sender address
          to: req.body.email, // list of receivers
          subject: 'Comic World', // Subject line
          text: 'Congratulations on your registration at localhost', // plain text body
          html: '<b>Welcome to World of Comics! Enter this code to verify your account!  :</b>'+req.body.code // html body
      };

      transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        return console.log(error);
    }
    console.log('Message %s sent: %s', info.messageId, info.response);
    });

    User.findOne({username: user.username}, function(request, response){
    if(response){
      res.json({
        data: "exist"
      })
    }
    else{
      user.save(function (err, response) {
          if(err) {
              res.json(err);
          }
          else{
            // var myToken = jwt.sign({secret: req.body.username},'kellton');
            res.json({
                success: true,
                body: response
            })
          }
      });
    }
  })

      }else{
        res.json({
            success: false,
            body: "there is undefined value"
        })
      }
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
//User Login
exports.verifyUser = function (req, res) {

    username1 = req.body.username;
    password1 = req.body.password;
    verification = 1;
    User.findOne({
        username: username1,
        password: atob(password1),
        verification: verification
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
//User Update
exports.updateUser = function(req, res) {
  var id = req.params._id;
  User.findOne({
    _id: id
  }, function(err, user) {
    if (err) {
      res.json(err);
    }

    var name = req.body.name;
    var password = btoa(req.body.password);
    var usertype = req.body.usertype;
    user.name = name;
    user.password = password;
    user.usertype = usertype;
    user.updateddate = new Date();

    user.save(function(err, response) {
      if (err) {
        res.json({
          status: false,
          respData: {
            data: err
          }
        });
      }
      else {
      res.json({
        status: true,
        respData: {
          data: response
        }
      });
    }
  })
  })
}
//User Verification
exports.verification = function(req, res) {
  var code = req.params.code;
  User.findOne({
    code: code
  }, function(err, user) {
    if (err) {
      res.json({
        status: true,
        respData: {
          data: "wrong code"
        }
      });
    }
    user.verification = 1;
    user.save(function(err, response) {
      if (err) {
        res.json({
          status: false,
          respData: {
            data: err
          }
        });
      }
      else {
      res.json({
        status: true,
        respData: {
          data: response
        }
      });
    }
  })
  })
}
//User subscription
// exports.subscribe = function(req, res) {
//   var username = req.params.username;
//   User.findOne({
//     username: username
//   }, function(err, user) {
//     if (err) {
//       res.json({
//         status: false,
//         respData: {
//           data: err
//         }
//       });
//     }
//     user.subscription = 1;
//     user.save(function(err, response) {
//       if (err) {
//         res.json({
//           status: false,
//           respData: {
//             data: err
//           }
//         });
//       }
//       else {
//       res.json({
//         status: true,
//         respData: {
//           data: response
//         }
//       });
//     }
//   })
//   })
// }


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
    var _id = req.params._id;
    Series.findOne({_id: _id}, function(err, series){
        if(err){
            res.json(err);
        }

        if(series){
           Series.remove({_id: _id}, function(err){
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
//Series Update
exports.updateSeries = function(req, res) {
  var id = req.params._id;
  Series.findOne({
    _id: id
  }, function(err, series) {
    if (err) {
      res.json(err);
    }

    var name = req.body.name;
    var description = req.body.description;
    var createdby = req.body.createdby;
    series.name = name;
    series.description = description;
    series.createdby = createdby;
    series.updateddate = new Date();

    series.save(function(err, response) {
      if (err) {
        res.json({
          status: false,
          respData: {
            data: err
          }
        });
      }
      else {
      res.json({
        status: true,
        respData: {
          data: response
        }
      });
    }
  })
  })
}
//Series Subscribe
exports.subscribeSeries = function(req, res) {
  var series_id = req.params.series_id;
  var username1 = req.body.username;
  User.findOne({
    username:username1
  }, function(err, user)
  {
    email = user.email;
  });
  Series.findOne({
      _id: series_id
    }, function(err, series) {
      series.subscribedusers.push(email);
      series.save(function(err, response) {
        if (err) {
          res.json({
            status: false,
            respData: {
              data: err
            }
          });
        }
        else {
        res.json({
          status: true,
          respData: {
            data: response
          }
        });
      }
    })
    })
    }

//SEASON CURD
//season post
exports.postSeason = function (req, res) {
    var season = new Season({
      series_id: req.body.series_id,
      name: req.body.name,
      description: req.body.description,
      startson: req.body.startson,
      endson: req.body.endson,
      createddate: req.body.createddate,
      updatedate: req.body.updatedate
    });
    Series.findOne({
      _id : season.series_id
    }, function(err, series){
      if(err){
        return res.json("error");
      }
      else{
        console.log(series.subscribedusers);
        for(var x=0;x<series.subscribedusers.length;x++){
        let mailOptions = {
            from: '"Comic World!" <platypusperry24@gmail.com>', // sender address
            to: series.subscribedusers[x], // list of receivers
            subject: 'Comic World', // Subject line
            text: 'New season have been added to your favorite Series!', // plain text body
            html: '<b>A new season have been posted to your favorite series  :</b>'+req.body.name // html body
        };
        transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
          return console.log(error);
      }
      console.log('Message %s sent: %s', info.messageId, info.response);
      });
      }
      }
    })

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
    var _id = req.params._id;
    Season.findOne({_id: _id}, function(err, season){
        if(err){
            res.json(err);
        }

        if(season){
           User.remove({_id: _id}, function(err){
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
//update season
exports.updateSeason = function(req, res) {
  var id = req.params._id;
  Season.findOne({
    _id: id
  }, function(err, season) {
    if (err) {
      res.json(err);
    }

    var name = req.body.name;
    var description = req.body.description;
    var startson = req.body.startson;
    var endson = req.body.endsson;
    season.name = name;
    season.description = description;
    season.startson = startson;
    season.endson = endson;
    season.updateddate = new Date();

    season.save(function(err, response) {
      if (err) {
        res.json({
          status: false,
          respData: {
            data: err
          }
        });
      }
      else {
      res.json({
        status: true,
        respData: {
          data: response
        }
      });
    }
  })
  })
}

//COMICS CURD
//comics post
exports.postComic = function (req, res) {
    var comics = new Comics({
      series_id: req.body.series_id,
      season_id: req.body.season_id,
      name: req.body.name,
      image: req.body.image,
      story: req.body.story,
      createddate: req.body.createddate,
      updatedate: req.body.updatedate
    });

    Series.findOne({
      _id : season.series_id
    }, function(err, series){
      if(err){
        return res.json("error");
      }
      else{
        console.log(series.subscribedusers);
        for(var x=0;x<series.subscribedusers.length;x++){
        let mailOptions = {
            from: '"Comic World!" <platypusperry24@gmail.com>', // sender address
            to: series.subscribedusers[x], // list of receivers
            subject: 'Comic World', // Subject line
            text: 'New Comic have been added to your favorite Series!', // plain text body
            html: '<b>A new comic have been posted to your favorite series  :</b>'+req.body.name // html body
        };
        transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
          return console.log(error);
      }
      console.log('Message %s sent: %s', info.messageId, info.response);
      });
      }
      }
    })

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
    var _id = req.params._id;
    Comics.findOne({_id: _id}, function(err, comic){
        if(err){
            res.json(err);
        }

        if(comic){
           Comics.remove({_id: _id}, function(err){
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
//comic update
exports.updateComic = function(req, res) {
  var id = req.params._id;
  Comics.findOne({
    _id: id
  }, function(err, comics) {
    if (err) {
      res.json(err);
    }

    var name = req.body.name;
    var story = req.body.story;
    comics.name = name;
    comics.story = story;
    comics.updateddate = new Date();

    comics.save(function(err, response) {
      if (err) {
        res.json({
          status: false,
          respData: {
            data: err
          }
        });
      }
      else {
      res.json({
        status: true,
        respData: {
          data: response
        }
      });
    }
  })
  })
}
