let search = function(event) {
    if (event.key === "Enter"){
        getAlbums(event.target.value)
    } else {
        console.log('Another key has been pressed')
    }
}

let getAlbums = function(searchString) {
    console.log('Albums fetched!')


fetch ("https://striveschool-api.herokuapp.com/api/deezer/search?q=" + searchString, {

    headers: {
        Authorizaion:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDYzMWYwNDQyNGY0NzAwMTUzZGVmY2MiLCJpYXQiOjE2MTkxNjYyNTMsImV4cCI6MTYyMDM3NTg1M30.qqMlSKGggXQ_6F_5dyAsIxEFzCFsQZUF6LHGbFMz3Is",
    },
})
    .then(Response => Response.json())
    .then(data => renderAlbums(data))
}

let renderAlbums = function(songs) {

    let content = document.querySelector(".content")

    content.innerHTML = ""

    if (songs.data.length > 0) {
        for(let index = 0; index < songs.data.length; index ++) {
            console.log(content)
            content.innerHTML = 
            content.innerHTML + 
            `
            <div class="card">
                    <div class="image-wrapper">
                    <img src=${songs.data[index].album.cover_big}>
                    <i class="fas fa-play"></i>
                </div>
                    <div class="card-body">
                        <p>${songs.data[index].title}</p>
                        <p>${songs.data[index].artist.name}</p>
                    </div>
            </div>
            `
        }
    }
}