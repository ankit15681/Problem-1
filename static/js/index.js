// element for cards container
const container = document.getElementById("container");
//array of strings to populate 2nd column
const cardTextArray = [
  "He's not the sharpest knife in the drawer",
  "The big building was blazing with the lights",
  "Now you must answer some big questions",
  "Get your act together",
];
//maps or find the element id for text boxed using id of btns and inputs
const parseElementData = (id) => {
  const idx = id.split("-").pop();
  let name = id.split("-");
  console.log(name)
  name = name[0];
  const el = document.getElementById(`textCard-${idx}`);
  return { name, el };
};
//handles button click 
const handleClick = (e) => {
  const { name, el } = parseElementData(e.target.id);
  if (name === "btnBold") el.style.fontWeight = "bold";
  if (name === "btnItalic") el.style.fontStyle = "italic";
  if (name=== "btnUnderline") el.style.textDecorationLine = "underline";
};
//handles input change for color and fontsize
const handleChange = (e) => {
  const { name, el } = parseElementData(e.target.id);
  if (name=== "inputColor") el.style.color = `${e.target.value}`;
  if (name === "inputFontSize") el.style.fontSize = `${e.target.value}px`;
};
//html for cards of first column of btns and inputs
const btnCard = (idx) => {
  return `<div class="btnCard" id="btnCard-${idx}">
        <button id="btnBold-${idx}" value=1 class="btn btn-link" data-toggle="collapse" data-target="#textCard-${idx}" aria-expanded="true" aria-controls="collapse-${idx}">
            Bold
        </button>
        <button id="btnItalic-${idx}" name="italic" class="btn btn-link" data-toggle="collapse" data-target="#textCard-${idx}" aria-expanded="true" aria-controls="collapse-${idx}">
            Italic
        </button>
        <button id="btnUnderline-${idx}" name="underline" class="btn btn-link" data-toggle="collapse" data-target="#textCard-${idx}" aria-expanded="true" aria-controls="collapse-${idx}">
            Underline
        </button>
        <input id="inputColor-${idx}"  type="color" placeholder="Change Color" />
        <input id="inputFontSize-${idx}"  type="number" placeholder="Enter font size" />
    </div>`;
};
cardTextArray.forEach((text, idx) => {
  // Create card element
  const card = document.createElement("div");
  //adds card-body class to card element
  card.classList = "card-body";

  // Construct html content for cards
  const content = `
    <div class="card">
    ${btnCard(idx)}
    <div class="textCard" id="textCard-${idx}" class="collapse show" aria-labelledby="btnCard-${idx}" data-parent="#container">
       <p>${text}</p>
    </div>
  </div>
  `;
  container.innerHTML += content;
});
//adds event listeners to the buttons and inputs
cardTextArray.forEach((text, idx) => {
  ["btnBold", "btnItalic", "btnUnderline"].forEach((item)=>{
        const el = document.getElementById(`${item}-${idx}`);
        el.addEventListener("click", (e) => handleClick(e));
  });
  ["inputColor", "inputFontSize"].forEach((item)=>{
        const el = document.getElementById(`${item}-${idx}`);
        el.addEventListener("change", (e) => handleChange(e));
  });

})