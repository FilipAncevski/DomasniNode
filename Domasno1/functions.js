
let sportmans = [
    {
        "id": 1,
        "name": "Filip",
        "sport": "programming",
        "age": 23
    },
    {
        "id": 2,
        "name": "Lebron James",
        "sport": "basketball",
        "age": 37
    },
    {
        "id": 3,
        "name": "Russell Westbrook",
        "sport": "basketball",
        "age": 33
    },
    {
        "id": 4,
        "name": "Leonel Messi",
        "sport": "football",
        "age": 34
    },
];

const addSportman = async (newSportmanInfo) => {
    const newHero = {
        id: sportmans.length + 1,
        name: newSportmanInfo.name,
        sport: newSportmanInfo.sport,
        age:newSportmanInfo.age
    };

    sportmans.push(newHero);
};

//R - read
const viewAllSportmans = async () => {
    return sportmans;
};

//U - update
const updateSportsman = async (argumentId, newInfoForSportmans) => {
    sportmans = sportmans.map((sportman)=>{
        if(sportman.id === argumentId){
            return {
                id:sportman.id,
                name:newInfoForSportmans.name,
                sport:newInfoForSportmans.sport,
                age:newInfoForSportmans.age
            };
        }else {
            return sportman;
        }
    });
    // for (const sportman of sportmans) {
    //     if(sportman.id === argumentId){
    //         return {
    //             id: sportman.id,
    //             name: newInfoForSportmans.name,
    //             sport: newInfoForSportmans.sport,
    //             age: newInfoForSportmans.age
    //         };
    //     }
    // }   vaka po moe sto probav ne mi iskoci tocno, kade sum zgresil?
};

//D - delete
const deleteSportman = async (sportmanId) => {
    sportmans = sportmans.filter((sportman) => sportman.id !== sportmanId);
};

module.exports = {
    addSportman,
    viewAllSportmans,
    updateSportsman,
    deleteSportman
};