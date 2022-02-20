const router = require(`express`).Router();
const {
  addNewPlanet,
  deleteThePlanet,
  getAllPlanet,
  updatePlanet,
} = require(`../controllers/planets`);
const {
  addNewStar,
  deleteTheStar,
  getAllStar,
  updateStar,
} = require(`../controllers/stars`);

router.get(`/planets`, getAllPlanet);
router.post(`/planets`, addNewPlanet);
router.put(`/planets`, updatePlanet);
router.delete(`/planets`, deleteThePlanet);

router.get(`/stars`, getAllStar);
router.post(`/stars`, addNewStar);
router.put(`/stars`, updateStar);
router.delete(`/stars`, deleteTheStar);

router.use((req, res) => {
  return res.status(404).json(`Not found`);
});

module.exports = router;
