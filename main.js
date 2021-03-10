window.onload = () => {
    // window.setInterval(get_tasks, 5000)
    window.setTimeout(request_auth, 10000)
}

const URI = "http://localhost:5000/todo/api/v1.0"
const username = "boriskayiranga";
const password = "hello world";

const auth_info = window.btoa(`${username}:${password}`);

function request_auth(){
    const form = `
        <div class="login-form">
            <h1>Hello there folks, it is time to register your ass</h1>
            <form>
                <input type="name" placeholder="Enter your username or mail address">
                <input type="password" placeholder="Enter you boring password">
                <button>Login</button>
            </form>
        </div>
    `;
    document.getElementById('tasks').innerHTML = form;
}

function foo(){
    fetch(URI + '/users',{
        method: 'GET',
        headers: {
            'Authorization':  'Basic ' + auth_info,
        },
        Credential: 'include'
    })
    .then((response) => {
        if (response.status !== 200){
            console.log("There has been a problem with you BOY! " + response.status);
            response.json().then(data => console.log(data));
            return;
        }
        // console.log(response)
        response.json().then((data) => {
            console.log(data);
        });
    })
    .catch(e => console.log(e));
}

function get_tasks(){
    fetch(URI + '/tasks',{
        method: 'GET',
        headers: {
            // 'Authorization':  'Basic ' + auth_info,
        },
        Credential: 'include'
    })
    .then((response) => {
        if (response.status !== 200){
            console.log("There has been a problem with you BOY! " + response.status);
            response.json().then(data => console.log(data));
            return;
        }
        // console.log(response)
        response.json().then((data) => {
            console.log(data);
            data.tasks.forEach((task) => {
                document.getElementById('tasks').innerHTML += `
                <div class="task task-${task.id}" data-id=${task.id}>
                    <h4 class="title">${task.title}</h4>
                    <div class="task-note">
                        <p>${task.description}</p>
                    </div>
                    <div class="task-description">
                        <div class="due-date"><h5>Due: 11/12/2021</h5></div>
                        <div class="details">
                            <h5 class="project">Project: <span>My project</span></h5>
                            <div class="labels">
                                <h5>Labels: <span>This is a label</span></h5>
                            </div>
                        </div>
                    </div>
                </div>
                `;
            });
        });
    })
    .catch(e => console.log(e));
}


function add_task() {
    console.log("Task added successfully!");
}