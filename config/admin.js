module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '6a610f878fbf4e2700a9450ad5e6641a'),
  },
});
