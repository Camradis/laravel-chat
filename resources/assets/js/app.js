require('./bootstrap');

Vue.component('chat-message', require('./components/ChatMessage.vue'));
Vue.component('chat-log', require('./components/ChatLog.vue'));
Vue.component('chat-composer', require('./components/ChatComposer.vue'));

const app = new Vue({
    el: '#app',
    data: {
        messages: [],
        usersInRoom: []
    },
    methods: {
        addMessage(message) {
            // Add to existing messages
            this.messages.push(message);

            // Persist to the database etc
            axios.post('/messages', message).then(response => {
                // Do whatever;
            })
        }
    },
    created() {
        axios.get('/messages').then(response => {
            this.messages = response.data;
    });

        Echo.join('chatroom')
            .here((users) => {
            this.usersInRoom = users;
    })
    .joining((user) => {
            this.usersInRoom.push(user);
    })
    .leaving((user) => {
            this.usersInRoom = this.usersInRoom.filter(u => u != user)
    })
    .listen('MessagePosted', (e) => {
            this.messages.push({
            message: e.message.message,
            user: e.user
        });
    });
    }
});