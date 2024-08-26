import { useQuery, gql } from '@apollo/client';

const NAMASTE_QUERY24 = gql`
    query {
        namaste24
    }
`
export default function Comp1() {
    const { loading, error, data } = useQuery(NAMASTE_QUERY24);
    return (
        <div>
            <div>nenu component 1 { data} </div>
        </div>
    )
}