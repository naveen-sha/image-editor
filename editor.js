const filters ={
    brightness: 100,
    contrast: 100,
    saturation: 100,
    exposure: 100,
    hueRotation: 0,
    blur: 0,
    graysclale: 0,
    invert: 0,
    sepia: 0,
    opacity: 100,
    invert: 0,


}

function createFilterElement(name, value) {
    const filterElement = document.createElement('div');
    filterElement.className = 'filter-element';
    filterElement.innerHTML = `
        <label>${name}</label>
        <input type="range" min="0" max="200" value="${value}" />
    `;
    return filterElement;
}