let apiKEY = 'RGAPI-68aa99a9-abc5-4b2e-a548-f63676828103'
let idJerome = 'l6NWphJJ2-MYG6dQjU1VL4DF1gPkwwxUUaRa1Aal6BLXjjQ'
let idTibo = '9oSJ3BvYo08956cRShVH_uqSXWuRkxsE6Gc1gb19rHPvcHE'


fetch(`https://euw1.api.riotgames.com/lol/league/v4/entries/by-summoner/${idJerome}?api_key=${apiKEY}`)
.then(response => {
	console.log(response)
})