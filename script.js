//1a
const jedi=[];

//1b
jedi[0]='Luke';
// jedi [jedi.length]='luke';
console.log(jedi);

//1c
jedi.push('Obi-Won Kenobi');
console.log(jedi);

//1d
jedi.unshift('Yoda');
console.log(jedi);

//1e
console.log(jedi[1]);

//1f
jedi.pop();
console.log(jedi);

//1g
jedi.shift();
console.log(jedi);

//2a
const sithLords=["Darth Vader", "Darth Sidious", "Darth Maul"];

//2b
const imperialOfficers=["Grand Moff Tarkin", "Orson Krennic"];

//2c
const starWarsVillains=sithLords.concat(imperialOfficers);
console.log(starWarsVillains);

//2d
console.log(starWarsVillains.slice(0,2));

//3a
const droids={
    astromech: "R2-D2",
    protocol: "C-3PO",
    assassin: "IG-88"
};

//3b
console.log(droids["astromech"]);

//3c
console.log(droids.protocol);

//3d
droids.assassin="IG-11"
console.log(droids);

//bonus
//4
console.log("Darth Vader"[6]);
//or
console.log(starWarsVillains[0][6]);

//5
console.log(starWarsVillains.slice(-4,-3));

//6a
const starWarsMovies=[
    {
        episodeOne:'The Phantom Menace',
        episodeTwo:'Attack of the Clones',
        episodeThree:'Revenge of the Sith'
    },
    {
        episodeFour:'A New Hope',
        episodeFive:'The Empire Strikes Back',
        episodeSix:'Return of the Jedi'
    },
    {
        episodeSeven:'The Force Awakens',
        episodeEight:'The Last Jedi',
        episodeNine:'The Rise of Skywalker'
    }
];

//6b
starWarsMovies.splice(1,0,'Solo','Rogue One');
console.log(starWarsMovies);