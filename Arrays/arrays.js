var cars = ['toyota', 'Volvo', 'Maruti suziki'];
    document.getElementById("arraysDisplay").innerHTML = cars;

    function myFunction(value){
        text += "<li>" + value + "</li>";
    }

    function myFunction(){
        var colors = ['black', 'red', 'brown', 'orange'];
        colors.shift();
        document.getElementById("shiftM").innerHTML = colors;
    }

    function mineFunction(){
        var relation = ['brother', 'mother', 'dad'];
        relation.unshift("Sister");
        document.getElementById("unshiftM").innerHTML = relation;
    }


    function changePos(){
        var myName = ['My', 'name', 'is', 'Suvam', 'Prasad'];
        myName.splice(3,4,'Guriya','Kumari');
        document.getElementById("splicingM").innerHTML = myName.join(" ");
    }


    function deleteB(){
        var animals = ['dog', 'cat', 'cow', 'sparrow'];
        animals.splice(0,1);
        document.getElementById("deleteSplice").innerHTML = animals.join(" ");
    }