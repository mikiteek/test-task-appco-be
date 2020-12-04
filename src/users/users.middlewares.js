const checkPaginateParamsMiddleware = (req, res, next) => {
  const {query: {page=1, paginate=25}} = req;
  if (isNaN(page) || isNaN(paginate) || page < 1 || paginate < 1) {
    return res.status(400).json({message: "Bad request, check 'page' and 'limit' params"});
  }
  req.query.page = Number(page);
  req.query.paginate = Number(paginate);
  next();
}

module.exports = {
  checkPaginateParamsMiddleware,
}