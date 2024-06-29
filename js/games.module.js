import { Details } from "./details.module.js";
import { Ui } from "./ui.module.js";

export class Games {
    constructor(){
        document.querySelectorAll(".nav-link").forEach((link) => {
            link.addEventListener("click" , () => {
                document.querySelector(".navbar-nav .active").classList.remove("active");
                link.classList.add("active");
                this.getGamesApi(link.getAttribute("data-category"));
            });
        });
        this.loading = document.querySelector(".loading");
        this.details = document.getElementById("details");
        this.games = document.getElementById("games");
        this.ui = new Ui();
        this.getGamesApi("mmorpg");
    }

    async getGamesApi(category) {
        const options = {
            method: "GET",
            headers: {
                "X-RapidAPI-Key": "2c73c05d2fmsh23e7b8ea2c1914dp138e0cjsn38d1547857db",
                "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
            },
        };


        const api = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`, options);
        const response = await api.json();
        this.loading.classList.add("d-none");
        this.ui.displayDataGame(response);

        document.querySelectorAll(".card").forEach((card) => {
            card.addEventListener("click" , () => {
                this.details.classList.remove("d-none");
                this.games.classList.add("d-none");
                const detailsShow = new Details(card.getAttribute("data-id"));
            });
        });
    }
}