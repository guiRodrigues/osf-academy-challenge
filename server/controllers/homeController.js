function index(req, res) {
  res.render('home/index', { title: 'Home' });
}

module.exports = {
  index,
};
