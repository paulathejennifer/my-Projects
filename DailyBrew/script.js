document.addEventListener("DOMContentLoaded", () =>{
    const filterButtons = document.querySelectorAll(".filter-buttons button");
    const menuItems = document.querySelectorAll(".menu-card");
})

filterButtons.forEach(button => {
    button.addEventListener("click", ()=>{
        filterButtons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");


        const filter = button.getAttribute("data-filter");

        menuItems.forEach(item => {
            const category = item.getAttribute("data-category")



            item.classList.add("fade-out");

            setTimeout(() => {
                if (filter === 'all' || category === filter){
                    item.style.display = 'block';
                    item.classList.remove("fade-out");
                    item.classList.add("fade-in");
                }else{
                    item.style.display = 'none';
                    item.classList.remove("fade-in");
                }
            }, 300)
        });

        
    });
});
