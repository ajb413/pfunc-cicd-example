// comment
export default (request, response) => {
    response.status = 200;
    return response.send('hello!');
};
