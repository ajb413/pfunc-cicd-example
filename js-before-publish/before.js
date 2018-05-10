// comment
export default (request) => { 
    request.message.hello = 'hello!';
    return request.ok();
};
