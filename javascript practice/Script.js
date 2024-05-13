var namei = document.getElementById('name')
var lnamei = document.getElementById('lname')
var numi = document.getElementById('num')
var passi = document.getElementById('pass')
var cpassi = document.getElementById('cpass')
var form = document.getElementById('form')

form.addEventListener('submit', (e) => {

    if (namei.value === '' || namei.value == null) {
        alert("name req")
    }
    else if (lnamei.value === '' || lnamei.value == null) {
        alert("lname req")
    }
    else if (numi.value == '' || numi.value != numi.lenght(10)) {
        alert("number req")
    }
    else if (passi === '') {
        alert("pass req")
    }
    else if (cpassi != passi) {
        alert("pass not matched")
    }
    e.preventDefault();

})