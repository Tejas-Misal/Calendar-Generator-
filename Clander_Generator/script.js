function generateCalendar() {

    const month = parseInt(document.getElementById("month").value);
    const year = parseInt(document.getElementById("year").value);

    if (!year) {
        alert("Please enter a valid year");
        return;
    }

    const monthNames = [
        "January", "February", "March", "April",
        "May", "June", "July", "August",
        "September", "October", "November", "December"
    ];

    document.getElementById("calendarTitle").innerText =
        `${monthNames[month]} ${year}`;

    const daysContainer =
        document.getElementById("calendarDays");

    daysContainer.innerHTML = "";

    const firstDay =
        new Date(year, month, 1).getDay();

    const totalDays =
        new Date(year, month + 1, 0).getDate();

    for (let i = 0; i < firstDay; i++) {
        const empty = document.createElement("div");
        empty.style.background = "transparent";
        daysContainer.appendChild(empty);
    }

    const today = new Date();

    for (let day = 1; day <= totalDays; day++) {

        const cell = document.createElement("div");
        cell.textContent = day;

        if (
            day === today.getDate() &&
            month === today.getMonth() &&
            year === today.getFullYear()
        ) {
            cell.classList.add("today");
        }

        daysContainer.appendChild(cell);
    }
}

const current = new Date();

document.getElementById("month").value =
    current.getMonth();

document.getElementById("year").value =
    current.getFullYear();

generateCalendar();

function calculateAge() {

    const birthYear =
        parseInt(document.getElementById("birthYear").value);

    if (!birthYear) {
        alert("Please enter a valid birth year");
        return;
    }

    const currentYear = new Date().getFullYear();

    const age = currentYear - birthYear;

    document.getElementById("ageResult").innerHTML =
        `<h2>${age} Years Old</h2>`;
}