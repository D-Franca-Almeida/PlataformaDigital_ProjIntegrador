 const monthNames = [
            "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
            "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
        ];
        const dayNames = ["D", "S", "T", "Q", "Q", "S", "S"];
        let currentDate = new Date();

        function renderCalendar(date) {
            const calendar = document.getElementById("calendar");
            calendar.innerHTML = "";

            // Cabeçalhos de dias da semana
            dayNames.forEach(day => {
                const div = document.createElement("div");
                div.className = "day-header";
                div.textContent = day;
                calendar.appendChild(div);
            });

            const year = date.getFullYear();
            const month = date.getMonth();
            const firstDay = new Date(year, month, 1).getDay();
            const daysInMonth = new Date(year, month + 1, 0).getDate();

            // Dias vazios antes do primeiro dia
            for (let i = 0; i < firstDay; i++) {
                const div = document.createElement("div");
                div.className = "empty";
                calendar.appendChild(div);
            }

            // Dias do mês
            for (let day = 1; day <= daysInMonth; day++) {
                const div = document.createElement("div");
                div.className = "day";
                div.textContent = day;
                calendar.appendChild(div);
            }

            // Atualizar título
            document.getElementById("monthYear").textContent = `${monthNames[month]} ${year}`;
        }

        document.getElementById("prevMonth").addEventListener("click", () => {
            currentDate.setMonth(currentDate.getMonth() - 1);
            renderCalendar(currentDate);
        });

        document.getElementById("nextMonth").addEventListener("click", () => {
            currentDate.setMonth(currentDate.getMonth() + 1);
            renderCalendar(currentDate);
        });

        document.addEventListener("DOMContentLoaded", () => {
            renderCalendar(currentDate);
        });
window.addEventListener("resize", () => {
    const calendar = document.getElementById("calendar");
    if (window.innerWidth <= 768) {
        calendar.style.gridTemplateColumns = "repeat(2, 1fr)";
    } else if (window.innerWidth <= 480) {
        calendar.style.gridTemplateColumns = "repeat(1, 1fr)";
    } else {
        calendar.style.gridTemplateColumns = "repeat(7, 1fr)";
    }
});
