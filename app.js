const users = [
    { Name: "Messi", Age: 37, Country: "Argentina", Profession: "Football", Total: "1200$" },
    { Name: "Neymar", Age: 29, Country: "Brazil", Profession: "Football", Total: "800$" },
    { Name: "Mbappe", Age: 24, Country: "France", Profession: "Football", Total: "700$" },
    { Name: "Lewandowski", Age: 33, Country: "Poland", Profession: "Football", Total: "1000$" },
    { Name: "Salah", Age: 30, Country: "Egypt", Profession: "Football", Total: "750$" }
];

const tableBody = document.querySelector(".table__body");

function addUserToTable(user) {
    const trEl = document.createElement("tr");
    trEl.innerHTML = `
        <td class="column1">${tableBody.rows.length + 1}</td>
        <td class="column2">${user.Name}</td>
        <td class="column3">${user.Age}</td>
        <td class="column4">${user.Country}</td>
        <td class="column5">${user.Profession}</td>
        <td class="column6">${user.Total}</td>
    `;
    tableBody.appendChild(trEl);
}

function addRandomUser() {
    const randomIndex = Math.floor(Math.random() * users.length);
    const randomUser = users[randomIndex];
    addUserToTable(randomUser);
}
