function calculateAge() {
    const birthdate = document.getElementById("birthdate").value;

    if (birthdate === "") {
        document.getElementById("result").innerText = "Please select your birthdate!";
        return;
    }

    const birth = new Date(birthdate);
    const today = new Date();

    let age = today.getFullYear() - birth.getFullYear();

    const monthDifference = today.getMonth() - birth.getMonth();

    if (
        monthDifference < 0 ||
        (monthDifference === 0 && today.getDate() < birth.getDate())
    ) {
        age--;
    }

    document.getElementById("result").innerText = `Your age is ${age} years`;
}