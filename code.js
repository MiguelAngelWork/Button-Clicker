function definitionAdded(element){

 element.remove();
}

function login(element)
{
   loginstatus=element.innerText
   if (loginstatus=="Login")
    element.innerText="Logout";
    else
    element.innerText="Login";
   
}

function addLikes(element){
    var likes=1;
    likes=element.innerText;
    likes=likes+1;

 alert("Some one has liked this"+likes);   
}

