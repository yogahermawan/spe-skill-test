let check = function outlier(integers) {
    function par(i) { return i & 1; }
    let parity = par(integers[0]);
    if (parity != par(integers[1])) {
      if (parity == par(integers[2]))
        return integers[1];
      return integers[0];
    }
    let hasil =  integers.find((i) => par(i) != parity);
    if (hasil %2 ==0) {
        console.log(hasil+ " bilangan genap!");
    }
    else{
        console.log(hasil + " bilangan ganjil");
    }
    return hasil;
}
console.log(check([2, 4, 0, 100, 4, 11, 2606, 36]));
console.log(check([160, 3, 1719, 19, 11, 13, -21]));
