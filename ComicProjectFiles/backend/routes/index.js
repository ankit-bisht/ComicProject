var express = require('express');
var router = express.Router();

var userController = require('../controllers/user');
//user apis
router.route('/v1/user')
  .post(userController.postUser)
  .get(userController.getUser)

router.route('/v1/user/search/:reg')
  .get(userController.searchUser)

router.route('/v1/user/delete/:_id')
  .delete(userController.deleteUser);

router.route('/v1/user/verify')
 .post(userController.verifyuser)
//series apis
router.route('/v1/series')
  .post(userController.postSeries)
  .get(userController.getSeries)

router.route('/v1/series/search/:reg')
  .get(userController.searchSeries)

router.route('/v1/series/delete/:_id')
  .delete(userController.deleteSeries)
//season apis
router.route('/v1/season')
  .post(userController.postSeason)
  .get(userController.getSeason)

router.route('/v1/season/search/:reg')
  .get(userController.searchSeason)

router.route('/v1/season/delete/:_id')
  .delete(userController.deleteSeason)
//comic apis
router.route('/v1/comic')
  .post(userController.postComic)
  .get(userController.getComic)

router.route('/v1/comic/search/:reg')
  .get(userController.searchComic)

router.route('/v1/comic/delete/:_id')
  .delete(userController.deleteComic)

module.exports = router;
