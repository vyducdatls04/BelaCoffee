import dotenv from "dotenv";
dotenv.config(); // ✅ BẮT BUỘC: load env tại đây

import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import { Strategy as FacebookStrategy } from "passport-facebook";
import User from "../models/User.js";

/* ================= GOOGLE ================= */
if (process.env.GOOGLE_CLIENT_ID && process.env.GOOGLE_CLIENT_SECRET) {
  passport.use(
    new GoogleStrategy(
      {
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: "/api/auth/google/callback",
      },
      async (accessToken, refreshToken, profile, done) => {
        try {
          const email = profile.emails?.[0]?.value;

          if (!email) {
            return done(null, false);
          }

          let user = await User.findOne({ email });

          if (!user) {
            user = await User.create({
              name: profile.displayName,
              email,
              provider: "google",
              role: "user",
            });
          }

          return done(null, user);
        } catch (err) {
          return done(err, null);
        }
      }
    )
  );
} else {
  console.warn("⚠️ GOOGLE OAuth ENV not found – Google login disabled");
}

/* ================= FACEBOOK ================= */
if (process.env.FACEBOOK_APP_ID && process.env.FACEBOOK_APP_SECRET) {
  passport.use(
    new FacebookStrategy(
      {
        clientID: process.env.FACEBOOK_APP_ID,
        clientSecret: process.env.FACEBOOK_APP_SECRET,
        callbackURL: "/api/auth/facebook/callback",
        profileFields: ["id", "displayName", "emails"],
      },
      async (accessToken, refreshToken, profile, done) => {
        try {
          const email = profile.emails?.[0]?.value;

          let user = await User.findOne({ email });

          if (!user) {
            user = await User.create({
              name: profile.displayName,
              email,
              provider: "facebook",
              role: "user",
            });
          }

          return done(null, user);
        } catch (err) {
          return done(err, null);
        }
      }
    )
  );
} else {
  console.warn("⚠️ FACEBOOK OAuth ENV not found – Facebook login disabled");
}

export default passport;
