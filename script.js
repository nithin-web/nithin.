var aftersubmit=document.querySelector('#destination_details_form')
aftersubmit.addEventListener('submit',function(event){
    event.preventDefault();
    var name = event.target.elements['name'].value;
    var location =event.target.elements['location'].value;
    var photo =event.target.elements['photo'].value;
    var description=event.target.elements['description'].value;

    for (var i=0;i<aftersubmit.length;i++) {
        aftersubmit.elements[i].value="";
    }
    if(photo.length==0){
        photo= "E:/signpost.jpg";
    }
    var title=document.querySelector('#destinations_container');
    if(title.children.length==0){
        document.getElementById('title').innerHTML="Your Wish List is:"
    }
    var finaldisplay=makingcard(name,location,photo,description);

});
function makingcard(name,location,photo,description){
    var toappend=document.querySelector('#destinations_container');

    var card=document.createElement('div');
    card.className='card';
    toappend.appendChild(card);

    var img=document.createElement('img');
    img.src=photo;
    card.appendChild(img);

    var afterimg=document.createElement('div');
    afterimg.className='card-body';
    card.appendChild(afterimg)

    var afterimgdiv=document.createElement('h3');
    afterimg.innerHTML=name;
    afterimg.appendChild(afterimgdiv);

    var destloc=document.createElement('h4');
    destloc.innerHTML=location;
    afterimg.appendChild(destloc);

    var destdesc=document.createElement('p');
    destdesc.className='card-text';
    destdesc.innerHTML=description;
    afterimg.appendChild(destdesc);

    var remove=document.createElement('button');
    remove.innerHTML='remove'
    afterimg.appendChild(remove);
    remove.addEventListener('click',function(ev){
        var carditem=ev.target.parentElement.parentElement;
        carditem.remove();

        var nocards=document.querySelector('#destinations_container');
        if(nocards.children.length==0){
            document.getElementById('title').innerHTML='Enter destination details'
        }
    })

}