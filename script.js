

let cd = document.getElementById('code')
let pr = document.getElementById('preview')
const btn = document.querySelector('.btn')
const output = document.querySelector('.content')
let html = document.getElementById('html')
let css = document.getElementById('css')
let copy = document.getElementById('copy')




cd.addEventListener('click', showCode)
pr.addEventListener('click', showPreview)

function copyCode(){
    let copy = document.getElementById('copy')
    let content = document.querySelector('.content').innerText
    
    
    navigator.clipboard.writeText(content).then(() => {
        copy.style.color = 'green'
        copy.innerText = 'Copied!';
        setTimeout(() => {
            copy.style.color = '#af1818'
            copy.innerText = 'Copy';
        }, 2000);
    }).catch(err => {
        console.error('Failed to copy text: ', err);
    });
}

function showCode() {
    let content = `<div class="loader">
        <div class="loading"></div>
    </div>`

    let btn1 = `<button id="copy" class='copy'>copy</button><button id="html">HTML</button><button id="css">CSS</button><button id="preview">preview</button>`

    output.innerText = content
    btn.innerHTML = btn1

    // Reattach preview button listener
    document.getElementById('preview').addEventListener('click', showPreview)
    document.getElementById('css').addEventListener('click', showCss)
    document.getElementById('html').addEventListener('click', showHtml)
    document.getElementById('copy').addEventListener('click', copyCode)
}

function showPreview() {
    let content = `<div class="loader">
        <div class="loading"></div>
    </div>`

    let btn2 = `<button id="code">code</button><button id="preview">preview</button>`

    output.innerHTML = content
    btn.innerHTML = btn2

    // Reattach code button listener
    document.getElementById('code').addEventListener('click', showCode)
    document.getElementById('preview').addEventListener('click', showPreview)
}

function showHtml(){
    let content = `<div class="loader">
        <div class="loading"></div>
    </div>`

    output.innerText = content
}

function showCss() {
    let content = `
.loader{
    position: absolute;
    height: 10px;
    width: 90%;
    margin-left: 3%;
    margin-top: 25%;
    background-color: #280505;
    border-radius: 10px;
}

.loading{
    background-color: red;
    box-shadow: red 0 0 10px;
    border-radius: 10px;
    animation: loading 3s infinite;
    height: 10px;
}

@keyframes loading{
    from{
        width: 2%;
    } to{
        width: 100%;
    }
}`

    output.innerText = content
}




const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(65, window.innerWidth / window.innerHeight, 0.1, 1000);

const geometry = new THREE.IcosahedronGeometry(2, 2);
const material = new THREE.LineBasicMaterial({ color: '#f00' });
let cube = new THREE.Line(geometry, material);

scene.add(cube);

camera.position.z = 4;
let canvas = document.querySelector('#draw')
let renderer = new THREE.WebGLRenderer({ canvas });
renderer.setSize(300, 150);

function animate() {
    window.requestAnimationFrame(animate)
    renderer.render(scene, camera);
    cube.rotation.y += 0.01;
    cube.rotation.z += 0.01;
}

animate()




const canvas_content = document.querySelector('.canvas')
const canvas_btn = document.querySelector('.canvas_btn')
const canvas_code = document.getElementById('canvas_code').addEventListener('click', canvas_code_btn)
const canvas_preview = document.getElementById('canvas_preview').addEventListener('click', canvas_preview_btn)
let canvas_html = document.getElementById('canvas_html')
let canvas_css = document.getElementById('canvas_css')
let canvas_js = document.getElementById('canvas_js')
let canvas_copy = document.getElementById('canvas_copy')

function canvas_code_btn(){
    const head = `<button id='canvas_copy' class='copy'> copy </button><button id='canvas_html'> HTML </button><button id='canvas_css'> CSS </button><button id='canvas_js'> JS </button><button id='canvas_preview'> Preview </button>`
    const content = `<canvas id="draw"></canvas>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/0.160.0/three.min.js"
        integrity="sha512-vnmn/Qqn6aG0POAc9mIGzjq0IybrvxJXYDafNvp9JSnDGxeF3pbkSqLvf+YGd5ku63pT7sa/jxHn7/d0mU8+tA=="
        crossorigin="anonymous" referrerpolicy="no-referrer"></script>`
    
    canvas_btn.innerHTML = head
    canvas_content.innerText = content

    document.getElementById('canvas_preview').addEventListener('click', canvas_preview_btn)
    document.getElementById('canvas_html').addEventListener('click', canvas_html_btn)
    document.getElementById('canvas_css').addEventListener('click', canvas_css_btn)
    document.getElementById('canvas_js').addEventListener('click', canvas_js_btn)
    document.getElementById('canvas_copy').addEventListener('click', canvas_copy_btn)
}

function canvas_preview_btn() {
    const head = `<button id='canvas_code'> code </button><button id='canvas_preview'> Preview </button>`
    const content = `<canvas id="draw"></canvas>`

    canvas_btn.innerHTML = head
    canvas_content.innerHTML = content
    canvas = document.getElementById('draw')
    renderer = new THREE.WebGLRenderer({ canvas });

    document.getElementById('draw')
    document.getElementById('canvas_preview').addEventListener('click', canvas_preview_btn)
    document.getElementById('canvas_code').addEventListener('click', canvas_code_btn)
}

function canvas_html_btn() {
    const content = `<canvas id="draw"></canvas>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/0.160.0/three.min.js"
        integrity="sha512-vnmn/Qqn6aG0POAc9mIGzjq0IybrvxJXYDafNvp9JSnDGxeF3pbkSqLvf+YGd5ku63pT7sa/jxHn7/d0mU8+tA=="
        crossorigin="anonymous" referrerpolicy="no-referrer"></script>`

    canvas_content.innerText = content
 }

function canvas_css_btn() {
    const content = `canvas{
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            box-shadow: #500 0 0 40px;
            border-radius: 20px;
        }`

    canvas_content.innerText = content
}

function canvas_js_btn() {
    const content = `const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(65, window.innerWidth / window.innerHeight, 0.1, 1000);

const geometry = new THREE.IcosahedronGeometry(2, 2);
const material = new THREE.LineBasicMaterial({ color: '#f00' });
let cube = new THREE.Line(geometry, material);

scene.add(cube);

camera.position.z = 4;
const canvas = document.querySelector('#draw')
const renderer = new THREE.WebGLRenderer({ canvas });
renderer.setSize(300, 150);

function animate() {
    window.requestAnimationFrame(animate)
    renderer.render(scene, camera);
    cube.rotation.y += 0.01;
    cube.rotation.z += 0.01;
}

animate()`

    canvas_content.innerText = content
}

function canvas_copy_btn(){
    let copy = document.getElementById('canvas_copy')
    let content = document.querySelector('.canvas').innerText


    navigator.clipboard.writeText(content).then(() => {
        copy.style.color = 'green'
        copy.innerText = 'Copied!';
        setTimeout(() => {
            copy.style.color = '#af1818'
            copy.innerText = 'Copy';
        }, 2000);
    }).catch(err => {
        console.error('Failed to copy text: ', err);
    });
}

let tail_container = document.querySelector('.tail')

tail_container.addEventListener("mousemove", (e) => {
    const trail = document.createElement("div");
    trail.className = "trail";

    trail.style.left = e.pageX + "px";
    trail.style.top = e.pageY + "px";
    trail.style.zIndex = '20'

    document.body.appendChild(trail);

    setTimeout(() => {
        gsap.to('.trail', {
            duration: .5,
            width: 0,
            height: 0,
            opacity: 0,
        })
        trail.remove();
    }, 100);

    window.lastX = e.pageX;
    window.lastY = e.pageY;
});


gsap.from('.logo', {
    duration: 3,
    scale: 0.3,
    opacity: 0,
})

gsap.from('nav a' ,{
    duration: 3,
    scale: 0.3,
    opacity: 0,
})

gsap.from('.top', {
    duration: 2,
    boxShadow: 'red 0 0 0',
    y: -100,
    opacity: 0,
})

gsap.from('.center h3', {
    duration: 2,
    scale: 0.6,
    opacity: 0,
})

gsap.to('.center h3', {
    delay: 2,
    duration: 1,
    textShadow: '#af1818 0 0 5px'
})

gsap.to('.center h3 span', {
    delay: 2,
    duration: 1,
    scale: 0,
})

gsap.from('.tagline',{
    delay: 2,
    width: 0,
    duration: 2,
})

gsap.to('#out',{
    duration: 15,
    yoyo: true,
    repeat: -1,
    y: 470,
    ease: 'linear',
})

gsap.from("#out", {
    opacity: 0,
    scale: 0.5,
    duration: 2,
});

gsap.from(".sidebar ul li", {
    opacity: 0,
    y: 30,
    stagger: 0.2,
    duration: 1,
    ease: "power2.out"
});

gsap.from(".container", {
    opacity: 0,
    y: 30,
    stagger: 0.2,
    duration: 1,
    delay:1,
    ease: "power2.out"
});

gsap.from(".about-section p", {
    opacity: 0,
    y: 30,
    stagger: 0.2,
    duration: 1,
    ease: "power2.out"
});

