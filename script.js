

let select = function () {
    let selectHeader = document.querySelectorAll('.select__header');
    let selectItem = document.querySelectorAll('.select__item');
    let selectOne = document.querySelector('.select_one');
    let selectThree = document.querySelector('.select_three');
    let selectTwo = document.querySelector('.select_two');
    let allSelect = [selectOne, selectTwo, selectThree];
    
    selectHeader.forEach(item => {
        item.addEventListener('click', selectToggle)
    });

    selectItem.forEach(item => {
        item.addEventListener('click', selectChoose)
    });

    function selectToggle() {
        this.parentElement.classList.toggle('is-active');
    }

    function selectChoose() {
        let text = this.innerText,
            select = this.closest('.select'),
            currentText = select.querySelector('.select__current');
        currentText.innerText = text;
        select.classList.remove('is-active');
    }

    document.onclick = function(e) {
        if (e.target != document.querySelector('.select__headerone') && e.target != document.querySelector('.select__currentone')
        && e.target != document.querySelector('.select__headertwo') && e.target != document.querySelector('.select__currenttwo')
        && e.target != document.querySelector('.select__headerthree') && e.target != document.querySelector('.select__currentthree')) {
          allSelect.forEach(function (el) {
            el.classList.remove("is-active");}
          )}
      }

      document.querySelector('.select__headerone').onclick = function(e){
        selectThree.classList.remove("is-active");
        selectTwo.classList.remove("is-active");
      }
    
      document.querySelector('.select__headertwo').onclick = function(e){
        selectOne.classList.remove("is-active");
        selectThree.classList.remove("is-active");
      }

      document.querySelector('.select__headerthree').onclick = function(e){
        selectOne.classList.remove("is-active");
        selectTwo.classList.remove("is-active");
      }
 }

select();

