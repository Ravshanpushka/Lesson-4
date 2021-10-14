// JQuery events


// !ready

$(document).ready(()=>{
    console.log("DOM есть");
});

//! click

// let btn = $("button")
// btn.on("click", ()=>{
//     console.log("HI");
// });

// ! dblclick
// let btn = $("button")
// function sayHello(){
//     alert("HEllo");
// }

// btn.on("dblclick", sayHello)


//!focus

// let input = $("input");
// input.on("focus", ()=>{
//     console.log("Есть пробитие");
// });

// !blur

// input.on("blur", ()=>{
//     console.log("Броня не пробита");
//     if(!input.val()){
        // alert("Попал в броню но не пробил")
        // input.css("border", "2px solid red");

//     } else {
//         input.css("border", "2px solid green");
//     }
// });


//! input 

// input.on("input", (e)=>{
//     console.log(e.target.value);
// })


//! select 

// let input = $('input')
// input.on("select", (e)=>{
//     console.log(e);
// });


// let p = $('p')
// !Не работает 
// p.on("select", (e)=>{
//     console.log(e);
// })

// let strong = $("strong")
//! РАботает
// p.on("mouseup", (e)=>{
//     let selectedText =  window.getSelection().toString();
//     strong.text("Ты выделил то что тебе нужно?" + selectedText)
// });

// ! hide, show, toggle

// let img = $('img')
// let btnHide = $("#btn-hide")
// let btnShow = $("#btn-show")
// let btnToggle = $("#btn-toggle")

// btnHide.on("click", ()=>{
//     img.hide(2000);
// });

// btnShow.on("click", ()=>{
//     img.show(1000);
// });

// btnToggle.on("click", ()=>{
//     img.toggle(1500);
// });

//! fateIn, fateOut, fateTo, fateToggle


// let btnFateOut = $("#btn-hide")
// let btnFateIn = $("#btn-show")
// let btnFateTo = $("#btn-to")
// let btnFateToggle = $("#btn-toggle")

// btnFateOut.on('click', ()=>{
//     img.fadeOut(1500);
// });

// btnFateIn.on('click', ()=>{
//     img.fadeIn(1500);
// });

// btnFateToggle.on('click', ()=>{
//     img.fadeToggle(1500);
// });

// let opacity = 1;
// btnFateTo.on('click', ()=>{
//     if(opacity < 0 ){
//         alert("Она прозрачно")

//     } else  {
        
//         img.fadeTo(1500, (opacity -= 0.3));
//     }

// });


// !modal

// let btnShowModal = $(".show-modal")
// let btnCloseModal = $(".my-modal button")
// let modal = $(".modal")
// let myModal = $(".my-modal")

// function showModal(){
//     modal.fadeIn(1000).css("display", "flex")
// }
// function closeModal(){
//     modal.fadeOut(1000);
// }

// btnShowModal.on("click", showModal);
// btnCloseModal.on("click", closeModal)

// let h3 = $(".my-modal h3")
// let p = $(".my-modal p")
// modal.on('click', (e)=>{
//     if(e.target !== myModal[0] && e.target !== h3[0] && e.target !==p[0] ){
//         closeModal();
//     }
// })

// !range input

// let range = $("#range")
// let img1 = $("img")
// range.on("input", (e)=>{
//    let value = e.target.value;
//     img1.fadeTo(500, value)
// });
















































