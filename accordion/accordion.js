//accordion divs
let accDiv = ``;
const getAccDivs = (class1,class2,head,text,class3) =>{
  accDiv = `
<!-- box -->
   <div class="accordion-box">
    <div class="accordion-top">
    <span>${head}</span>
    <span class="${class1}" data-feather="plus"></span>
       <span class="${class2}" data-feather="minus"></span>
    </div> 
     <div data-status="visible" class="accordion-text ${class3}">
  ${text}
     </div>
   </div>
    <!-- /box -->
`;
}

var getAccordion = (accoContent) => {
  for(let i = 0; i < accoContent.length;i++) {
  if(i == 0){
getAccDivs("hidden","",accoContent[i].head,accoContent[i].text,"");
  }else{ getAccDivs("","hidden",accoContent[i].head,accoContent[i].text,"hidden");
  }
  document.querySelector('.accordion-block').innerHTML += accDiv;
  }
}


//accordion events
function accordion(){
document.querySelectorAll('.accordion-box').forEach((box) => {
let childrens= box.children,
top = childrens[0], 
plus = top.children[1],
minus = top.children[2],
text =  childrens[1];
plus.onclick = (e) => {
text.classList.remove('hidden');
plus.classList.add('hidden');
minus.classList.remove('hidden');
e.preventDefault();
}
minus.onclick = (e) => {
text.classList.add('hidden');
plus.classList.remove('hidden');
minus.classList.add('hidden');
e.preventDefault();
}
})
}

//export {getAccordion,Accordion} from './js/accordion.js';