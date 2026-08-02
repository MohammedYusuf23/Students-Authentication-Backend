export const logout = (req, res) => {
  res.clearCookie('token');

  res.status(200).json({
    success: true,
    message: 'Logout Successful',
  });
};
