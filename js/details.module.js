import { Ui } from "./ui.module.js";

export class Details {
    constructor(id) {
        document.getElementById("btnClose").addEventListener("click", () => {
            document.getElementById("details").classList.add("d-none");
            document.getElementById("games").classList.remove("d-none");
        });
        this.loading = document.querySelector(".loading");
        this.getDetails(id);
    }

    async getDetails(id) {
        this.loading.classList.remove("d-none");

        const options = {
            method: "GET",
            headers: {
                "X-RapidAPI-Key": "2c73c05d2fmsh23e7b8ea2c1914dp138e0cjsn38d1547857db",
                "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
            },
        };

        const api = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`, options);
        const response = await api.json();

        console.log(response);

        this.loading.classList.add("d-none");

        const displayDetails = new Ui().displayDetails(response);
    }
}
