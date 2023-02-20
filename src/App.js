// functional component
import React, {Fragment, useEffect, useState} from "react";
import "./App.css"
import Input from "./Input";

function HelloWorld(props) {

    // States
    // Define a constant [variable name, Built-in Function] = useState(initial value of false)
    const [myVariable, setIsTrue] = useState(false);
    const [crowd, setCrowd] = useState([]);
    const [firstName, setFirstName] = useState("");
    const [lastName, setlasttName] = useState("");
    const [dob, setDob] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();

        console.log({firstName}, {lastName}, {dob})
    }

    // Declare the function for toggle here
    const toggleTrue = () => {
        if (myVariable) {
            setIsTrue(false);
            return;
        };
        setIsTrue(true);
    };

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
        setCrowd(people);
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
            {/* Button */}
            <a href="#!" className="btn btn-outline-secondary" onClick={toggleTrue}>
                Toggle
            </a>
            <hr />
                <form autoComplete="off" onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label className="form-label" htmlFor="first-name">First Name</label>
                        <input
                            type="text"
                            name="first-name"
                            id="first-name"
                            autoComplete="first-name-new"
                            className="form-control"
                            onChange={(event) => setFirstName(event.target.value)}
                        ></input>
                    </div>

                    {/* import the Input.js */}
                    <Input
                        title="Last Name"
                        type="text"
                        name="last-name"
                        autoComplete="last-name-new"
                        className="form-control"
                        onChange={(event) => setlasttName(event.target.value)}
                    ></Input>

                    <Input
                        title="Date of Birth"
                        type="date"
                        name="dob"
                        autoComplete="dob-new"
                        className="form-control"
                        onChange={(event) => setDob(event.target.value)}
                    ></Input>

                    <input type="submit" value="Submit" className="btn btn-primary"></input>

                </form>

                <br></br>
                <br></br>
                
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

export default HelloWorld;