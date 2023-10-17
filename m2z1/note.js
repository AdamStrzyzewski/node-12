// get
// post
// put
// delete
// patch

app.all("/anything", (req, res, next) => {
  console.log("Anything method.");
  next(); // przekazujemy middleware dalej
});

// res.download()
// res.end()

// res.json()
// res.redirect()
// res.send()
// res.render()
