// Global Variables
var activitiesForm = document.getElementById('activities-form');   //store form id 
var parent1 = 0;
var parent2 = 0;

// Event listeners
window.addEventListener('load', date);
window.addEventListener('load', quizScore);
activitiesForm.addEventListener('click', checkSwitch);   //when the form is clicked, run this function

// Functions
function checkSwitch() {   //if the user decides to refresh or leave this page, they will be notified to look at their score first to see if they want to take a picture or something
    if (parent1 >= 0 || parent2 >= 0) {
        window.addEventListener('beforeunload', function saveFirst(x) {
            x.returnValue = "";
        });
    }
}

function authorSubmitClick() {
    var authorForm = document.getElementById("author-form");
    authorForm.style.display = "none";
    var showConfirmation = document.getElementById("show-confirmation");
    showConfirmation.style.display = "block";
}

function date() {
    var x = document.getElementById('footer-p');
    x.textContent = 'Copyright &copy; Seperate Houses ' + (new Date().getFullYear());
}

function quizScore() {
    var parent1Score = document.getElementById('parent1-score');   //displays the score
    parent1Score.textContent = 0;   //starts with 0 on the html page
    var parent2Score = document.getElementById('parent2-score');
    parent2Score.textContent = 0;

    var check1_1 = document.getElementById('check1-1');
    var check1_2 = document.getElementById('check1-2');
    var check2_1 = document.getElementById('check2-1');
    var check2_2 = document.getElementById('check2-2');
    var check3_1 = document.getElementById('check3-1');
    var check3_2 = document.getElementById('check3-2');
    var check4_1 = document.getElementById('check4-1');
    var check4_2 = document.getElementById('check4-2');
    var check5_1 = document.getElementById('check5-1');
    var check5_2 = document.getElementById('check5-2');
    var check6_1 = document.getElementById('check6-1');
    var check6_2 = document.getElementById('check6-2');
    var check7_1 = document.getElementById('check7-1');
    var check7_2 = document.getElementById('check7-2');
    var check8_1 = document.getElementById('check8-1');
    var check8_2 = document.getElementById('check8-2');
    var check9_1 = document.getElementById('check9-1');
    var check9_2 = document.getElementById('check9-2');
    var check10_1 = document.getElementById('check10-1');
    var check10_2 = document.getElementById('check10-2');
    var check11_1 = document.getElementById('check11-1');
    var check11_2 = document.getElementById('check11-2');
    var check12_1 = document.getElementById('check12-1');
    var check12_2 = document.getElementById('check12-2');
    var check13_1 = document.getElementById('check13-1');
    var check13_2 = document.getElementById('check13-2');
    var check14_1 = document.getElementById('check14-1');
    var check14_2 = document.getElementById('check14-2');
    var check15_1 = document.getElementById('check15-1');
    var check15_2 = document.getElementById('check15-2');

    check1_1.addEventListener('change', function change_score() {   //1-1
        if (check1_1.checked == true) {
            parent1 = parent1 + 2;
        }
        else {
            parent1 = parent1 - 2;
        }
        parent1Score.textContent = parent1;
    });

    check1_2.addEventListener('change', function change_score() {   //1_2
        if (check1_2.checked == true) {
            parent2 = parent2 + 2;
        }
        else {
            parent2 = parent2 - 2;
        }
        parent2Score.textContent = parent2;
    });

    check2_1.addEventListener('change', function change_score() {   //2_1
        if (check2_1.checked == true) {
            parent1 = parent1 + 2;
        }
        else {
            parent1 = parent1 - 2;
        }
        parent1Score.textContent = parent1;
    });

    check2_2.addEventListener('change', function change_score() {   //2_2
        if (check2_2.checked == true) {
            parent2 = parent2 + 2;
        }
        else {
            parent2 = parent2 - 2;
        }
        parent2Score.textContent = parent2;
    });

    check3_1.addEventListener('change', function change_score() {   //3_1
        if (check3_1.checked == true) {
            parent1 = parent1 + 2;
        }
        else {
            parent1 = parent1 - 2;
        }
        parent1Score.textContent = parent1;
    });

    check3_2.addEventListener('change', function change_score() {   //3_2
        if (check3_2.checked == true) {
            parent2 = parent2 + 2;
        }
        else {
            parent2 = parent2 - 2;
        }
        parent2Score.textContent = parent2;
    });

    check4_1.addEventListener('change', function change_score() {   //4_1
        if (check4_1.checked == true) {
            parent1 = parent1 + 2;
        }
        else {
            parent1 = parent1 - 2;
        }
        parent1Score.textContent = parent1;
    });

    check4_2.addEventListener('change', function change_score() {   //4_2
        if (check4_2.checked == true) {
            parent2 = parent2 + 2;
        }
        else {
            parent2 = parent2 - 2;
        }
        parent2Score.textContent = parent2;
    });

    check5_1.addEventListener('change', function change_score() {   //5_1
        if (check5_1.checked == true) {
            parent1 = parent1 + 2;
        }
        else {
            parent1 = parent1 - 2;
        }
        parent1Score.textContent = parent1;
    });

    check5_2.addEventListener('change', function change_score() {   //5_2
        if (check5_2.checked == true) {
            parent2 = parent2 + 2;
        }
        else {
            parent2 = parent2 - 2;
        }
        parent2Score.textContent = parent2;
    });

    check6_1.addEventListener('change', function change_score() {   //6_1
        if (check6_1.checked == true) {
            parent1 = parent1 + 3;
        }
        else {
            parent1 = parent1 - 3;
        }
        parent1Score.textContent = parent1;
    });

    check6_2.addEventListener('change', function change_score() {   //6_2
        if (check6_2.checked == true) {
            parent2 = parent2 + 3;
        }
        else {
            parent2 = parent2 - 3;
        }
        parent2Score.textContent = parent2;
    });

    check7_1.addEventListener('change', function change_score() {   //7_1
        if (check7_1.checked == true) {
            parent1 = parent1 + 3;
        }
        else {
            parent1 = parent1 - 3;
        }
        parent1Score.textContent = parent1;
    });

    check7_2.addEventListener('change', function change_score() {   //7_2
        if (check7_2.checked == true) {
            parent2 = parent2 + 3;
        }
        else {
            parent2 = parent2 - 3;
        }
        parent2Score.textContent = parent2;
    });

    check8_1.addEventListener('change', function change_score() {   //8_1
        if (check8_1.checked == true) {
            parent1 = parent1 + 3;
        }
        else {
            parent1 = parent1 - 3;
        }
        parent1Score.textContent = parent1;
    });

    check8_2.addEventListener('change', function change_score() {   //8_2
        if (check8_2.checked == true) {
            parent2 = parent2 + 3;
        }
        else {
            parent2 = parent2 - 3;
        }
        parent2Score.textContent = parent2;
    });

    check9_1.addEventListener('change', function change_score() {   //9_1
        if (check9_1.checked == true) {
            parent1 = parent1 + 3;
        }
        else {
            parent1 = parent1 - 3;
        }
        parent1Score.textContent = parent1;
    });

    check9_2.addEventListener('change', function change_score() {   //9_2
        if (check9_2.checked == true) {
            parent2 = parent2 + 3;
        }
        else {
            parent2 = parent2 - 3;
        }
        parent2Score.textContent = parent2;
    });

    check10_1.addEventListener('change', function change_score() {   //10_1
        if (check10_1.checked == true) {
            parent1 = parent1 + 3;
        }
        else {
            parent1 = parent1 - 3;
        }
        parent1Score.textContent = parent1;
    });

    check10_2.addEventListener('change', function change_score() {   //10_2
        if (check10_2.checked == true) {
            parent2 = parent2 + 3;
        }
        else {
            parent2 = parent2 - 3;
        }
        parent2Score.textContent = parent2;
    });

    check11_1.addEventListener('change', function change_score() {   //11_1
        if (check11_1.checked == true) {
            parent1 = parent1 + 5;
        }
        else {
            parent1 = parent1 - 5;
        }
        parent1Score.textContent = parent1;
    });

    check11_2.addEventListener('change', function change_score() {   //11_2
        if (check11_2.checked == true) {
            parent2 = parent2 + 5;
        }
        else {
            parent2 = parent2 - 5;
        }
        parent2Score.textContent = parent2;
    });

    check12_1.addEventListener('change', function change_score() {   //12_1
        if (check12_1.checked == true) {
            parent1 = parent1 + 5;
        }
        else {
            parent1 = parent1 - 5;
        }
        parent1Score.textContent = parent1;
    });

    check12_2.addEventListener('change', function change_score() {   //12_2
        if (check12_2.checked == true) {
            parent2 = parent2 + 5;
        }
        else {
            parent2 = parent2 - 5;
        }
        parent2Score.textContent = parent2;
    });

    check13_1.addEventListener('change', function change_score() {   //13_1
        if (check13_1.checked == true) {
            parent1 = parent1 + 5;
        }
        else {
            parent1 = parent1 - 5;
        }
        parent1Score.textContent = parent1;
    });

    check13_2.addEventListener('change', function change_score() {   //13_2
        if (check13_2.checked == true) {
            parent2 = parent2 + 5;
        }
        else {
            parent2 = parent2 - 5;
        }
        parent2Score.textContent = parent2;
    });

    check14_1.addEventListener('change', function change_score() {   //14_1
        if (check14_1.checked == true) {
            parent1 = parent1 + 5;
        }
        else {
            parent1 = parent1 - 5;
        }
        parent1Score.textContent = parent1;
    });

    check14_2.addEventListener('change', function change_score() {   //14_2
        if (check14_2.checked == true) {
            parent2 = parent2 + 5;
        }
        else {
            parent2 = parent2 - 5;
        }
        parent2Score.textContent = parent2;
    });

    check15_1.addEventListener('change', function change_score() {   //15_1
        if (check15_1.checked == true) {
            parent1 = parent1 + 5;
        }
        else {
            parent1 = parent1 - 5;
        }
        parent1Score.textContent = parent1;
    });

    check15_2.addEventListener('change', function change_score() {   //15_2
        if (check15_2.checked == true) {
            parent2 = parent2 + 5;
        }
        else {
            parent2 = parent2 - 5;
        }
        parent2Score.textContent = parent2;
    });
}//end of quiz score