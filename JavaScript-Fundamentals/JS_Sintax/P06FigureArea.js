function FigureArea(w, h, W1, H1) {

    let result = (w * h) + (W1 * H1) - Math.min(w,W1) * Math.min(h,H1);

     return result;
}
  
let a = FigureArea(13, 2, 5, 8);
console.log(a);