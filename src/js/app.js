let lists = document.getElementsByClassName("list")
let rightBox = document.getElementById("right")
let leftBox = document.getElementById("left")
let bottonBox = document.getElementById("botton")

for(list of lists){
    list.addEventListener("dragstart", function(e){
        let selected = e.target;

        rightBox.addEventListener("dragover", function(e){
            e.preventDefault()
        });
        rightBox.addEventListener("drop", function(e){
            rightBox.appendChild(selected);
            selected = null;
        })

        leftBox.addEventListener("dragover", function(e){
            e.preventDefault()
        });
        leftBox.addEventListener("drop", function(e){
            leftBox.appendChild(selected);
            selected = null;
        })

        bottonBox.addEventListener("dragover", function(e){
            e.preventDefault()
        });
        bottonBox.addEventListener("drop", function(e){
            bottonBox.appendChild(selected);
            selected = null;
        })
    })
}