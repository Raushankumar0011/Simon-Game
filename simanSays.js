let gameSeq=[];
    let userSeq=[];

    let btns=['yellow','red','green','orange'];

    let started=false;
    let level=0;
    
    let h3=document.querySelector('h3')
    document.addEventListener('keypress',function(){
        if(started== false){
            console.log('game is started');
            started=true;

            levelUp();
        }
    });
    function btnFlash(btn){
        btn.classList.add('flash');
        setTimeout(function(){
            btn.classList.remove('flash');
        },250);

    }
    function userFlash(btn){
        btn.classList.add('userFlash');
        setTimeout(function(){
            btn.classList.remove('userFlash');
        },250);
    }


    function levelUp(){
        userSeq=[];
        level++;
        h3.innerText=`Level ${level}`;
        let randIdx=Math.floor(Math.random() *3);
        let randColor=btns[randIdx];
        let randbtn=document.querySelector(`.${randColor}`);
       gameSeq.push(randColor);
       console.log(gameSeq);
        btnFlash(randbtn);

    }
     function checkAns(idx){
        // console.log('current level'+level);
        
        if(userSeq[idx]===gameSeq[idx]){
            if(userSeq.length==gameSeq.length){
                setTimeout(levelUp,1000)
            }

        }
        else{
            h3.innerHTML=`Game Over!Your score was <b>${level}</br> prep Press any key to start`;
                document.querySelector('body').style.backgroundColor='red';
                setTimeout(function(){
                    document.querySelector('body').style.backgroundColor ="white";
                },250);
            reset();
        }
     }
    function btnPress(){
        let btn=this;
        userFlash(btn);
        let userColor=btn.getAttribute("id");
        console.log(userColor);
        userSeq.push(userColor);
        checkAns(userSeq.length-1);

    }

    let allBtns=document.querySelectorAll('.btn');
    for(let btn of allBtns){
        btn.addEventListener("click",btnPress);
    }

    function reset(){
        started=false;
        gameSeq=[];
        userSeq=[];
        level=0;
    }