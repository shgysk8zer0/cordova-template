export default class App {
	static initialize() {
		document.addEventListener('deviceready', this.onDeviceReady.bind(this));
	}

	static onDeviceReady() {
		this.receivedEvent('deviceready');
	}

	static receivedEvent(id) {
		const parentElement = document.getElementById(id);
		const listeningElement = parentElement.querySelector('.listening');
		const receivedElement = parentElement.querySelector('.received');

		listeningElement.setAttribute('style', 'display:none;');
		receivedElement.setAttribute('style', 'display:block;');

		console.log(`Received Event: ${id}`);
	}
}
