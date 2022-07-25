import axios from "axios";
const EMPLOYEE_API_BASE_URL = "http://localhost:8080";


class EmployeeService{

    getEmployees(){
        return axios.get(EMPLOYEE_API_BASE_URL+ "/allemployees");
    }

    createEmployee(employee){
        return axios.post(EMPLOYEE_API_BASE_URL + "/addemployee", employee);
    }

    getEmployeeById(employeeId){
        return axios.get(EMPLOYEE_API_BASE_URL + "/getemployee/" + employeeId);
    }

    updateEmployee(employeeId, employee){
        return axios.put(EMPLOYEE_API_BASE_URL + "/updateemployee/" + employeeId, employee);
    }

    deleteEmployee(employeeId){
        return axios.delete(EMPLOYEE_API_BASE_URL + "/deleteemployee/" + employeeId)
    }

}


export default new EmployeeService();