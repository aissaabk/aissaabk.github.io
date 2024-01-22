var card = []
function addImage(){
var title = document.getElementById("title").value
var content = document.getElementById("content").value 
var user = document.getElementById("username").value 
card = {title,content,user}

var cardTemplate = '    <div class="card" style="margin-left: 500px; margin-top: 100px; width: 40rem;">                                            '+
    '    <img src="./images/mountains.jpg" class="card-img-top" alt="mountains">'+
    '    <div class="card-body">'+
    '      <h5 class="card-title">'+ title +'</h5>'+
    '      <p class="card-text">'+ content +'</p>'+
    '      <button type="button" class="btn btn-primary" onclick="UpdateImage()">Update Blog</button>'+
    '      <button type="button" class="btn btn-danger" onclick="addImage()">Delete Blog</button>'+
    '    </div>'+
    '  </div>'
    '</div>';

document.getElementById("addBlog").insertAdjacentHTML("beforebegin", cardTemplate);

function adder(card){
    for(let i=0;i<card.length;i++){
        card.push(card[i])
    }
    return card
}
console.log(adder(card))
}
