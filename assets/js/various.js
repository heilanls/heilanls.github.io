function getAge() {
    let birthday = "1998/01/23";
    let years = new Date(new Date() - new Date(birthday)).getFullYear() - 1970;
    document.getElementById('age').innerHTML = years.toString();
}

getAge();
