
async function insertion() {
    console.log('In insertion()');
    const ele = document.querySelectorAll(".bar");
    //color
    ele[0].style.background = "green";
    for (let i = 1; i < ele.length - 1; i++) {
        console.log('In ith loop');
        let key = ele[i].style.height;
        let j = i-1;
        while (j>=0 && parseInt(ele[j].style.height) > parseInt(key)) {
            console.log("In while loop");
            // color
            ele[j].style.background = "blue";
            ele[j+1].style.height = ele[j].style.height;
            j--;

            await waitforme(delay);
            for(let k = i ; k>=0; k--){
                ele[k].style.background = "green";
            }
        }
        ele[j+1].style.height = key;
        //color
        ele[i].style.background = "green";
    }
}

const insertionSortbtn = document.querySelector(".insertionSort");
insertionSortbtn.addEventListener('click', async function () {
    disableSortingBtn();
    disableSizeSlider();
    disableNewArrayBtn();
    await insertion();
    enableSortingBtn();
    enableSizeSlider();
    enableNewArrayBtn();
});