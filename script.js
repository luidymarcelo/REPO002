const s=function(){
    const t=document.createElement("link").relList;
    if(t&&t.supports&&t.supports("modulepreload"))return;
    for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);
    new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});
    function i(e){const r={};
    return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}};s();

      const translations = {
        en: {
          greeting: "Hello! I am Luidy de Oliveira, a Systems Analyst and Junior Software Developer. I have a degree in Data Analysis and work with the ADVPL, Harbour, and JavaScript languages, as well as developing solutions integrated with the ERP Protheus system from TOTVS.",
          work: "I currently work at Itacorda, a company in the rope industry with branches in Brazil and Paraguay, and its headquarters in Brazil. I feel very happy and take great pleasure in what I do, and I am always seeking new knowledge. I enjoy reading books about system development and data science. In the future, I aim to specialize in software development and obtain some Oracle certifications to work as a DBA, where I already have extensive knowledge, but I still need more experience to mature further.",
          contact: "If you'd like to get to know me better, follow me on my social media below!"
        },
        pt: {
          greeting: "Olá! sou Luidy de Oliveira um Analista de Sistemas e desenvolvedor Jr de software, sou formado em Análise de dados e atuo utilizando as linguagens ADVPL, Harbour e JavaScript, também atuo no desenvolvimento de soluções em sistemas integrados ao ERP Protheus.",
          work: "Atualmente trabalho na empresa Itacorda, empresa no ramo de corda com filial em Brasil e Paraguai sendo sua sede no Brasil, e me sinto muito feliz, tenho muito prazer em que faço e estou sempre buscando novos conhecimentos, gosto de leitura em livros de desenvolvimento de sistemas e ciência de dados. Para o futuro desejo me especializar na área de desenvolvimento de software e conquistar algumas certitificações Oracle para atuação em DBA onde já tenho um vasto conhecimento porém ainda necessito de mais amadurecimento.",
          contact: "Se quiser me conhecer melhor acesse minhas redes sociais abaixo!"
        },
        es: {
            greeting:" ¡Hola! Soy Luidy de Oliveira, un Analista de Sistemas y desarrollador de software Jr. Soy graduado en Análisis de Datos y trabajo utilizando los lenguajes ADVPL, Harbour y JavaScript. También desarrollo soluciones en sistemas integrados al ERP Protheus de la empresa TOTVS.",
            work: " Actualmente, trabajo en Itacorda, una empresa del sector de cuerdas con sucursales en Brasil y Paraguay, siendo su sede en Brasil. Me siento muy feliz y disfruto mucho de lo que hago, siempre estoy en busca de nuevos conocimientos. Me gusta leer libros sobre desarrollo de sistemas y ciencia de datos. En el futuro, deseo especializarme en el área de desarrollo de software y obtener algunas certificaciones de Oracle para trabajar como DBA, donde ya tengo un amplio conocimiento, pero aún necesito más experiencia para seguir madurando.",
            contact: " ¡Si quieres conocerme mejor, visita mis redes sociales abajo!"
        },
      };

      document.getElementById('languageSwitcher').addEventListener('change', function() {
        const lang = this.value;
        document.getElementById('greeting').textContent = translations[lang].greeting;
        document.getElementById('work').textContent = translations[lang].work;
        document.getElementById('contact').textContent = translations[lang].contact;
      });
