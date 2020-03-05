const HomeController = {
  index: (req, res, next) => {
    res.render('index', { title: 'Projeto Million' });
  }
}

module.exports = HomeController;
