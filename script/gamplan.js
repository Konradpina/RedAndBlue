
const cardNumber=25
const nameBox=document.getElementById("NameBox")
const revBox=document.getElementById("ReversBox")



function creatTamplates(){
    tamp=[]
    for(i=0;i<8;i++){
        tamp.push("Red")
        tamp.push("Blue")
        tamp.push("Beige")
    }
    tamp.splice(23,1)
    tamp.push("black")
    tamp.push("Red")
    console.log(tamp)
    return shuffelarray(tamp)
}
function shuffelarray(array){
    newArray=[]
    for(i=0;array.length>0;i++){
        const num= Math.floor(Math.random()*array.length)
        newArray.push(array[num])
        array.splice(num,1)
        if(i>100){
            break
        }
    }
    return newArray
}
Newarray =creatTamplates()
displaydwords=choseWords(words)
console.log(choseWords(words))
console.log(Newarray)


for(let i=0;i<cardNumber;i++){
    const newDiv=document.createElement("div")
    newDiv.classList.add("square")
    newDiv.innerHTML=`${displaydwords[i]}`
    newDiv.id=`card${i}`
   
    //newDiv.style.backgroundColor=Newarray[i]
    const revdiv=document.createElement("div")
    revdiv.classList.add("reverssquare")
    revdiv.innerHTML=`${displaydwords[i]}`
    revdiv.addEventListener("click",()=>{
        console.log(`${i}`)
        revaleCard(i)
    })
    
    nameBox.appendChild(newDiv)
    revBox.appendChild(revdiv)
}

function revaleCard(numCard){
    cardDiv=document.getElementById(`card${numCard}`)
    cardDiv.style.backgroundColor=Newarray[numCard]
} 

function choseWords(array){
    newArray=[]
    for(i=0;array.length>0;i++){
        const num= Math.floor(Math.random()*array.length)
        newArray.push(array[num])
        array.splice(num,1)
        if(i>=24){
            break
        }
    }
    return newArray
}

function createTemparray(){
    var Tamparray=[]
    var k=0
    for(i=0;i<100;i++){
        var tamp=creatTamplates()
       if (!Tamparray.some(a => JSON.stringify(a) === JSON.stringify(tamp))) {
        Tamparray.push(tamp);
        k++
        }
        if(k>10000){
            break
        }
    }
    return Tamparray
}
