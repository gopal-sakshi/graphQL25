import { useQuery, gql } from '@apollo/client';
import { useState } from 'react';


/*
    I want to build React UI
    list of names --- use graphql query to edit the name...
    but its taking time for me to develop the react UI ---> so, I'll simply focus on graphql queries itself
    look into it later
*/
const NAMASTE_QUERY24 = gql`
    query {
        namaste24 { name stadium manager }
        students { id firstName lastName gender subjects createdTs23 }
    }
`

function StudentComp({studentObj, modifyStudent}) {
    const fixedWidth = { display: 'inline-flex', width: '6vw', minWidth: '6vw', maxWidth: '6vw'}
    const fixedWidthSub = { display: 'inline-flex', width: '16vw', minWidth: '16vw', maxWidth: '16vw'}
    const [isEditMode, toggleEditMode] = useState(false);
    const [firstName23, setFirstName23 ] = useState(studentObj?.firstName)
    return (        
        <>
            <span style={fixedWidth}>
                { isEditMode ? 
                    <input value={firstName23} onChange={(event) => { setFirstName23(event.target.value) }}></input> :
                    studentObj?.firstName
                }
            </span>
            {/* <span style={fixedWidth}>{ studentObj?.lastName }</span> */}
            <span style={fixedWidth}>{ studentObj?.gender }</span>
            <span style={fixedWidthSub}>{ studentObj?.subjects.reduce((sum, subject) => sum + '__' + subject, '' ) }</span>
            <span style={fixedWidth}>{ studentObj?.createdTs23 }</span>
            <button onClick={ () => { toggleEditMode(!isEditMode); modifyStudent() } } > edit </button>
            <button onClick={ () => modifyStudent() } > delete </button>
            { isEditMode ? 
                <button onClick={ () => { toggleEditMode(!isEditMode); modifyStudent() } } > confirm </button> : <></>
            }
        </>
    )
}

export default function Comp1() {
    const { loading, error, data } = useQuery(NAMASTE_QUERY24);
    const style23 = { border: '1px solid red', margin: '10px', padding: '10px', width: 'fit-content' }
    const handleSt = () => { console.log("handleSt triggered"); }
    return (
        <div>
            <h2>nenu component 1 </h2>
            <div style={style23}>
                <div>Name: <strong>{ data?.namaste24?.name }</strong></div>
                <div>stadium: <strong>{ data?.namaste24?.stadium }</strong></div>
                <div>manager: <strong>{ data?.namaste24?.manager }</strong> </div>
            </div>
            <div style={{...style23, width: '50vw'}}>                
                { data?.students.map((student23) => 
                    <li key={student23.id} style={{margin:'5px'}}>
                        {/* <StudentComp studentObj={student23} modifyStudent={handleSt}/> */}
                        need to implement === {student23.firstName}
                    </li>
                )}
            </div>
        </div>
    )
}