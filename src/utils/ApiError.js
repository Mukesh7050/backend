class ApiError extends Error {
    constructer(
        statusCode,
        message="something went wrong",
        error=[],
        stack=""
    ){
        super(message)
        this.statusCode = StatusCode
        this.data=null
        this.message=message
        this.success=fail
        this.errors=errors


        if(stack){
            this.stack=stack
        }else{
            Error.captureStackTrace(this,this.constructor)
        }
    }

    
}

export {ApiError}