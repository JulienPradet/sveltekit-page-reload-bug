export const getSession = (request) => {
    console.log(request)
    return {
        form: request.locals.form || null
    }
}