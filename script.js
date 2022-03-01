
var x=document.getElementById('add').addEventListener("click",()=>{
    addNew(); 
});

    document.getElementById('del').addEventListener("click",()=>{
        let z=document.getElementById('clear');
        z.remove();
    });

    document.getElementById('create').addEventListener("click",()=>{
        document.getElementById('todo').toggleAttribute("readonly");
    });

    var color=0;

function addNew(text=""){
    const todo=document.createElement('div');
    todo.classList.add("box");
    todo.innerHTML=`
        <div class="todo">
            <div class="tool mar">
                <h3>MyNote</h3>
                <section>
                    <i id="copy" title="copy text" class="cpy far fa-copy"></i>
                    <i id="create" title="new todo" class="edt far fa-edit"></i>
                    <i id="del" title="delete" class="del fas fa-trash-alt"></i>
                </section>
            </div>
            <textarea name="todo" id="todo"  class="copy edit" cols="30" rows="10"></textarea>
        </div>
    `;
    document.getElementById('box').appendChild(todo);
    color++;
    console.log(color);
    const delBtn=todo.querySelector('.del');
    delBtn.addEventListener("click",()=>{
        todo.remove();
    });

    const edtBtn=todo.querySelector('.edt');
    edtBtn.addEventListener("click",()=>{
        todo.querySelector('.edit').toggleAttribute("readonly");
    });
    if(color===1){todo.querySelector('.edit').style.background='#ffcccc';}
    if(color===2){todo.querySelector('.edit').style.background='#fffa65';}
    if(color===3){todo.querySelector('.edit').style.background='#7efff5';}
    if(color===4){todo.querySelector('.edit').style.background='#7d5fff';}
    if(color===5){todo.querySelector('.edit').style.background='#ffaf40';}
    if(color===6){todo.querySelector('.edit').style.background='#ffffff';}
    if(color===7){todo.querySelector('.edit').style.background='#ffb8b8';}
    if(color===8){todo.querySelector('.edit').style.background='#fffa65';}
    if(color===9){todo.querySelector('.edit').style.background='#7efff5';}
    if(color===10){todo.querySelector('.edit').style.background='#7d5fff';}
    if(color===11){todo.querySelector('.edit').style.background='#ffaf40';}
    if(color===12){todo.querySelector('.edit').style.background='#ffffff';}
    if(color===13){todo.querySelector('.edit').style.background='#ffb8b8';}
    if(color===14){todo.querySelector('.edit').style.background='#fffa65';}
    if(color===15){todo.querySelector('.edit').style.background='#7efff5';}
    if(color===16){todo.querySelector('.edit').style.background='#7d5fff';}
    if(color===17){todo.querySelector('.edit').style.background='#ffaf40';}
    if(color===18){todo.querySelector('.edit').style.background='#ffb8b8';}

    
    // document.getElementById('copy').addEventListener("click",()=>{
    //     const copy=todo.querySelector('.cpy');
    //     const cop=todo.querySelector('.copy');
    //     cop.select();
    //     todo.execCommand("Copy");
    // });
}
function copy() {
    const copy=document.getElementById('copy');
    const cop=document.getElementById('todo');
    cop.select();
    document.execCommand("Copy");
}
