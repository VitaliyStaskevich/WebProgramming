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

class TLocalStorage extends THashStorage {
    constructor() {
        super();
    }

    SaveToLocalStorage() {
        const data = JSON.stringify(Array.from(this.map.entries()));
        localStorage.setItem('storageData', data);
        console.log("Data saved to local storage.");
    }

    LoadFromLocalStorage() {
        const data = localStorage.getItem('storageData');
        if (data) {
            const parsedData = JSON.parse(data);
            this.map = new Map(parsedData);
            console.log("Data loaded from local storage.");
        } else {
            console.log("No data found in local storage.");
        }
    }
}

Storage = new TLocalStorage();
Storage.LoadFromLocalStorage();
function PromptAdd(){
    let name = prompt("Input a name of a medicine");
    let price = prompt("Input a price");
    Storage.AddValue(name, price);
    Storage.SaveToLocalStorage(); 
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
    localStorage.removeItem('storageData');
}

