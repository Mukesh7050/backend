class Apiresponse {

    constructor(statusCode,data,message="success"){
        this.statusCode=statusCode
        this.data=data
        this.message=message
        this.success=true
        this.success  = statusCode<400
    }
}