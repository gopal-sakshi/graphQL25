import React from "react";
import axios from 'axios';

export default function() {

    function callApi23() {
        axios.post('http://localhost:3083/person/graphql', {
            query: ` query { people { id firstName } }`
        }).then(response => { console.log("resp ===> ", response); });
    }
	return (
		<>
            <button onClick={ () => callApi23() }> click cheyyi</button>
            <h1> hello23 </h1>
		</>
	);
};