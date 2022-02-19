const router = require(`express`).Router();

router.get(`/`, (req, res) => {
  return res.status(200).json(`Welcome to port 8080`);
});

router.post(`/register`, (req, res) => {
  const user = req.body;
  if (!user.username || !user.password) {
    return res.status(400).json(`Enter username and password`);
  }
  console.log(`Welcome ${user.username}`);
  return res.status(201).json(`Welcome ${user.username}`);
});

router.use((req, res) => {
  return res.status(404).json(`Not found`);
});

module.exports = router;
