document.addEventListener("click", (e) => {
        let creating = browser.windows.create({
          type: "popup",
          url: ["http://www.google.com"]
        });
        creating.then(() => {
          console.log("The popup has been created");
        });
  });
  