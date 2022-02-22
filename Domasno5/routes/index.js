const router = require("express").Router();
const swaggerUi = require(`swagger-ui-express`);
const apiSpecs = require(`../application.json`);
const {
  deleteSong,
  getAllSongs,
  getSongLICNA,
  postSong,
  putSong,
} = require("../controllers/songs");
const {
  getAllArtist,
  getArtistLICNA,
  putArtist,
  postArtist,
  deleteArtist,
} = require(`../controllers/artist`);

const apiPrefix = process.env.API_PREFIX;

router.use(`/api-docs`, swaggerUi.serve);
router.get(`/api-docs`, swaggerUi.setup(apiSpecs));

router.get(apiPrefix + `/songs`, getAllSongs);
router.get(apiPrefix + `/songs/:id`, getSongLICNA);
router.post(apiPrefix + `/songs`, postSong);
router.put(apiPrefix + `/songs/:id`, putSong);
router.delete(apiPrefix + `/songs/:id`, deleteSong);

router.get(apiPrefix + `/artists`, getAllArtist);
router.get(apiPrefix + `/artists/:id`, getArtistLICNA);
router.post(apiPrefix + `/artists`, postArtist);
router.put(apiPrefix + `/artists/:id`, putArtist);
router.delete(apiPrefix + `/artists/:id`, deleteArtist);

router.use((req, res, next) => {
  return res.status(404).json(res);
});

module.exports = router;
