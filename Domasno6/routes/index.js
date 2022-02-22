const router = require("express").Router();
const swaggerUi = require("swagger-ui-express");
const apiSpecs = require("../api-specs.json");
const apiPrefix = process.env.API_PREFIX;
const {
  addDomasna,
  deleteDomasna,
  getAllDomasna,
  updateDomasna,
} = require("../handlers/domasni");

router.use("/api-docs", swaggerUi.serve);
router.get("/api-docs", swaggerUi.setup(apiSpecs));

router.get(apiPrefix + "/domasni", getAllDomasna);
router.post(apiPrefix + "/domasni", addDomasna);
router.put(apiPrefix + "/domasni/:_id", updateDomasna);
router.delete(apiPrefix + "/domasni/:_id", deleteDomasna);

router.use((req, res, next) => {
  return res.status(404).json(`Not Found`);
});

module.exports = router;
