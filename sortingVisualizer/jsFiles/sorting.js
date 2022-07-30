//swap fuction util for sorting algorithm takes input of 2 DOM element with .style.height feature
function swap(el1, el2){
    console.log("In swap()");
    let temp = el1.style.height;
    el1.style.height = el2.style.height;
    el2.style.height = temp;

}

//disable sorting buttons used in conjuction with enable, so that we can disable during sorting and enable buttons after it.

function disableSortingBtn(){
    document.querySelector(".bubbleSort").disabled = true;
    document.querySelector(".insertionSort").disabled = true;
    document.querySelector(".mergeSort").disabled = true;
    document.querySelector(".quickSort").disabled = true;
    document.querySelector(".selectionSort").disabled = true;
}

// Enable sorting buttons used in conjuction with disable

function enableSortingBtn(){
    document.querySelector(".bubbleSort").disabled = false;
    document.querySelector(".insertionSort").disabled = false;
    document.querySelector(".mergeSort").disabled = false;
    document.querySelector(".quickSort").disabled = false;
    document.querySelector(".selectionSort").disabled = false;
}

// Disable size slider used in conjuction during sorting.
function disableSizeSlider(){
    document.querySelector("#arr_size").disabled = true;
}

// Enable size slider used in conjuction after sorting.
function enableSizeSlider(){
    document.querySelector("#arr_size").disabled = false;
}


// Disable new array button used in conjuction during sorting.
function disableNewArrayBtn(){
    document.querySelector(".newArray").disabled = true;
}

// Enable new array button used in conjuction after sorting.
function enableNewArrayBtn(){
    document.querySelector(".newArray").disabled = false;
}

// Used in async function so that we can aniamtion of sorting , takes time in ms

function waitforme(milisec){
    return new Promise(resolve => {
        setTimeout(()=> {resolve("")},milisec);
    })
    // return new(resolve => {
    //     setTimeout(()=> {resolve("")},milisec);
    // })
}

// Select size slider frome DOM

let arraySize = document.querySelector("#arr_size");

// Event listener to update baar on UI
arraySize.addEventListener("input",function(){
    console.log(arraySize.value, typeof(arraySize.value));
    creatNewArray(parseInt(arraySize.value));
});

// Default input for waitForme function(260ms)

let delay = 260;

// Selecting speed slider from DOM
let delayElement = document.querySelector("#speed_input");

// Event Listener to update delay
delayElement.addEventListener("input", function(){
    console.log(delayElement.value, typeof(delayElement.value));
    delay = 320 - parseInt(delayElement.value);
});
console.log(delay);

let array = [];
// Call to display bars right when you visit the site
creatNewArray();

// To creat New array input size of array

function creatNewArray(noOfBars = 60){
    // calling helper function to delete old bars
    deleteChild();

    // Creating new array of random numbers
    array = [];
    for(let i = 0 ; i<noOfBars ; i++){
        array.push(Math.floor(Math.random()*250) + 1);
        
    }
    console.log(array);

    // Select div tags with id #bars 
    const bars = document.querySelector("#bars");

    // Create multiple div elemnts using loop adding class "bar col"
    for(let i = 0 ; i<noOfBars ; i++){
        const bar = document.createElement("div");
        bar.style.height = `${array[i]*2}px`;
        bar.classList.add("bar");
        bar.classList.add("flex-item");
        bar.classList.add(`barNo${i}`);
        bars.appendChild(bar);
    }
}

// Helper function to delete all the preveous bars so that the new can be added

function deleteChild(){
    const bar = document.querySelector("#bars");
    bar.innerHTML = "";
}

// Selecting Newarray button from Dom and adding event listener
const newArray = document.querySelector(".newArray");
newArray.addEventListener("click", function(){
    console.log("form New array " + arraySize.value);
    console.log("Form new array " + delay);
    enableSortingBtn();
    enableSizeSlider();
    creatNewArray(arraySize.value);
})
