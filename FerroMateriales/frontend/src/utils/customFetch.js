const customFetch = async (url, headers) => {
    const response = await fetch(url, headers);
    const data = await response.json();
    return data;
};

var Enums = {
    restVerbs: {
        GET: 'GET',
        POST: 'POST',
        PUT: 'PUT',
        DELETE: 'DELETE'
    }
};

var restFetchs = {
    headers: {
        getHeader: {
            method: Enums.restVerbs.GET
        },
        postHeader: {
            method: Enums.restVerbs.POST
        },
        putHeader: {
            method: Enums.restVerbs.PUT
        },
        deleteHeader: {
            method: Enums.restVerbs.DELETE
        }
    },
    fetchs: {
        getFetch(url) {
            return customFetch(url, restFetchs.headers.getHeader)
        },
        postFetch(url) {
            return customFetch(url, restFetchs.headers.postHeader)
        },
        putFetch(url) {
            return customFetch(url, restFetchs.headers.putHeader)
        },
        deleteFetch(url) {
            return customFetch(url, restFetchs.headers.deleteHeader)
        },
        defaultFetch(url, header) {
            return customFetch(url, header);
        }
    }
}

export default restFetchs;