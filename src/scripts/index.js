import '../styles/index.scss';
import '../styles/index2.scss';

var btn = document.getElementsByTagName('button')[0];
btn.addEventListener("click", () => { // Khi click button
    System.import('../styles/xinchao.scss').then(()=>{ // chúng ta sẽ import xinchao.css vào
        console.log("add file xinchao.css thành công")
    });
    console.log(3);
});