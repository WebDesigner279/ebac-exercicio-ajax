const username = "ogiansouza"; // Substitua pelo nome de usuário desejado

async function fetchGitHubProfile() {
    const url = `https://api.github.com/users/${username}`;
    
    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`Erro ao buscar dados: ${response.status}`);
        }

        const data = await response.json();

        // Atualiza o conteúdo do HTML com os dados da API
        document.querySelector(".profile-avatar").src = data.avatar_url;
        document.querySelector(".profile-name").textContent = data.name || "Nome não disponível";
        document.querySelector(".profile-username").textContent = `@${data.login}`;
        document.getElementById("repos").textContent = data.public_repos;
        document.getElementById("followers").textContent = data.followers;
        document.getElementById("following").textContent = data.following;
        document.getElementById("profile-link").href = data.html_url;

    } catch (error) {
        console.error("Erro ao buscar os dados do GitHub:", error);

        // Caso haja erro, atualiza os elementos com mensagens amigáveis
        document.querySelector(".profile-name").textContent = "Erro ao carregar";
        document.querySelector(".profile-username").textContent = "@indisponível";
    }
}

// Chama a função ao carregar a página
fetchGitHubProfile();
