const voteBtn = document.getElementById('vote')
const homePage = document.getElementById('home')
const candidatesPage = document.getElementById('candidatesPage')
candidatesPage.style.display = 'none'

const off = function(){
    homePage.style.display = 'none'
    }

voteBtn.addEventListener('click',e =>{
candidatesPage.style.display = 'block'

    candidatesPage.style.opacity = 100
    homePage.classList.add('opacity')
    setTimeout(off, 1000);
})


const btnNames = ['Republican','Democratic']
const classNames  = ['clicked','item']

//creating the button elements
const allBtnsArr = []

const straitPartyContainer = document.getElementById('sp')

for(let i = 0;i <=1;i++){
    //adding 2 classes to the div elements 
    const divBtns = document.createElement('div')
    divBtns.className += 'clicked' + ' ' + 'item'
    divBtns.textContent = btnNames[i]
    allBtnsArr.push(divBtns)
        // inserting btns inside the strait party container
    straitPartyContainer.insertAdjacentElement('afterbegin',divBtns)
}

const checked = function(e){
    if(e.target.style.borderColor == 'rgb(50, 50, 219)' ){
        if(wrong.style.borderColor == 'red'){
            this.removeEventListener('click',checked)
        }
        this.style.borderColor = 'limegreen'
        
    }else{
        if(wrong.style.borderColor == 'red'){
            this.removeEventListener('click',checked)

        }
        this.style.borderColor = 'rgb(50, 50, 219)'
    }
}
 allBtnsArr.forEach((curr,i,arr) => {
    curr.style.borderColor = 'rgb(50, 50, 219)'
    //i cant access the current element
    curr.addEventListener('click',checked)
 })
 
 
const riggedPresident  = document.getElementById('rigged')
//this will not allow the user to click on the button of nixons competition
const presidents = document.getElementById('presidents')
const edminMuskie = document.getElementById('wrong')
const thanksPage = document.getElementById('thankYou')

thanksPage.style.display = 'none'

const thankYouPage = function(){
    thanksPage.style.display = 'block'
    thanksPage.style.opacity = 100
    thanksPage.style.zIndex = 100
    thanksPage.style.overflow = 'hidden'
    candidatesPage.style.display = 'none'
}
candidatesPage.addEventListener('contextmenu',(e)=>{
    alert('choose wisely')
})


candidatesPage.addEventListener('DOMContentLoaded',
riggedPresident.addEventListener('click',(e)=>{
    edminMuskie.style.borderColor = 'red'
    riggedPresident.style.borderColor = 'limegreen'
    straitPartyContainer.style.display = 'none'   
        presidents.style.display = 'none'
    candidatesPage.addEventListener('mousemove',function(e){
        const pageCordinates = this.getBoundingClientRect()
        const presidentCoards = {
            //subtracting so we can the space that is left over for it to move 
            //subtracting the height of the of the rigged container / 2 so it can be closer to the mouse

            top: e.clientY - pageCordinates.top - riggedPresident.clientHeight/2,
            left:e.clientX - pageCordinates.left - riggedPresident.clientWidth/2,
        }
        if(presidentCoards.top < 0){
            presidentCoards.top = 0
        }
        if(presidentCoards.left < 0){
            presidentCoards.left = 0
        }
        riggedPresident.style.left = presidentCoards.left + 'px'
        riggedPresident.style.top = presidentCoards.top + 'px'
        setTimeout(thankYouPage,5000)
    })
}),   
wrong.addEventListener('click',(e)=>{
    edminMuskie.style.borderColor = 'red'
    riggedPresident.style.borderColor = 'limegreen'
    straitPartyContainer.style.display = 'none'
    presidents.style.display = 'none'

    candidatesPage.addEventListener('mousemove',function(e){
        const pageCordinates = this.getBoundingClientRect()
        const presidentCoards = {
            //subtracting so we can the space that is left over for it to move 
            //subtracting the height of the of the rigged container / 2 so it can be closer to the mouse

            top: e.clientY - pageCordinates.top - riggedPresident.clientHeight/2,
            left:e.clientX - pageCordinates.left - riggedPresident.clientWidth/2,
        }
        if(presidentCoards.top < 0){
            presidentCoards.top = 0
        }
        if(presidentCoards.left < 0){
            presidentCoards.left = 0
        }
        riggedPresident.style.left = presidentCoards.left + 'px'
        riggedPresident.style.top = presidentCoards.top + 'px'
        setTimeout(thankYouPage,5000)
    })
}),
   
)

//mouse in and mouse out events on all buttons
//problem 
// i want to add and mouse in event whenever i hover over any button and a mouse out whenever cursor levaes the button
//i need to make a for eaxh method for all the buttons
allBtnsArr.push(wrong,riggedPresident)
allBtnsArr.forEach((curr,i,arr)=>{
    curr.addEventListener('mouseenter',(e)=>{
        curr.style.backgroundColor = 'rgba(50, 50, 219, 0.342)'
        curr.style.color = 'white'
    })
    curr.addEventListener('mouseout',(e)=>{
        curr.style.backgroundColor = 'white'
        curr.style.color = 'black'
    })
})
//i want the page to slowly dissaper and a page appear that says thank you for your vote

//set time out for 1.5 seconds to click on the confirm and with a opacity color 
//thank ypu for your ballot page