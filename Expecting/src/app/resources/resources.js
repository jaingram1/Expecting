/* if my "reload" var isn't set locally.. getItem will be false */
if (!localStorage.getItem("reload")) {
    /* set reload to true and then reload the page */
    localStorage.setItem("reload", "true");
    location.reload();
}
/* after reloading remove "reload" from localStorage */
else {
    localStorage.removeItem("reload");
    // localStorage.clear(); // or clear it, instead
}