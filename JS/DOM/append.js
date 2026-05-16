const mainContainer = document.getElementById("main-container");

const newSection = document.createElement('section');

newSection.innerHTML = `
    <h1> Places</h1>
    <ul>
        <li>Ahsan Monjil</li>
        <li>Lalbhagh Kella</li>
        <li>SItakunda</li>
        <li>ChandraNath Hill</li>
    </ul>
        `
mainContainer.appendChild(newSection);
newSection.style.backgroundColor='aquamarine';
newSection.style.border = "2px solid yellow";
newSection.style.padding = '20px';
newSection.style.borderRadius = '10px';
newSection.style.marginTop ='10px';