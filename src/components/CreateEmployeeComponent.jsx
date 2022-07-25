import React, {useEffect, useState} from "react";
import {Link, useNavigate, useParams} from "react-router-dom";
import EmployeeService from "../services/EmployeeService";


const CreateEmployeeComponent = () => {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastname] = useState("");
    const [emailId, setEmail] = useState("");

    const navigate = useNavigate();

    const {id} = useParams();

    const saveUpdateEmployee = e => {
        e.preventDefault();
        let employee = {
            firstName,
            lastName,
            emailId
        };
        if(id){
            EmployeeService.updateEmployee(id, employee)
                .then(
                    (response) => {
                        navigate('/allemployees')
                    }
                )
                .catch(
                    (error) => {
                        console.log(error);
                    }
                )
        } else {
            EmployeeService.createEmployee(employee)
                .then(
                    response => {
                        console.log(response.data);
                        navigate("/allemployees");
                    }
                )
                .catch(
                    (error) => {
                        console.log(error);
                    }
                )
        }

    }

    useEffect(() => {
        EmployeeService
            .getEmployeeById(id)
            .then(
                (response) => {
                    setFirstName(response.data.firstName);
                    setLastname(response.data.lastName);
                    setEmail(response.data.emailId);
                }
            )
            .catch(
                (error) => {
                    console.log(error);
                }
            )
    }, []);


    function title() {
        if(id){
            return <h2 className='text-center'>Update Employee</h2>
        } else{
            return <h2 className='text-center'>Add Employee</h2>
        }
    }


    return (
        <div>
            <br/>
            <div className='container'>
                <div className="row">
                    <div className="card col-md-6 offset-md-3 offset-md-3">
                        {title()}
                        <div className="card-body">
                            <form action="">
                                <div className="form-group mb-2">
                                    <label className="form-label">First Name : </label>
                                    <input type="text" placeholder="Enter first name" name="firstname" className="form-control" value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
                                </div>

                                <div className="form-group mb-2">
                                    <label className="form-label">Last Name : </label>
                                    <input type="text" placeholder="Enter Last name" name="lastName" className="form-control" value={lastName} onChange={(e) => setLastname(e.target.value)}/>
                                </div>

                                <div className="form-group mb-2">
                                    <label className="form-label">Email ID : </label>
                                    <input type="text" placeholder="Enter email " name="emailId" className="form-control" value={emailId} onChange={(e) => setEmail(e.target.value)}/>
                                </div>

                                <button className="btn btn-success mb-2" onClick={(e) => saveUpdateEmployee(e)}>
                                    Submit
                                </button>
                                <Link to="/allemployees" className="btn btn-danger mb-2">
                                    Cancel
                                </Link>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}



export default CreateEmployeeComponent;

