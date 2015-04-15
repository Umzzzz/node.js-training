var number, orgin, destination;

exports.setNumber = function (num) {
   number = num; 
};

exports.setOrgin = function (o) {
   origin = o; 
};

exports.setDestination = function (d) {
   destination = d; 
};

exports.getInfo = function () {
    return {
        number: number, 
        origin: origin, 
        destination: destination
    };
};