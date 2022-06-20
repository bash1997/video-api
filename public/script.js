const main = document.querySelector("#main");

const apiData = async function(){
    // if you are using a absolute api, your images 
    // need to have absolute links to show up. 
    // If you are using a local api, you can have
    // a local link for images.
    const response = await fetch("../database.json");
    const data = await response.json();
    const poster = data["poster"];

    for (let index = 0; index < poster.length; index++) {
        if (index !== 1 && index !== 2){
            // 1 and 2 don't have series in the video api
            imgData(poster[index])
        }
    }

        
}
apiData()

const imgData = async function(data){
    const series = data["series"];
    const img = data["img"];
    const id = data["id"];
    let uri = series.replaceAll(" ", "%20");

    let tabDiv = document.createElement("DIV");
    tabDiv.classList.add("tab", "flex");
    tabDiv.setAttribute("id", id);
  
    let tabImg = document.createElement("IMG");
    tabImg.src = img;
    tabImg.alt = series;
    tabDiv.append(tabImg);

    let tabInfo = document.createElement("DIV");
    tabInfo.classList.add("flex");

    let tabSeries = document.createElement("A");

    if (series == "All Sermons"){
        tabSeries.href = `https://church-video-api.herokuapp.com/video/`
    } else {
        tabSeries.href = `https://church-video-api.herokuapp.com/video/?series=${uri}`
    }

    tabSeries.innerText = series;
    tabInfo.append(tabSeries);

    tabDiv.append(tabInfo);
   
    main.append(tabDiv);
}
