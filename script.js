const visited = ["paris", "tokyo", "sydney", "new york"];


//Verify if destination has been visited
function didVisit(destination){
    
    if(visited.indexOf(destination) > -1){
        return true;
    }
    return false;
}

console.log(didVisit("paris"));