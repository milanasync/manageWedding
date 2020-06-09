const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const secretKey = config.get("secretKey");

module.exports = function (passport) {
  var opts = {};
  opts.jwtFromRequest = ExtractJwt.fromAuthHeader();
  opts.secretOrKey = secretKey;
  passport.use(
    new JwtStrategy(opts, function (jwt_payload, done) {
      done(null, false);

      //   User.findOne({ id: jwt_payload.id }, function (err, user) {
      //     if (err) {
      //       return done(err, false);
      //     }
      //     if (user) {
      //       done(null, user);
      //     } else {
      //       done(null, false);
      //     }
      //   });
    })
  );
};
