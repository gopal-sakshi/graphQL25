import { gql, useMutation } from '@apollo/client';
import { useState } from 'react';
const style23 = {
    border: "1px solid green",
    margin: "10px",
    padding: "5px",
    width: "fit-content"
}
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

    const [firstNm, setFn] = useState(`firstNm__${Date.now()}`);
    const [lastNm, setLn] = useState(`lastNm__${Date.now()}`);
    const [gender, setG] = useState("FEMALE");

    const [idi_execute_cheyyi23, { data23, loading23, error23 }] = useMutation(MUTATE_ADD_STUDENT23);
    const [idi_execute_cheyyi24, { data24, loading24, error24 }] = useMutation(MUTATE_ADD_STUDENT24);

    const addSt3 = () => {
        idi_execute_cheyyi23()
    }
    const addSt4 = () => {

        var staticData = { 
            fn:'fn11', 
            ln: 'ln11', 
            g:'FEMALE', 
            sub: ["Test23", "fb"], 
            ts: Date.now()  
        }
        var dynamicData = {
            fn: firstNm,
            ln: lastNm,
            g: gender,
            sub: ["React", "Javascript"],
            ts: Date.now()
        }
        // idi_execute_cheyyi24({variables:staticData});
        idi_execute_cheyyi24({variables:dynamicData});
    }
    return (
        <div>
            <h1>nenu component 2</h1>

            <button onClick={addSt3}> add student23 </button>

            <div style={style23}>
                <input value={firstNm} onChange={ (e) => setFn(e.target.value) }/>
                <input value={lastNm} onChange={ (e) => setLn(e.target.value) }/>
                <input value={gender} onChange={ (e) => setG(e.target.value) }/>
                <button onClick={addSt4}> add student24 </button>
            </div>
        </div>
    )
}