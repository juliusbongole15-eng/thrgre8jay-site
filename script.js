document.addEventListener("DOMContentLoaded", () => {
    
    // --- TYPEWRITER GRAPHICS ENGINE ---
    const skills = [
        "Web Development.", 
        "Graphic Design.", 
        "Database Development.", 
        "System Administration.", 
        "Technical Training."
    ];
    let i = 0;
    let timer;

    function typingEffect() {
        let word = skills[i].split("");
        var loopTyping = function() {
            if (word.length > 0) {
                const textArea = document.getElementById('typing-text');
                if(textArea) textArea.innerHTML += word.shift();
            } else {
                setTimeout(deletingEffect, 2500); 
                return false;
            }
            timer = setTimeout(loopTyping, 80);
        };
        loopTyping();
    }

    function deletingEffect() {
        let word = skills[i].split("");
        var loopDeleting = function() {
            if (word.length > 0) {
                word.pop();
                const textArea = document.getElementById('typing-text');
                if(textArea) textArea.innerHTML = word.join("");
            } else {
                if (skills.length > (i + 1)) {
                    i++;
                } else {
                    i = 0;
                }
                setTimeout(typingEffect, 400);
                return false;
            }
            timer = setTimeout(loopDeleting, 40);
        };
        loopDeleting();
    }

    if(document.getElementById('typing-text')) {
        typingEffect();
    }

    // --- RESPONSIVE SIDE DRAWER ---
    const menuBtn = document.getElementById('menuBtn');
    const closeBtn = document.getElementById('closeBtn');
    const mobileMenu = document.getElementById('mobileMenu');

    if (menuBtn && mobileMenu && closeBtn) {
        menuBtn.addEventListener('click', () => mobileMenu.classList.remove('translate-x-full'));
        closeBtn.addEventListener('click', () => mobileMenu.classList.add('translate-x-full'));
    }

    // --- ACADEMY FILTER PARSING ---
    window.filterTutorials = function(category) {
        const cards = document.querySelectorAll('.tutorial-card');
        const buttons = document.querySelectorAll('.filter-btn');
        
        buttons.forEach(btn => {
            if(btn.getAttribute('onclick').includes(category)) {
                btn.classList.add('bg-blue-600', 'text-white', 'shadow-md');
                btn.classList.remove('bg-white', 'border-slate-200', 'text-slate-600');
            } else {
                btn.classList.remove('bg-blue-600', 'text-white', 'shadow-md');
                btn.classList.add('bg-white', 'border-slate-200', 'text-slate-600');
            }
        });

        cards.forEach(card => {
            if (category === 'all' || card.getAttribute('data-category') === category) {
                card.style.display = 'flex';
            } else {
                card.style.display = 'none';
            }
        });
    }

    window.somaMakala = function(topic) {
        alert(`Initializing stream connection to lecture: [ ${topic} ]`);
    }
});