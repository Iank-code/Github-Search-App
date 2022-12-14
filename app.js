
window.addEventListener('DOMContentLoaded', ()=>{
    // for login page
    
    // const password = document.getElementById('password')
    // const form = document.getElementById('form')
    // form.addEventListener('click', (e)=>{
    //     e.preventDefault();
    //     document.getElementById('loginBtn').addEventListener('click', ()=>{
    //         if (!password){
    //             alert('username can not be blank')
    //         }
    //     })
    // })
    // const GITHUB_USERS = 'https://api.github.com/users/${}
    const searchBar = document.getElementById('seachBar')
    const searchBtn = document.getElementById('searchUser')
    const userImg = document.getElementById('userImg')
    const follower = document.getElementById('follower')
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
                console.log(data)
                follower.textContent = data.followers
                userImg.src = data.avatar_url

            }
        ).catch(error => console.log(error))
    })

})