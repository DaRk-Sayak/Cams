console.log("Cv project");
let counter=2;

function getElementFromString(html) {
    let div = document.createElement('div');
    div.innerHTML = html;
    return div.firstElementChild;
}

let parametersBox = document.getElementById('parametersBox');
parametersBox.style.display = 'none';

// If the user clicks on params box, hide the json box
let paramsRadio = document.getElementById('paramsRadio');
paramsRadio.addEventListener('click', () => {
    document.getElementById('requestJsonBox').style.display = 'none';
    document.getElementById('parametersBox').style.display = 'block';
})

// If the user clicks on json box, hide the params box
let jsonRadio = document.getElementById('jsonRadio');
jsonRadio.addEventListener('click', () => {
    document.getElementById('requestJsonBox').style.display = 'block';
    document.getElementById('parametersBox').style.display = 'none';
})

let addParam = document.getElementById('addParam');
addParam.addEventListener('click', () => {
    let Param = document.getElementById('params')
    let html = `<div class="form-row my-2">
    <label for="url" class="col-sm-2 col-form-label">Parameter ${counter}</label>
    <div class="col-md-4">
        <input type="text" class="form-control" id="parameterKey1" placeholder="Enter Parameter ${counter} Key">
    </div>
    <div class="col-md-4">
        <input type="text" class="form-control" id="parameterValue1" placeholder="Enter Parameter ${counter} Value">
    </div>
    <button class="btn btn-primary delete"> - </button>
</div>`

let paramElement = getElementFromString(html);
    params.appendChild(paramElement);
    counter++;
    let deleteParam = document.getElementsByClassName('delete');
    for (item of deleteParam) {
        item.addEventListener('click', (e) => {
            e.target.parentElement.remove();
        })
    }
})

let submit=document.getElementById('submit')
submit.addEventListener('click',()=>{
    
})