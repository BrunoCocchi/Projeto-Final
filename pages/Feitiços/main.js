
let xhr = new XMLHttpRequest();
let resultado;
let descricoes = [];

xhr.open('GET', 'https://hp-api.onrender.com/api/spells')
xhr.send();



xhr.onreadystatechange = () => {
    if (xhr.readyState == 4 && xhr.status == 200) {
        resultado = JSON.parse(xhr.response);

        console.log(resultado)

        let feit1 = resultado[26];
        descricoes.push(feit1)
        let feit2 = resultado[23];
        descricoes.push(feit2)
        let feit3 = resultado[73];
        descricoes.push(feit3)
        let feit4 = resultado[46];
        descricoes.push(feit4)
        let feit5 = resultado[8];
        descricoes.push(feit5)
        let feit6 = resultado[17];
        descricoes.push(feit6)
        console.log(descricoes)
        
        let item1 = document.createElement('p')
        let itemdesc1 = document.createTextNode(descricoes[0].description)
        item1.appendChild(itemdesc1)
        document.querySelector('#feit1').appendChild(item1); 
        let text1 = document.createElement('h1')
        let itemtext1 = document.createTextNode(descricoes[0].name)
        text1.appendChild(itemtext1)
        document.querySelector('#title1').appendChild(text1)
        

        let item2 = document.createElement('p')
        let itemdesc2 = document.createTextNode(descricoes[1].description)
        item2.appendChild(itemdesc2)
        document.querySelector('#feit2').appendChild(item2);
        let text2 = document.createElement('h1')
        let itemtext2 = document.createTextNode(descricoes[1].name)
        text2.appendChild(itemtext2)
        document.querySelector('#title2').appendChild(text2)

        let item3 = document.createElement('p')
        let itemdesc3 = document.createTextNode(descricoes[2].description)
        item3.appendChild(itemdesc3)
        document.querySelector('#feit3').appendChild(item3);
        let text3 = document.createElement('h1')
        let itemtext3 = document.createTextNode(descricoes[2].name)
        text3.appendChild(itemtext3)
        document.querySelector('#title3').appendChild(text3)

        let item4 = document.createElement('p')
        let itemdesc4 = document.createTextNode(descricoes[3].description)
        item4.appendChild(itemdesc4)
        document.querySelector('#feit4').appendChild(item4);
        let text4 = document.createElement('h1')
        let itemtext4 = document.createTextNode(descricoes[3].name)
        text4.appendChild(itemtext4)
        document.querySelector('#title4').appendChild(text4)

        let item5 = document.createElement('p')
        let itemdesc5 = document.createTextNode(descricoes[4].description)
        item5.appendChild(itemdesc5)
        document.querySelector('#feit5').appendChild(item5);
        let text5 = document.createElement('h1')
        let itemtext5 = document.createTextNode(descricoes[4].name)
        text5.appendChild(itemtext5)
        document.querySelector('#title5').appendChild(text5)

        let item6 = document.createElement('p')
        let itemdesc6 = document.createTextNode(descricoes[5].description)
        item6.appendChild(itemdesc6)
        document.querySelector('#feit6').appendChild(item6);
        let text6 = document.createElement('h1')
        let itemtext6 = document.createTextNode(descricoes[5].name)
        text6.appendChild(itemtext6)
        document.querySelector('#title6').appendChild(text6)


    }
}   