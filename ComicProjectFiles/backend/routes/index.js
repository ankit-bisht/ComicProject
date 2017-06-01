var express = require('express');
var router = express.Router();

var userController = require('../controllers/user');
//user apis
router.route('/v1/user')
  .post(userController.postUser)
  .get(userController.getUser)
router.route('/v1/user/search/:reg')
  .get(userController.searchUser)
router.route('/v1/user/delete/:username')
  .delete(userController.deleteUser)
router.route('/v1/user/update')
  .put(userController.updateUser)
router.route('/v1/user/verify')
  .post(userController.verifyUser)

//series apis
router.route('/v1/series')
  .post(userController.postSeries)
  .get(userController.getSeries)
router.route('/v1/series/search/:reg')
  .get(userController.searchSeries)
router.route('/v1/series/delete/:name')
  .delete(userController.deleteSeries)
  .put(userController.updateSeries)
router.route('/v1/series/update/:username')
  .put(userController.updateSeries)

//season apis
router.route('/v1/season')
  .post(userController.postSeason)
  .get(userController.getSeason)
router.route('/v1/season/search/:reg')
  .get(userController.searchSeason)
router.route('/v1/season/delete/:name')
  .delete(userController.deleteSeason)
  .put(userController.updateSeason)
router.route('/v1/season/update/:username')
  .put(userController.updateSeason)

//comic apis
router.route('/v1/comic')
  .post(userController.postComic)
  .get(userController.getComic)
router.route('/v1/comic/search/:reg')
  .get(userController.searchComic)
router.route('/v1/comic/delete/:name')
  .delete(userController.deleteComic)
  .put(userController.updateComic)
router.route('/v1/comic/update/:username')
  .put(userController.updateComic)

module.exports = router;
