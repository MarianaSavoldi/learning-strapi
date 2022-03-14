module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '754e8b274c05847dd257f1215d1444ac'),
  },
});
