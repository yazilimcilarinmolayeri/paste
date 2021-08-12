window.onload = function(e){ console.log("Window.onload called"); }

document.addEventListener('alpine:init', () => {

    console.log("Alpine initialization complete!");

    // Get darkmode status from localStorage
    let s_darkmode = localStorage.getItem("darkmode");

    // HTML darkmode data object
    Alpine.data('darkmode', () => ({
        active: (s_darkmode != null ? (s_darkmode == "true" ? true : false) : false),
       
        toggleTheme() {
          this.active = !this.active;
          localStorage.setItem('darkmode', this.active);
        }
    }));

})