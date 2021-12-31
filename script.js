const signIn = () => {
    const uname = document.getElementById('email').value;
    const pwd = document.getElementById('pass').value;
    const users = JSON.parse(localStorage.usersData);
    var c=0;
    users.forEach ( user => {if(user.email === uname ) {c=c+1}});
if(c=== 0){
    alert('Login Failed. Invalid Email or Password');
}
    users.forEach ( user => {
        if(user.email === uname ) {
            if(user.password === pwd){
            alert('Login Successfull!!')
            
            window.location = "dashboard.html";
            localStorage.session = uname;}
            else{
                alert('Login Failed. Invalid Password');
            }
        }  
    }); 
    

}

const fetchInbox = () => {
    const {session, mails} = localStorage;
    if(!session) {
        window.location = 'index.html';
    }
    if(mails && session) {
        return JSON.parse(mails).filter((item) => item.to === session);
    }
    return [];
}

const loadData = () => {
    ulContainer = document.getElementById('mail-list');
    fetchInbox().forEach(mail => {
        ulContainer.innerHTML += `<li class="list-group-item"><input type="checkbox" id="${mail.id}"> ${mail.subject} &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ${mail.body} </li>`
    })
}

const sendEmail = () => {
    const to = document.getElementById('to').value;
    const subject = document.getElementById('subject').value;
    const body = document.getElementById('body').value;

    const mails = JSON.parse(localStorage.mails || []);
    mails.push({
        id: mails.length,
        from: localStorage.session,
        to,
        subject,
        body
    });

    localStorage.mails = JSON.stringify(mails);
    window.close();
}

const logout = () => {
    localStorage.session = "";
    window.location = 'index.html';
}