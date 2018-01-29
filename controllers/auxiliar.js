function getDropboxKey(req, res) {
  try {
    res.send(process.env.DROPBOXAPI);
  } catch (err) {
    res.status(404).send(err);
  }
}

module.exports = {
  getDropboxKey
};
