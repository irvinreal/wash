const btnPaquetes = document.querySelector('#btnPaquetes');
const iconoPedir = document.querySelector('#iconoPedir')
const titulo_section_one = document.querySelector('#titulo-section-one')
const bg_white = document.querySelector('.bg-white')
const bg_white_content = document.querySelector('#bg-white')

window.addEventListener('load', function(){
    titulo_section_one.classList.add('entrada-titulo')
})


const cargarImagen = (entradas, observador) => {


    entradas.forEach(entrada => {
        if(entrada.isIntersecting){
            bg_white_content.classList.add('entrada-titulo')
            console.log(entrada.target);
        } else {
            bg_white_content.classList.remove('entrada-titulo')
        }
    });
}

const observador = new IntersectionObserver(cargarImagen, {
    root: null,
    rootMargin: '0px 0px 0px 0px',
    threshold: .9
});

observador.observe(bg_white);

// const repetidor = [0,1]

// addEventListener('load', function(){
//     console.log('cargando');
//     this.setInterval(()=>{
//         for (let i = 0; i < repetidor.length; i++) {
//             if(i = 1){
//                 i = 0;
//             }
//             const element = repetidor[i];
//             console.log(element)
//             if(i = 0){
//                 iconoPedir.classList.add('prender')
//             } else {
//                 iconoPedir.classList.remove('prender')
//             }
//         }
//     }, 1000)
// })

// function repetir(){
//     for (let i = 0; i < repetidor.length; i++) {
//         // const element = repetidor[i];
//         // if(i = 1){
//         //     i = 0;
//         // }
//         // console.log(element);
//     }
// }