function mathConeOperation(radius, heght){
    let h = heght;
    let r = radius;
    let s = Math.sqrt(r * r + h * h)
    let area = (Math.PI * r * s) + (Math.PI * r * r);
    let volume = (Math.PI * r * r *h) / 3;
    console.log(`volume = ${volume}`);
    console.log(`area ${area}`);
    
}