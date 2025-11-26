const noteModal = new bootstrap.Modal(document.getElementById("note_modal"));
const notesButtons = document.getElementsByClassName("notes_button")
const notes_modal_title = document.getElementById("notes_modal_title")
const notes_modal_body = document.getElementById("notes_modal_body")

const course_titles = {
    "MATH372" : "Theory of Numbers",
    "MATH366" : "Real Analysis I",
    "STAT333" : "Introductory Probability Theory",
    "MATH287" : "Natural Resource Modelling",
    "CSCI223" : "Introduction to Data Science",
};

const extras = {
    "MATH372": ["Full Course.pdf", "Theorems.pdf"]
};

const lecture_counts = {
    "MATH372": 27,
    "MATH366": 28,
    "STAT333": 15,
    "MATH287": 18,
    "CSCI223": 31
};

document.addEventListener('DOMContentLoaded', function () {
    for (let i = 0; i < notesButtons.length; i++) {
        let button = notesButtons[i];
        button.addEventListener("click", function() {
            let courseCode = button.dataset.courseCode;
            showNoteModal(courseCode);
        });
    }
});

function showNoteModal(courseCode) {
    modal_title = course_titles[courseCode];
    notes_modal_title.innerHTML = modal_title;
    let totalLectures = lecture_counts[courseCode];
    let html = "";
    for (let i = 1; i <= totalLectures; i++) {
        let fileName = `Lecture ${i}.pdf`;
        let filePath = `courseNotes/${courseCode}/${fileName}`;
        html += `<a href="${filePath}" class="list-group-item list-group-item-action" target="_blank">${fileName}</a>`;
    }
    notes_modal_body.innerHTML = `<div class="two-columns">${html}</div>`;
    if (courseCode in extras) {
        notes_modal_body.innerHTML += "<hr>";
        extra_files = extras[courseCode];
        html = "";
        for (let i = 0; i < extra_files.length; i++) {
            let fileName = extra_files[i];
            let filePath = `courseNotes/${courseCode}/${fileName}`;
            html += `<a href="${filePath}" class="list-group-item list-group-item-action" target="_blank">${fileName}</a>`;
        }
        notes_modal_body.innerHTML += `<div class="two-columns">${html}</div>`;
    }
    noteModal.show();
};