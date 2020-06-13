const alayDict = {
    a: "4",
    b: "13",
    e: "3",
    g: "9",
    i: "1",
    j: "7",
    o: "0",
    s: "5"
};


function bahasaI(text){
    text = text.replace(/[AIUEO]/g, 'I').replace(/[aiueo]/g, 'i');
    return text;
}

function alay(text){

    text = text.toLowerCase().replace(/[a-z]/g, c=>{

        let res = "";
        
        if(typeof alayDict[c] === 'string' || alayDict[c] instanceof String){
            res = alayDict[c];
        }
        else{
            res = c;
        }

        return res;
    });

    return text;
}

function change(){
    outputText = document.getElementById("output-text");
    outputText.innerText = alay(this.value);
}
document.getElementById("input-text").addEventListener('keyup', change);