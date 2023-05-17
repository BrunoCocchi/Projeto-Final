
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
        let nome4 = resultado[30].name;
        nomes.push(nome4)
        let nome5 = resultado[7].name;
        nomes.push(nome5)
        let nome6 = resultado[16].name;
        nomes.push(nome6)
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
        
        let item4 = document.createElement('h1')
        let itemdesc4 = document.createTextNode(nomes[3])
        item4.appendChild(itemdesc4)
        document.querySelector('.albus__dumbledore__title').appendChild(item4);

        let item5 = document.createElement('h1')
        let itemdesc5 = document.createTextNode(nomes[4])
        item5.appendChild(itemdesc5)
        document.querySelector('.severus__snape__title').appendChild(item5);

        let item6 = document.createElement('h1')
        let itemdesc6 = document.createTextNode(nomes[5])
        item6.appendChild(itemdesc6)
        document.querySelector('.voldemort__title').appendChild(item6);



        

    }
}   