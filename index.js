var content = document.createElement('div');
content.id = "content";

var card = document.createElement('div');
card.className = "card col-6";

var card_body = document.createElement('div');
card_body.className = "card-body";

var card_title = document.createElement('h5');
card_title.className = "card-title";
card_title.innerHTML="One Fact about Dogs🐶"

var card_text = document.createElement('p');
card_text.className = "card-text";
card_text.id="card-text";

var button = document.createElement('button');
button.className = "btn btn-success";
button.innerHTML = "Get One";
button.addEventListener("click", getApiData);

card_body.append(card_title,card_text, button);
card.append(card_body);
content.append(card);
document.body.append(content);

async function getApiData() {
    var apiRawData = await fetch("https://dog-api.kinduff.com/api/facts?number=5");
    var apiData = await apiRawData.json();
    const fact = apiData.facts[0];
    document.getElementById("card-text").innerHTML= fact;

}
getApiData();