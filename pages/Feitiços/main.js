
let xhr = new XMLHttpRequest();
let resultado;
let descricoes = [];

xhr.open('GET', 'https://hp-api.onrender.com/api/spells')
xhr.send();



xhr.onreadystatechange = () => {
    if (xhr.readyState == 4 && xhr.status == 200) {
        resultado = JSON.parse(xhr.response);

        console.log(resultado)

        let feit1 = resultado[26].description;
        descricoes.push(feit1)
        let feit2 = resultado[23].description;
        descricoes.push(feit2)
        let feit3 = resultado[73].description;
        descricoes.push(feit3)
        let feit4 = resultado[46].description;
        descricoes.push(feit4)
        let feit5 = resultado[8].description;
        descricoes.push(feit5)
        let feit6 = resultado[17].description;
        descricoes.push(feit6)
        console.log(descricoes)
        
        let item1 = document.createElement('p')
        let itemdesc1 = document.createTextNode(descricoes[0])
        item1.appendChild(itemdesc1)
        document.querySelector('#feit1').appendChild(item1);

        let item2 = document.createElement('p')
        let itemdesc2 = document.createTextNode(descricoes[1])
        item2.appendChild(itemdesc2)
        document.querySelector('#feit2').appendChild(item2);

        let item3 = document.createElement('p')
        let itemdesc3 = document.createTextNode(descricoes[2])
        item3.appendChild(itemdesc3)
        document.querySelector('#feit3').appendChild(item3);

        let item4 = document.createElement('p')
        let itemdesc4 = document.createTextNode(descricoes[3])
        item4.appendChild(itemdesc4)
        document.querySelector('#feit4').appendChild(item4);

        let item5 = document.createElement('p')
        let itemdesc5 = document.createTextNode(descricoes[4])
        item5.appendChild(itemdesc5)
        document.querySelector('#feit5').appendChild(item5);

        let item6 = document.createElement('p')
        let itemdesc6 = document.createTextNode(descricoes[5])
        item6.appendChild(itemdesc6)
        document.querySelector('#feit6').appendChild(item6);


    }
}   