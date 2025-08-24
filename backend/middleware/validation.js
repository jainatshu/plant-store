exports.validatePlant = (req, res, next) => {
  const { name, price, categories } = req.body;
  
  let errors = [];
  
  if (!name || name.trim() === '') {
    errors.push('Plant name is required');
  }
  
  if (!price || isNaN(price) || price < 0) {
    errors.push('Valid price is required');
  }
  
  if (!categories || !Array.isArray(categories) || categories.length === 0) {
    errors.push('At least one category is required');
  }
  
  if (errors.length > 0) {
    return res.status(400).json({ errors });
  }
  
  next();
};