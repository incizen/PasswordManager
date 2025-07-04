//display  modal on click
 
const modalWrapper = document.querySelector(".modals-wrapper");
if (modalWrapper){
    function displayModal(id){
        const modal = document.getElementById(id);
        modalWrapper.style.display = "flex";
        modal.style.display = "flex";
        //close modal
        const close = document.getElementById("close-modal");
        close.addEventListener("click", () =>{
            modalWrapper.style.display = "none";
            modal.style.display = "none";

        document.querySelector("header").style.display = "unset";
        })

        document.querySelector("header").style.display = "none";
    }
}


const copies = document.querySelectorAll(".copy");
copies.forEach(copy =>{
    copy.onclick = () =>{
        let elemntToCopy = copy.previousElementSibling;
        elemntToCopy.select();
        document.execCommand("copy");
    }
})

const actions = document.querySelectorAll(".actions");
if (actions){
    actions.forEach(action =>{
        action.onclick = () =>{
            const links = action.querySelectorAll("a");
            links.forEach(link =>{
                link.style.display = "flex";
            })
            setTimeout(function(){
                links.forEach(link =>{
                    link.style.display = "none";
                })}
            , 3000)
        }
    })
}