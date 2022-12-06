# Instruções

* Instalação inicial funciona perfeitamente mesmo com as tecnologias mais novas
* Parte de Vue funciona quase 100%, porém o v-app-bar por padrão fica por cima do v-content forçando a darmos um margin-top pra ver o conteúdo 
* Não se pode mais criar arquivos com nomes comuns, é obrigatório usar nomes_compostos, NomesCompostos, nomesCompostos
* Problemas com o ipcRenderer, necessário adicionar o trecho seguinte no arquivo vue.config.js:
  ```
    electronBuilder: {
        nodeIntegration: true
    },
  ```
* Os problemas de fato estão nas partes envolvendo Vue e Electron, todo o JavaScript e Node utilizados na seção estão funcionando normalmente.
* Uma boa adição na regravação é disponibilizar logo de cara na seção as legendas para os alunos indo usando elas como teste desde o inicío, coisa que não acontece na seção atualmente. 
