const hero = document.getElementById("name")
const pic = document.getElementById("pic")
const power = document.getElementById("power")
const peculiarity = document.getElementById("peculiarity")

let object  = [
    {name:"Batman",pic:"https://4.bp.blogspot.com/-fa-SAlavrSs/XEN4znqnQgI/AAAAAAAAZgU/utwfD__Bg4E_9vuPu8kiZ0JBE2vELKyFgCEwYBhgL/s400/super_amigos_descansem_em_paz_045.png",power:"detetive",peculiarity:"o nome da sua mãe é o mesmo nome da mãe do Super Homem"},
    {name:"Super Homem",pic:"https://i.ytimg.com/vi/UcsMm8vD1w0/hqdefault.jpg",power:"forte de mais",peculiarity:"Sua mãe tem o mesmo nome da mãe do Homem Morcego"},
    {name:"Mulher Maravilha",pic:"https://3.bp.blogspot.com/-DLfPS9pJ4jU/XEOIaFhFJAI/AAAAAAAAZiE/UC7rUmx1aI0Ek2OMQwomc9kM1NzR4_GeACLcBGAs/s400/super_amigos_descansem_em_paz_065.png",power:"tem um laço magico",peculiarity:"tem um jato invisivel mesmo sabendo vaor"},
    {name:"Flash",pic:"https://infantv.com.br/infantv/wp-content/uploads/2016/07/superamigosreserva_flash.jpg",power:"rapidinho",peculiarity:"tem uma série horrivel"},
    {name:"Aquaman",pic:"https://conteudo.imguol.com.br/c/entretenimento/b6/2017/11/10/o-aquaman-da-serie-superamigos-1510347947334_v2_300x300.jpg",power:"conversar com golfinhos",peculiarity:"conversa com cavalos marinhos também"},
    {name:"Robin",pic:"https://infantv.com.br/infantv/wp-content/uploads/2016/07/robin1.jpg",power:"ser companheiro do Batman",peculiarity:"muito parceiro do Batman"},
    {name:"Super Gêmeos",pic:"http://1.bp.blogspot.com/-J8IKFrFRsJU/TcL3L6ApW0I/AAAAAAAAC_A/Po-J7BmAvB8/s1600/wonder-twins.jpg",power:"Ela pode se transformar em qualquer tipo de animal e ele se transorma em uma poça de água",peculiarity:"são filhos da mesma mãe"}
]

// console.log(object[0].name)
function pane(number){
    hero.innerHTML = object[number].name;
    pic.src = object[number].pic;
    power.innerHTML = `Poder: ${object[number].power}`;
    peculiarity.innerHTML = `Peculiaridade: ${object[number].peculiarity}`;
}