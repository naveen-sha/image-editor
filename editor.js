const filters ={
    brightness: {
        value: 100, 
        min: 0,
        max: 200,
        unit: "%"

    },
    contrast: {
        value: 100,
        min: 0,
        max: 200,
        unit: "%"
    },
    saturation: {
        value: 100,
        min: 0,
        max: 200,
        unit: "%"
    },
    exposure: {
        value: 100,
        min: 0,
        max: 200,
        unit: "%"
    },
    hueRotation: {
        value: 0,
        min: 0,
        max: 360,
        unit: "deg"
    },
    blur: {
        value: 0,
        min: 0,
        max: 20,
        unit: "px"

    },
    graysclale: {
        value: 0,
        min: 0,
        max: 100,
        unit: "%"
    },
    invert: {
        value: 0,
        min: 0,
        max: 100,
        unit: "%"
    },
    sepia: {
        value: 0,
        min: 0,
        max: 100,
        unit: "%"
    },
    opacity: {
        value: 100,
        min: 0,
        max: 100,
        unit: "%"
    }

}

const imageCanvas = document.querySelector("#image-canvas");
const imageInput = document.querySelector("#image-input");
const canvasCtx = imageCanvas.getContext("2d");
let file = null;
let image = null;

const filtersContainer = document.querySelector(".filters");

function createFilterElement(name,unit ="%",value,min,max){
    const div = document.createElement("div");
    div.classList.add("filter");

    const input = document.createElement("input");
    input.type = "range";
    input.min = min;
    input.max = max;
    input.value = value;
    input.id = name;

    const p = document.createElement("p");
    p.innerText = name;

    div.appendChild(p);
    div.appendChild(input);

    input.addEventListener("input", (event) => {
        filters[name].value = input.value;
    });

    return div;

}

Object.keys(filters).forEach(key => {
   const filterElement = createFilterElement(key,filters[key].unit,filters[key].value,filters[key].min,filters[key].max);
    filtersContainer.appendChild(filterElement);


});

imageInput.addEventListener("change", (event) => {
    file = event.target.files[0];
    const imagePlaceHolder = document.querySelector(".placeholder");
    imagePlaceHolder.style.display = "none";


    const img = new Image();
    img.src = URL.createObjectURL(file);

    img.onload = () => {

        image = img;
        imageCanvas.width = img.width;
        imageCanvas.height = img.height;
        canvasCtx.drawImage(img, 0, 0);
    }


})

function applyFilters() {
   canvasCtx.filter =`brightness(${filters.brightness.value}${filters.brightness.unit})`
   canvasCtx.drawImage(image, 0, 0);

}