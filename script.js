score = 0;
cross = true;
fg = 0;
window.addEventListener('keydown', (event) => {
    console.log(event.key);

    if(event.key == 'ArrowUp')
    {
        bheem = document.querySelector('.bheem');
        bheem.classList.add('animatebheem');

        setTimeout(() => {
            bheem.classList.remove('animatebheem');
        }, 600);
    }

        if(event.key == 'ArrowRight')
      {
        bheem = document.querySelector('.bheem');
        setx = parseInt(window.getComputedStyle(bheem,null).getPropertyValue('left'));

        bheem.style.left = setx + 112 + 'px';
      }

        if(event.key == 'ArrowLeft')
      {
        bheem = document.querySelector('.bheem');
        setx = parseInt(window.getComputedStyle(bheem,null).getPropertyValue('left'));

        bheem.style.left = (setx - 112) + 'px';
      }
});

setInterval(() => {
    //cross = true;
    bheem = document.querySelector('.bheem');
    gameover = document.querySelector('.gameover');
    obsticle = document.querySelector('.hulk');

    dx = parseInt(window.getComputedStyle(bheem,null).getPropertyValue('left'));
    dy = parseInt(window.getComputedStyle(bheem,null).getPropertyValue('top'));

    dx1 = parseInt(window.getComputedStyle(obsticle,null).getPropertyValue('left'));
    dy1 = parseInt(window.getComputedStyle(obsticle,null).getPropertyValue('top'));

    setx = Math.abs(dx1 - dx);
    sety = Math.abs(dy1 - dy);

    //console.log(setx,sety);
    if(setx<93 && sety<52)
    {
        gameover.style.visibility = 'visible';
        obsticle.classList.remove('obsticalemove');
        gameover = document.querySelector('.gameover');
        document.getElementById("over").innerHTML = "Game Over";
    }


    else if(setx<150 && cross == true)
    {
        score+=1;
        updatescore(score);
        cross = false;

        setTimeout(() => {
            cross = true;
        }, 1000);

        setTimeout(() => {
            aniDur = parseFloat(window.getComputedStyle(obsticle, null).getPropertyValue('animation-duration'));
            newDur = aniDur - 0.1;
            obsticle.style.animationDuration = newDur + 's';
            console.log('New animation duration: ', newDur);


        }, 700);
    }

}, 100);
function updatescore(score){

     document.getElementById("scorecount").innerHTML = "Your Score: " + score; 
}