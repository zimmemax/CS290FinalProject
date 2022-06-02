


function getNumNodes(){
    var numNodes = document.getElementById("numNodes").value
    if((Number.isInteger(Number(numNodes)) == false) || numNodes < 1){
        alert("Number of nodes must be a positve integer for djiktras algorithm.");
       }
    console.log()
}