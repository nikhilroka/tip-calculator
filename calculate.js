var numField1 = document.getElementById('numField1');
var numField2 = document.getElementById('numField2');
var numField3 = document.getElementById('numField3');
var form = document.getElementById('formValue');

form.addEventListener('submit', function (event) {
                      
    if (!numField1.value || !numField2.value || !numField3.value) {
        alert("Please enter the values in the fields");
    } else {
        var x = parseFloat(numField1.value);
        var y = numField2.value;
        var z = parseFloat(numField3.value);
        
        var totalTip = (x * y) / z;
        
        resultField.innerText = "TIP AMOUNT " + "$" + totalTip + "each";
        event.preventDefault();
    }
});