const formatValidationErrors = (err) => {
  const errors = {};
  Object.values(err.errors).forEach((e) => {
    errors[e.path] = e.message;
  });
  return errors;
};

module.exports = formatValidationErrors;