import axios from 'axios';

const ROOT = '/api'
const HOST_NAME = 'http://localhost:8080'

const EMP_REST_API_URL = 'http://localhost:8080/api/employees';
const DEP_REST_API_URL = 'http://localhost:8080/api/departments';

class H2Service {

    getEmployees(){
        return axios.get(EMP_REST_API_URL);
    }
    getDepartments(){
        return axios.get(DEP_REST_API_URL);
    }
    getRequest(dbName, perPage, currentPage){

        const queryURL = `${HOST_NAME}${ROOT}/${dbName}?page=${currentPage}&size=${perPage}`;
        return axios.get(queryURL);
    }
}

export default new H2Service();