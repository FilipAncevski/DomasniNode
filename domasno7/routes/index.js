const router = require("express").Router();
const { loginUser, registeringNewUser } = require("../handlers/users");
const {
  bulkInsert,
  deletingAnEntry,
  readingAllEntries,
  updatingOneEntry,
} = require("../handlers/products");
const { authorizationMDW } = require("../middlewares/jwt");
const PREFIX = process.env.API_PREFIX;

router.post(PREFIX + "/create-user", registeringNewUser);
router.post(PREFIX + "/login", loginUser);

router.use(authorizationMDW);

router.get(PREFIX + "/products", readingAllEntries);
router.post(PREFIX + "/products", bulkInsert);
router.put(PREFIX + "/update/:_id", updatingOneEntry);
router.delete(PREFIX + "/delete/:_id", deletingAnEntry);

router.use((req, res) => {
  return res.status(400).json("Not found");
});

module.exports = router;
