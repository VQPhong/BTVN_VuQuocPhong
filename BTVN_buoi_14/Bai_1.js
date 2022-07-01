function myFunction_1() {
    document.getElementById("myParag_1").innerHTML = "Tồn Lùng, Nôn Làm, Quang chó.";
}

function myFunction_2() {
    let name = prompt("Viết tên vào đây", "");
    let surname = prompt("Giờ thì viết họ vào đây", "");
    if (name != null && surname != null) {
        document.getElementById("myParag_2").innerHTML =
            "Tôi tên là: " + name + " " + surname;
    }
}

function myFunction_3() {
    let a = prompt("Nhập số thứ nhất", "");
    let b = prompt("Nhập số thứ hai", "");

    if (a != null && b != null) {
        let c = a + b;
        let d = a - b;
        let e = a * b;
        let f = a / b;
        document.getElementById("myParag_3").innerHTML =
            "Tổng, Hiệu, Tích, Thương của hai số là: " + c + " " + d + " " + e + " " + f;
    }
}

function myFunction_4() {
    document.getElementById("myParag_4").innerHTML = Math.floor(Math.random() * 100);
}

function myFunction_5() {
    let cel = prompt("Nhập \u00B0C vô đây", "");
    let fah = prompt("Nhập \u00B0F vô đây", "");

    if (cel != null && fah != null) {
        let cel2 = (fah - 32) * 5 / 9;
        let fah2 = cel * 9 / 5 + 32;
        document.getElementById("myParag_5_1").innerHTML =
            cel + "\u00B0C is " + fah2 + "\u00B0F"

        document.getElementById("myParag_5_2").innerHTML =
            fah + "\u00B0F is " + cel2 + "\u00B0C"
    }
}

function myFunction_6() {
    let fah = Math.floor(Math.random() * 100);

    if (fah != null) {
        let cel = (fah - 32) * 5 / 9;

        document.getElementById("myParag_6").innerHTML =
            "It is " + fah + "\u00B0F today. That's " + cel + "\u00B0C";
    }
}

function myFunction_7() {
    alert("Here's a popup");
}

function myFunction_8() {
    document.getElementById("myDiv_8").style.width = "50vw";
}

function myFunction_9(val) {
    document.getElementById("myParag_9").innerHTML = val;
}

function myFunction_10() {
    let a = prompt("Nhập số thứ nhất", "");
    let b = prompt("Nhập số thứ hai", "");
    let c = prompt("Nhập số thứ ba", "");

    if (a != null && b != null && c != null) {
        if (a >= b && a >= c) {
            alert("Số lớn nhất là: " + a);
        }
        else if (b >= a && a >= c) {
            alert("Số lớn nhất là: " + b);
        }
        else {
            alert("Số lớn nhất là: " + c);
        }
    }
    else {
        alert("Bạn chưa nhập đủ 3 số.");
    }
}