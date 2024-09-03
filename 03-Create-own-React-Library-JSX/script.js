    //Custom React
function customRender(reatcElemet,Container){ 
    //Version -One
    /*
    const domElement=document.createElement(reatcElemet.type);
    domElement.innerHTML=reatcElemet.children;
    domElement.setAttribute('href',reatcElemet.props.href);
    domElement.setAttribute('target',reatcElemet.props.target);

    Container.appendChild(domElement);
    */

   //Version -Two
   const domElement=document.createElement(reatcElemet.type);
   Container.innerHTML=reatcElemet.children;
    for(const prop in reatcElemet.props){
        if (prop==="children")  continue;
        domElement.setAttribute(prop,reatcElemet.props[prop]);
    }
    Container.appendChild(domElement);
}

const reatcElemet={
    type:'a',
    props:{
        href:"https://google.com",
        target:"_blank"
    },
    children:'click me to visit Google',
}
const mainContainer= document.querySelector("#root");

customRender(reatcElemet, mainContainer);