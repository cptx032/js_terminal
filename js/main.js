var cmd;
var screen;
function strong(s) { return '<strong>' + s + '</strong>'; }
function br() { return '<br>'; }
function handle_command(s) {
	screen.innerHTML += ' ' + s;
	if (s == 'help') {
		screen.innerHTML += br() + 'available commands: ' + br() + strong('whoami');
	}
	else if (s == 'whoami') {
		screen.innerHTML += br() + 'noone';
	}
	cmd.clear();
	screen.innerHTML += '<br>guest@cptx032 &sim; &gt; ';
}
function key_handle(e) {
	e = e || event
	var K_ESC = 27;
	var K_ENTER = 13;
	if (e.keyCode == K_ESC) {
		cmd.clear();
	}
	if (e.keyCode == K_ENTER) {
		handle_command(cmd.textContent.toLowerCase());
	}
}
function main() {
	cmd = document.getElementById('main-edit');
	screen = document.getElementById('screen');
	cmd.clear = function () { cmd.innerHTML = ""; };
	cmd.focus();
	cmd.onkeyup = key_handle;
}