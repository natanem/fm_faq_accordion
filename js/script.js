window.addEventListener("DOMContentLoaded", () => {
    const faqCard = document.querySelector(".faq-card")

    faqCard.addEventListener("click", event => {
        const cell = event.target.closest(".faq-cell")
        const isOpen = cell.classList.contains("active") ? true : false
        faqCard.querySelectorAll(".faq-cell").forEach(cell => cell.classList.remove("active"))
        isOpen ? cell.classList.remove("active") : cell.classList.add("active")
        
    })
    

})