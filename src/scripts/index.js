import '../styles/index.scss';

$("button").on("click", () => { // Khi click button
    System.import('../styles/xinchao.scss').then(()=>{ // chúng ta sẽ import xinchao.css vào
        console.log("add file xinchao.css thành công")
    });
});