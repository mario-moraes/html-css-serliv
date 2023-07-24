// exercicio de cadastro de devs e manipulação do DOM - versão comentada

// Iniciando declarando funções auxiliares, que irão criar os elementos mais básicos de forma genérica. Os parâmetros da função podem ser passados como propriedades para variavel que armazena a tag criada, e, consequentemente, serão os atributos da tag html. A função retorna a variável com o elemento criado.

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

// selecionando o botão que irá adicionar os elementos filhos através da função principal.
    const addTechBtn = document.querySelector(`#add-tech-btn`);
    addTechBtn.addEventListener(`click`, addTech);

// a variável liIndex aqui é declarada com let para que a cada iteração possa ter seu valor alterado e somado a 1. Essa variável serve para  gerar um numero único para os ids dos filhos. 
    let liIndex = 0;

// função principal que cria um elemento filho li, cria os inputs e labels das funções auxiliares acima e em seguida adiciona ao DOM os lementos. Também possui um botão de remoção de filhos.
    function addTech() {
        const li = document.createElement(`li`); // criação de um item filho que engloba os inputs e labels mais basicos
        liID = liIndex;
        liIndex++ // controla o id único para cada iteração.
        li.id = `add-tech-list-item-${liID}`;

        //criando o par label Nome: input de texto, onde uma variavel armazena o retorno das funções auxiliares com os parâmetros repassados.
        const LabelTechName = createLabelElement(`tech-name-${liID}`, `Tecnologia: `);
        const InputTechName = createInputElement(`text`, `tech-name-${liID}`, `tech-name-${liID}`);
    
        // criando os pares inputRadio e labels e armazenando nas variaveis.
        // - atenção: inputs do tipo radio precisam ter o mesmo atributo "name" para evitar mais de uma seleção.
        // - atenção: atenção quando passar os parâmetros de id da função, de forma que sejam diferentes entre as tags.
        const inputRadioExp1 = createInputElement(`radio`, `tech-exp-${liID}.1`, `tech-exp-${liID}.1`, `0-5 anos`);
        const LabelRadioExp1 = createLabelElement(`tech-exp-${liID}.1`, `0-5 anos`);

        const inputRadioExp2 = createInputElement(`radio`, `tech-exp-${liID}.2`, `tech-exp-${liID}.2`, `6-10 anos`);
        const LabelRadioExp2 = createLabelElement(`tech-exp-${liID}.2`, `6-10 anos`);

        const inputRadioExp3 = createInputElement(`radio`, `tech-exp-${liID}.3`, `tech-exp-${liID}.3`, `11-15 anos`);
        const LabelRadioExp3 = createLabelElement(`tech-exp-${liID}.3`, `11-15 anos`);  

        // remoção de filho li (item da lista), associado ao pai lista não-ordenada (ul).
        const removeTechBtn = document.createElement(`button`);
        removeTechBtn.innerText = `Remover`;
        removeTechBtn.addEventListener(`click`, function(){techList.removeChild(li)});

        // adicionando os filhos (inputs basicos, labels e botão) ao elemento de item das tecnologias (li).
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
        
        // por fim, adicionando o item (li) na lista não-ordenada (ul).
        const techList = document.querySelector(`#add-tech-list`);
        techList.appendChild(li);
    }

