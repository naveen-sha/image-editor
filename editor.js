const filters={
    brightness:{
        value:100,
        min:0,
        max:200,
        unit:"%",
    },
    contrast:{
        value:100,
        min:0,
        max:200,
        unit:"%",
    },
    exposure:{
        value:0,
        min:100,
        max:200,
        unit:"%",
    },
    saturation:{
        value:100,
        min:0,
        max:200,
        unit:"%",
    },
    hueRotation:{
        value:0,
        min:0,
        max:360,
        unit:"deg",
    },
    blur:{
        value:0,
        min:0,
        max:20,
        unit:"px",
    },
    grayscale:{
        value:0,
        min:0,
        max:100,
        unit:"%",
    },
    invert:{
        value:0,
        min:0,
        max:100,
        unit:"%",
    },
    sepia:{
        value:0,
        min:0,
        max:100,
        unit:"%",
    },
    opacity:{
        value:100,
        min:0,
        max:100,
        unit:"%",
    }

}

function createfilterelement(name,unit="%",value,min,max){
    const div=document.createElement("div");
    div.classList.add("filter");
    const input=document.createElement("input");
    input.type="range";
    input.min=min;
    input.max=max;
    input.value=value;
    input.id=name;

    const p=document.createElement("p");
    p.innerText=name
    div.appendChild(p);
    div.appendChild(input);

    
    
}
Object.keys(filters).forEach(filter =>{
    console.log(filters[filter]);
})