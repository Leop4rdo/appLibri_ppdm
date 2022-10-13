import api from "."

const create = async (body) => {
    try {
        const { data } = await api.post("/books", body)
        return data
    } catch (err) {
        console.warn("[ERROR] error at /books post request")
        console.log(err.response.data)
    }
}

const getAll = async () => {
    try {
        const { data } = await api.get("/books")
        return data
    } catch (err) {
        console.warn("[ERROR] error at /books get request")
        console.log(err.response.data)
    }
}

const getById = async (id) => {
    try {
        const { data } = await api.get(`/books/${id}`)
        return data
    } catch (err) {
        console.warn("[ERROR] error at /books get request")
        console.log(err.response.data)
    }
}

const bookService = {
    create,
    getAll,
    getById
}

export default bookService