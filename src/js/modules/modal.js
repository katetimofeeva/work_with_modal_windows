const modals = () => {
   function bindModal(buttonSelector, modalSelector, closeSelector, closeALL = true) {
     const   button = document.querySelectorAll(buttonSelector),
        modal= document.querySelector(modalSelector),
        close = document.querySelector(closeSelector),
        scroll = calcScroll();
        //windows = document.querySelectorAll('[data-modal]');
        
    
        button.forEach(item => {
            item .addEventListener('click', (event) => {
            if (event.target) {
                event.preventDefault();
            }

          
            closeModalWindow ();
            /*windows.forEach(item => {
                item.style.display ='none';
            });*/

            modal.style.display = "block";
            document.body.style.overflow = "hidden";
            document.body.style.marginRight = `${scroll}px`;
            });
         });

    
        close.addEventListener('click', () =>{
            /*windows.forEach(item => {
                item.style.display = 'none';
            });*/
            closeModalWindow ();
            modal.style.display = 'none';
            document.body.style.overflow = '';
            
            if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)){
            }  else {
            document.body.style.marginRight = `0px`;
        }
            
        });

    modal.addEventListener('click', (e) => {
        if (e.target === modal && closeALL) {
           /* windows.forEach(item => {
                item.style.display = 'none';
            });*/
            closeModalWindow ();
            modal.style.display = 'none';

        document.body.style.overflow = '';
            if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
            } else {
                document.body.style.marginRight = `0px`;
            }
        }

    });
} 

    function closeModalWindow (){
        const windows = document.querySelectorAll('[data-modal]');
        windows.forEach(item => {
            item.style.display ='none';
        });

    }  

    function showModalByTime (selector, time) {
        setTimeout (() => {
            document.querySelector(selector).style.display = "block";
            document.body.style.overflow = "hidden";
        }, time);
    }

    function calcScroll () {
        let div = document.createElement('div');

        div.style.width ='50px';
        div.style.height = '50px';
        div.style.overflow ='scroll';
        div.style.visibility = 'hidden';

        document.body.appendChild(div);
        let scrollWidth = div.offsetWidth - div.clientWidth;
        div.remove();
        return scrollWidth;

    }

    bindModal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close'); 
    bindModal('.phone_link ', '.popup', '.popup .popup_close' );
    bindModal('.glazing_price_btn ', '.popup_calc', '.popup_calc_close');
    bindModal('.popup_calc_button', '.popup_calc_profile','.popup_calc_profile_close', false);
    bindModal('.popup_calc_profile_button', '.popup_calc_end', '.popup_calc_end_close', false);
    showModalByTime('.popup', 60000);
    
    
    
};


export default modals;



