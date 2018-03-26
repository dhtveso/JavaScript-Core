function SumAndVat(arr) {
    let sum = 0;
    let VAT = 0;
    let total = 0;

    for (let index = 0; index < arr.length; index++) {
        sum += arr[index];
    }

    VAT = sum * 0.2;
    total = sum + VAT;

    print(sum, VAT, total)
}

function print(sum, VAT , total) {
    console.log(sum);
    console.log(VAT);
    console.log(total);
}

SumAndVat([1.20, 2.60, 3.50])