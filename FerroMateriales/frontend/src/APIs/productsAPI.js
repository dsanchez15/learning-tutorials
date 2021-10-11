import restFetchs from '../utils/customFetch'

const api = {
    getProducts: {
        list() {
            let data = restFetchs.fetchs.getFetch("http://localhost:3002/api/products");
            return data;
        },
        create(id) {
            console.log("Estoy en el create");
            //return callApi("/products" + id);
        },
        update(id) {
            console.log("Estoy en el update");
            //return callApi("/products" + id);
        },
        delete(id) {
            console.log("Estoy en el delete: " + id);
            return restFetchs.fetchs.deleteFetch("/products/" + id);
        }
    }
}

export default api;