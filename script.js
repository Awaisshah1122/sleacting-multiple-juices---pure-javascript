const shakeSelect = document.getElementById('type-of-shake');
const shakeQutanty = document.getElementById('shakeQutanty');
var value1 = +shakeSelect.value;
var value2 = +shakeQutanty.value;
var namee;
var valuepoint;
//variable kay equal kay baad plus ka matlab hai value ko string kay leay use karty hein.
var valueIndex = shakeSelect.selectedIndex;
var valueIndexqutanty = shakeQutanty.selectedIndex;
//variable ka index leny kay leay banya ayy.
function getOption() {
    var selectElement2 = document.querySelectorAll('option');
    namee = selectElement2[valueIndex].innerText;
    document.querySelector('#value').textContent = value1;

    document.querySelector('#namee').textContent = namee;

}
function getOptionQuntaty() {
    var selectElement3 = document.querySelector('#shakeQutanty');
    valuepoint = selectElement3.options[selectElement3.selectedIndex].value;
    document.querySelector('#valuepoint').textContent = valuepoint;
    totalBill();
}

function totalBill() {
    var selectElement4 = document.querySelector('#tbill');
    document.querySelector('#tname').textContent = namee;
    document.querySelector('#tvalue').textContent = value1;
    document.querySelector('#tquanty').textContent = valuepoint;
    var totalprice = value1 * valuepoint;
    document.querySelector('#totalbill').textContent = totalprice;

}
shakeSelect.addEventListener('change', e => {
    value1 = +e.target.value;
    valueIndex = e.target.selectedIndex;
});
shakeQutanty.addEventListener('change', e => {
    value2 = +e.target.value2;
    valueIndexqutanty = e.target.selectedIndex;
});
function display() {
    window.print();
}
function printpart() {
    var printwin = window.open("");
    printwin.document.write(document.getElementById("tbill").innerHTML);
    printwin.stop();
    printwin.print();
    printwin.close();
}
