//First Example Calculate SUM
//Select the button to calculate
const btnCalculate = document.querySelector("#calculator button");

function calculateSumOfNumber() {
  const inputNumber = document.getElementById("user-number"); //select input element
  const calculateNumber = inputNumber.value; //getting the value of the input element

  let sum = 0;
  for (let i = 1; i <= calculateNumber; i++) {
    sum += i;
  }

  const resultParagraph = document.getElementById("calculated-sum"); //select paragraph element
  resultParagraph.textContent = sum; //add text to it, the result

  if (!(resultParagraph.textContent == 0)) {
    resultParagraph.style.display = "block";
  } else {
    resultParagraph.style.display = "none";
  }
}

btnCalculate.addEventListener("click", calculateSumOfNumber); //listen to event first button click

//Second loop for an array Click to Highlight Links in section
//get access to button for click
const highlightLinkButton = document.querySelector("#highlight-links button");

function highlightLinks() {
  const selectAllAnchors = document.querySelectorAll("#highlight-links a"); //select all anchor elements in the section
  let btnText = highlightLinkButton.textContent;
  if (btnText == "Highlight all links in the text") {
    for (const anchorElement of selectAllAnchors) {
      anchorElement.classList.add("highlight");
    }

    highlightLinkButton.textContent = "Unhighlight all links in the text";
  } else {
    for (const anchorElement of selectAllAnchors) {
      anchorElement.classList.remove("highlight");
    }

    highlightLinkButton.textContent = "Highlight all links in the text";
  }
}

highlightLinkButton.addEventListener("click", highlightLinks);

//Third loop practice - Display user data
//create some dummy demo data in object
const dummyUserData = {
  firstName: "Viktor",
  lastName: "Denkovski",
  hometown: "Skopje",
};

const btnDisplayUserData = document.querySelector("#user-data button");

function displayUserData() {
  const outputDataElement = document.getElementById("output-user-data");

  outputDataElement.innerHTML = ""; //clean properties from previous data if button is clicked again

  for (const key in dummyUserData) {
    const newUserDataListItemElement = document.createElement("li"); //create li element in ul
    const outputText = key.toUpperCase() + ": " + dummyUserData[key]; //create text and data to list element
    newUserDataListItemElement.textContent = outputText; // add the created text above as content in list element
    outputDataElement.append(newUserDataListItemElement); //append as a child the newly created list element to the ul element
  }
}

btnDisplayUserData.addEventListener("click", displayUserData);

//Final Statistics / Roll the Dice

const btnRollDiceElement = document.querySelector("#statistics button");

function rollDice() {
  return Math.floor(Math.random() * 6) + 1; // returns random number, by default between 0 and 1, but if multiplied than number is added Math.floor(): 5.64 => 5
}

function deriveNumberOfDiceRolls() {
  const targetNumberInputElement =
    document.getElementById("user-target-number");
  const dicerRollsListElement = document.getElementById("dice-rolls");

  const enteredNumber = targetNumberInputElement.value;
  dicerRollsListElement.innerHTML = "";

  let hasRolledTargetNumber = false;
  let numberOfRoles = 0;

  while (!hasRolledTargetNumber) {
    const rolledNumber = rollDice();
    // if (rolledNumber == enteredNumber) {
    //   hasRolledTargetNumber = true;
    // }
    numberOfRoles++;
    const newRollListItemElement = document.createElement('li');
    const outputText = 'Roll ' + numberOfRoles + ': ' + rolledNumber;
    newRollListItemElement.textContent = outputText;
    dicerRollsListElement.append(newRollListItemElement);
    //we can shorten this with:
    hasRolledTargetNumber = rolledNumber == enteredNumber; //store the boolean value from some comparison directly
  }

  const outputTotalRollsElement = document.getElementById('output-total-rolls');
  const outputTargetNumberElement = document.getElementById('output-target-number');

  outputTargetNumberElement.textContent = enteredNumber;
  outputTotalRollsElement.textContent = numberOfRoles;
}

btnRollDiceElement.addEventListener("click", deriveNumberOfDiceRolls);
