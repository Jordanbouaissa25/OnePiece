import { fetchOnePieceList, fruits } from "./fruits";

async function main() {
  const FruitList: fruits[] = await fetchOnePieceList();
  console.log("Liste des OnePiece:", FruitList);

  const app = document.getElementById("app");
  if (app) {
    app.innerHTML = "<h1>Liste des OnePiece</h1>";

    const fruitContainer = document.createElement("div");
    fruitContainer.style.display = "grid";
    fruitContainer.style.gridTemplateColumns = "repeat(4, 1fr)";
    fruitContainer.style.gap = "10px";
    fruitContainer.style.justifyItems = "center";
    fruitContainer.style.padding = "20px";

    FruitList.forEach((fruit) => {
      const fruitElement = document.createElement("div");
      fruitElement.className = "fruit-container";

      const fruitName = document.createElement("h2");
      fruitName.textContent = fruit.name;

      const fruitImage = document.createElement("img");
      fruitImage.src = fruit.filename;
      fruitImage.alt = fruit.name;
      fruitImage.style.width = "150px";
      fruitImage.style.height = "150px";

      const fruitDescription = document.createElement("p");
      fruitDescription.textContent = fruit.description;

      fruitElement.appendChild(fruitName);
      fruitElement.appendChild(fruitImage);
      fruitElement.appendChild(fruitDescription);
      fruitContainer.appendChild(fruitElement);
    });

    app.appendChild(fruitContainer);
  } else {
    console.error('Element with id "app" not found');
  }
}

document.addEventListener("DOMContentLoaded", main);
