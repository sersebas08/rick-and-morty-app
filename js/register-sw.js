// Chequeo si el browser soporta Service Worker
if ('serviceWorker' in navigator){
    navigator.serviceWorker.register("../sw.js")
        .then((message)=>{
        console.log('El SW esta andando!');
    });
} else {
    console.log('Service worker No soportado');
}