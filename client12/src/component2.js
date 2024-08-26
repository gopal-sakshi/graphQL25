import { gql, useMutation } from '@apollo/client';

const MUTATE_ADD_STUDENT23 = gql `
    mutation {
    create (firstName:"anirvesh", lastName:"vichilitha", gender:MALE, subjects: ["Maths", "Science"]) { 
        firstName, 
        lastName 
    }
}`

const MUTATE_ADD_STUDENT24 = gql `
    mutation wrapper23($fn:String!, $ln:String!, $g:gender23!, $sub:[String]!, $ts:Date111!) {
        createWithDate(firstName:$fn, lastName:$ln, gender:$g, subjects: $sub, createdTs23: $ts)  { 
            firstName, 
            lastName, 
            createdTs23
    }
}`

export default function Comp2() {
    const [idi_execute_cheyyi23, { data23, loading23, error23 }] = useMutation(MUTATE_ADD_STUDENT23);
    const [idi_execute_cheyyi24, { data24, loading24, error24 }] = useMutation(MUTATE_ADD_STUDENT24);

    const addSt3 = () => {
        idi_execute_cheyyi23()
    }
    const addSt4 = () => {
        idi_execute_cheyyi24({variables:{ fn:'fn11', ln: 'ln11', g:'FEMALE', sub: ["Test23", "fb"], ts: Date.now()  }})
    }
    return (
        <div>
            <div>nenu component 2</div>
            <button onClick={addSt3}> add student23 </button>
            <button onClick={addSt4}> add student24 </button>
        </div>
    )
}