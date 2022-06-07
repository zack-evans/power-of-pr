const visited = ["paris", "tokyo", "sydney", "new york"];


//Verify if destination has been visited
function didVisit(destination) {

    if (!destination) {
        throw "Please provide a desitination as a parameter";
    }

    if (visited.indexOf(destination) > -1) {
        return true;
    }

    return false;
}
