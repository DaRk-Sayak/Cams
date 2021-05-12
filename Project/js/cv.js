console.log("Cv project");
const data=[
    {
        name: 'Rohan Das',
        age: 18,
        city:'Kolkata',
        lang:'JavaScript',
        image: 'https://randomuser.me/api/portraits/men/10.jpg'
    },

    {
        name: 'Sayak Sarkar',
        age: 23,
        city:'Kolkata',
        lang:'Java',
        image: 'https://randomuser.me/api/portraits/men/69.jpg'
    },

    {
        name: 'Anwesha Basu',
        age: 21,
        city:'Kolkata',
        lang:'English',
        image: 'https://randomuser.me/api/portraits/women/80.jpg'
    },
]

function Iterator(profiles){
    let nextIndex=0;
    return{
        next: function(){
            return nextIndex<profiles.length?
            {value:profiles[nextIndex++],done:false}:
            {done:true}
        }
    };
}
const cand= Iterator(data);
nextCv();
const next=document.getElementById('btn');
next.addEventListener('click',nextCv);


function nextCv(){

    const currentCand=cand.next().value;
    let image = document.getElementById('image');
    let profile = document.getElementById('profile');
    if(currentCand != undefined){
    image.innerHTML = `<img src='${currentCand.image}'>`;
    profile.innerHTML=`<ul class="list-group">
    <li class="list-group-item">Name: ${currentCand.name}</li>
    <li class="list-group-item">Age: ${currentCand.age}</li>
    <li class="list-group-item">City: ${currentCand.city}</li>
    <li class="list-group-item">Language: ${currentCand.lang}</li>
  </ul>`;
    }
    else
    {
        alert('End of application');
        window.location.reload();
    }
}