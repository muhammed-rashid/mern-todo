const Response = (res,code,status,message,data=null)=>{
    
    return res.status(code).json({
        status:status,
        message:message,
        data:data
    })
}

module.exports = Response