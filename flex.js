const panels = document.querySelectorAll(".panel");
// Toggle function handle
function openToggle(){
    // console.log('Hello');
    this.classList.toggle("open");
};
// Handle active open active function
function openActive (e){
    if(e.propertyName.includes('flex')){
        this.classList.toggle("active-open");
    }
}

// Click and transitionend event
panels.forEach(panel=>panel.addEventListener("click",openToggle));
panels.forEach(panel=>panel.addEventListener("transitionend",openActive));