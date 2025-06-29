module.exports = {
  ping: (req, res) => {
    res.json({ message: "pong 🛰️" });
  },
  echo: (req, res) => {
    res.json({ echo: req.body });
  }
};
