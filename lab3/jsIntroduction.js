let map = new Map;

function AddValue(name, price) {
    map.set(name,price);
}

function PromptAdd(){
    let name = prompt("Input a name of a medicine");
    let price = prompt("Input a price");
    AddValue(name, price);
}


function DeleteValue(name) {
    if(map.has(name)){
        map.delete(name)
        alert("Deletion succesful");
    }
    else{
        alert("Does not exist");
    }
}

function PromptDelete(){
    let name = prompt("Input a name of a medicine to delete");
    DeleteValue(name);
}

function PromptGet(){
    let name = prompt("Input a name of a medicine to check the price");
    GetValueInfo(name);
}

function GetValueInfo(name){
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