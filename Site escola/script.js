let currentPage = 0;

function showPage(pageNumber) {
    const totalPages = document.querySelectorAll('.page').length;
    document.querySelectorAll('.page').forEach(page => {
        page.style.display = 'none';
    });

    if (pageNumber >= 0 && pageNumber < totalPages) {
        document.getElementById(`page-${pageNumber}`).style.display = 'block';
        if (pageNumber > 0 && pageNumber + 1 < totalPages) {
            document.getElementById(`page-${pageNumber + 1}`).style.display = 'block';
        }
    }
}

function nextPage() {
    const totalPages = document.querySelectorAll('.page').length;
    if (currentPage < totalPages - 2) {
        currentPage += currentPage === 0 ? 1 : 2;
        showPage(currentPage);
    }
}

function previousPage() {
    if (currentPage > 0) {
        currentPage -= currentPage === 1 ? 1 : 2;
        showPage(currentPage);
    }
}

// Inicializa mostrando a capa
showPage(currentPage);
