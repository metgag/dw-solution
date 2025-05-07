const submit = document.querySelector(".submit-btn");
const listProjekt = document.querySelector(".list-projekt");

const getProjektName = document.querySelector("#projekt-name");
const getStartDate = document.querySelector("#start-date");
const getEndDate = document.querySelector("#end-date");
const getDescription = document.querySelector("#projekt-description");
const getTechnologies = document.querySelectorAll('input[type="checkbox"]');
const getAttachment = document.querySelector("#projekt-attachment");

let cardNumber = 0;

function handleSubmit() {
    event.preventDefault();
    cardNumber++;
    // let newCard = ;

    const projektName = getProjektName.value;
    const projektDuration = getMonthDuration();
    const projektDescription = getDescription.value;

    let getProjektIcon = [];
    for (let i = 0; i < getTechnologies.length; i++) {
        if (getTechnologies[i].checked) {
            getProjektIcon.push(getTechnologies[i].id);
        }
    }
    const foo = getAttachment.value;
    const bar = foo.split("\\");
    const baz = Object.values(bar);

    const projektImage = baz[baz.length - 1];

    let projektTechIcon = "";
    for (let j = 0; j < getProjektIcon.length; j++) {
        projektTechIcon += `
            <img src="assets/icons/brand-${getProjektIcon[j]}.svg"
            class="p-2 rounded-4" alt="...">
        `
    }

    listProjekt.innerHTML += `
    <div class="card shadow card${cardNumber} d-flex" style="width: 18rem;">
    <img src="assets/images/${projektImage}"
        class="card-img-top p-2 rounded-4" alt="...">
        <div class="card-body d-flex gap-3 flex-column">
            <div class="projekt-title">
                <h5 class="card-title mb-0">${projektName}</h5>
                <code class="fs-6">durasi: ${projektDuration} bulan</code>
            </div>
            <p class="card-text mb-0">${projektDescription}</p>
            <div class="tech-icon d-flex justify-content-center">
                ${projektTechIcon}
            </div>
            <div class="manage-projekt-list d-flex gap-1 justify-content-end">
                <a href="#" class="btn btn-dark rounded-1">edit</a>
                <a href="#" class="btn btn-dark rounded-1">delete</a>
            </div>
        </div>
</div>
    `;
    document.querySelector(`.card${cardNumber}`).scrollIntoView();
    resetInput();
    console.log(cardNumber);
}

function getMonthDuration() {
    const startDate = new Date(getStartDate.value);
    const endDate = new Date(getEndDate.value);
    const time = Math.abs(endDate - startDate);
    const dayCount = Math.ceil(time / (1000 * 60 * 60 * 24));
    const monthCount = Math.round(dayCount / 31);
    return monthCount;
}

function resetInput() {
    getProjektName.value = "";
    getStartDate.value = "";
    getEndDate.value = "";
    getDescription.value = "";
    getTechnologies.checked = false;
    getAttachment.value = "";
}

submit.addEventListener("click", handleSubmit);