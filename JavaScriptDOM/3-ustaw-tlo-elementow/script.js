const setBackground = () => {
    let p1 = document.querySelector('.first');
    let p2 = document.querySelector('.last');
    

    p1.style.backgroundColor = 'red';
    p2.style.backgroundColor = 'blue';

    // jezeli obiekt ma juz w css nadany background to :
    p1.classList.add('bg-red'); 
    //  lub .toggle , ze wlaczasz i wylaczasz. 

}

let btnSetBackground = document.getElementById('set-background');

btnSetBackground.addEventListener('click', setBackground);



// $ - 