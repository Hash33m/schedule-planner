var todayDay = dayjs().format('dddd');
var dateTime = dayjs().format('MMMM D, YYYY');
var dayDisplay = document.querySelector("#day");
var dateTimeDisplay = document.querySelector("#date");
var saveButton = document.querySelector('.saveBox');
var storeageText = document.querySelector("#storeageMessage");
var logicTestVar = document.querySelector('.testingDiv');
var commentBlock = document.querySelector('.commentBlock');
var tableContainer = document.querySelector('#tableContainer');
var currentHour = dayjs().format('HH');
var storageArray = [
    [9, "9 AM", ''],
    [10, "10 AM", ''],
    [11, "11 AM", ''],
    [12, "12 PM", ''],
    [13, "1 PM", ''],
    [14, "2 PM", ''],
    [15, "3 PM", ''],
    [16, "4 PM", ''],
    [17, "5 PM", ''],
];
// Updates day and time in the header
dayDisplay.textContent = todayDay;
dateTimeDisplay.textContent = dateTime;
// Generates HTML for work day hours 
function tableGeneration() {
    for (let i = 0; i < storageArray.length; i++) {

        var createRowDiv = document.createElement('div');
        var createHourBlockDiv = document.createElement('div');
        var createHourBlockP = document.createElement('p');
        var createHourBlockSpan = document.createElement('span');
        var createCommentBlockDiv = document.createElement('div');
        var createCommentBlockForm = document.createElement('form');
        var createCommentBlockInput = document.createElement('input');
        var createSaveBoxBtn = document.createElement('button');

        // Applies classes and ID's to their elements 
        createRowDiv.classList.add("row");
        createHourBlockDiv.classList = ("col hourBlock");
        createHourBlockSpan.classList.add("hour");
        createHourBlockSpan.textContent = storageArray[i][1];
        createCommentBlockDiv.classList = ("col-10 commentBlock");
        createCommentBlockForm.classList.add("commentsBox");
        createCommentBlockInput.classList.add("comments");
        createCommentBlockInput.id = "input" + [i];
        createSaveBoxBtn.classList = ("col saveBox");
        createSaveBoxBtn.id = [i];
        createSaveBoxBtn.textContent = "🖫";
        // This class is for background color
        var logicTest = storageArray[i][0] - currentHour
        if (logicTest < 0) {
            createCommentBlockDiv.classList.add("past")
        }
        else if (logicTest > 0) {
            createCommentBlockDiv.classList.add("future")
        }
        else {
            createCommentBlockDiv.classList.add("present")
        };
        // Appending all elements 
        var tableContainer = document.getElementById('tableContainer');
        createHourBlockP.appendChild(createHourBlockSpan);
        createHourBlockDiv.appendChild(createHourBlockP);
        createRowDiv.appendChild(createHourBlockDiv);
        createCommentBlockForm.appendChild(createCommentBlockInput);
        createCommentBlockDiv.appendChild(createCommentBlockForm);
        createRowDiv.appendChild(createCommentBlockDiv);
        createRowDiv.appendChild(createSaveBoxBtn);
        tableContainer.appendChild(createRowDiv);
    }
};
// feature for saving and storing content into local storage for refrence 
// the click event makes sure it triggers wheb the event has a class of saveBox
function commentStorage(event) {
    if (event.target.className === 'col saveBox') {
        console.log("noteStorage Function has been triggered");
        storeageText.textContent = "Appointment Details have been added to your calendar.";
        commentSaved = "input" + event.target.id;
        if (commentSaved == 'input0') {
            storageArray[0][2] = input0.value;
            console.log(storageArray);
        } else if (commentSaved == 'input1') {
            storageArray[1][2] = input1.value;
            console.log(storageArray);
        } else if (commentSaved == 'input2') {
            storageArray[2][2] = input2.value;
            console.log(storageArray);
        } else if (commentSaved == 'input3') {
            storageArray[3][2] = input3.value;
            console.log(storageArray);
        } else if (commentSaved == 'input4') {
            storageArray[4][2] = input4.value;
            console.log(storageArray);
        } else if (commentSaved == 'input5') {
            storageArray[5][2] = input5.value;
            console.log(storageArray);
        } else if (commentSaved == 'input6') {
            storageArray[6][2] = input6.value;
            console.log(storageArray);
        } else if (commentSaved == 'input7') {
            storageArray[7][2] = input7.value;
            console.log(storageArray);
        } else if (commentSaved == 'input8') {
            storageArray[8][2] = input8.value;
            console.log(storageArray);
        };
    };
    localStorage.setItem("longTermStorage", JSON.stringify(storageArray));
};
function startup() {
    tableGeneration();
    if (localStorage.longTermStorage == null) {
        localStorage.setItem("longTermStorage", JSON.stringify(storageArray));
    }
    storageArray = JSON.parse(localStorage.getItem("longTermStorage"));
    console.log(storageArray);
    input0.value = storageArray[0][2];
    input1.value = storageArray[1][2];
    input2.value = storageArray[2][2];
    input3.value = storageArray[3][2];
    input4.value = storageArray[4][2];
    input5.value = storageArray[5][2];
    input6.value = storageArray[6][2];
    input7.value = storageArray[7][2];
    input8.value = storageArray[8][2];
};

tableContainer.addEventListener("click", commentStorage);
startup()
