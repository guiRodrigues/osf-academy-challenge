function index(req, res) {
  res.render('home/index', { title: 'Categories' });
}

module.exports = {
  index,
};
