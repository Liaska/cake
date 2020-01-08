
$(document).mouseup(function(e) 
{
    var container = $(".select_one");
    var selectItemsOne = $(".select__itemone");
    var selectItemsTwo = $(".select__itemtwo");
    var selectItemsThree = $(".select__itemthree");
    if (!container.is(e.target) && container.has(e.target).length === 0) 
    {
        $(".body_one").hide();
    }
    else 
    { 
        $(".body_one").show();
    }

    var containertwo = $(".select_two");
    if (!containertwo.is(e.target) && containertwo.has(e.target).length === 0) 
    {
        $(".body_two").hide();
    }
    else 
    { 
        $(".body_two").show();
    }

    var containerthree = $(".select_three");
    if (!containerthree.is(e.target) && containerthree.has(e.target).length === 0) 
    {
        $(".body_three").hide();
    }
    else 
    { 
        $(".body_three").show();
    }

    if (selectItemsOne.is(e.target)){
        $(".body_one").hide();    
    }

    if (selectItemsTwo.is(e.target)){
        $(".body_two").hide();    
    }

    if (selectItemsThree.is(e.target)){
        $(".body_three").hide();    
    }
});

let select = function () {
    let selectHeader = document.querySelectorAll('.select__header');
    let selectItem = document.querySelectorAll('.select__item');

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
     }


select();
omegavoin ();

