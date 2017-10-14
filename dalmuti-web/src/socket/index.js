import SockJS from 'sockjs-client';
import Stomp from 'stompjs';

let stompClient;

export function init() {
    const socket = new SockJS('http://localhost:8080/ws');
    stompClient = Stomp.over(socket);
    stompClient.connect({}, onConnected, onError);
}

export function chat(message) {
    stompClient.send("/app/chat.sendMessage",
        {},
        JSON.stringify({sender: 'anais', content: message, type: 'CHAT'})
    );
}

export function leave() {
    stompClient.send("/app/chat.sendMessage",
        {},
        JSON.stringify({sender: 'anais', content: '', type: 'LEAVE'})
    );
}

function onMessageReceived(payload) {
    var message = JSON.parse(payload.body);
    console.log(message);
}

function onConnected() {
    console.log('connected.');
    stompClient.subscribe('/channel/public', onMessageReceived);
    stompClient.send("/app/chat.addUser",
        {},
        JSON.stringify({sender: 'anais', content: '', type: 'JOIN'})
    )
}

function onError(error) {
    console.error(error);
}