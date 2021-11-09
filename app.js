let numbox = document.querySelector("#numbox");
const plus = document.querySelector("#plus");
const minus = document.querySelector("#minus");
const reset = document.querySelector("#reset");

let my_num = 0;

plus.addEventListener("click",function(){
        // my_num=my_num+1;
        my_num=numbox.value;
        my_num++;
        numbox.value= my_num;
});
/* another way to write above code is below*/
minus.addEventListener("click",() => {
        // 
        numbox.value= my_num;
        my_num--;
        numbox.value= my_num;

});

reset.addEventListener("click",() => {
        my_num=0;
        numbox.value= my_num;
});
