
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
    searchBtn.addEventListener('click', ()=>{
        const searchedName = searchBar.value

        const fetchUser = fetch(`https://api.github.com/users/${searchedName}`, {
            method: 'GET',
            headers: {Accept: 'application/json'}
        })
        fetchUser.then(res => res.json()).then(
            data => console.log(data)
        ).catch(error => console.log(error))
    })

})