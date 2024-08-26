# Apollo Client for React

v2
- Uses these packages ===> 
    <apollo-boost> 
    `@apollo/react-hooks`   (oR)    react-apollo ---> provides <ApolloProvider>
    <graphql>
- cd client11 && npm run start

v3
- it seems v3 uses ---> `@apollo/client` <graphql>
- many breaking changes were introduced from v2 to v3
- cd client12 && npm run start

<!-- ------------------------------------------------------------------------- -->

You connect Apollo Client to React with the <ApolloProvider> component. 
Similar to React's <Context.Provider>, ApolloProvider `wraps your React app` and `places Apollo Client on the context`
- enabling you to access it from anywhere in your component tree.

<!-- ------------------------------------------------------------------------- -->