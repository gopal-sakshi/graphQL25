import { useQuery, gql, useLazyQuery } from '@apollo/client';
import { useState } from 'react';

const students23_query = gql`
    query {
        students (orderBy: {firstName: ASC }) { id firstName lastName gender subjects createdTs23 }
    }
`

export default function Comp3() {
    
    /* **************** cached responses <-------> make network calls everytime ************************** */
    // const [ getStudents, { loading, data } ] = useLazyQuery(students23_query);
    const [ getStudents, { loading, data } ] = useLazyQuery(students23_query, { fetchPolicy: "network-only" });

    if (loading) return <p>Loading ...</p>;
    if (data) { console.log("students =====> ", data); }
    return (
        <div>
            <h2>nenu component 3 </h2>
            <button onClick={() => getStudents()}> fetch_students </button>
        </div>
    )
}