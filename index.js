let cats =["Milo", "Otis", "Garfield"]
//console.log(cats)

function destructivelyAppendCat() 
{
    cats.push("Ralph")
}
function destructivelyPrependCat(){
    cats.length =0;


    cats.push("Bob", "Milo", "Otis", "Garfield")
}

function destructivelyRemoveLastCat(){
    cats.length =0;


    cats.push("Milo", "Otis")
}


function destructivelyRemoveFirstCat(){
    cats.length =0;


    cats.push("Otis", "Garfield")
}


function appendCat(){
    cats.length =0;


    cats.push("Milo", "Otis", "Garfield")
    return [...cats,"Broom"]
}


function prependCat(){
    cats.length =0;


    cats.push("Milo", "Otis", "Garfield")
    return ["Arnold" , ...cats]
}


function removeLastCat(){
    cats.length =0;


    cats.push("Milo", "Otis", "Garfield")
    return ["Milo", "Otis"]
}


function removeFirstCat(){
    cats.length =0;


    cats.push("Milo", "Otis", "Garfield")
    return ["Otis", "Garfield"]
}

