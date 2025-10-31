const codes = document.querySelector(".codes");
const code_html = document.getElementById("code-html");
const btn = document.querySelectorAll(".btn");
const title = document.getElementById("title");
const elemnt_stop_play = document.getElementById("stop-play");
const code_css = document.querySelector(".code.css");
const code_js = document.querySelector(".code.js");
const code_run = document.querySelector(".code-run");
const styleCSS = document.getElementById("styleCSS");
const icon2 = document.querySelector(".icon2");
const html_css_js = document.querySelector(".html-css-js");

icon2.onclick = ()=>{
  html_css_js.classList.toggel = "dis";
};
const textCSS = `.box {
  background: blue;
  margin: 5px;
  width: 100px;
  height: 100px;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
  color: #FFF;
  text-transform: uppercase;
  font-size: 1.2em;
  letter-spacing: 1px;
  font-weight: bold;
}

.box1 {
  background: brown;
}

.box2 {
  background: blueviolet;
}

.box3 {
  background: aqua;
}
`;

const textHTML = `  <div class="box1 box">box 1</div>
  <div class="box2 box">box 2</div>
  <div class="box3 box">box 3</div>`

const textJS = `function $(nameElement) {
  const element = document.querySelectorAll(nameElement);
  if (element.length > 1) return element;
  return element[0];
};


// استدعاء العناصر بشكل منفرد

$(".box1").style.background = "green";

$(".box2").style.background = "#123";

$(".box3").style.background = "crimson";

// استدعاء العناصر كافةً

$(".box").forEach(e => {
  e.style.background = "blue";
  e.style.borderRadius = "50%"
  e.textContent = "مرحباً";
  e.style.fontFamily = "serif";
  e.style.fontSize = "1.5em";
});`;

btn.forEach((el, ie) => {
  el.onclick = function () {
    const element = document.querySelector(`.${this.id}`);
    const elementShow = document.querySelector(".code.show");
    if (!element || element.classList.contains("show")) return;
    title.textContent = el.id;
    elementShow ? elementShow.classList.remove("show") : null;
    element.classList.add("show");
  }
});

function stop_play() {
  elemnt_stop_play.onclick = () => {
    elemnt_stop_play.classList.toggle("pause");

    if (elemnt_stop_play.classList.contains("pause")) {
      const elementShow = document.querySelector(".code.show");
      if (elementShow.classList.contains("html")) html();
      if (elementShow.classList.contains("css")) css();
      if (elementShow.classList.contains("js")) js();

    } else {
      html(true);
      css(true);
      js(true);
    };
  }
};
stop_play();



let indexHTML = 0;
let intervHTML;
function html(ac) {
  if (ac) return clearInterval(intervHTML);
  intervHTML = setInterval(() => {
    let code = textHTML.slice(0, indexHTML);
    code_html.innerHTML = Prism.highlight(code, Prism.languages.html, 'html');
    codes.scrollTo({
      top: 100000,
      left: 0,
      "behavior": 'smooth'
    });
    code_run.innerHTML = code;
    if (indexHTML == textHTML.length) {
      clearInterval(intervHTML)
      indexHTML = 0;
      elemnt_stop_play.classList.remove("pause")
    };
    indexHTML++;
  }, 50);
};


let indexCSS = 0;
let intervCSS;
function css(ac) {
  if (ac) return clearInterval(intervCSS);
  intervHTML = setInterval(() => {
    let code = textCSS.slice(0, indexCSS);
    code_css.innerHTML = Prism.highlight(code, Prism.languages.css, 'css');
    codes.scrollTo({
      top: 100000,
      left: 0,
      "behavior": 'smooth'
    });
    styleCSS.innerHTML = code;
    if (indexCSS == textCSS.length) {
      clearInterval(intervHTML);
      indexCSS = 0;
      elemnt_stop_play.classList.remove("pause");
    };
    indexCSS++;
  }, 50);
};

let indexJS = 0;
let intervJS;

const codeJS = document.querySelector(".code.js")
function js(ac) {
  if (ac) return clearInterval(intervJS);
  intervJS = setInterval(() => {
    const code = textJS.slice(0, indexJS);
    code_js.innerHTML = Prism.highlight(code, Prism.languages.js, 'js');

    codes.scrollTo({ top: 100000, left: 0, "behavior": 'smooth' });
    if (indexJS >= 72 && indexJS <= 90) codeJS.scrollTo(10000, 0);
    if (indexJS > 85) codeJS.scrollTo({ top: 0, left: 0, "behavior": "smooth" });

    if (indexJS == textJS.length) {
      clearInterval(intervJS);
      indexJS = 0;
      elemnt_stop_play.classList.remove("pause");
    };

    const script = document.createElement("script");
    script.innerHTML = code;
    document.body.appendChild(script);
    script.remove();
    indexJS++;
  }, 50);
};
