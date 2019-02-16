
function freq(){
    var string = document.getElementById("input").value;
    //console.log(string);
    var splt = string.split(" ");
    //document.write(splt + "<br>");
    var splt2 = splt.slice(0);
    //document.write(splt2 + "<br>");
    for(var a = 0; a < splt2.length; a++)
    {
        for(var b = 0; b < splt2.length; b++)
        {
            if(a != b)
            {
                if(splt2[a] === splt2[b])
                {
                    splt2.splice(b,1);
      //              document.write(splt2 + "    var b  <br>");
            
                }        
            }
        }
    }
    //document.write("after for " + splt2 + "<br>" + splt + "<br>");
    
    
    var counter = 0;
    for (var i = 0; i < splt2.length; i++)
    {
        for(var z = 0;z < splt.length; z++)
        {
            if (splt2[i] === splt[z] ) {
            counter += 1; 
            } 
    
        }
    //document.write(splt + "      count<br>")

    //var x = document.getElementsByTagName("p");
    var li1 = document.createElement("LI");
    var value = splt2[i] + ": " + counter + " times";
    var text = document.createTextNode(value);
    li1.appendChild(text);

    //console.log(value);
    document.getElementById("list").appendChild(li1);

    counter = 0;
    }
}
