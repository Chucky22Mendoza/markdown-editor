const marked = require('marked');
const markdownView = document.querySelector('#markdown');
const htmlView = document.querySelector('#html');

const renderToMarkDown = (markdown) => {
    htmlView.innerHTML = marked(markdown, { sanitize: true });
}

markdownView.addEventListener('keyup', e => {
    const currentContent = e.target.value;
    renderToMarkDown(currentContent);
});