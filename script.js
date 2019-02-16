
function freq(){
    // let the paragraph on the variable string
    var string = document.getElementById("input").value;
    // split the paragraph at the spaces
    var splt = string.split(" ");
    // then slice from 0 index
    var splt2 = splt.slice(0);
    
    for(var a = 0; a < splt2.length; a++)
    {
        for(var b = 0; b < splt2.length; b++)
        {
            if(a != b)
            {
                if(splt2[a] === splt2[b])
                {
                    splt2.splice(b,1);
                }        
            }
        }
    }
    var counter = 0;
    for (var i = 0; i < splt2.length; i++)
    {
        for(var z = 0;z < splt.length; z++)
        {
            if (splt2[i] === splt[z] ) {
            counter += 1; 
            } 
    
        }
    var li1 = document.createElement("LI");
    var value = splt2[i] + ": " + counter + " times";
    var text = document.createTextNode(value);
    li1.appendChild(text);

    document.getElementById("list").appendChild(li1);

    counter = 0;
    }
}
