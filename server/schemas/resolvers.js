const { User } = require("../models");
const { signToken } = require("../utils/auth");
const { AuthenticationError } = require('apollo-server-express')

const resolvers = {
  Query: {
    getMe: async (parent, args, context) => {
      if (context.user) {
        const foundUser = await User.findOne({ _id: context.user._id})
        // console.log(foundUser)
        return foundUser
      }
      throw new AuthenticationError('You need to be logged in to do that.')
    }
  },
  Mutation: {
    login: async (parent, args) => {
      const user = await User.findOne({
        $or: [{ username: args.username }, { email: args.email }],
      });
      if (!user) {
        throw new AuthenticationError('No user with that email found!')
      }

      const correctPw = await user.isCorrectPassword(args.password);

      if (!correctPw) {
        throw new AuthenticationError('Wrong password, boo!')
      }
      const token = signToken(user);
    
      // return user 
      return { user, token }
    },
    saveBook: async (parent, { bookData }, context) => {
      try {
        const updatedUser = await User.findByIdAndUpdate(
          context.user._id,
          { $addToSet: { savedBooks: bookData } },
          { new: true, runValidators: true }
        );
        return updatedUser ;
      } catch (err) {
        console.log(err);
        return res.status(400).json(err);
      }
    },
    async createNewUser(parent, args) {
      console.log(args)
      const user = await User.create(args);

      return user
  
      // if (!user) {
      //   return res.status(400).json({ message: 'Something is wrong!' });
      // }
      // const token = signToken(user);
      // res.json({ token, user });
    },
    // deleteBook: async (parent, args) => {
    //   const updatedUser = await User.findOneAndUpdate(
    //     { _id: user._id },
    //     { $pull: { savedBooks: { bookId: params.bookId } } },
    //     { new: true }
    //   );
    //   if (!updatedUser) {
    //     return res
    //       .status(404)
    //       .json({ message: "Couldn't find user with this id!" });
    //   }
    //   return res.json(updatedUser);
    // },
  },
};

module.exports = resolvers;
