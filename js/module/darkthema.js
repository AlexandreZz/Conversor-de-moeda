export function ThemaDark(){
    /*
        * chamando nossos elemento no DOM.
    */
    const bodyDark = document.querySelector('body'), boxContentDark = document.getElementsByClassName('boxContentDark'),
        inputDark = document.getElementsByClassName('inputThemaDark'), darkModeStorage = localStorage.getItem('dark-mode');

    let pointerDom = document.getElementsByClassName('pointer')[0];


    /* 
        * Verificando se o DarkModeStorage está na memória, se estiver, configuramos os atributos nas div`s e input`s 
    */
    if(darkModeStorage){
        bodyDark.setAttribute('dark','true');
        for (const boxContentAtributo of boxContentDark)
            boxContentAtributo.setAttribute('dark','true');

        for (const inputDarkAtributo of inputDark)
            inputDarkAtributo.setAttribute('dark','true');
    }

    pointerDom.addEventListener('click',function(){
        if(pointerDom.style.left == '3px'){
            pointerDom.style.left = '55px';
            /*
                * Nós adicionamos na memória nosso modo escuro
            */ 
            localStorage.setItem('dark-mode',true);
            localStorage.setItem('posicaoAtualDoBotao',pointerDom.style.left);

            /*
                * O "for" está verificando todos os boxContents, então só precisamos adicionar a classe "boxContentDark" em outra div`s para aplicar o tema escuro.
                * Mesma coisa para os nossos input`s, adicionar classe.
            */
        
            bodyDark.setAttribute('dark','true');
            for (const boxContentAtributo of boxContentDark)
                boxContentAtributo.setAttribute('dark','true');
    
            for (const inputDarkAtributo of inputDark)
                inputDarkAtributo.setAttribute('dark','true');

        }else{
            pointerDom.style.left = '3px';

            if(darkModeStorage){
                /*
                    * Removendo atributos em nossos div's e input's.
                */

                bodyDark.removeAttribute('dark');
                for (const boxContentAtributo of boxContentDark)
                    boxContentAtributo.removeAttribute('dark');
                for (const inputDarkAtributo of inputDark)
                    inputDarkAtributo.removeAttribute('dark');
                
                /* 
                    * Nós removemos tudo do nosso localstorage, para retornar o tema padrão.
                */
                
                localStorage.removeItem('dark-mode');
                localStorage.setItem('posicaoAtualDoBotao',pointerDom.style.left)

            }
        }
    })

    pointerDom.style.left =  localStorage.getItem('posicaoAtualDoBotao'); // para retornar posição atual do botao.
}
