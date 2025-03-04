const container = document.querySelector(".contanier");
const registerbtn = document.querySelector(".register-btn");
const loginbtn = document.querySelector(".login-btn");
const lock = document.querySelector(".bx bxs-lock-alt")
registerbtn.addEventListener('click', () => {
    container.classList.add('active');
});
loginbtn.addEventListener('click', () => {
    container.classList.remove('active');
});

lock.addEventListener('click' ,()=> {
    lock.classList.add("actve");
    lock.c
})