var HttpStatusCode;
(function (HttpStatusCode) {
    HttpStatusCode[HttpStatusCode["OK"] = 200] = "OK";
    HttpStatusCode[HttpStatusCode["NOT_FOUND"] = 404] = "NOT_FOUND";
    HttpStatusCode[HttpStatusCode["ACCESS_DENIED"] = 403] = "ACCESS_DENIED";
    HttpStatusCode[HttpStatusCode["INTERNAL_ERROR"] = 500] = "INTERNAL_ERROR";
})(HttpStatusCode || (HttpStatusCode = {}));
console.log("OK", HttpStatusCode.OK);
console.log("NOT_FOUND", HttpStatusCode.NOT_FOUND);
console.log("ACCESS_DENIED", HttpStatusCode.ACCESS_DENIED);
console.log("INTERNAL_ERROR", HttpStatusCode.INTERNAL_ERROR);
