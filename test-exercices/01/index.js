function createInputElement(type, name, id, value = "") {
    const newInput = document.createElement(`input`);
    newInput.type = type;
    newInput.name = name;
    newInput.id = id;
    newInput.value = value;
    return newInput
}
function createLabelElement(htmlFor, innerText) {
    const newLabel = document.createElement(`label`);
    newLabel.htmlFor = htmlFor;
    newLabel.innerText = innerText;
    return newLabel
}

const addTechBtn = document.querySelector(`#add-tech-btn`);
addTechBtn.addEventListener(`click`, addTech);
let liIndex = 0;

function addTech() {
    const li = document.createElement(`li`);
    liID = liIndex;
    liIndex++ 
    li.id = `add-tech-list-item-${liID}`;
    const LabelTechName = createLabelElement(`tech-name-${liID}`, `Tecnologia: `);
    const InputTechName = createInputElement(`text`, `tech-name-${liID}`, `tech-name-${liID}`);
    const inputRadioExp1 = createInputElement(`radio`, `tech-exp-${liID}.1`, `tech-exp-${liID}.1`, `0-5 anos`);
    const LabelRadioExp1 = createLabelElement(`tech-exp-${liID}.1`, `0-5 anos`);
    const inputRadioExp2 = createInputElement(`radio`, `tech-exp-${liID}.2`, `tech-exp-${liID}.2`, `6-10 anos`);
    const LabelRadioExp2 = createLabelElement(`tech-exp-${liID}.2`, `6-10 anos`);
    const inputRadioExp3 = createInputElement(`radio`, `tech-exp-${liID}.3`, `tech-exp-${liID}.3`, `11-15 anos`);
    const LabelRadioExp3 = createLabelElement(`tech-exp-${liID}.3`, `11-15 anos`);  
    const removeTechBtn = document.createElement(`button`);
    removeTechBtn.innerText = `Remover`;
    removeTechBtn.addEventListener(`click`, function(){techList.removeChild(li)});
    li.append(
        LabelTechName, 
        InputTechName, 
        inputRadioExp1, 
        LabelRadioExp1, 
        inputRadioExp2, 
        LabelRadioExp2, 
        inputRadioExp3, 
        LabelRadioExp3, 
        removeTechBtn
        );
    const techList = document.querySelector(`#add-tech-list`);
    techList.appendChild(li);
}

