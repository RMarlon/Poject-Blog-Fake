//'https://jsonplaceholder.typicode.com/posts'

async function readPoats(){
    let postsArea = document.querySelector('.posts');
    postsArea.innerHTML = 'Loading...';

    let response = await fetch('https://jsonplaceholder.typicode.com/posts');
    let json = await response.json();

    if(json.length > 0){
        postsArea.innerHTML = '';
        for(let i in json){
            let postHtml = `<div><h1>${json[i].title}</h1>${json[i].body}<hr/></div>`;
            postsArea.innerHTML += postHtml;
        }
    }
    else{
        postsArea.innerHTML = 'No post to display'
    }
}

readPoats()