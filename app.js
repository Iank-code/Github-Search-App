
window.addEventListener('DOMContentLoaded', ()=>{
    //global variables
    const githubSection = document.getElementById('github-search-container')
    // variables for the github-search section
    const searchBar = document.getElementById('seachBar')
    const searchBtn = document.getElementById('searchUser')
    const userImg = document.getElementById('userImg')
    const follower = document.getElementById('follower')
    const following = document.getElementById('following')
    const company  = document.getElementById('company')
    // Navlinks variables
    const login = document.getElementById('loginLink')
    const about = document.getElementById('about')
    const signOff = document.getElementById('signOut')
    
    // login section variables
    const loginSection = document.getElementById('login')
    const password = document.getElementById('password')
    const userName = document.getElementById('userName')
    const loginForm = document.getElementById('loginForm')
    // Sign out button works
    const signOut = document.getElementById('signOut')
    signOut.style.cursor = 'pointer'
    signOut.addEventListener('click', ()=>{
        window.location.reload()
    })

    // when login navlink is clicked
    login.addEventListener('click', ()=>{
        document.getElementById('login').classList.remove('hide')
        document.getElementById('signUp').classList.add('hide')
        document.getElementById('github-search-container').classList.add('hide')
    })

    // for login page && it works
    loginForm.addEventListener('submit', (e)=>{
        e.preventDefault();
        document.getElementById('loginBtn').addEventListener('click', (e)=>{
            const fetchCredentials = fetch('/credentials.json')
            fetchCredentials.then(res => res.json()).then(
                data => {
                    
                    if(userName.value === data[0].username && password.value === data[0].password){
                        signOff.textContent = "Log Out"
                        login.textContent = ""
                        about.textContent = "About"
                        loginSection.classList.add('hide')
                        githubSection.classList.remove('hide')
                    }else{
                        console.log('not working')
                        return false
                    }}
            )
            
        })
    })

    /* when the search button is clicked, it takes in the
    named of the person being searched on and search it. It then displays 
    the image,followers of the person, the company he/she works
    for and the amount of people following him/her */
    searchBtn.addEventListener('click', ()=>{
        const searchedName = searchBar.value

        const fetchUser = fetch(`https://api.github.com/users/${searchedName}`, {
            method: 'GET',
            headers: {Accept: 'application/json'}
        })
        fetchUser.then(res => res.json()).then(
            data => {
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