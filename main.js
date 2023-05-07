const head = document.querySelector('.head');
const para = document.querySelector('.para');
let type_music=new Audio('../mp3s/type-writing-6834.mp3');
let str1="I want type writer effect!".split('');
let str2="  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi eaque, sunt optio doloribus reiciendis nesciunt at ipsum nulla, ex minus dolores.".split('');
let res1="";
let i =0;

let interval=setInterval(()=>{
if(i==str1.length-1){
    type_music.pause();
    res1+=str1[i];
    head.innerHTML=res1;
    clearInterval(interval);
res1="";
i=0;
    let interval2=setInterval(()=>{
        if(i==str2.length-1){
            res1+=str2[i];
            para.innerHTML=res1;
            clearInterval(interval2);
            type_music.pause();
        }
        else{
            type_music.play();
            res1+=str2[i];
            para.innerHTML=res1 + "<b>|</b>";
            i++;
        }


    },100)
}
else{
    type_music.play();
    res1+=str1[i];
    head.innerHTML=res1+"<b>|</b>";
    i=i+1;
}
},100)