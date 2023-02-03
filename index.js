function findGif() {
    let q = document.getElementById('serchGif').value;

    fetch(`https://api.giphy.com/v1/gifs/search?api_key=EtVLIEKThUFqMDfAwS4KkeyOisuLiK6v&q=${q}&limit=5&offset=0&rating=g&lang=en`)
    .then(response => response.json())
    .then(gif => {
        console.log(gif)
        for(let i = 0; i < 5; i++){
            //создаю переменную, образующую новый элемент, передав в параметре имя тега <img /> (в данном случае) выводящий гифки 
            let imgContainer = document.createElement('img')
            //добавляю новый атрибут у выбранного элемента (в данном случае) и указываю параметры, необходимые для выдачи результата поиска гивок (или этим же образом изменяю значение существующего атрибута у выбранного элемента)
            imgContainer.setAttribute('src', gif.data[i].images.fixed_height.url);
            //обращаюсь к тегу div с id контейнер при помощи метода append,позволяющего вставить в конец какого-либо элемента другой элемент. Параметром метод принимает элемент, как правило созданный через createElement, либо строку. Можно добавить сразу несколько элементов или строк, перечислив их через запятую.
            container.append(imgContainer);
        }
    })
    .catch(error => console.log(error));
} 
