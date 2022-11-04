const { User } = require("../models");
const { signToken } = require('../utils/auth');
const { AuthenticationError } = require('apollo-server-express');

const resolvers = {
    Query: {
        user: async (parent, args, context) => {
            return await User.findById(context.user._id);
        },
    },

    Mutation: {
        createUser: async (parent, { username, email, password, gamesPlayed, wins }, context) => {
            const user = await User.create({ username, email, password, gamesPlayed, wins });
            const token = signToken(user);
            return { token, user };
        },

        login: async (parent, { username, password }) => {
            const user = await User.findOne({ username });

            if (!user) {
                throw new AuthenticationError('No user found tiwht this email address');
            };

            const correctPw = await user.isCorrectPassword(password);

            if (!correctPw) {
                throw new AuthenticationError('Incorrect credentials');
            };

            const token = signToken(user);

            return { token, user };
        },

        updateGame: async(parent, {username, gamesPlayed, wins}, context) => {
            const user = await User.findOne({ username });
        }
    }
}