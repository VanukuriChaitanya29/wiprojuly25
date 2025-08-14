enum HttpStatusCode {
    OK = 200,
    NOT_FOUND = 404,
    ACCESS_DENIED = 403,
    INTERNAL_ERROR = 500
}

console.log("OK",HttpStatusCode.OK);          
console.log("NOT_FOUND",HttpStatusCode.NOT_FOUND);   
console.log("ACCESS_DENIED",HttpStatusCode.ACCESS_DENIED); 
console.log("INTERNAL_ERROR",HttpStatusCode.INTERNAL_ERROR);  
