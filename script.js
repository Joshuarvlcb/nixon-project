const voteBtn = document.getElementById("vote");
const homePage = document.getElementById("home");
const candidatesPage = document.getElementById("candidatesPage");
candidatesPage.style.display = "none";

const off = function () {
  homePage.style.display = "none";
};

voteBtn.addEventListener("click", (e) => {
  candidatesPage.style.display = "block";

  candidatesPage.style.opacity = 100;
  homePage.classList.add("opacity");
  setTimeout(off, 1000);
});

const btnNames = ["Republican", "Democratic"];
const classNames = ["clicked", "item"];

//creating the button elements
const allBtnsArr = [];

const straitPartyContainer = document.getElementById("sp");
const btnNamesId = ["dem", "rep"];
for (let i = 0; i <= 1; i++) {
  //adding 2 classes to the div elements
  const divBtns = document.createElement("div");
  divBtns.className += "clicked" + " " + "item";
  divBtns.textContent = btnNames[i];
  divBtns.setAttribute("id", btnNamesId[i]);
  allBtnsArr.push(divBtns);
  // inserting btns inside the strait party container
  straitPartyContainer.insertAdjacentElement("afterbegin", divBtns);
}

rep.addEventListener("click", (e) => {
  e.target.style.borderColor = "limegreen";
  dem.style.borderColor = "red";
});
dem.addEventListener("click", (e) => {
  e.target.style.borderColor = "limegreen";
  rep.style.borderColor = "red";
});

const checked = function (e) {
  if (wrong.style.borderColor == "red") {
    this.removeEventListener("click", checked);
  }

  if (wrong.style.borderColor == "red") {
    this.removeEventListener("click", checked);
  }
};
allBtnsArr.forEach((curr, i, arr) => {
  curr.style.borderColor = "rgb(50, 50, 219)";
  //i cant access the current element
  curr.addEventListener("click", checked);
});

const riggedPresident = document.getElementById("rigged");
//this will not allow the user to click on the button of nixons competition
const presidents = document.getElementById("presidents");
const edminMuskie = document.getElementById("wrong");
const thanksPage = document.getElementById("thankYou");

thanksPage.style.display = "none";

const thankYouPage = function () {
  thanksPage.style.display = "block";
  thanksPage.style.opacity = 100;
  thanksPage.style.zIndex = 100;
  // thanksPage.style.overflow = 'hidden'
  candidatesPage.style.display = "none";
};
candidatesPage.addEventListener("contextmenu", (e) => {
  alert("choose wisely");
});

riggedPresident.style.display = "none";

candidatesPage.addEventListener(
  "DOMContentLoaded",
  decoy.addEventListener("click", (e) => {
    edminMuskie.style.borderColor = "red";
    decoy.style.display = "none";
    riggedPresident.style.display = "block";

    riggedPresident.style.borderColor = "limegreen";
    straitPartyContainer.style.display = "none";

    candidatesPage.addEventListener("mousemove", function (e) {
      //find out why the the container is not following the cursur
      const pageCordinates = this.getBoundingClientRect();
      const presidentCoards = {
        //subtracting so we can the space that is left over for it to move
        //subtracting the height of the of the rigged container / 2 so it can be closer to the mouse
        top: e.clientY - pageCordinates.top - riggedPresident.clientHeight / 2,
        left: e.clientX - pageCordinates.left - riggedPresident.clientWidth / 2,
      };
      if (presidentCoards.top < 0) {
        presidentCoards.top = 0;
      }
      if (presidentCoards.left < 0) {
        presidentCoards.left = 0;
      }
      riggedPresident.style.left = presidentCoards.left + "px";
      riggedPresident.style.top = presidentCoards.top + "px";
      setTimeout(thankYouPage, 1000);
    });
  }),
  wrong.addEventListener("click", (e) => {
    edminMuskie.style.borderColor = "red";
    decoy.style.display = "none";
    riggedPresident.style.display = "block";

    riggedPresident.style.borderColor = "limegreen";
    straitPartyContainer.style.display = "none";

    candidatesPage.addEventListener("mousemove", function (e) {
      const pageCordinates = this.getBoundingClientRect();
      const presidentCoards = {
        //subtracting so we can the space that is left over for it to move
        //subtracting the height of the of the rigged container / 2 so it can be closer to the mouse
        top: e.clientY - pageCordinates.top - riggedPresident.clientHeight / 2,
        left: e.clientX - pageCordinates.left - riggedPresident.clientWidth / 2,
      };

      if (presidentCoards.top < 0) {
        presidentCoards.top = 0;
      }
      if (presidentCoards.left < 0) {
        presidentCoards.left = 0;
      }
      riggedPresident.style.left = presidentCoards.left + "px";
      riggedPresident.style.top = presidentCoards.top + "px";
      setTimeout(thankYouPage, 1000);
    });
  })
);

//mouse in and mouse out events on all buttons
//problem
// i want to add and mouse in event whenever i hover over any button and a mouse out whenever cursor levaes the button
//i need to make a for eaxh method for all the buttons
allBtnsArr.push(wrong, riggedPresident);
allBtnsArr.forEach((curr, i, arr) => {
  curr.addEventListener("mouseenter", (e) => {
    curr.style.backgroundColor = "rgba(50, 50, 219, 0.342)";
    curr.style.color = "white";
  });
  curr.addEventListener("mouseout", (e) => {
    curr.style.backgroundColor = "white";
    curr.style.color = "black";
  });
});
//i want the page to slowly dissaper and a page appear that says thank you for your vote

//set time out for 1.5 seconds to click on the confirm and with a opacity color
//thank ypu for your ballot page
const flag = document.getElementById("flag");
const buttons = document.getElementById("buttons");
const text = document.getElementById("text");
const container = document.getElementById("container");

const buttonsDisapear = function () {
  buttons.style.opacity = 0;
  text.style.opacity = 0;
  flag.style.opacity = 100;
  flag.classList.add("flag-container");
};

const fastClick = function () {
  confirm.classList.add("confirm-opacity");
  confirm.style.borderColor = "white";
};
const confirm = document.getElementById("confirm");
confirm.addEventListener("click", function () {
  setTimeout(fastClick, 10);

  setTimeout(buttonsDisapear, 500);
});

//after the button is clicked on then set the thank you for your ballot page

//set the flag in the middle of the page then add a transition of it moving up to the center while all the text is fading out
// function list(names) {
//   if (names.length == 0) {
//     return "";
//   }

//   if (names.length == 2) {
//     const namesArr = names.map((curr, i) => {
//       return curr.name;
//     });
//     const lName = namesArr.find((curr, i, arr) => {
//       return curr[i] == curr[arr.length - 1];
//     });

//     const fName = namesArr.find((curr, i, arr) => {
//       return curr[i] == curr[0];
//     });

//     const str = [...namesArr].join(", ").replace(lName, "&") + " " + lName;
//     return str.replace(fName + ",", fName);
//   }

//   if (names.length >= 2) {
//     const namesArr = names.map((curr, i) => {
//       return curr.name;
//     });
//     const ampersand = namesArr.find((curr, i, arr) => {
//       return curr === namesArr[namesArr.length - 2];
//     });
//     console.log(ampersand);
//     const fName = namesArr.find((curr, i, arr) => {
//       return curr[i] == curr[0];
//     });

//     const lName = namesArr.find((curr, i, arr) => {
//       return curr[i] == curr[arr.length - 1];
//     });
//     //we need to add the original array and array except with the & and last name
//     const last2 = namesArr
//       .join(" ")
//       .replace(ampersand, "&")
//       .split(" ")
//       .slice(-2);
//     console.log(last2);
//     const finalArr = [...namesArr, ...last2].join(", ");
//     const str = finalArr.split(" ").slice(0, -3).join(" ") + " " + last2;

//     //how to find out if we see two of the same elements
//     //we need to add the second to the last name
//     const noDup = new Set(str.split(" "));
//     const finalStr = [...noDup]
//       .join(" ")
//       .replace("&,", "& ")
//       .replace(ampersand + ",", ampersand);

//     return finalStr;
//   } else {
//     return names[0].name;
//   }
// }

// console.log(list([]));

// function list(names) {
//   return names.reduce(function (prev, current, index, array) {
//     if (index === 0) {
//       return prev + current.name;
//     } else if (index === array.length - 1) {
//       return prev + " & " + current.name;
//     } else {
//       return prev + ", " + current.name;
//     }
//   }, "");
// }
// console.log(list([{ name: "Bart" }, { name: "Lisa" }]));
