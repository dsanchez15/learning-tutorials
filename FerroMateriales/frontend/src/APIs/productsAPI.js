const callApi = async (url) => {
    const response = await fetch('http://localhost:3002/api' + url);
    const data = await response.json();
    return data;
};

const api = {
    getProducts: {
        list() {
            return callApi("/products");
        }
    }
}

export default api;