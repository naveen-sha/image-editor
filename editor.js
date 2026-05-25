let filters ={
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
    grayscale: {
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
const resetbtn = document.querySelector("#reset-btn");
const downloadbtn = document.querySelector("#download-btn");
const presetsContainer = document.querySelector(".presets");

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
        applyFilters();
    });

    return div;

}


function createFilters(){
    Object.keys(filters).forEach(key => {
       const filterElement = createFilterElement(key,filters[key].unit,filters[key].value,filters[key].min,filters[key].max);
        filtersContainer.appendChild(filterElement);
    
    
    });

}

createFilters();


imageInput.addEventListener("change", (event) => {
    file = event.target.files[0];
    const imagePlaceHolder = document.querySelector(".placeholder");
    imageCanvas.style.display = "block";
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
   canvasCtx.clearRect(0, 0, imageCanvas.width, imageCanvas.height);
   canvasCtx.filter =`
    brightness(${filters.brightness.value}${filters.brightness.unit})
    contrast(${filters.contrast.value}${filters.contrast.unit})
    saturate(${filters.saturation.value}${filters.saturation.unit})
    hue-rotate(${filters.hueRotation.value}${filters.hueRotation.unit})
    blur(${filters.blur.value}${filters.blur.unit})
    grayscale(${filters.grayscale.value}${filters.grayscale.unit})
    invert(${filters.invert.value}${filters.invert.unit})
    sepia(${filters.sepia.value}${filters.sepia.unit})
    opacity(${filters.opacity.value}${filters.opacity.unit})
    `.trim();
   canvasCtx.drawImage(image, 0, 0);

}
resetbtn.addEventListener("click", () => {

    filters ={
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
    grayscale: {
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
    applyFilters();
    filtersContainer.innerHTML = "";
    createFilters();


});

downloadbtn.addEventListener("click", () => {
    const link = document.createElement("a");
    link.download = "edited-image.png";  
    link.href = imageCanvas.toDataURL();
    link.click();

})

const presets = {
    normal: {
        brightness: 100,
        contrast: 100,
        saturation: 100,
        hueRotation: 0,
        blur: 0,
        grayscale: 0,
        invert: 0,
        sepia: 0,
        opacity: 100
    },

    drama: {
        brightness: 90,
        contrast: 160,
        saturation: 120,
        hueRotation: 0,
        blur: 0,
        grayscale: 10,
        invert: 0,
        sepia: 0,
        opacity: 100
    },

    vintage: {
        brightness: 105,
        contrast: 90,
        saturation: 70,
        hueRotation: 350,
        blur: 0,
        grayscale: 20,
        invert: 0,
        sepia: 45,
        opacity: 100
    },

    oldSchool: {
        brightness: 95,
        contrast: 110,
        saturation: 60,
        hueRotation: 10,
        blur: 0,
        grayscale: 35,
        invert: 0,
        sepia: 60,
        opacity: 100
    },

    cinematic: {
        brightness: 95,
        contrast: 140,
        saturation: 85,
        hueRotation: 340,
        blur: 0,
        grayscale: 10,
        invert: 0,
        sepia: 15,
        opacity: 100
    },

    coolBlue: {
        brightness: 100,
        contrast: 110,
        saturation: 120,
        hueRotation: 180,
        blur: 0,
        grayscale: 0,
        invert: 0,
        sepia: 0,
        opacity: 100
    },

    warmSunset: {
        brightness: 110,
        contrast: 115,
        saturation: 130,
        hueRotation: 330,
        blur: 0,
        grayscale: 0,
        invert: 0,
        sepia: 25,
        opacity: 100
    },

    blackWhite: {
        brightness: 100,
        contrast: 130,
        saturation: 0,
        hueRotation: 0,
        blur: 0,
        grayscale: 100,
        invert: 0,
        sepia: 0,
        opacity: 100
    },

    faded: {
        brightness: 110,
        contrast: 80,
        saturation: 70,
        hueRotation: 0,
        blur: 1,
        grayscale: 10,
        invert: 0,
        sepia: 20,
        opacity: 90
    },

    neon: {
        brightness: 120,
        contrast: 170,
        saturation: 180,
        hueRotation: 45,
        blur: 0,
        grayscale: 0,
        invert: 0,
        sepia: 0,
        opacity: 100
    },

    horror: {
        brightness: 70,
        contrast: 180,
        saturation: 40,
        hueRotation: 120,
        blur: 1,
        grayscale: 30,
        invert: 0,
        sepia: 0,
        opacity: 100
    },

    dreamy: {
        brightness: 115,
        contrast: 85,
        saturation: 120,
        hueRotation: 20,
        blur: 3,
        grayscale: 0,
        invert: 0,
        sepia: 15,
        opacity: 95
    }
};

Object.keys(presets).forEach(presetName => {
    const presetButton = document.createElement("button");
    presetButton.classList.add("btn");
    presetButton.innerText = presetName;
    presetsContainer.appendChild(presetButton);

    presetButton.addEventListener("click", () => {
        const preset = presets[presetName];
        Object.keys(preset).forEach(filterName => {
            filters[filterName].value = preset[filterName];
        });
        applyFilters();
        filtersContainer.innerHTML = "";
        createFilters();
    });
});