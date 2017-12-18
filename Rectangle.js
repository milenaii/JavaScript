function calculateRectangleAreaParameter(numbers){
    let width = numbers[0];
    let height = numbers[1];
    
    let area = width * height;
    let parameter = width * 2 + height * 2;
    console.log(area.toFixed(2) + ' ' + parameter.toFixed(2));
}
// calculateRectangleAreaParameter([ '2.5', '3' ])