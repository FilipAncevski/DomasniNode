const router = require("express").Router();
const {
  bulkInsert,
  getAllCars,
  lowConsumtion,
  hybridCars,
  customSearch,
} = require("../controllers/cars");

const PREFIX = process.env.API_PREFIX;

router.get(PREFIX + "/cars", getAllCars);
router.get(PREFIX + "/cars/low", lowConsumtion);
router.get(PREFIX + "/cars/hybrid", hybridCars);
router.get(PREFIX + "/cars/custom", customSearch);
router.post(PREFIX + "/cars", bulkInsert);

router.use((req, res, next) => {
  return res.status(404).json("Not found");
});

module.exports = router;
