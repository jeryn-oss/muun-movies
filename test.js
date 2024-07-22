import jsdom from 'jsdom';
const { JSDOM } = jsdom;

async function displayResults(query) {
  let responseText = await fetch('https://www.primewire.tf/filter?s=tt1397280&ds=ea637f9584')
    .then(response => response.text());
  console.log(responseText);
  const dom = new JSDOM(responseText);
  const document = dom.window.document;

  // Example: Extract the href attribute of the first <a> tag found
  const hrefValue = getElementByXpath("/html/body/div[2]/div[1]/div[2]/div[2]/div[2]/a", document).href;

  console.log(hrefValue);
}

function getElementByXpath(path, document) {
  return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.innerHTML;
}

displayResults();

