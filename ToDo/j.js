let list=JSON.parse(localStorage.getItem('list'))||[];
window.onload=function(){
    displaytask();
}
function Todo(){    
    let task=document.querySelector('#input-element');
    let tododate=document.querySelector('#currdate');
    let item=task.value;
    let dateval=tododate.value;
    if(item===''||dateval===''){
        alert("please enter both task and date");
        return;
    }
    list.push({key:item,p:dateval});
    localStorage.setItem('list',JSON.stringify(list));
    task.value='';
    tododate.value='';
    displaytask();
}
function displaytask(){
    let element=document.querySelector('.text');
    let newhtml='';
    let storedlist=JSON.parse(localStorage.getItem('list'))||[];
    if(storedlist.length===0){
        newhtml='<p>No task available</p>';
    }
    else{
        for(let i=0;i<list.length;i++){
            let key=storedlist[i].key;
            let p=storedlist[i].p;
            newhtml+=`
                <span>${key}</span>
                <span>${p}</span>
                <button class="del" onclick="list.splice(${i},1);displaytask();">delete</button>
            `
        }
    }
    element.innerHTML=newhtml;
}
function deletetask(i){
    let storedlist=JSON.parse(localStorage.getItem('list'))||[];
    storedlist.splice(i,1);
    localStorage.setItem('list',JSON.stringify(storedlist));
    displaytask();
}

