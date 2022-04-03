const container = document.getElementById("container");
const cardTextArray = [
  "He's not the sharpest knife in the drawer",
  "The big building was blazing with the lights",
  "Now you must answer some big questions",
  "Get your act together",
];

const parseElementData = (id) => {
  const idx = id.split("-").pop();
  const name = id.split("-");
  const el = document.getElementById(`textCard-${idx}`);
  return { name, el };
};

const handleClick = (e) => {
  const { name, el } = parseElementData(e.target.id);
  if (name[0] === "btnBold") el.style.fontWeight = "bold";
  if (name[0] === "btnItalic") el.style.fontStyle = "italic";
  if (name[0] === "btnUnderline") el.style.textDecorationLine = "underline";
};
const handleChange = (e) => {
  const { name, el } = parseElementData(e.target.id);
  if (name[0] === "inputColor") el.style.color = `${e.target.value}`;
  if (name[0] === "inputFontSize") el.style.fontSize = `${e.target.value}px`;
};

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
        <input id="inputFontSize-${idx}"  type="number" placeholder="Enter size font size" />
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
        ${text}
    </div>
  </div>
  `;
  container.innerHTML += content;
});

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