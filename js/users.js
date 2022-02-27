const token = window.localStorage.getItem('token');

if(!token){
    window.location.replace('index.html')
}



const elTemplate = document.querySelector('.users__template').content;
const elList = document.querySelector('.users__list');



fetch('https://jsonplaceholder.typicode.com/users')
.then(res => res.json())
.then(userapi => {
    userapi.forEach(element => {
        const usersTemplate = elTemplate.cloneNode(true)
        
        const usersHeading = usersTemplate.querySelector('.users__name')
        const usersText = usersTemplate.querySelector('.users__username')
        const usersEmail = usersTemplate.querySelector('.users__email')
        const usersAddress = usersTemplate.querySelector('.users__address')
        const usersCompany = usersTemplate.querySelector('.users__company')
        
        const usersBtn = usersTemplate.querySelector('#users__btn')
        
        
        usersHeading.textContent = element.name;
        usersText.textContent = element.username;
        usersEmail.textContent = element.email;
        usersAddress.textContent = element.address.street + " " + element.address.suite + "  " + element.address.city;
        usersCompany.textContent = element.company.name;
        usersBtn.dataset.uuid = element.id
        
        elList.appendChild(usersTemplate);

        usersBtn.addEventListener('click', (e)=>{
            window.localStorage.setItem('id', e.target.dataset.uuid)
            window.location.replace('posts.html')
        })


    });
})

btn__logout.addEventListener('click', () => {
    window.localStorage.removeItem('token');
    window.location.replace('index.html')
})
