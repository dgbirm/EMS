import axios from 'axios';

const EMP_REST_API_URL = 'http://localhost:8080/api/employees/rb1';
const DEP_REST_API_URL = 'http://localhost:8080/api/departments';

class H2Service {

    getEmployees(){
        return axios.get(EMP_REST_API_URL);
    }
    getDepartments(){
        return axios.get(DEP_REST_API_URL);
    }
}

export default new H2Service();