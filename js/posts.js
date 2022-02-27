const token = window.localStorage.getItem('token');

if(!token){
    window.location.replace('index.html')
}


const elPostsList = document.querySelector('.posts__list');
const elpostsTemplate = document.querySelector('.posts__template').content;


fetch('https://jsonplaceholder.typicode.com/posts')
.then(res => res.json())
.then(post => {

    let dataId = window.localStorage.getItem('id')

    let filtered = post.filter(elem => elem.userId == dataId)

    filtered.forEach(elem => {
        const postsTemplate =  elpostsTemplate.cloneNode(true)
        
        const title = postsTemplate.querySelector('.posts__title')
        const text = postsTemplate.querySelector('.posts__text')
        const combtn = postsTemplate.querySelector('.comment__btn')
        
        title.textContent = elem.title;
        text.textContent = elem.body;
        combtn.dataset.uuid = elem.id;

        elPostsList.appendChild(postsTemplate);

        combtn.addEventListener('click', (e) => {
            localStorage.setItem('userId', e.target.dataset.uuid)
            window.location.replace('comments.html')
        })
    });
})
