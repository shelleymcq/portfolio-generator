function generateHTML(data) {
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet">
    <title>Portfolio</title>
  </head>
  <body>
    <nav class="navbar sticky-top navbar-expand-lg navbar-light" style="background-color: rgb(105, 126, 146);">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">${data.firstName + " " + data.lastName}</a>
          <div class="navbar-nav">
            <a class="nav-link" href="#about">About Me</a>
            <a class="nav-link" href="#email">Contact</a>
          </div>
        </div>
      </div>
    </nav>
  
    <div class="container">

      <div class="row project">
        <div class="col-md-8 offset-md-2 p-2">
          <div class="card" style="flex-direction:row; align-items:center">
            <img src="./assets/${data.projectImage}" class="card-img-top" style="width:30%; padding-left:1em" alt="thumbnail of app">
            <div class="card-body">
              <h5 class="card-title">${data.projectTitle}</h5>
              <p class="card-text">${data.projectInfo}</p>
              <a href="${data.projectLink}" class="btn btn-primary">See the App</a>
            </div>
          </div>
        </div>
      </div>

    </div>


    <div class="container-fluid" style="background-color:rgb(161, 185, 209);">
      <div class="row">
        <div class="col-sm-8">
          <p id="about">${data.bio}</p>
          <p><a href="${data.github}">${data.github}</a></p>
          <p><a href="${data.linkedIn}">${data.linkedIn}</a></p>
          <p><a id="email" href = "mailto:${data.email}">${data.email}</a></p>
        </div>
        <div class="col-sm-4">
          <h3 class="display-6">
            Hi, I'm ${data.firstName}
          </h3>
          <img src="./assets/${data.devHeadshot}" style="width:50%" alt="developer's photo">
          <p>${data.city}</p>
        </div>
      </div>
  </div>
  <footer>
  <div style="position: fixed; width: 100%; text-align: center; background-color: rgb(105, 126, 146)">
    Made with &#128153 by ${data.firstName + " " + data.lastName}
  </div>
</footer>

</body>
</html>
`
}

module.exports = generateHTML;