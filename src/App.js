// functional component
import React, {Fragment, useEffect, useRef, useState} from "react";
import "./App.css"
import Input from "./Input";

function BasicForm(props) {

    // States
    // Define a constant [variable name, Built-in Function] = useState(initial value of false)
    const [myVariable, setIsTrue] = useState(false);
    const [crowd, setCrowdState] = useState([]);
    const [firstName, setFirstNameState] = useState("");
    const [lastName, setlasttNameState] = useState("");
    const [dob, setDobState] = useState("");

    // refs
    const firstNameRef = useRef(null);
    const lastNameRef = useRef(null);
    const dobRef = useRef(null);

    const handleSubmit = (event) => {
        event.preventDefault();

        // console.log({firstName}, {lastName}, {dob})
        if (lastName !== "") {
            addPerson(firstName, lastName, dob)
        }
    }

    // Declare the function for toggle here
    const toggleTrue = () => {
        if (myVariable) {
            setIsTrue(false);
            return;
        };
        setIsTrue(true);
    };

    // Function to add person to the list
    const addPerson = (newFirst, newLast, newDOB) => {
        // create the new person person
        let newPerson = {
            id: crowd.length + 1,
            firstName: newFirst,
            lastName: newLast,
            dob: newDOB
        }

        const newList = crowd.concat(newPerson);

        const sorted = newList.sort((a, b) => {
            if (a.lastName < b.lastName) {
                return -1;
            } else if (a.lastName > b.lastName) {
                return 1;
            }
            return 0;
        })

        setCrowdState(sorted);
        setFirstNameState("");
        setlasttNameState("");
        setDobState("");

        firstNameRef.current.value = "";
        lastNameRef.current.value = "";
        dobRef.current.value = "";
    }

    // Use of a Hook
    useEffect(() => {
        console.log("useEffect fired")

        // declare a variable as array of objects
        let people = [
            {
                id: 1,
                firstName: "Marry",
                lastName: "Jones",
                dob: "1997-05-02",
            },
            {
                id: 2,
                firstName: "Jack",
                lastName: "Smith",
                dob: "1999-02-04",
            }
        ]
        setCrowdState(people);
    }, []);

    return(
        // put the Heading inside the parent Fragment
        <Fragment>
            <hr />
            <h1 className="h1-green">{props.msg}</h1>
            <p>Using the functional Component version</p>
            <hr />

            {/* Conditional statement for checking the state of the button */}
            {myVariable && 
                <Fragment>
                    <p>The current value of isTrue is true</p>
                    <hr />
                </Fragment>
            }
            <hr />
            
            {/* Alternative way of conditional statement */}
            {myVariable
            ? <p>The value of the toggle is true</p>
            : <p>The value of the toggle is false</p>
            }

            <hr />

            {/* Submit Button */}
            <a href="#!" className="btn btn-outline-secondary" onClick={toggleTrue}>
                Toggle
            </a>

            <hr />
                <form autoComplete="off" onSubmit={handleSubmit}>
 
                    {/* import the Input.js */}
                    <Input
                        title="First Name"
                        type="text"
                        name="first-name"
                        ref={firstNameRef}
                        autoComplete="first-name-new"
                        className="form-control"
                        onChange={(event) => setFirstNameState(event.target.value)}
                    ></Input>

                    <Input
                        title="Last Name"
                        type="text"
                        ref={lastNameRef}
                        name="last-name"
                        autoComplete="last-name-new"
                        className="form-control"
                        onChange={(event) => setlasttNameState(event.target.value)}
                    ></Input>

                    <Input
                        title="Date of Birth"
                        type="date"
                        ref={dobRef}
                        name="dob"
                        autoComplete="dob-new"
                        className="form-control"
                        onChange={(event) => setDobState(event.target.value)}
                    ></Input>

                    <input type="submit" value="Submit" className="btn btn-primary"></input>

                </form>

                <br></br>
                <br></br>
                
                {/* Showing values on the page */}
                <div>
                    First Name: {firstName}<br />
                    Last Name: {lastName}<br />
                    Date of Birth: {dob}<br />
                </div>

            <hr />
            <h3>People</h3>

            {/* Unordered List ul */}
            <ul className="list-group">
                {crowd.map((m) => (
                    <li key={m.id} className="list-group-item">{m.firstName} {m.lastName} - Date of birth: {m.dob}</li>
                ))}
            </ul>

        </Fragment>
    )
}

export default BasicForm;