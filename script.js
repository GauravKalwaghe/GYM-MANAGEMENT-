function addMember() {
    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    const membership = document.getElementById("membership").value;

    if (name === "" || age === "" || membership === "") {
        alert("Please fill all fields");
        return;
    }

    const table = document.getElementById("memberTable");
    const row = table.insertRow();

    row.innerHTML = `
        <td>${name}</td>
        <td>${age}</td>
        <td>${membership}</td>
        <td><button onclick="deleteRow(this)">Delete</button></td>
    `;

    document.getElementById("name").value = "";
    document.getElementById("age").value = "";
    document.getElementById("membership").value = "";
}

function deleteRow(button) {
    const row = button.parentElement.parentElement;
    row.remove();
}
