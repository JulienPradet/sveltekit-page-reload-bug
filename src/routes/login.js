export const post = (request) => {
    if (request.body.get('email').length > 0) {
        return {
            status: 302,
            headers: {
                location: '/' 
            }
        }
    } else {
        request.locals.form = {
            error: true
        }
    }
}