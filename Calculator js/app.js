let text = "";
const adddata = (i) => {
    text += i;
    let a = text.charAt(0);
    if (a == "" || a == "+" || a == "*" || a == "/" || a == "%") {
        text = "";
        return;
    } else {
        document.getElementById("num").value = text;
    }
}
function deletnum() {
    document.getElementById("num").value = document.getElementById("num").value.toString().slice(0, -1);
}
function getdata() {
    let data = document.getElementById("num").value;
    let ans = eval(data);
    document.getElementById("num").value = ans;
    text = "";
}
function clearall() {
    document.getElementById("num").value = ' ';
    text = "";
}


