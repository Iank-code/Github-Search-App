
window.addEventListener('DOMContentLoaded', ()=>{
    
    const githubSection = document.getElementById('github-search-container')
    const loginSection = document.getElementById('login-signup')
    
    // githubSection.classList.add('hide')
    // // for login page
    // const password = document.getElementById('password')
    // const form = document.getElementById('form')
    // form.addEventListener('click', (e)=>{
    //     e.preventDefault();
    //     document.getElementById('loginBtn').addEventListener('click', (e)=>{
    //         if (!password){
    //             alert('username can not be blank')
    //         }
    //         // githubSection.classList.remove('hide')
    //         loginSection.classList.add('hide')
            
    //     })
    // })



    const searchBar = document.getElementById('seachBar')
    const searchBtn = document.getElementById('searchUser')
    const userImg = document.getElementById('userImg')
    const follower = document.getElementById('follower')
    const following = document.getElementById('following')
    searchBtn.addEventListener('click', ()=>{
        const searchedName = searchBar.value

        const fetchUser = fetch(`https://api.github.com/users/${searchedName}`, {
            method: 'GET',
            headers: {Accept: 'application/json'}
        })
        fetchUser.then(res => res.json()).then(
            data => {
                if (data.message){
                    console.log('User Not Found')
                }
                follower.textContent = data.followers
                userImg.src = data.avatar_url
                following.textContent = data.following

            }
        ).catch(error => console.log(error))
    })

})