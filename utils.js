//function to toggle dropdown
const toggleDropDown = (dropdownEL, arrowUpEL, arrowDownEL) => {
const isHidden = dropdownEL.classList.contains("hidden");

    dropdownEL.classList.toggle("hidden");
    arrowUpEL.classList.toggle("hidden", !isHidden);
    arrowDownEL.classList.toggle("hidden", isHidden);
};
 
 
// Function for Active Nav and change its color
const activeNavState = (elements, colorName) => {
    elements.forEach((el) => {
    el.addEventListener("click", () => {

//     // Reset style for all links
//     elements.forEach(e => {
//     e.style.color = ""; // Reset to default color
// });

    // Set active color on the clicked nav
    el.style.color= colorName;

        });
    });
}