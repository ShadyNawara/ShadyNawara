var speed = 50;

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

typewriter = async () => {
    let typewriterElements = document.getElementsByClassName("typewriter");

    for (const element of typewriterElements) {
        let textElements = element.getElementsByTagName("*");
        for (const textElement of textElements) {
            if(window.innerWidth < 1000) {
                textElement.style.visibility = 'visible';
                continue;
            }
            if (textElement.hasAttribute("typewriter-speed")) {
                speed = parseInt(textElement.getAttribute("typewriter-speed"));
            }

            if (textElement.childNodes.length && textElement.childNodes[0].nodeValue && textElement.childNodes[0].nodeValue.trim()) {
                let elementHtml = textElement.textContent.replace(/\s+/g, ' ');
                textElement.innerHTML = '<span class="caret">|</span>';
                textElement.style.visibility = 'visible';
                for (let i = 0; i < elementHtml.length; i++) {
                    textElement.innerHTML = textElement.innerHTML.slice(0, -28) + elementHtml[i] + '<span class="caret">|</span>';
                    await sleep(speed);
                }
                textElement.innerHTML = textElement.innerHTML.slice(0, -28);
            }
            else {
                textElement.style.visibility = 'visible';
            }
            await sleep(speed);
        }
    };
}

window.addEventListener("load", typewriter);