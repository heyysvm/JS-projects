        const cardData = {
            github: {
                title: "GitHub Repositories",
                body: "Check out my open-source work and contribution graph.",
                stat: "4 Repos • 12 Contributions",
                color: "border-slate-500",
                link: "https://github.com/heyysvm"
            },
            linkedin: {
                title: "linkedin",
                body: "Let's connect professionally. Open to networking and new opportunities.",
                stat: "100+ Connections",
                color: "border-blue-500",
                link: "www.linkedin.com/in/shivam-kumar-4b7115368"
            },
            instagram: {
                title: "Instagram",
                body: " peek into my creative process and daily life as a 'HUMAN'.",
                stat: " Documenting Life",
                color: "border-pink-500",
                link: "https://instagram.com/heyysvm"
            }
        };

        function switchCard(platform) {
            const container = document.getElementById('card-content');
            const data = cardData[platform];
            container.classList.add('fade-out');

            setTimeout(() => {
                container.innerHTML = `
                    <div class="flex items-center gap-2 mb-2">
                        <div class="w-3 h-3 rounded-full bg-red-500"></div>
                        <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div class="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <h3 class="text-2xl font-bold mb-2 text-white">${data.title}</h3>
                    <p class="text-slate-300 mb-4">${data.body}</p>
                    <div class="text-sm font-mono text-purple-400 mb-6">${data.stat}</div>
                    <a href="${data.link}" target="_blank" class="inline-block bg-white text-black px-6 py-2 rounded-full font-bold hover:bg-opacity-80 transition-all">
                        Visit Profile
                    </a>
                `;
                container.classList.remove('fade-out');
                container.classList.add('fade-in');
            }, 300);
        }