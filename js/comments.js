
const token = window.localStorage.getItem('token');
if(!token){
    window.location.replace('index.html')
}


const elCommentsList = document.querySelector('.comments__list');
const elcommentsTemplate = document.querySelector('.comments__template').content;



fetch('https://jsonplaceholder.typicode.com/comments')
.then(res => res.json())
.then(comment => {
    
    let dataIds = window.localStorage.getItem('userId')
    
    let commentFilter = comment.filter(element => element.postId == dataIds);
    console.log(commentFilter);
    
    commentFilter.forEach(elem => {
        
        const commentsTemplate =  elcommentsTemplate.cloneNode(true)
        
        
        const title = commentsTemplate.querySelector('.comments__title');
        const email = commentsTemplate.querySelector('.comments__email');
        const text  = commentsTemplate.querySelector('.comments__text');
        
        // const backbtn = postsTemplate.querySelector('.back__btn')
        
        title.textContent = elem.name;
        email.textContent = elem.email;
        text.textContent = elem.body;
        
        elCommentsList.appendChild(commentsTemplate);
        
    });
})
