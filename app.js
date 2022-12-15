
window.addEventListener('DOMContentLoaded', ()=>{
    
    const githubSection = document.getElementById('github-search-container')
    const loginSection = document.getElementById('login-signup')
    
    // for login page
    const password = document.getElementById('password')
    const form = document.getElementById('form')
    form.addEventListener('click', (e)=>{
        e.preventDefault();
    })
    document.getElementById('loginBtn').addEventListener('click', (e)=>{
        if (!password){
            alert('username can not be blank')
        }
        // githubSection.classList.remove('hide')
        loginSection.classList.add('hide')
        githubSection.classList.remove('hide')
        
    })



    const searchBar = document.getElementById('seachBar')
    const searchBtn = document.getElementById('searchUser')
    const userImg = document.getElementById('userImg')
    const follower = document.getElementById('follower')
    const following = document.getElementById('following')
    const company  = document.getElementById('company')
    searchBtn.addEventListener('click', ()=>{
        const searchedName = searchBar.value

        const fetchUser = fetch(`https://api.github.com/users/${searchedName}`, {
            method: 'GET',
            headers: {Accept: 'application/json'}
        })
        fetchUser.then(res => res.json()).then(
            data => {
                if (!data){
                    console.log('User Not Found')
                }
                follower.textContent = data.followers
                userImg.src = data.avatar_url
                following.textContent = data.following
                if(!data.company){
                    company.textContent = 'Not Employed'
                }else{
                    company.textContent = data.company
                }
            }
        ).catch(error => console.log(error))
    })

})