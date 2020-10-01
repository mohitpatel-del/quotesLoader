const target = document.querySelector('.target');
const childElement1 = document.createElement('h2');
const childElement2 = document.createElement('h4');
childElement1.classList.add('quote');
childElement2.classList.add('blockquote-footer');
childElement2.classList.add('author');
const randomized = () => {
    return Math.floor(Math.random() * 1640);
}
let randomNum = randomized();
fetch('https://type.fit/api/quotes')
    .then((response) => {
        return response.json()
    }).then((res) => {
        childElement1.innerHTML = `${res[randomNum].text}`;
        childElement2.innerHTML = ` by ${res[randomNum].author}`

        target.appendChild(childElement1);
        target.appendChild(childElement2)
    })