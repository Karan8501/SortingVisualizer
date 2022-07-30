
async function selection() {
    console.log('In selection()');
    const ele = document.querySelectorAll(".bar");
    for (let i = 0; i < ele.length ; i++) {
        console.log('In ith loop');
        let min_index = i;
        // change the color of the postion to swap with the next min
        ele[i].style.background = "blue";
        for (let j = i+1; j < ele.length ; j++) {
            console.log('In jth loop');
            // change the color of current comparision
            ele[j].style.background = "yellow";
            await waitforme(delay);
            if (parseInt(ele[j].style.height) < parseInt(ele[min_index].style.height)) {
                if(min_index !== i){
                // new min index is found so change prev min_index color back to normal
                    ele[min_index].style.background = "cyan";
                 }
                min_index=j;
            }
            else{
                // if current comparision is more than min_index change it to normal
                ele[j].style.background = "cyan";
            }   
        }
        await waitforme(delay);
        swap(ele[min_index],ele[i]);
        // change the min element index back to normal
        ele[min_index].style.background = "cyan";
        //change the sorted element color to green
        ele[i].style.background = 'green';
    }
}

const selectionSortbtn = document.querySelector(".selectionSort");
selectionSortbtn.addEventListener('click', async function () {
    disableSortingBtn();
    disableSizeSlider();
    disableNewArrayBtn();
    await selection();
    enableSortingBtn();
    enableSizeSlider();
    enableNewArrayBtn();
});