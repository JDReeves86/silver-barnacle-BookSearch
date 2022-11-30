const { User } = require("../models");
const { signToken } = require("../utils/auth");
const { AuthenticationError } = require("apollo-server-express");

const resolvers = {
  Query: {
    getMe: async (parent, args, context) => {
      if (context.user) {
        const foundUser = await User.findOne({ _id: context.user._id });
        // console.log(foundUser)
        return foundUser;
      }
      throw new AuthenticationError("You need to be logged in to do that.");
    },
  },
  Mutation: {
    login: async (parent, args) => {
      const user = await User.findOne({
        $or: [{ username: args.username }, { email: args.email }],
      });
      if (!user) {
        throw new AuthenticationError("No user with that email found!");
      }

      const correctPw = await user.isCorrectPassword(args.password);

      if (!correctPw) {
        throw new AuthenticationError("Wrong password, boo!");
      }
      const token = signToken(user);

      // return user
      return { user, token };
    },
    saveBook: async (parent, { bookData }, context) => {
      try {
        const updatedUser = await User.findByIdAndUpdate(
          context.user._id,
          { $addToSet: { savedBooks: bookData } },
          { new: true, runValidators: true }
        );
        return updatedUser;
      } catch (err) {
        console.log(err);
        return new AuthenticationError("Couldn't save the book my man")
      }
    },
    async createNewUser(parent, args) {
      const user = await User.create(args);

      if (!user) {
        return new AuthenticationError("Something done messed up :-( ");
      }

      return user;
    },
    deleteBook: async (parent, { bookData }, context) => {
      try {
        const updatedUser = await User.findByIdAndUpdate(
          context.user._id,
          { $pull: { savedBooks: { bookId: bookData } }},
          { new: true, runValidators: true }
        );
        return updatedUser;
      } catch (err) {
        console.log(err);
        return new AuthenticationError("Couldn't delete the book, bro.")
      }
    },
  },
};

module.exports = resolvers;
