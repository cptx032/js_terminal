function scroll_to_bottom() {
		window.scrollTo(0, document.body.scrollHeight);
	}
	function load_dark_theme() {
		document.body.style.backgroundColor = "#000000";
		document.getElementById("cmd").style.backgroundColor = "#000000";
		document.getElementById("cmd").style.color = "#eee";
		document.getElementById("screen").style.color = "#eee";
		document.getElementById("cmdprefix").style.color = "#eee";
		// these following FORs are POG
		var titles = document.getElementsByClassName('title');
		for(var i = 0; i < titles.length; i++) {
			titles[i].style.color = "#ffffff";
		}
		var cmdprefixes = document.getElementsByClassName('cmdprefix');
		for (var i = 0; i < cmdprefixes.length; i++) {
			cmdprefixes[i].style.color = "#ffffff";
		}
		var h1s = document.getElementsByTagName('h1');
		for (var i = 0; i < h1s.length; i++) {
			h1s[i].style.color = "#ffffff";
		}
	}
	function load_light_theme() {
		document.body.style.backgroundColor = "#ffffff";
		document.getElementById("cmd").style.backgroundColor = "#ffffff";
		document.getElementById("cmd").style.color = "#555";
		document.getElementById("screen").style.color = "#555";
		document.getElementById("cmdprefix").style.color = "#555";
		var titles = document.getElementsByClassName('title');
		for(var i = 0; i < titles.length; i++) {
			titles[i].style.color = "#555";
		}
		var cmdprefixes = document.getElementsByClassName('cmdprefix');
		for (var i = 0; i < cmdprefixes.length; i++) {
			cmdprefixes[i].style.color = "#555";
		}
		var h1s = document.getElementsByTagName('h1');
		for (var i = 0; i < h1s.length; i++) {
			h1s[i].style.color = "#555";
		}
	}
	function write_to_term(s) {
		var term_screen = document.getElementById("screen");
		term_screen.innerHTML += s + "<br>";
		scroll_to_bottom();
	}
	function handle_command(s) {
		write_to_term("<span class='cmdprefix'>~ root$ </span>" + s); // copying text from input to span
		if (s == "help") {
			write_to_term("Commands:");
			write_to_term(" * <strong>help</strong>");
			write_to_term(" * <strong>projects</strong>");
			write_to_term(" * <strong>art</strong>");
			write_to_term(" * <strong>whoami</strong>");
			write_to_term(" * <strong>contact</strong>");
			write_to_term(" * <strong>clear</strong>");
			/* write_to_term("  * <strong>switchcolor</strong>"); */
			write_to_term("Type the command and press enter");
		}
		else if (s == "whoami") {
			write_to_term("just a guy");
			write_to_term("  ___ ");
			write_to_term(" {o,o}");
			write_to_term(" |)__)");
			write_to_term('--"-"--');
		}
		else if (s == "art") {
			write_to_term('<ul><li><a href="http://www.opengameart.org/users/cptx032">Open Game Art</a></li></ul>');
			write_to_term('<ul><li><a href="http://cptx032.co.nf/art/">Some 3d assets made in Blender</a></li></ul>');
		}
		else if (s == "projects") {
			write_to_term("Click in project to see details");
			write_to_term('<h1>"Finished" projects: </h1>');
			write_to_term('<ul><li><a href="https://github.com/cptx032/lightk"><span class="title">Lightk:</span><span class="description"> "beautifulling" Tkinter (Python)</span></a></li></ul>');
			write_to_term('<ul><li><a href="https://github.com/cptx032/miniprojects"><span class="title">Miniprojects:</span><span class="description"> small projects (Python)</span></a></li></ul>');
			write_to_term('<ul><li><a href="https://github.com/cptx032/aeon"><span class="title">Aeon:</span><span class="description"> an esoteric programming language (C++)</span></a></li></ul>');
			write_to_term('<ul><li><a href="https://github.com/cptx032/ael"><span class="title">Ael:</span><span class="description"> simple "link" programming language (C++)</span></a></li></ul>');
			write_to_term("<h1>Projects that I'm working on currently: </h1>");
			write_to_term('<ul><li><a href="https://github.com/cptx032/lightk"><span class="title">Brainfuck interpreter</span><span class="description"> Brainfuck interpreter with debug capabilities to integrate in any other Python project</span></a></li></ul>');
			write_to_term('<ul><li><a href="http://cptx032.co.nf/noni/index.html"><span class="title">Noni:</span><span class="description"> small cross-platform game framework (C++) to a game that I imagined</span></a></li></ul>');
			write_to_term('<ul><li><a href="https://github.com/cptx032/js_terminal)"><span class="title">This portfolio:</span><span class="description"> yeah! :P</span></a></li></ul>');
		}
		else if (s == "contact") {
			write_to_term('send a mail to: <a href="mailto:cptx032@gmail.com">cptx032 arroba gmail dot com</a> and I will answer asap');
		}
		else if (s == "clear") {
			document.getElementById("screen").innerHTML = "";
		}
		else if (s == "") {
			// nop
		}
		else if (s == "switchcolor") {
			// fixme > this "IF" can be improved
			if (document.body.style.backgroundColor == "rgb(0, 0, 0)") {
				load_light_theme();
			}
			else if (document.body.style.backgroundColor == "rgb(255, 255, 255)") {
				load_dark_theme();
			}
			else {
				write_to_term('stop using browser developer tools :( ');
			}
		}
		else {
			write_to_term(s + ": command not found");
		}
	}
	function key_handle(e) {
		e = e || event
		var K_ESC = 27;
		var K_ENTER = 13;
		if (e.keyCode == K_ESC) {
			cmd.clear();
		}
		if (e.keyCode == K_ENTER) {
			handle_command(cmd.value);
			cmd.clear();
		}
	}
	function main() {
		load_dark_theme();
		var cmd = document.getElementById("cmd");
		cmd.clear = function (){this.value="";};
		cmd.onkeypress = key_handle;
		write_to_term("===== Welcome to cptx032's portfolio! =====");
		write_to_term("Type `help' to know the commands");
		cmd.focus();
	}