    // 
// Hover JS 
    //   
document.getElementById('change_hover').addEventListener('mouseover', async function() {
    var textDictory = '1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ{}[]!@#$%^&*()+|:<>?/.,;"`~-=}';
    var text = document.getElementById('change_hover');
    var originalText = text.innerText;
    var changeText = 'Home';
    if (originalText.length < changeText.length) {
        originalText = originalText + ' '.repeat(changeText.length - originalText.length);
    }
    var textArray =  [...Array(originalText.length).keys()];
    for await (let i of textArray) {
        text.innerHTML = changeText.slice(0,i) + textDictory[Math.floor(Math.random() * textDictory.length)] +originalText.slice(i+1, originalText.length-1);
        await new Promise(r => setTimeout(r, 100));
        text.innerHTML = changeText.slice(0,i+1) + originalText.slice(i+1, originalText.length);
        await new Promise(r => setTimeout(r, 100));
    }
    // 
});
document.getElementById('change_hover1').addEventListener('mouseover', async function() {
    var textDictory = '1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ{}[]!@#$%^&*()+|:<>?/.,;"`~-=}';
    var text = document.getElementById('change_hover1');
    var originalText = text.innerText;
    var changeText = 'About';
    if (originalText.length < changeText.length) {
        originalText = originalText + ' '.repeat(changeText.length - originalText.length);
    }
    var textArray =  [...Array(originalText.length).keys()];
    for await (let i of textArray) {
        text.innerHTML = changeText.slice(0,i) + textDictory[Math.floor(Math.random() * textDictory.length)] +originalText.slice(i+1, originalText.length-1);
        await new Promise(r => setTimeout(r, 100));
        text.innerHTML = changeText.slice(0,i+1) + originalText.slice(i+1, originalText.length);
        await new Promise(r => setTimeout(r, 100));
    }
    // 
});
document.getElementById('change_hover2').addEventListener('mouseover', async function() {
    var textDictory = '1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ{}[]!@#$%^&*()+|:<>?/.,;"`~-=}';
    var text = document.getElementById('change_hover2');
    var originalText = text.innerText;
    var changeText = 'Services';
    if (originalText.length < changeText.length) {
        originalText = originalText + ' '.repeat(changeText.length - originalText.length);
    }
    var textArray =  [...Array(originalText.length).keys()];
    for await (let i of textArray) {
        text.innerHTML = changeText.slice(0,i) + textDictory[Math.floor(Math.random() * textDictory.length)] +originalText.slice(i+1, originalText.length-1);
        await new Promise(r => setTimeout(r, 100));
        text.innerHTML = changeText.slice(0,i+1) + originalText.slice(i+1, originalText.length);
        await new Promise(r => setTimeout(r, 100));
    }
    // 
});

document.getElementById('change_hover3').addEventListener('mouseover', async function() {
    var textDictory = '1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ{}[]!@#$%^&*()+|:<>?/.,;"`~-=}';
    var text = document.getElementById('change_hover3');
    var originalText = text.innerText;
    var changeText = 'Blog';
    if (originalText.length < changeText.length) {
        originalText = originalText + ' '.repeat(changeText.length - originalText.length);
    }
    var textArray =  [...Array(originalText.length).keys()];
    for await (let i of textArray) {
        text.innerHTML = changeText.slice(0,i) + textDictory[Math.floor(Math.random() * textDictory.length)] +originalText.slice(i+1, originalText.length-1);
        await new Promise(r => setTimeout(r, 100));
        text.innerHTML = changeText.slice(0,i+1) + originalText.slice(i+1, originalText.length);
        await new Promise(r => setTimeout(r, 100));
    }
    // 
});

document.getElementById('change_hover4').addEventListener('mouseover', async function() {
    var textDictory = '1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ{}[]!@#$%^&*()+|:<>?/.,;"`~-=}';
    var text = document.getElementById('change_hover4');
    var originalText = text.innerText;
    var changeText = 'Contact-Us';
    if (originalText.length < changeText.length) {
        originalText = originalText + ' '.repeat(changeText.length - originalText.length);
    }
    var textArray =  [...Array(originalText.length).keys()];
    for await (let i of textArray) {
        text.innerHTML = changeText.slice(0,i) + textDictory[Math.floor(Math.random() * textDictory.length)] +originalText.slice(i+1, originalText.length-1);
        await new Promise(r => setTimeout(r, 100));
        text.innerHTML = changeText.slice(0,i+1) + originalText.slice(i+1, originalText.length);
        await new Promise(r => setTimeout(r, 100));
    }
    // 
});


// Sidebar Responsive Section

const sidebar = document.querySelector('.sidebar');
const toggleBtn = document.querySelector('.toggle-btn');

toggleBtn.addEventListener("click",() => {
    sidebar.classList.toggle("active");
})

const bgAnimation = document.getElementById('bgAnimation');

const numberOfColorBoxes = 400;

for (let i = 0; i < numberOfColorBoxes; i++) {
    const colorBox = document.createElement('div');
    colorBox.classList.add('colorBox');
    bgAnimation.append(colorBox)
}





