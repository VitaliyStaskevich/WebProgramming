let map = new Map;

function AddValue() {
    let name = prompt("Input a name of a medicine");
    let price = prompt("Input a price");
    map.set(name,price);
}

function DeleteValue() {
    let name = prompt("Input a name of a medicine to delete");
    if(map.has(name)){
        map.delete(name)
        alert("Deletion succesful");
    }
    else{
        alert("Does not exist");
    }
}

function GetValueInfo(){
    let name = prompt("Input a name of a medicine to check the price");
    if(map.has(name)){
        console.log(map.get(name))
    }
    else{
        console.log("No information");
    }
}

function ListValues() {
    for(let [name,price] of map){
        console.log(name + ": "+ price);
    }
}