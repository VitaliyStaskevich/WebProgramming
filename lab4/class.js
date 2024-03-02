class THashStorage {
    constructor(){
        this.map = new Map;
    }

    map;

    AddValue(name, price) {
        this.map.set(name,price);
    }
    DeleteValue(name) {
        if(this.map.has(name)){
            this.map.delete(name)
            alert("Deletion succesful");
        }
        else{
            alert("Does not exist");
        }
    }
    GetValueInfo(name){
        if(this.map.has(name)){
            console.log(this.map.get(name))
        }
        else{
            console.log("No information");
        }
    }
    ListValues() {
        for(let [name,price] of this.map){
            console.log(name + ": "+ price);
        }
    }
    Reset(){
        this.map.clear();
    }
}

Storage = new THashStorage();

function PromptAdd(){
    let name = prompt("Input a name of a medicine");
    let price = prompt("Input a price");
    Storage.AddValue(name, price);
}


function PromptDelete(){
    let name = prompt("Input a name of a medicine to delete");
    Storage.DeleteValue(name);
}

function PromptGet(){
    let name = prompt("Input a name of a medicine to check the price");
    Storage.GetValueInfo(name);
}

function List(){
    Storage.ListValues();
}

function Clear(){
    Storage.Reset();
}