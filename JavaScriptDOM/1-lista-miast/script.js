let cities = ['Warsaw', 'Berlin', 'Paris', 'London', 'New York', 'Tokio', 'Moscow'];

let olElement = document.createElement('ol');
olElement.setAttribute("id", 'Miasta');


for (let i = 0; i < cities.length; i++) {
    let li = document.createElement("li");
    li.innerText = cities[i];
    olElement.appendChild(li);
    li.setAttribute('class','miasto')
}



document.getElementsByTagName('body')[0].appendChild(olElement);