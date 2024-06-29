async function getGames() {
    const options =
        {
            method: "GET",
            headers: {
                "X-RapidAPI-Key": "a1f2e1d0camsh8b39f18c7898991p1ff575jsnf0e98aae5292",
                "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",

            }
        };

    // categories
    
    try {
        const api = await fetch(`https://www.freetogame.com/api/games?category=mmorpg`, options);
        const response = api.json();
        console.log(response);
    } catch (error) {
        console.error(error);
    }

    // details
    const url =  ` https://www.freetogame.com/api/game?id=452 `;
    try {
        const response = await fetch(url, options);
        const result = await response.text();
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}

getGames();