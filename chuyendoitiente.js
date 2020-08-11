function convert() {
    let currency = {"VND":{"USD":0.000043,"YEN":0.00457},"USD":{"VND":23.17,"YEN":105.99},
    "YEN":{"VND":219.06, "USD":0.0094}};
    let amount = parseInt(document.getElementById("input").value);
    let from = document.getElementById("from").value;
    let to = document.getElementById("to").value;
    let result = amount * currency[from][to];
    document.getElementById("result1").value = result;
 }


