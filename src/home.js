export function docContent() {
    const imageHolder = document.createElement('div');
    imageHolder.classList.add('imageHolder');
    const label = document.createElement('label');
    const searchInput = document.createElement('input');
    searchInput.setAttribute('id','search');
    searchInput.setAttribute('placeHolder','search...')
    searchInput.setAttribute('style', 'cursor:pointer;');
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    svg.setAttribute("height", "21");
    svg.setAttribute("viewBox", "0 -960 960 960");
    svg.setAttribute("width", "21");

    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("d", "M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z");
    const img = document.createElement('div');
    img.classList.add('image');
    img.setAttribute('style', 'display:flex;flex-wrap:wrap;gap:0.2vw;margin-top:1rem;');
    svg.appendChild(path)
    label.appendChild(searchInput);
    label.appendChild(svg);

    label.appendChild(img);
    imageHolder.appendChild(label)
    document.body.appendChild(imageHolder);
    return {img,searchInput,svg};
    }

    