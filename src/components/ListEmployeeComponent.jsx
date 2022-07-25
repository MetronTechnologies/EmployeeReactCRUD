import React, {useEffect, useState} from 'react'
import EmployeeService from "../services/EmployeeService";
import { Link } from "react-router-dom";

const ListEmployeeComponent = () => {

    const [employees, setEmployees] = useState([]);

    useEffect(
        () => {
            getEmployees()
        }, []
    );

    function getEmployees(){
        EmployeeService
            .getEmployees()
            .then(
                response => {
                    let reply = response.data;
                    setEmployees(reply);
                    console.log(reply);
                }
            )
            .catch(
                error => {
                    console.log(error);
                }
            )
    }


    function deleteEmp(id) {
        console.log(id);
        return (
            EmployeeService.deleteEmployee(id)
                .then(
                    (response) => {
                        getEmployees()
                    }
                )
                .catch(
                    (error) => {
                        console.log(error);
                    }
                )
        );
    }

    return (
        <div className='container'>
            <h2 className='text-center'>List Employee</h2>
            <Link to="/addemployee" className="btn btn-primary mb-2">
                Add Employee
            </Link>
            <table className='table table-bordered table-striped'>
                <thead>
                    <th>Employee Id</th>
                    <th>Employee First Name</th>
                    <th>Employee Last Name</th>
                    <th>Employee Email</th>
                    <th>Actions</th>
                </thead>
                <tbody>
                    {
                        employees.map(
                            employee =>
                                <tr key={employee.id}>
                                    <td>{employee.id}</td>
                                    <td>{employee.firstName}</td>
                                    <td>{employee.lastName}</td>
                                    <td>{employee.emailId}</td>
                                    <td>
                                        <Link className="btn btn-info" to={`/editemployee/${employee.id}`}>Update</Link>
                                        <button className="btn btn-danger" onClick={() => deleteEmp(employee.id)} style={{marginLeft: "10px"}}>Delete</button>
                                    </td>
                                </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}



export default ListEmployeeComponent

