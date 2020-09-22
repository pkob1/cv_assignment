function cvData(){

    event.preventDefault();
    validateForm();
    const first = document.getElementById("first").value;
    const middle = document.getElementById("middle").value;
    const last = document.getElementById("last").value;
    const number = document.getElementById("number").value;
    const mail = document.getElementById("email").value;
    const address = document.getElementById("address").value;
    const gender = document.getElementById("gender").value;
    localStorage.setItem("val1", first);
    localStorage.setItem("val2", middle);
    localStorage.setItem("val3", last);
    localStorage.setItem("val4", number);
    localStorage.setItem("val5", mail);
    localStorage.setItem("val6", address);
    localStorage.setItem("val7", gender);
    location.replace("cv.html");
}

document.getElementById("data1").innerHTML=localStorage.getItem("val1");
document.getElementById("data2").innerHTML=localStorage.getItem("val2");
document.getElementById("data3").innerHTML=localStorage.getItem("val3");
document.getElementById("data4").innerHTML=localStorage.getItem("val4");
document.getElementById("data5").innerHTML=localStorage.getItem("val5");
document.getElementById("data6").innerHTML=localStorage.getItem("val6");
document.getElementById("data7").innerHTML=localStorage.getItem("val7");

function validateForm(){
    let first = document.getElementById("first").value;
    let middle = document.getElementById("middle").value;
    let last = document.getElementById("last").value;
    let number = document.getElementById("number").value;
    let mail = document.getElementById("email").value;
    let address = document.getElementById("address").value;
    let gender = document.getElementById("gender").value;

    if(first == "" || !first.match(/^[A-Za-z ,.'-]+$/i)){
        window.alert("Field(s) is/are empty or was/were not filled properly");
        return false;
    }

    if(middle == "" || !middle.match(/^[A-Za-z ,.'-]+$/i)){
        window.alert("Field(s) is/are empty or was/were not filled properly");
        return false;
    }

    if(last == "" || !last.match(/^[A-Za-z ,.'-]+$/i)){
        window.alert("Field(s) is/are empty or was/were not filled properly");
        return false;
    }

    if(number == ""){
        window.alert("Field(s) is/are empty or was/were not filled properly");
        return false;
    }

    if(mail == "" || !mail.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)){
        window.alert("Field(s) is/are empty or was/were not filled properly");
        return false;
    }

    if(address == ""){
        window.alert("Field(s) is/are empty or was/were not filled properly");
        return false;
    }

    if(gender == ""){
        window.alert("Field(s) is/are empty or was/were not filled properly");
        return false;
    }

    else{
        window.alert("Details are being added to CV now");
    }
}

