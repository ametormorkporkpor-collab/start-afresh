// let lapsCompleted = 0
// function incrementLaps() {
//     lapsCompleted = lapsCompleted + 1
//     lapsCompleted +=1
//     lapsCompleted += 1
//     console.log(lapsCompleted)  
// }
// incrementLaps( )
// incrementLaps( )
// incrementLaps( )
// console.log(lapsCompleted)
let countEl = document.getElementById('count-el')
console.log(countEl)    

let count = 0
 function increment() {
    count += 1 
   
    countEl.innerText = count
    
    console.log(count)
    
}  
increment()
count = 0
let saveEl= document.getElementById('save-el')
function save(){ 
      
    previousEntries = count + " - "
    saveEl.textContent += previousEntries
    countEl.textContent = 0
    count = 0
}
save()





