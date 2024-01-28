const validateUserEmail = (req, res, next) => {
  const { user } = req.body;
  if (!user.email || !user.password) {
    return res.status(400).json({ Error: "Falta el email o contraseña" });
  }
  next();
};

export { validateUserEmail };
