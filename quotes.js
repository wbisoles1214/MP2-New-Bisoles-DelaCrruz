import "./style.css";

async function fetchQuote() {
  try {
    const response = await fetch("https://type.fit/api/quotes");
    const quoteData = await response.json();
    console.log(response);

    return quoteData;
  } catch (error) {
    throw new Error(error);
  }
}
fetchQuote()
  .then((quoteData) => {
    const quoteContainer = document.getElementById("quote-container");
    quoteContainer.innerHTML = `
    <p>${quoteData[0].text}</p>
    <h1>${quoteData[0].author}</h1>
    `;
  })

  .catch((error) => console.log(error));
