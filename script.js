/*
* Программа для скрытия открытия табов
*
* Переменные
* * tabBlock - контейнер внутри которого лежат все linkTabs
* contents - блоки контента, который мы скрываем по ссылке на определенную linkTabs
* Соответствующие классы прописаны в css файле
* 
* Функции
* showContent(num) - скрывает все элементы и затем показывет элемент num
* fadeContent(num) - скрывввает все элементы начиная с номера num

* */

window.onload = function () {
  let tabBlock = document.querySelector('.info-header');
  let linkTabs = document.querySelectorAll('.info-header-tab');
  let contents = document.querySelectorAll('.info-tabcontent');

  function fadeContent(num) {
      for (let i = num; i < contents.length; i++){
          contents[i].classList.remove('show');
          contents[i].classList.add('hide');
      }
  }
    fadeContent(1);

  function showContent(num) {
      fadeContent(0);
      contents[num].classList.remove('hide');
      contents[num].classList.add('show');
  }

    tabBlock.addEventListener('click', function (event) {
        let target = event.target;
        for (let i = 0; i < linkTabs.length; i++){
          if (target == linkTabs[i]){
              showContent(i);
          }
        }
    })
};