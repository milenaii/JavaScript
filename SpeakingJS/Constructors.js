
//CONVENTION -> THE NAME OF CONSTRUCTORS START WITH CAPITAL LETTER


//set up the instance
function Point(x,y) {
    this.x = x;
    this.y = y;
}

//methods

Point.prototype.dist = function () {
    return Math.sqrt(this.x*this.x + this.y*this.y);
};

let myPoint = new Point(3,5);

console.log(myPoint.x);
console.log(myPoint.dist());