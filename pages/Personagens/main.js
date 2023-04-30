
let xhr = new XMLHttpRequest();
let resultado;
let nomes = [];

xhr.open('GET', 'https://hp-api.onrender.com/api/characters')
xhr.send();



xhr.onreadystatechange = () => {
    if (xhr.readyState == 4 && xhr.status == 200) {
        resultado = JSON.parse(xhr.response);

        console.log(resultado)

        let nome1 = resultado[0].name;
        nomes.push(nome1)
        let nome2 = resultado[2].name;
        nomes.push(nome2)
        let nome3 = resultado[1].name;
        nomes.push(nome3)
        console.log(nomes)
        
        let item1 = document.createElement('h1')
        let itemdesc1 = document.createTextNode(nomes[0])
        item1.appendChild(itemdesc1)
        document.querySelector('.harry__potter__title').appendChild(item1);

        let item2 = document.createElement('h1')
        let itemdesc2 = document.createTextNode(nomes[1])
        item2.appendChild(itemdesc2)
        document.querySelector('.rony__weasley__title').appendChild(item2);

        let item3 = document.createElement('h1')
        let itemdesc3 = document.createTextNode(nomes[2])
        item3.appendChild(itemdesc3)
        document.querySelector('.hermione__granger__title').appendChild(item3);

    }
}   