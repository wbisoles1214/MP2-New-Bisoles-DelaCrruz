import "./style.css";

async function fetchWallpaper() {
  try {
    const response = await fetch("https://wallhaven.cc/api/v1/search");
    const wallpaperData = await response.json();
    console.log(response);
    console.log(wallpaperData);
    return wallpaperData;
  } catch (error) {
    throw new Error(error);
  }
}
fetchQuote()
  .then((wallpaperData) => {
    const wallpaperContainer = document.getElementById("wallpaper-container");
    wallpaperContainer.innerHTML = `
    <h1>${wallpaperData[0].path}</h1>
    `;
  })

  .catch((error) => console.log(error));
