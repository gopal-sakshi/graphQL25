dont know how to use react... 


<!-- ------------------------------------------------------------------------ -->
you can write query or you can `omit query` 
but you <MUST mention> mutation

query { people { id firstName lastName } }                      // WORKS
{ people { id firstName lastName } }                            // ALSO WORKS

{ peopleByID (id:"645e4ea2268da0c173206586") { id firstName } }
{ peopleByName (firstName:"Sergio") { id lastName } }

<!-- ------------------------------------------------------------------------ -->

mutation { people (firstName: "Luka", lastName: "Modric") { id }}                       // WORKS
mutation { people (lastName: "Higuain", firstName: "Gonzalo" ) { id firstName }}        // ALSO WORKS


https://github.com/nikhilknoldus/fullstack-react-apollo-graphql-mongodb