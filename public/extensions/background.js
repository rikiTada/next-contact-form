const createProperties = {
  url: "index.html",
  pinned: true,
};

chrome.tabs.create(createProperties);

console.log("background.js");
