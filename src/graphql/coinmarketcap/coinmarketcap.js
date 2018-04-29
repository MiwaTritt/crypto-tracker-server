const Posts = require('../data/posts'); // This is to make available post.json file

let {
  // These are the basic GraphQL types need in this tutorial
  GraphQLString,
  GraphQLList,
  GraphQLObjectType,
  // This is used to create required fileds and arguments
  GraphQLNonNull,
  // This is the class we need to create the schema
  GraphQLSchema,
} = require('graphql');

const PostType = new GraphQLObjectType({
    name: "Post",
    description: "This represent a Post",
    fields: () => ({
    id: {type: new GraphQLNonNull(GraphQLString)},
    title: {type: new GraphQLNonNull(GraphQLString)},
    body: {type: GraphQLString},
    author: {
        type: AuthorType,
        resolve: function(post) {
        return _.find(Authors, a => a.id == post.author_id);
        }
    }
    })
});

// This is the Root Query
const BlogQueryRootType = new GraphQLObjectType({
    name: 'BlogAppSchema',
    description: "Blog Application Schema Query Root",
    fields: () => ({
      authors: {
        type: new GraphQLList(AuthorType),
        description: "List of all Authors",
        resolve: function() {
          return Authors
        }
      },
      posts: {
        type: new GraphQLList(PostType),
        description: "List of all Posts",
        resolve: function() {
          return Posts
        }
      }
    })
  });