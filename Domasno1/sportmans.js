const f = require(`./functions.js`);


// 5. Inside the main app file, chain several functions in order
//     - Add a new sportsman to the array
//     - Edit an existing member
//     - Delete another existing member
//     - Read the new state of the array
//     (Hint: The above should be done by chaining promises)

f
    .addSportman({name:`Conor McGregor`, sport: `MMA`, age: 33})
    .then(()=>{
        return f.updateSportsman(3,{ name: `Stephen Curry`, sport: `basketball`, age: 33 })
    })
    .then(()=>{
        return f.deleteSportman(2)
    })
    .then(()=>{
        return f.viewAllSportmans()
    })
    .then((sportmani)=>{
        console.log(sportmani)
    })
    .catch((err)=>{
        console.log(err);
    })

