class Rectangle{
    constructor(width, height){
        this.width = width;
        this.height = height;

        this.area = width * height;
        this.perimeter = (width + height) * 2;}


    calculateArea(){
        return this.width * this.height
    }

    get areas(){
        return this.width * this.height
    }

    calculatePerimeter(){
        return 2*(this.width + this.height)
    }
    

}

const staciakampis1 = new Rectangle(4, 5)
const staciakampis2 = new Rectangle(7, 2);

console.log(staciakampis2.area);

console.log(staciakampis1.calculateArea());

console.log(staciakampis1.areas);

console.log(staciakampis1.perimeter);

console.log(staciakampis2.calculatePerimeter);