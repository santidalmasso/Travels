const $onload = document.getElementById('animation-load');

window.onload = () => {
    $onload.classList.add('fadeOut');
    document.body.classList.remove('hidden');
    setTimeout(()=>{$onload.remove()}, 2000)
}
