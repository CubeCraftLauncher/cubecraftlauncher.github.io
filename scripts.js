function mostrarmenudescarga() {
    const menu = document.getElementById('menudescarga');
        if (menu.style.display === 'flex') {
            menu.style.display = 'none';
        } else {
            menu.style.display = 'flex';
        }
}