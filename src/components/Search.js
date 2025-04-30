  const searchInput = document.getElementById("searchInput");
  const resultsContainer = document.getElementById("results");

  async function fetchAndRenderDocuments(query = "") {
    const response = await fetch(`https://django.narurm.eu/compunotesapi/file/?search=${encodeURIComponent(query)}`);
    const documents = await response.json();

    resultsContainer.innerHTML = ""; // limpiar anteriores

    if (documents.length === 0) {
      resultsContainer.innerHTML = "<p class='col-span-3 text-center text-gray-500'>No documents found.</p>";
      return;
    }

    for (const doc of documents) {
      const div = document.createElement("div");
      div.className = "bg-blue-300 p-4 rounded-xl shadow-md";
      div.innerHTML = `
        <div class="bg-gray-200 h-32 flex items-center justify-center">
          <a href="${doc.file}" target="_blank" rel="noopener noreferrer">
            ${doc.title}
          </a>
        </div>
        <div class="flex justify-between items-center mt-2">
          <svg class="h-6 w-6 text-yellow-500" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z"></path>
            <path d="M12 17.75l-6.172 3.245 1.179-6.873-4.993-4.867 6.9-1.002L12 2l3.086 6.253 6.9 1.002-4.993 4.867 1.179 6.873z"></path>
          </svg>
        </div>
        <p class="text-sm">${doc.title}</p>
        <p class="text-xs text-gray-700">${doc.user}</p>
      `;
      resultsContainer.appendChild(div);
    }
  }

  // Al iniciar la página, mostrar todo
  fetchAndRenderDocuments();

  // Buscar al escribir (con retardo para evitar spamear la API)
  let debounce;
  searchInput.addEventListener("input", (e) => {
    clearTimeout(debounce);
    debounce = setTimeout(() => {
      const query = e.target.value.trim();
      fetchAndRenderDocuments(query);
    }, 300); // 300 ms de espera tras parar de escribir
  });