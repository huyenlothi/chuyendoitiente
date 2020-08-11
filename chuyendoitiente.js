function convert() {
    let amount = parseInt(document.getElementById("input").value);
    let from = parseInt(document.getElementById("from").value);
    let to = parseInt(document.getElementById("to").value);
    let result = amount * (from / to );
    document.getElementById("result1").value = result;
 }


