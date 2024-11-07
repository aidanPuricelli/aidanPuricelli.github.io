document.addEventListener("DOMContentLoaded", function() {
    const modeIcon = document.querySelector(".mode span");
  
    modeIcon.addEventListener("click", () => {
      const root = document.documentElement;
  
      if (root.style.getPropertyValue("--background") === "rgb(223, 214, 189)") {
        // Switch to dark mode
        root.style.setProperty("--background", "rgb(59, 58, 55)");
        root.style.setProperty("--top-text", "rgb(171, 171, 171)");
        root.style.setProperty("--header", "rgb(166, 166, 166)");
        root.style.setProperty("--about-header", "rgb(145, 175, 142)");
        root.style.setProperty("--experience-header", "rgb(161, 161, 196)");
        root.style.setProperty("--skills-header", "rgb(204, 173, 173)");
        root.style.setProperty("--portfolio-header", "rgb(195, 163, 203)");
        root.style.setProperty("--website-header", "rgb(167, 162, 154)");
        root.style.setProperty("--link", "rgb(224, 160, 224)");
        root.style.setProperty("--sub-header", "rgb(157, 157, 157)");
        root.style.setProperty("--sub-text", "rgb(184, 184, 184)");
        root.style.setProperty("--info", "rgb(60, 68, 57)");
        root.style.setProperty("--experience", "rgb(55, 55, 65)");
        root.style.setProperty("--job", "rgb(82, 81, 98)");
        root.style.setProperty("--project", "rgb(110, 93, 112)");
        root.style.setProperty("--skills", "rgb(113, 96, 96)");
        root.style.setProperty("--portfolio", "rgb(94, 80, 98)");
        root.style.setProperty("--websites", "rgb(77, 75, 71)");
        root.style.setProperty("--emphasize", "rgb(212, 218, 164)");
        
        // Change icon text to "light mode"
        modeIcon.textContent = "dark_mode";
      } else {
        // Switch to light mode
        root.style.setProperty("--background", "rgb(223, 214, 189)");
        root.style.setProperty("--top-text", "rgb(51, 51, 51)");
        root.style.setProperty("--header", "rgb(47, 47, 47)");
        root.style.setProperty("--about-header", "rgb(95, 125, 98)");
        root.style.setProperty("--experience-header", "rgb(86, 94, 134)");
        root.style.setProperty("--skills-header", "rgb(120, 111, 79)");
        root.style.setProperty("--portfolio-header", "rgb(124, 80, 118)");
        root.style.setProperty("--website-header", "rgb(125, 109, 71)");
        root.style.setProperty("--link", "rgb(75, 34, 75)");
        root.style.setProperty("--sub-header", "rgb(98, 98, 98)");
        root.style.setProperty("--sub-text", "rgb(56, 56, 56)");
        root.style.setProperty("--info", "rgb(178, 200, 171)");
        root.style.setProperty("--experience", "rgb(182, 182, 219)");
        root.style.setProperty("--job", "rgb(202, 199, 236)");
        root.style.setProperty("--project", "rgb(219, 191, 224)");
        root.style.setProperty("--skills", "rgb(200, 171, 171)");
        root.style.setProperty("--portfolio", "rgb(210, 174, 221)");
        root.style.setProperty("--websites", "rgb(199, 181, 155)");
        root.style.setProperty("--emphasize", "rgb(105, 105, 105)");
        
        // Change icon text to "dark mode"
        modeIcon.textContent = "light_mode";
      }
    });
});
