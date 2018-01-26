async function getDropboxKey(req, res) {
  res.send(process.env.DROPBOXAPI);
}

module.exports = {
  getDropboxKey
};
