
//common pattern for assigning dejault values to parameters

function optParam(x, y) {
    x = x || 0;
    y = y || 0;
   console.log ([x,y]);
}
optParam(2,1);