function mostrarProducto(titulo, descripcion) {
    document.getElementById("titulo").innerText = titulo;
    document.getElementById("descripcion").innerText = descripcion;
    document.getElementById("modal").style.display = "block";
}

function cerrarModal() {
    document.getElementById("modal").style.display = "none";
}