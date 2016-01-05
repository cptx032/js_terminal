/*
	Author: Willie Lawrence
	Email: cptx032 arroba gmail dot com
*/

var ael_code = `<pre style='color:#d1d1d1;'><span style='color:#9999a9; '>//		aeon.cpp</span>
<span style='color:#9999a9; '>//		</span>
<span style='color:#9999a9; '>//		Copyright 2014 </span><span style='color:#00c4c4; '>&lt;</span><span style='color:#a160f4; '>cptx032@gmail.com</span><span style='color:#00c4c4; '>></span>
<span style='color:#9999a9; '>//		</span>
<span style='color:#9999a9; '>//		This program is free software; you can redistribute it and/or modify</span>
<span style='color:#9999a9; '>//		it under the terms of the GNU General Public License as published by</span>
<span style='color:#9999a9; '>//		the Free Software Foundation; either version 2 of the License, or</span>
<span style='color:#9999a9; '>//		(at your option) any later version.</span>
<span style='color:#9999a9; '>//      </span>
<span style='color:#9999a9; '>//		This program is distributed in the hope that it will be useful,</span>
<span style='color:#9999a9; '>//		but WITHOUT ANY WARRANTY; without even the implied warranty of</span>
<span style='color:#9999a9; '>//		MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the</span>
<span style='color:#9999a9; '>//		GNU General Public License for more details.</span>
<span style='color:#9999a9; '>//		</span>
<span style='color:#9999a9; '>//		You should have received a copy of the GNU General Public License</span>
<span style='color:#9999a9; '>//		along with this program; if not, write to the Free Software</span>
<span style='color:#9999a9; '>//		Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston,</span>
<span style='color:#9999a9; '>//		MA 02110-1301, USA.</span>
<span style='color:#9999a9; '>//		</span>
<span style='color:#9999a9; '>//		</span>
<span style='color:#008073; '>#</span><span style='color:#008073; '>ifndef</span><span style='color:#008073; '> AEON_H</span>
<span style='color:#008073; '>#</span><span style='color:#008073; '>define</span><span style='color:#008073; '> AEON_H</span>
<span style='color:#008073; '>#</span><span style='color:#008073; '>include </span><span style='color:#02d045; '>&lt;</span><span style='color:#40015a; '>string.h</span><span style='color:#02d045; '>></span>
<span style='color:#008073; '>#</span><span style='color:#008073; '>include </span><span style='color:#02d045; '>&lt;</span><span style='color:#40015a; '>iostream</span><span style='color:#02d045; '>></span>
<span style='color:#008073; '>#</span><span style='color:#008073; '>include </span><span style='color:#02d045; '>&lt;</span><span style='color:#40015a; '>vector</span><span style='color:#02d045; '>></span>
<span style='color:#008073; '>#</span><span style='color:#008073; '>include </span><span style='color:#02d045; '>&lt;</span><span style='color:#40015a; '>stdlib.h</span><span style='color:#02d045; '>></span>
<span style='color:#008073; '>#</span><span style='color:#008073; '>include </span><span style='color:#02d045; '>&lt;</span><span style='color:#40015a; '>sstream</span><span style='color:#02d045; '>></span>
<span style='color:#008073; '>#</span><span style='color:#008073; '>include </span><span style='color:#02d045; '>&lt;</span><span style='color:#40015a; '>fstream</span><span style='color:#02d045; '>></span>

<span style='color:#e66170; font-weight:bold; '>typedef</span> <span style='color:#e66170; font-weight:bold; '>void</span><span style='color:#d2cd86; '>(</span><span style='color:#d2cd86; '>*</span>Function<span style='color:#d2cd86; '>)</span><span style='color:#d2cd86; '>(</span><span style='color:#d2cd86; '>)</span><span style='color:#b060b0; '>;</span>
<span style='color:#e66170; font-weight:bold; '>typedef</span> <span style='color:#e66170; font-weight:bold; '>unsigned</span> <span style='color:#e66170; font-weight:bold; '>int</span> uint<span style='color:#b060b0; '>;</span>

<span style='color:#00dddd; '>std</span><span style='color:#b060b0; '>::</span><span style='color:#e66170; font-weight:bold; '>string</span> to_string<span style='color:#d2cd86; '>(</span><span style='color:#e66170; font-weight:bold; '>double</span> value<span style='color:#d2cd86; '>)</span>
<span style='color:#b060b0; '>{</span>
	<span style='color:#00dddd; '>std</span><span style='color:#b060b0; '>::</span><span style='color:#e66170; font-weight:bold; '>ostringstream</span> ss<span style='color:#b060b0; '>;</span>
	ss <span style='color:#d2cd86; '>&lt;</span><span style='color:#d2cd86; '>&lt;</span> value<span style='color:#b060b0; '>;</span>
	<span style='color:#e66170; font-weight:bold; '>return</span> ss<span style='color:#d2cd86; '>.</span>str<span style='color:#d2cd86; '>(</span><span style='color:#d2cd86; '>)</span><span style='color:#b060b0; '>;</span>
<span style='color:#b060b0; '>}</span>

<span style='color:#e66170; font-weight:bold; '>namespace</span> AeonError
<span style='color:#b060b0; '>{</span>
	<span style='color:#e66170; font-weight:bold; '>enum</span> AeonError
	<span style='color:#b060b0; '>{</span>
		NO_ERROR<span style='color:#d2cd86; '>,</span> CAST_ERROR<span style='color:#d2cd86; '>,</span> SYNTAX_ERROR
	<span style='color:#b060b0; '>}</span><span style='color:#b060b0; '>;</span>
<span style='color:#b060b0; '>}</span>

<span style='color:#e66170; font-weight:bold; '>class</span> AeonFunction
<span style='color:#b060b0; '>{</span>
<span style='color:#e66170; font-weight:bold; '>public</span><span style='color:#e34adc; '>:</span>
	<span style='color:#00dddd; '>std</span><span style='color:#b060b0; '>::</span><span style='color:#e66170; font-weight:bold; '>string</span> name<span style='color:#b060b0; '>;</span>
	Function <span style='color:#e66170; font-weight:bold; '>pointer</span><span style='color:#b060b0; '>;</span>
	AeonFunction<span style='color:#d2cd86; '>(</span><span style='color:#00dddd; '>std</span><span style='color:#b060b0; '>::</span><span style='color:#e66170; font-weight:bold; '>string</span> name<span style='color:#d2cd86; '>,</span> Function <span style='color:#e66170; font-weight:bold; '>pointer</span><span style='color:#d2cd86; '>)</span>
	<span style='color:#b060b0; '>{</span>
		<span style='color:#e66170; font-weight:bold; '>this</span><span style='color:#d2cd86; '>-</span><span style='color:#d2cd86; '>></span>name <span style='color:#d2cd86; '>=</span> name<span style='color:#b060b0; '>;</span>
		<span style='color:#e66170; font-weight:bold; '>this</span><span style='color:#d2cd86; '>-</span><span style='color:#d2cd86; '>></span><span style='color:#e66170; font-weight:bold; '>pointer</span> <span style='color:#d2cd86; '>=</span> <span style='color:#e66170; font-weight:bold; '>pointer</span><span style='color:#b060b0; '>;</span>
	<span style='color:#b060b0; '>}</span>
	<span style='color:#d2cd86; '>~</span>AeonFunction<span style='color:#d2cd86; '>(</span><span style='color:#d2cd86; '>)</span><span style='color:#b060b0; '>{</span><span style='color:#b060b0; '>}</span>
	<span style='color:#e66170; font-weight:bold; '>void</span> call<span style='color:#d2cd86; '>(</span><span style='color:#d2cd86; '>)</span>
	<span style='color:#b060b0; '>{</span>
		<span style='color:#e66170; font-weight:bold; '>this</span><span style='color:#d2cd86; '>-</span><span style='color:#d2cd86; '>></span><span style='color:#e66170; font-weight:bold; '>pointer</span><span style='color:#d2cd86; '>(</span><span style='color:#d2cd86; '>)</span><span style='color:#b060b0; '>;</span>
	<span style='color:#b060b0; '>}</span>
<span style='color:#b060b0; '>}</span><span style='color:#b060b0; '>;</span>

<span style='color:#e66170; font-weight:bold; '>class</span> AeonInterpreter
<span style='color:#b060b0; '>{</span>
<span style='color:#e34adc; '>	</span><span style='color:#e66170; font-weight:bold; '>private</span><span style='color:#e34adc; '>:</span>
	<span style='color:#e66170; font-weight:bold; '>static</span> AeonInterpreter<span style='color:#d2cd86; '>*</span> default_interpreter<span style='color:#b060b0; '>;</span>
<span style='color:#e34adc; '>	</span><span style='color:#e66170; font-weight:bold; '>public</span><span style='color:#e34adc; '>:</span>
	<span style='color:#e66170; font-weight:bold; '>static</span> AeonInterpreter <span style='color:#d2cd86; '>*</span>get_default<span style='color:#d2cd86; '>(</span><span style='color:#d2cd86; '>)</span>
	<span style='color:#b060b0; '>{</span>
		<span style='color:#e66170; font-weight:bold; '>return</span> default_interpreter<span style='color:#b060b0; '>;</span>
	<span style='color:#b060b0; '>}</span>
	<span style='color:#e66170; font-weight:bold; '>static</span> <span style='color:#e66170; font-weight:bold; '>void</span> set_default<span style='color:#d2cd86; '>(</span>AeonInterpreter<span style='color:#d2cd86; '>*</span> d<span style='color:#d2cd86; '>)</span>
	<span style='color:#b060b0; '>{</span>
		default_interpreter <span style='color:#d2cd86; '>=</span> d<span style='color:#b060b0; '>;</span>
	<span style='color:#b060b0; '>}</span>
	AeonInterpreter<span style='color:#d2cd86; '>(</span><span style='color:#d2cd86; '>)</span>
	<span style='color:#b060b0; '>{</span>
		<span style='color:#9999a9; '>// inits the first value</span>
		<span style='color:#e66170; font-weight:bold; '>this</span><span style='color:#d2cd86; '>-</span><span style='color:#d2cd86; '>></span>var_list<span style='color:#d2cd86; '>.</span>push_back<span style='color:#d2cd86; '>(</span><span style='color:#02d045; '>"</span><span style='color:#00c4c4; '>0</span><span style='color:#02d045; '>"</span><span style='color:#d2cd86; '>)</span><span style='color:#b060b0; '>;</span>
		AeonInterpreter<span style='color:#b060b0; '>::</span>set_default<span style='color:#d2cd86; '>(</span><span style='color:#e66170; font-weight:bold; '>this</span><span style='color:#d2cd86; '>)</span><span style='color:#b060b0; '>;</span>
	<span style='color:#b060b0; '>}</span>
	<span style='color:#00dddd; '>std</span><span style='color:#b060b0; '>::</span><span style='color:#e66170; font-weight:bold; '>vector</span><span style='color:#b060b0; '>&lt;</span>AeonFunction<span style='color:#b060b0; '>></span> function_list<span style='color:#b060b0; '>;</span>
	<span style='color:#00dddd; '>std</span><span style='color:#b060b0; '>::</span><span style='color:#e66170; font-weight:bold; '>vector</span><span style='color:#b060b0; '>&lt;</span><span style='color:#00dddd; '>std</span><span style='color:#b060b0; '>::</span><span style='color:#e66170; font-weight:bold; '>string</span><span style='color:#b060b0; '>></span> var_list<span style='color:#b060b0; '>;</span>
	uint line_error<span style='color:#b060b0; '>;</span>
	uint column_error<span style='color:#b060b0; '>;</span>
	uint function_index<span style='color:#b060b0; '>;</span>
	uint var_index<span style='color:#b060b0; '>;</span>
	AeonError<span style='color:#b060b0; '>::</span>AeonError run<span style='color:#d2cd86; '>(</span><span style='color:#00dddd; '>std</span><span style='color:#b060b0; '>::</span><span style='color:#e66170; font-weight:bold; '>vector</span><span style='color:#b060b0; '>&lt;</span><span style='color:#00dddd; '>std</span><span style='color:#b060b0; '>::</span><span style='color:#e66170; font-weight:bold; '>string</span><span style='color:#b060b0; '>></span> script_lines<span style='color:#d2cd86; '>)</span>
	<span style='color:#b060b0; '>{</span>
		<span style='color:#e66170; font-weight:bold; '>bool</span> get_error <span style='color:#d2cd86; '>=</span> <span style='color:#e66170; font-weight:bold; '>false</span><span style='color:#b060b0; '>;</span>
		AeonError<span style='color:#b060b0; '>::</span>AeonError status <span style='color:#d2cd86; '>=</span> AeonError<span style='color:#b060b0; '>::</span>NO_ERROR<span style='color:#b060b0; '>;</span>
		<span style='color:#e66170; font-weight:bold; '>for</span><span style='color:#d2cd86; '>(</span>uint line<span style='color:#d2cd86; '>=</span><span style='color:#008c00; '>0</span><span style='color:#b060b0; '>;</span> line <span style='color:#d2cd86; '>&lt;</span> script_lines<span style='color:#d2cd86; '>.</span>size<span style='color:#d2cd86; '>(</span><span style='color:#d2cd86; '>)</span><span style='color:#b060b0; '>;</span>line<span style='color:#d2cd86; '>+</span><span style='color:#d2cd86; '>+</span><span style='color:#d2cd86; '>)</span>
		<span style='color:#b060b0; '>{</span>
			<span style='color:#e66170; font-weight:bold; '>if</span> <span style='color:#d2cd86; '>(</span>get_error<span style='color:#d2cd86; '>)</span>
			<span style='color:#b060b0; '>{</span>
				<span style='color:#9999a9; '>// stop the loop</span>
				<span style='color:#e66170; font-weight:bold; '>break</span><span style='color:#b060b0; '>;</span>
			<span style='color:#b060b0; '>}</span>
			<span style='color:#e66170; font-weight:bold; '>for</span><span style='color:#d2cd86; '>(</span>uint _c <span style='color:#d2cd86; '>=</span> <span style='color:#008c00; '>0</span><span style='color:#b060b0; '>;</span> _c <span style='color:#d2cd86; '>&lt;</span> <span style='color:#e66170; font-weight:bold; '>strlen</span><span style='color:#d2cd86; '>(</span>script_lines<span style='color:#d2cd86; '>[</span>line<span style='color:#d2cd86; '>]</span><span style='color:#d2cd86; '>.</span>c_str<span style='color:#d2cd86; '>(</span><span style='color:#d2cd86; '>)</span><span style='color:#d2cd86; '>)</span><span style='color:#b060b0; '>;</span> _c<span style='color:#d2cd86; '>+</span><span style='color:#d2cd86; '>+</span><span style='color:#d2cd86; '>)</span>
			<span style='color:#b060b0; '>{</span>
				<span style='color:#e66170; font-weight:bold; '>char</span> t <span style='color:#d2cd86; '>=</span> script_lines<span style='color:#d2cd86; '>[</span>line<span style='color:#d2cd86; '>]</span><span style='color:#d2cd86; '>[</span>_c<span style='color:#d2cd86; '>]</span><span style='color:#b060b0; '>;</span>
				<span style='color:#e66170; font-weight:bold; '>if</span> <span style='color:#d2cd86; '>(</span>t <span style='color:#d2cd86; '>=</span><span style='color:#d2cd86; '>=</span> <span style='color:#00c4c4; '>'.'</span><span style='color:#d2cd86; '>)</span>
				<span style='color:#b060b0; '>{</span>
					<span style='color:#e66170; font-weight:bold; '>this</span><span style='color:#d2cd86; '>-</span><span style='color:#d2cd86; '>></span>function_list<span style='color:#d2cd86; '>[</span><span style='color:#e66170; font-weight:bold; '>this</span><span style='color:#d2cd86; '>-</span><span style='color:#d2cd86; '>></span>function_index<span style='color:#d2cd86; '>]</span><span style='color:#d2cd86; '>.</span>call<span style='color:#d2cd86; '>(</span><span style='color:#d2cd86; '>)</span><span style='color:#b060b0; '>;</span>
				<span style='color:#b060b0; '>}</span>
				<span style='color:#e66170; font-weight:bold; '>else</span> <span style='color:#e66170; font-weight:bold; '>if</span> <span style='color:#d2cd86; '>(</span>t <span style='color:#d2cd86; '>=</span><span style='color:#d2cd86; '>=</span> <span style='color:#00c4c4; '>'#'</span><span style='color:#d2cd86; '>)</span><span style='color:#b060b0; '>{</span><span style='color:#e66170; font-weight:bold; '>break</span><span style='color:#b060b0; '>;</span><span style='color:#b060b0; '>}</span>
				<span style='color:#e66170; font-weight:bold; '>else</span> <span style='color:#e66170; font-weight:bold; '>if</span> <span style='color:#d2cd86; '>(</span>t <span style='color:#d2cd86; '>=</span><span style='color:#d2cd86; '>=</span> <span style='color:#00c4c4; '>'%'</span><span style='color:#d2cd86; '>)</span>
				<span style='color:#b060b0; '>{</span>
					<span style='color:#e66170; font-weight:bold; '>this</span><span style='color:#d2cd86; '>-</span><span style='color:#d2cd86; '>></span>var_list<span style='color:#d2cd86; '>[</span><span style='color:#e66170; font-weight:bold; '>this</span><span style='color:#d2cd86; '>-</span><span style='color:#d2cd86; '>></span>var_index<span style='color:#d2cd86; '>]</span> <span style='color:#d2cd86; '>=</span> script_lines<span style='color:#d2cd86; '>[</span>line<span style='color:#d2cd86; '>]</span><span style='color:#d2cd86; '>.</span>substr<span style='color:#d2cd86; '>(</span>_c<span style='color:#d2cd86; '>+</span><span style='color:#008c00; '>1</span><span style='color:#d2cd86; '>)</span><span style='color:#b060b0; '>;</span>
					<span style='color:#e66170; font-weight:bold; '>break</span><span style='color:#b060b0; '>;</span>
				<span style='color:#b060b0; '>}</span>
				<span style='color:#e66170; font-weight:bold; '>else</span> <span style='color:#e66170; font-weight:bold; '>if</span> <span style='color:#d2cd86; '>(</span>t <span style='color:#d2cd86; '>=</span><span style='color:#d2cd86; '>=</span> <span style='color:#00c4c4; '>'>'</span><span style='color:#d2cd86; '>)</span>
				<span style='color:#b060b0; '>{</span>
					<span style='color:#e66170; font-weight:bold; '>this</span><span style='color:#d2cd86; '>-</span><span style='color:#d2cd86; '>></span>var_index<span style='color:#d2cd86; '>+</span><span style='color:#d2cd86; '>+</span><span style='color:#b060b0; '>;</span>
					<span style='color:#e66170; font-weight:bold; '>if</span> <span style='color:#d2cd86; '>(</span><span style='color:#e66170; font-weight:bold; '>this</span><span style='color:#d2cd86; '>-</span><span style='color:#d2cd86; '>></span>var_index <span style='color:#d2cd86; '>=</span><span style='color:#d2cd86; '>=</span> <span style='color:#e66170; font-weight:bold; '>this</span><span style='color:#d2cd86; '>-</span><span style='color:#d2cd86; '>></span>var_list<span style='color:#d2cd86; '>.</span>size<span style='color:#d2cd86; '>(</span><span style='color:#d2cd86; '>)</span><span style='color:#d2cd86; '>)</span>
					<span style='color:#b060b0; '>{</span>
						<span style='color:#e66170; font-weight:bold; '>this</span><span style='color:#d2cd86; '>-</span><span style='color:#d2cd86; '>></span>var_list<span style='color:#d2cd86; '>.</span>push_back<span style='color:#d2cd86; '>(</span><span style='color:#02d045; '>"</span><span style='color:#00c4c4; '>0</span><span style='color:#02d045; '>"</span><span style='color:#d2cd86; '>)</span><span style='color:#b060b0; '>;</span>
					<span style='color:#b060b0; '>}</span>
				<span style='color:#b060b0; '>}</span>
				<span style='color:#e66170; font-weight:bold; '>else</span> <span style='color:#e66170; font-weight:bold; '>if</span> <span style='color:#d2cd86; '>(</span>t <span style='color:#d2cd86; '>=</span><span style='color:#d2cd86; '>=</span> <span style='color:#00c4c4; '>'&lt;'</span><span style='color:#d2cd86; '>)</span><span style='color:#b060b0; '>{</span><span style='color:#e66170; font-weight:bold; '>this</span><span style='color:#d2cd86; '>-</span><span style='color:#d2cd86; '>></span>var_index<span style='color:#d2cd86; '>-</span><span style='color:#d2cd86; '>-</span><span style='color:#b060b0; '>;</span><span style='color:#b060b0; '>}</span>
				<span style='color:#e66170; font-weight:bold; '>else</span> <span style='color:#e66170; font-weight:bold; '>if</span> <span style='color:#d2cd86; '>(</span>t <span style='color:#d2cd86; '>=</span><span style='color:#d2cd86; '>=</span> <span style='color:#00c4c4; '>'v'</span><span style='color:#d2cd86; '>)</span><span style='color:#b060b0; '>{</span><span style='color:#e66170; font-weight:bold; '>this</span><span style='color:#d2cd86; '>-</span><span style='color:#d2cd86; '>></span>function_index<span style='color:#d2cd86; '>+</span><span style='color:#d2cd86; '>+</span><span style='color:#b060b0; '>;</span><span style='color:#b060b0; '>}</span>
				<span style='color:#e66170; font-weight:bold; '>else</span> <span style='color:#e66170; font-weight:bold; '>if</span> <span style='color:#d2cd86; '>(</span>t <span style='color:#d2cd86; '>=</span><span style='color:#d2cd86; '>=</span> <span style='color:#00c4c4; '>'^'</span><span style='color:#d2cd86; '>)</span><span style='color:#b060b0; '>{</span><span style='color:#e66170; font-weight:bold; '>this</span><span style='color:#d2cd86; '>-</span><span style='color:#d2cd86; '>></span>function_index<span style='color:#d2cd86; '>-</span><span style='color:#d2cd86; '>-</span><span style='color:#b060b0; '>;</span><span style='color:#b060b0; '>}</span>
				<span style='color:#e66170; font-weight:bold; '>else</span> <span style='color:#e66170; font-weight:bold; '>if</span> <span style='color:#d2cd86; '>(</span>t <span style='color:#d2cd86; '>=</span><span style='color:#d2cd86; '>=</span> <span style='color:#00c4c4; '>'+'</span><span style='color:#d2cd86; '>)</span>
				<span style='color:#b060b0; '>{</span>
					<span style='color:#e66170; font-weight:bold; '>double</span> d <span style='color:#d2cd86; '>=</span> <span style='color:#e66170; font-weight:bold; '>atof</span><span style='color:#d2cd86; '>(</span><span style='color:#e66170; font-weight:bold; '>this</span><span style='color:#d2cd86; '>-</span><span style='color:#d2cd86; '>></span>var_list<span style='color:#d2cd86; '>[</span><span style='color:#e66170; font-weight:bold; '>this</span><span style='color:#d2cd86; '>-</span><span style='color:#d2cd86; '>></span>var_index<span style='color:#d2cd86; '>]</span><span style='color:#d2cd86; '>.</span>c_str<span style='color:#d2cd86; '>(</span><span style='color:#d2cd86; '>)</span><span style='color:#d2cd86; '>)</span><span style='color:#b060b0; '>;</span>
					<span style='color:#e66170; font-weight:bold; '>this</span><span style='color:#d2cd86; '>-</span><span style='color:#d2cd86; '>></span>var_list<span style='color:#d2cd86; '>[</span><span style='color:#e66170; font-weight:bold; '>this</span><span style='color:#d2cd86; '>-</span><span style='color:#d2cd86; '>></span>var_index<span style='color:#d2cd86; '>]</span> <span style='color:#d2cd86; '>=</span> to_string<span style='color:#d2cd86; '>(</span>d<span style='color:#d2cd86; '>+</span><span style='color:#008c00; '>1</span><span style='color:#d2cd86; '>)</span><span style='color:#b060b0; '>;</span>
				<span style='color:#b060b0; '>}</span>
				<span style='color:#e66170; font-weight:bold; '>else</span> <span style='color:#e66170; font-weight:bold; '>if</span> <span style='color:#d2cd86; '>(</span>t <span style='color:#d2cd86; '>=</span><span style='color:#d2cd86; '>=</span> <span style='color:#00c4c4; '>'-'</span><span style='color:#d2cd86; '>)</span>
				<span style='color:#b060b0; '>{</span>
					<span style='color:#e66170; font-weight:bold; '>double</span> d <span style='color:#d2cd86; '>=</span> <span style='color:#e66170; font-weight:bold; '>atof</span><span style='color:#d2cd86; '>(</span><span style='color:#e66170; font-weight:bold; '>this</span><span style='color:#d2cd86; '>-</span><span style='color:#d2cd86; '>></span>var_list<span style='color:#d2cd86; '>[</span><span style='color:#e66170; font-weight:bold; '>this</span><span style='color:#d2cd86; '>-</span><span style='color:#d2cd86; '>></span>var_index<span style='color:#d2cd86; '>]</span><span style='color:#d2cd86; '>.</span>c_str<span style='color:#d2cd86; '>(</span><span style='color:#d2cd86; '>)</span><span style='color:#d2cd86; '>)</span><span style='color:#b060b0; '>;</span>
					<span style='color:#e66170; font-weight:bold; '>this</span><span style='color:#d2cd86; '>-</span><span style='color:#d2cd86; '>></span>var_list<span style='color:#d2cd86; '>[</span><span style='color:#e66170; font-weight:bold; '>this</span><span style='color:#d2cd86; '>-</span><span style='color:#d2cd86; '>></span>var_index<span style='color:#d2cd86; '>]</span> <span style='color:#d2cd86; '>=</span> to_string<span style='color:#d2cd86; '>(</span>d<span style='color:#d2cd86; '>-</span><span style='color:#008c00; '>1</span><span style='color:#d2cd86; '>)</span><span style='color:#b060b0; '>;</span>
				<span style='color:#b060b0; '>}</span>
				<span style='color:#e66170; font-weight:bold; '>else</span> <span style='color:#e66170; font-weight:bold; '>if</span> <span style='color:#d2cd86; '>(</span>t <span style='color:#d2cd86; '>=</span><span style='color:#d2cd86; '>=</span> <span style='color:#00c4c4; '>'('</span><span style='color:#d2cd86; '>)</span>
				<span style='color:#b060b0; '>{</span>
					<span style='color:#9999a9; '>// while loop</span>
					<span style='color:#00dddd; '>std</span><span style='color:#b060b0; '>::</span><span style='color:#e66170; font-weight:bold; '>string</span> while_block <span style='color:#d2cd86; '>=</span> script_lines<span style='color:#d2cd86; '>[</span>line<span style='color:#d2cd86; '>]</span><span style='color:#d2cd86; '>.</span>substr<span style='color:#d2cd86; '>(</span>_c<span style='color:#d2cd86; '>+</span><span style='color:#008c00; '>1</span><span style='color:#d2cd86; '>)</span><span style='color:#b060b0; '>;</span>
					<span style='color:#e66170; font-weight:bold; '>while</span><span style='color:#d2cd86; '>(</span><span style='color:#e66170; font-weight:bold; '>this</span><span style='color:#d2cd86; '>-</span><span style='color:#d2cd86; '>></span>var_list<span style='color:#d2cd86; '>[</span><span style='color:#e66170; font-weight:bold; '>this</span><span style='color:#d2cd86; '>-</span><span style='color:#d2cd86; '>></span>var_index<span style='color:#d2cd86; '>]</span> <span style='color:#d2cd86; '>!</span><span style='color:#d2cd86; '>=</span> <span style='color:#02d045; '>"</span><span style='color:#00c4c4; '>0</span><span style='color:#02d045; '>"</span><span style='color:#d2cd86; '>)</span>
					<span style='color:#b060b0; '>{</span>
						<span style='color:#00dddd; '>std</span><span style='color:#b060b0; '>::</span><span style='color:#e66170; font-weight:bold; '>vector</span><span style='color:#b060b0; '>&lt;</span><span style='color:#00dddd; '>std</span><span style='color:#b060b0; '>::</span><span style='color:#e66170; font-weight:bold; '>string</span><span style='color:#b060b0; '>></span> wb<span style='color:#b060b0; '>;</span>
						wb<span style='color:#d2cd86; '>.</span>push_back<span style='color:#d2cd86; '>(</span>while_block<span style='color:#d2cd86; '>)</span><span style='color:#b060b0; '>;</span>
						<span style='color:#e66170; font-weight:bold; '>this</span><span style='color:#d2cd86; '>-</span><span style='color:#d2cd86; '>></span>run<span style='color:#d2cd86; '>(</span>wb<span style='color:#d2cd86; '>)</span><span style='color:#b060b0; '>;</span>
					<span style='color:#b060b0; '>}</span>
					<span style='color:#9999a9; '>// jumpto the next line</span>
					<span style='color:#e66170; font-weight:bold; '>break</span><span style='color:#b060b0; '>;</span>
				<span style='color:#b060b0; '>}</span>
				<span style='color:#e66170; font-weight:bold; '>else</span> <span style='color:#e66170; font-weight:bold; '>if</span> <span style='color:#d2cd86; '>(</span>t <span style='color:#d2cd86; '>=</span><span style='color:#d2cd86; '>=</span> <span style='color:#00c4c4; '>'{'</span><span style='color:#d2cd86; '>)</span>
				<span style='color:#b060b0; '>{</span>
					<span style='color:#9999a9; '>// the next char is '='?</span>
					<span style='color:#e66170; font-weight:bold; '>if</span> <span style='color:#d2cd86; '>(</span>script_lines<span style='color:#d2cd86; '>[</span>line<span style='color:#d2cd86; '>]</span><span style='color:#d2cd86; '>[</span>_c<span style='color:#d2cd86; '>+</span><span style='color:#008c00; '>1</span><span style='color:#d2cd86; '>]</span> <span style='color:#d2cd86; '>=</span><span style='color:#d2cd86; '>=</span> <span style='color:#00c4c4; '>'='</span><span style='color:#d2cd86; '>)</span>
					<span style='color:#b060b0; '>{</span>
						<span style='color:#e66170; font-weight:bold; '>if</span> <span style='color:#d2cd86; '>(</span><span style='color:#e66170; font-weight:bold; '>this</span><span style='color:#d2cd86; '>-</span><span style='color:#d2cd86; '>></span>var_list<span style='color:#d2cd86; '>[</span><span style='color:#e66170; font-weight:bold; '>this</span><span style='color:#d2cd86; '>-</span><span style='color:#d2cd86; '>></span>var_index<span style='color:#d2cd86; '>]</span><span style='color:#d2cd86; '>=</span><span style='color:#d2cd86; '>=</span><span style='color:#e66170; font-weight:bold; '>this</span><span style='color:#d2cd86; '>-</span><span style='color:#d2cd86; '>></span>var_list<span style='color:#d2cd86; '>[</span><span style='color:#e66170; font-weight:bold; '>this</span><span style='color:#d2cd86; '>-</span><span style='color:#d2cd86; '>></span>var_index<span style='color:#d2cd86; '>-</span><span style='color:#008c00; '>1</span><span style='color:#d2cd86; '>]</span><span style='color:#d2cd86; '>)</span>
						<span style='color:#b060b0; '>{</span>
							<span style='color:#9999a9; '>// jump the next c</span>
							_c<span style='color:#d2cd86; '>+</span><span style='color:#d2cd86; '>+</span><span style='color:#b060b0; '>;</span>
							<span style='color:#e66170; font-weight:bold; '>continue</span><span style='color:#b060b0; '>;</span>
						<span style='color:#b060b0; '>}</span>
						<span style='color:#e66170; font-weight:bold; '>else</span>
						<span style='color:#b060b0; '>{</span>
							<span style='color:#9999a9; '>// jump to next line</span>
							<span style='color:#e66170; font-weight:bold; '>break</span><span style='color:#b060b0; '>;</span>
						<span style='color:#b060b0; '>}</span>
					<span style='color:#b060b0; '>}</span>
					<span style='color:#9999a9; '>// the next char is '|'?</span>
					<span style='color:#e66170; font-weight:bold; '>else</span> <span style='color:#e66170; font-weight:bold; '>if</span> <span style='color:#d2cd86; '>(</span>script_lines<span style='color:#d2cd86; '>[</span>line<span style='color:#d2cd86; '>]</span><span style='color:#d2cd86; '>[</span>_c<span style='color:#d2cd86; '>+</span><span style='color:#008c00; '>1</span><span style='color:#d2cd86; '>]</span> <span style='color:#d2cd86; '>=</span><span style='color:#d2cd86; '>=</span> <span style='color:#00c4c4; '>'|'</span><span style='color:#d2cd86; '>)</span>
					<span style='color:#b060b0; '>{</span>
						<span style='color:#e66170; font-weight:bold; '>if</span> <span style='color:#d2cd86; '>(</span><span style='color:#e66170; font-weight:bold; '>this</span><span style='color:#d2cd86; '>-</span><span style='color:#d2cd86; '>></span>var_list<span style='color:#d2cd86; '>[</span><span style='color:#e66170; font-weight:bold; '>this</span><span style='color:#d2cd86; '>-</span><span style='color:#d2cd86; '>></span>var_index<span style='color:#d2cd86; '>]</span> <span style='color:#d2cd86; '>!</span><span style='color:#d2cd86; '>=</span> <span style='color:#e66170; font-weight:bold; '>this</span><span style='color:#d2cd86; '>-</span><span style='color:#d2cd86; '>></span>var_list<span style='color:#d2cd86; '>[</span><span style='color:#e66170; font-weight:bold; '>this</span><span style='color:#d2cd86; '>-</span><span style='color:#d2cd86; '>></span>var_index<span style='color:#d2cd86; '>-</span><span style='color:#008c00; '>1</span><span style='color:#d2cd86; '>]</span><span style='color:#d2cd86; '>)</span>
						<span style='color:#b060b0; '>{</span>
							<span style='color:#9999a9; '>// jump the next char</span>
							_c<span style='color:#d2cd86; '>+</span><span style='color:#d2cd86; '>+</span><span style='color:#b060b0; '>;</span>
							<span style='color:#e66170; font-weight:bold; '>continue</span><span style='color:#b060b0; '>;</span>
						<span style='color:#b060b0; '>}</span>
						<span style='color:#e66170; font-weight:bold; '>else</span>
						<span style='color:#b060b0; '>{</span>
							<span style='color:#9999a9; '>// jump to next line</span>
							<span style='color:#e66170; font-weight:bold; '>break</span><span style='color:#b060b0; '>;</span>
						<span style='color:#b060b0; '>}</span>
					<span style='color:#b060b0; '>}</span>
					<span style='color:#9999a9; '>// the next char is ']'?</span>
					<span style='color:#e66170; font-weight:bold; '>else</span> <span style='color:#e66170; font-weight:bold; '>if</span> <span style='color:#d2cd86; '>(</span>script_lines<span style='color:#d2cd86; '>[</span>line<span style='color:#d2cd86; '>]</span><span style='color:#d2cd86; '>[</span>_c<span style='color:#d2cd86; '>+</span><span style='color:#008c00; '>1</span><span style='color:#d2cd86; '>]</span> <span style='color:#d2cd86; '>=</span><span style='color:#d2cd86; '>=</span> <span style='color:#00c4c4; '>']'</span><span style='color:#d2cd86; '>)</span>
					<span style='color:#b060b0; '>{</span>
						<span style='color:#00dddd; '>std</span><span style='color:#b060b0; '>::</span><span style='color:#e66170; font-weight:bold; '>istringstream</span> ss_actual<span style='color:#d2cd86; '>(</span><span style='color:#e66170; font-weight:bold; '>this</span><span style='color:#d2cd86; '>-</span><span style='color:#d2cd86; '>></span>var_list<span style='color:#d2cd86; '>[</span><span style='color:#e66170; font-weight:bold; '>this</span><span style='color:#d2cd86; '>-</span><span style='color:#d2cd86; '>></span>var_index<span style='color:#d2cd86; '>]</span><span style='color:#d2cd86; '>.</span>c_str<span style='color:#d2cd86; '>(</span><span style='color:#d2cd86; '>)</span><span style='color:#d2cd86; '>)</span><span style='color:#b060b0; '>;</span>
						<span style='color:#e66170; font-weight:bold; '>double</span> actual <span style='color:#d2cd86; '>=</span> <span style='color:#008c00; '>0</span><span style='color:#b060b0; '>;</span>
						<span style='color:#e66170; font-weight:bold; '>double</span> last_value <span style='color:#d2cd86; '>=</span> <span style='color:#008c00; '>0</span><span style='color:#b060b0; '>;</span>
						ss_actual <span style='color:#d2cd86; '>></span><span style='color:#d2cd86; '>></span> actual<span style='color:#b060b0; '>;</span>
						<span style='color:#e66170; font-weight:bold; '>if</span><span style='color:#d2cd86; '>(</span>ss_actual<span style='color:#d2cd86; '>.</span>fail<span style='color:#d2cd86; '>(</span><span style='color:#d2cd86; '>)</span><span style='color:#d2cd86; '>)</span>
						<span style='color:#b060b0; '>{</span>
							<span style='color:#9999a9; '>// casting error</span>
							get_error  <span style='color:#d2cd86; '>=</span> <span style='color:#e66170; font-weight:bold; '>true</span><span style='color:#b060b0; '>;</span>
							status <span style='color:#d2cd86; '>=</span> AeonError<span style='color:#b060b0; '>::</span>CAST_ERROR<span style='color:#b060b0; '>;</span>
							<span style='color:#e66170; font-weight:bold; '>this</span><span style='color:#d2cd86; '>-</span><span style='color:#d2cd86; '>></span>line_error <span style='color:#d2cd86; '>=</span> line<span style='color:#b060b0; '>;</span>
							<span style='color:#e66170; font-weight:bold; '>this</span><span style='color:#d2cd86; '>-</span><span style='color:#d2cd86; '>></span>column_error <span style='color:#d2cd86; '>=</span> _c<span style='color:#b060b0; '>;</span>
							<span style='color:#e66170; font-weight:bold; '>break</span><span style='color:#b060b0; '>;</span>
						<span style='color:#b060b0; '>}</span>
						<span style='color:#00dddd; '>std</span><span style='color:#b060b0; '>::</span><span style='color:#e66170; font-weight:bold; '>istringstream</span> ss_last<span style='color:#d2cd86; '>(</span><span style='color:#e66170; font-weight:bold; '>this</span><span style='color:#d2cd86; '>-</span><span style='color:#d2cd86; '>></span>var_list<span style='color:#d2cd86; '>[</span><span style='color:#e66170; font-weight:bold; '>this</span><span style='color:#d2cd86; '>-</span><span style='color:#d2cd86; '>></span>var_index<span style='color:#d2cd86; '>-</span><span style='color:#008c00; '>1</span><span style='color:#d2cd86; '>]</span><span style='color:#d2cd86; '>.</span>c_str<span style='color:#d2cd86; '>(</span><span style='color:#d2cd86; '>)</span><span style='color:#d2cd86; '>)</span><span style='color:#b060b0; '>;</span>
						ss_last <span style='color:#d2cd86; '>></span><span style='color:#d2cd86; '>></span> last_value<span style='color:#b060b0; '>;</span>
						<span style='color:#e66170; font-weight:bold; '>if</span><span style='color:#d2cd86; '>(</span>ss_last<span style='color:#d2cd86; '>.</span>fail<span style='color:#d2cd86; '>(</span><span style='color:#d2cd86; '>)</span><span style='color:#d2cd86; '>)</span>
						<span style='color:#b060b0; '>{</span>
							<span style='color:#9999a9; '>// casting error</span>
							get_error  <span style='color:#d2cd86; '>=</span> <span style='color:#e66170; font-weight:bold; '>true</span><span style='color:#b060b0; '>;</span>
							status <span style='color:#d2cd86; '>=</span> AeonError<span style='color:#b060b0; '>::</span>CAST_ERROR<span style='color:#b060b0; '>;</span>
							<span style='color:#e66170; font-weight:bold; '>this</span><span style='color:#d2cd86; '>-</span><span style='color:#d2cd86; '>></span>line_error <span style='color:#d2cd86; '>=</span> line<span style='color:#b060b0; '>;</span>
							<span style='color:#e66170; font-weight:bold; '>this</span><span style='color:#d2cd86; '>-</span><span style='color:#d2cd86; '>></span>column_error <span style='color:#d2cd86; '>=</span> _c<span style='color:#b060b0; '>;</span>
							<span style='color:#e66170; font-weight:bold; '>break</span><span style='color:#b060b0; '>;</span>
						<span style='color:#b060b0; '>}</span>
						<span style='color:#e66170; font-weight:bold; '>if</span> <span style='color:#d2cd86; '>(</span>actual <span style='color:#d2cd86; '>></span> last_value<span style='color:#d2cd86; '>)</span>
						<span style='color:#b060b0; '>{</span>
							<span style='color:#9999a9; '>// jump the next char</span>
							_c<span style='color:#d2cd86; '>+</span><span style='color:#d2cd86; '>+</span><span style='color:#b060b0; '>;</span>
							<span style='color:#e66170; font-weight:bold; '>continue</span><span style='color:#b060b0; '>;</span>
						<span style='color:#b060b0; '>}</span>
						<span style='color:#e66170; font-weight:bold; '>else</span>
						<span style='color:#b060b0; '>{</span>
							<span style='color:#9999a9; '>// jump to next line</span>
							<span style='color:#e66170; font-weight:bold; '>break</span><span style='color:#b060b0; '>;</span>
						<span style='color:#b060b0; '>}</span>
					<span style='color:#b060b0; '>}</span>
					<span style='color:#9999a9; '>// the next char is '['?</span>
					<span style='color:#e66170; font-weight:bold; '>else</span> <span style='color:#e66170; font-weight:bold; '>if</span> <span style='color:#d2cd86; '>(</span>script_lines<span style='color:#d2cd86; '>[</span>line<span style='color:#d2cd86; '>]</span><span style='color:#d2cd86; '>[</span>_c<span style='color:#d2cd86; '>+</span><span style='color:#008c00; '>1</span><span style='color:#d2cd86; '>]</span> <span style='color:#d2cd86; '>=</span><span style='color:#d2cd86; '>=</span> <span style='color:#00c4c4; '>'['</span><span style='color:#d2cd86; '>)</span>
					<span style='color:#b060b0; '>{</span>
						<span style='color:#e66170; font-weight:bold; '>double</span> actual <span style='color:#d2cd86; '>=</span> <span style='color:#e66170; font-weight:bold; '>atof</span><span style='color:#d2cd86; '>(</span><span style='color:#e66170; font-weight:bold; '>this</span><span style='color:#d2cd86; '>-</span><span style='color:#d2cd86; '>></span>var_list<span style='color:#d2cd86; '>[</span><span style='color:#e66170; font-weight:bold; '>this</span><span style='color:#d2cd86; '>-</span><span style='color:#d2cd86; '>></span>var_index<span style='color:#d2cd86; '>]</span><span style='color:#d2cd86; '>.</span>c_str<span style='color:#d2cd86; '>(</span><span style='color:#d2cd86; '>)</span><span style='color:#d2cd86; '>)</span><span style='color:#b060b0; '>;</span>
						<span style='color:#e66170; font-weight:bold; '>double</span> last_value <span style='color:#d2cd86; '>=</span> <span style='color:#e66170; font-weight:bold; '>atof</span><span style='color:#d2cd86; '>(</span><span style='color:#e66170; font-weight:bold; '>this</span><span style='color:#d2cd86; '>-</span><span style='color:#d2cd86; '>></span>var_list<span style='color:#d2cd86; '>[</span><span style='color:#e66170; font-weight:bold; '>this</span><span style='color:#d2cd86; '>-</span><span style='color:#d2cd86; '>></span>var_index<span style='color:#d2cd86; '>-</span><span style='color:#008c00; '>1</span><span style='color:#d2cd86; '>]</span><span style='color:#d2cd86; '>.</span>c_str<span style='color:#d2cd86; '>(</span><span style='color:#d2cd86; '>)</span><span style='color:#d2cd86; '>)</span><span style='color:#b060b0; '>;</span>
						<span style='color:#e66170; font-weight:bold; '>if</span> <span style='color:#d2cd86; '>(</span>actual <span style='color:#d2cd86; '>&lt;</span> last_value<span style='color:#d2cd86; '>)</span>
						<span style='color:#b060b0; '>{</span>
							<span style='color:#9999a9; '>// jump the next char</span>
							_c<span style='color:#d2cd86; '>+</span><span style='color:#d2cd86; '>+</span><span style='color:#b060b0; '>;</span>
							<span style='color:#e66170; font-weight:bold; '>continue</span><span style='color:#b060b0; '>;</span>
						<span style='color:#b060b0; '>}</span>
						<span style='color:#e66170; font-weight:bold; '>else</span>
						<span style='color:#b060b0; '>{</span>
							<span style='color:#9999a9; '>// jump to next line</span>
							<span style='color:#e66170; font-weight:bold; '>break</span><span style='color:#b060b0; '>;</span>
						<span style='color:#b060b0; '>}</span>
					<span style='color:#b060b0; '>}</span>
					<span style='color:#9999a9; '>// if is not any of these values</span>
					<span style='color:#e66170; font-weight:bold; '>else</span>
					<span style='color:#b060b0; '>{</span>
						get_error <span style='color:#d2cd86; '>=</span> <span style='color:#e66170; font-weight:bold; '>true</span><span style='color:#b060b0; '>;</span>
						status <span style='color:#d2cd86; '>=</span> AeonError<span style='color:#b060b0; '>::</span>SYNTAX_ERROR<span style='color:#b060b0; '>;</span>
						<span style='color:#e66170; font-weight:bold; '>this</span><span style='color:#d2cd86; '>-</span><span style='color:#d2cd86; '>></span>line_error <span style='color:#d2cd86; '>=</span> line<span style='color:#b060b0; '>;</span>
						<span style='color:#e66170; font-weight:bold; '>this</span><span style='color:#d2cd86; '>-</span><span style='color:#d2cd86; '>></span>column_error <span style='color:#d2cd86; '>=</span> _c<span style='color:#b060b0; '>;</span>
						<span style='color:#e66170; font-weight:bold; '>break</span><span style='color:#b060b0; '>;</span>
					<span style='color:#b060b0; '>}</span>
				<span style='color:#b060b0; '>}</span>
			<span style='color:#b060b0; '>}</span>
		<span style='color:#b060b0; '>}</span>
		<span style='color:#e66170; font-weight:bold; '>return</span> status<span style='color:#b060b0; '>;</span>
	<span style='color:#b060b0; '>}</span>
<span style='color:#b060b0; '>}</span><span style='color:#b060b0; '>;</span>
AeonInterpreter<span style='color:#d2cd86; '>*</span> AeonInterpreter<span style='color:#b060b0; '>::</span>default_interpreter <span style='color:#d2cd86; '>=</span> <span style='color:#007d45; '>NULL</span><span style='color:#b060b0; '>;</span>
AeonInterpreter <span style='color:#d2cd86; '>*</span>i <span style='color:#d2cd86; '>=</span> <span style='color:#e66170; font-weight:bold; '>new</span> AeonInterpreter<span style='color:#d2cd86; '>(</span><span style='color:#d2cd86; '>)</span><span style='color:#b060b0; '>;</span>
<span style='color:#e66170; font-weight:bold; '>void</span> print<span style='color:#d2cd86; '>(</span><span style='color:#d2cd86; '>)</span>
<span style='color:#b060b0; '>{</span>
	<span style='color:#00dddd; '>std</span><span style='color:#b060b0; '>::</span><span style='color:#e66170; font-weight:bold; '>cout</span> <span style='color:#d2cd86; '>&lt;</span><span style='color:#d2cd86; '>&lt;</span> AeonInterpreter<span style='color:#b060b0; '>::</span>get_default<span style='color:#d2cd86; '>(</span><span style='color:#d2cd86; '>)</span><span style='color:#d2cd86; '>-</span><span style='color:#d2cd86; '>></span>var_list<span style='color:#d2cd86; '>[</span>AeonInterpreter<span style='color:#b060b0; '>::</span>get_default<span style='color:#d2cd86; '>(</span><span style='color:#d2cd86; '>)</span><span style='color:#d2cd86; '>-</span><span style='color:#d2cd86; '>></span>var_index<span style='color:#d2cd86; '>]</span><span style='color:#b060b0; '>;</span>
<span style='color:#b060b0; '>}</span>
<span style='color:#e66170; font-weight:bold; '>void</span> println<span style='color:#d2cd86; '>(</span><span style='color:#d2cd86; '>)</span>
<span style='color:#b060b0; '>{</span>
	<span style='color:#00dddd; '>std</span><span style='color:#b060b0; '>::</span><span style='color:#e66170; font-weight:bold; '>cout</span> <span style='color:#d2cd86; '>&lt;</span><span style='color:#d2cd86; '>&lt;</span> AeonInterpreter<span style='color:#b060b0; '>::</span>get_default<span style='color:#d2cd86; '>(</span><span style='color:#d2cd86; '>)</span><span style='color:#d2cd86; '>-</span><span style='color:#d2cd86; '>></span>var_list<span style='color:#d2cd86; '>[</span>AeonInterpreter<span style='color:#b060b0; '>::</span>get_default<span style='color:#d2cd86; '>(</span><span style='color:#d2cd86; '>)</span><span style='color:#d2cd86; '>-</span><span style='color:#d2cd86; '>></span>var_index<span style='color:#d2cd86; '>]</span> <span style='color:#d2cd86; '>&lt;</span><span style='color:#d2cd86; '>&lt;</span> <span style='color:#00dddd; '>std</span><span style='color:#b060b0; '>::</span><span style='color:#e66170; font-weight:bold; '>endl</span><span style='color:#b060b0; '>;</span>
<span style='color:#b060b0; '>}</span>
<span style='color:#e66170; font-weight:bold; '>void</span> get_input<span style='color:#d2cd86; '>(</span><span style='color:#d2cd86; '>)</span>
<span style='color:#b060b0; '>{</span>
	<span style='color:#00dddd; '>std</span><span style='color:#b060b0; '>::</span><span style='color:#e66170; font-weight:bold; '>cin</span> <span style='color:#d2cd86; '>></span><span style='color:#d2cd86; '>></span> AeonInterpreter<span style='color:#b060b0; '>::</span>get_default<span style='color:#d2cd86; '>(</span><span style='color:#d2cd86; '>)</span><span style='color:#d2cd86; '>-</span><span style='color:#d2cd86; '>></span>var_list<span style='color:#d2cd86; '>[</span>AeonInterpreter<span style='color:#b060b0; '>::</span>get_default<span style='color:#d2cd86; '>(</span><span style='color:#d2cd86; '>)</span><span style='color:#d2cd86; '>-</span><span style='color:#d2cd86; '>></span>var_index<span style='color:#d2cd86; '>]</span><span style='color:#b060b0; '>;</span>
<span style='color:#b060b0; '>}</span>
<span style='color:#e66170; font-weight:bold; '>void</span> run<span style='color:#d2cd86; '>(</span><span style='color:#d2cd86; '>)</span>
<span style='color:#b060b0; '>{</span>
	AeonInterpreter <span style='color:#d2cd86; '>*</span>ae_i <span style='color:#d2cd86; '>=</span> AeonInterpreter<span style='color:#b060b0; '>::</span>get_default<span style='color:#d2cd86; '>(</span><span style='color:#d2cd86; '>)</span><span style='color:#b060b0; '>;</span>
	<span style='color:#00dddd; '>std</span><span style='color:#b060b0; '>::</span><span style='color:#e66170; font-weight:bold; '>vector</span><span style='color:#b060b0; '>&lt;</span><span style='color:#00dddd; '>std</span><span style='color:#b060b0; '>::</span><span style='color:#e66170; font-weight:bold; '>string</span><span style='color:#b060b0; '>></span> line<span style='color:#b060b0; '>;</span>
	<span style='color:#00dddd; '>std</span><span style='color:#b060b0; '>::</span><span style='color:#e66170; font-weight:bold; '>string</span> string_to_parse <span style='color:#d2cd86; '>=</span> ae_i<span style='color:#d2cd86; '>-</span><span style='color:#d2cd86; '>></span>var_list<span style='color:#d2cd86; '>[</span>ae_i<span style='color:#d2cd86; '>-</span><span style='color:#d2cd86; '>></span>var_index<span style='color:#d2cd86; '>]</span><span style='color:#b060b0; '>;</span>
	<span style='color:#9999a9; '>// parsing string</span>
	line<span style='color:#d2cd86; '>.</span>push_back<span style='color:#d2cd86; '>(</span><span style='color:#02d045; '>"</span><span style='color:#02d045; '>"</span><span style='color:#d2cd86; '>)</span><span style='color:#b060b0; '>;</span>
	<span style='color:#e66170; font-weight:bold; '>for</span><span style='color:#d2cd86; '>(</span>uint i<span style='color:#d2cd86; '>=</span><span style='color:#008c00; '>0</span><span style='color:#b060b0; '>;</span>i<span style='color:#d2cd86; '>&lt;</span><span style='color:#e66170; font-weight:bold; '>strlen</span><span style='color:#d2cd86; '>(</span>string_to_parse<span style='color:#d2cd86; '>.</span>c_str<span style='color:#d2cd86; '>(</span><span style='color:#d2cd86; '>)</span><span style='color:#d2cd86; '>)</span><span style='color:#b060b0; '>;</span>i<span style='color:#d2cd86; '>+</span><span style='color:#d2cd86; '>+</span><span style='color:#d2cd86; '>)</span>
	<span style='color:#b060b0; '>{</span>
		<span style='color:#e66170; font-weight:bold; '>if</span><span style='color:#d2cd86; '>(</span>string_to_parse<span style='color:#d2cd86; '>[</span>i<span style='color:#d2cd86; '>]</span> <span style='color:#d2cd86; '>=</span><span style='color:#d2cd86; '>=</span> <span style='color:#00c4c4; '>'\n'</span><span style='color:#d2cd86; '>)</span>
		<span style='color:#b060b0; '>{</span>
			line<span style='color:#d2cd86; '>.</span>push_back<span style='color:#d2cd86; '>(</span><span style='color:#02d045; '>"</span><span style='color:#02d045; '>"</span><span style='color:#d2cd86; '>)</span><span style='color:#b060b0; '>;</span>
		<span style='color:#b060b0; '>}</span>
		<span style='color:#e66170; font-weight:bold; '>else</span>
		<span style='color:#b060b0; '>{</span>
			line<span style='color:#d2cd86; '>[</span>line<span style='color:#d2cd86; '>.</span>size<span style='color:#d2cd86; '>(</span><span style='color:#d2cd86; '>)</span><span style='color:#d2cd86; '>-</span><span style='color:#008c00; '>1</span><span style='color:#d2cd86; '>]</span> <span style='color:#d2cd86; '>+</span><span style='color:#d2cd86; '>=</span> string_to_parse<span style='color:#d2cd86; '>[</span>i<span style='color:#d2cd86; '>]</span><span style='color:#b060b0; '>;</span>
		<span style='color:#b060b0; '>}</span>
	<span style='color:#b060b0; '>}</span>
	ae_i<span style='color:#d2cd86; '>-</span><span style='color:#d2cd86; '>></span>run<span style='color:#d2cd86; '>(</span>line<span style='color:#d2cd86; '>)</span><span style='color:#b060b0; '>;</span>
<span style='color:#b060b0; '>}</span>
<span style='color:#e66170; font-weight:bold; '>void</span> read<span style='color:#d2cd86; '>(</span><span style='color:#d2cd86; '>)</span>
<span style='color:#b060b0; '>{</span>
	AeonInterpreter <span style='color:#d2cd86; '>*</span>ae_i <span style='color:#d2cd86; '>=</span> AeonInterpreter<span style='color:#b060b0; '>::</span>get_default<span style='color:#d2cd86; '>(</span><span style='color:#d2cd86; '>)</span><span style='color:#b060b0; '>;</span>
	<span style='color:#e66170; font-weight:bold; '>const</span> <span style='color:#e66170; font-weight:bold; '>char</span><span style='color:#d2cd86; '>*</span> file_path <span style='color:#d2cd86; '>=</span> ae_i<span style='color:#d2cd86; '>-</span><span style='color:#d2cd86; '>></span>var_list<span style='color:#d2cd86; '>[</span>ae_i<span style='color:#d2cd86; '>-</span><span style='color:#d2cd86; '>></span>var_index<span style='color:#d2cd86; '>]</span><span style='color:#d2cd86; '>.</span>c_str<span style='color:#d2cd86; '>(</span><span style='color:#d2cd86; '>)</span><span style='color:#b060b0; '>;</span>
	<span style='color:#00dddd; '>std</span><span style='color:#b060b0; '>::</span><span style='color:#e66170; font-weight:bold; '>ifstream</span> script_file<span style='color:#d2cd86; '>(</span>file_path<span style='color:#d2cd86; '>)</span><span style='color:#b060b0; '>;</span>
	<span style='color:#00dddd; '>std</span><span style='color:#b060b0; '>::</span><span style='color:#e66170; font-weight:bold; '>string</span> script_line<span style='color:#b060b0; '>;</span>
	<span style='color:#00dddd; '>std</span><span style='color:#b060b0; '>::</span><span style='color:#e66170; font-weight:bold; '>string</span> final_string <span style='color:#d2cd86; '>=</span> <span style='color:#02d045; '>"</span><span style='color:#02d045; '>"</span><span style='color:#b060b0; '>;</span>
	<span style='color:#e66170; font-weight:bold; '>if</span><span style='color:#d2cd86; '>(</span>script_file<span style='color:#d2cd86; '>.</span>is_open<span style='color:#d2cd86; '>(</span><span style='color:#d2cd86; '>)</span><span style='color:#d2cd86; '>)</span>
	<span style='color:#b060b0; '>{</span>
		<span style='color:#e66170; font-weight:bold; '>while</span><span style='color:#d2cd86; '>(</span>getline<span style='color:#d2cd86; '>(</span>script_file<span style='color:#d2cd86; '>,</span> script_line<span style='color:#d2cd86; '>)</span><span style='color:#d2cd86; '>)</span>
		<span style='color:#b060b0; '>{</span>
			final_string <span style='color:#d2cd86; '>+</span><span style='color:#d2cd86; '>=</span> script_line<span style='color:#b060b0; '>;</span>
			final_string <span style='color:#d2cd86; '>+</span><span style='color:#d2cd86; '>=</span> <span style='color:#02d045; '>"</span><span style='color:#008080; '>\n</span><span style='color:#02d045; '>"</span><span style='color:#b060b0; '>;</span>
		<span style='color:#b060b0; '>}</span>
	<span style='color:#b060b0; '>}</span>
	ae_i<span style='color:#d2cd86; '>-</span><span style='color:#d2cd86; '>></span>var_list<span style='color:#d2cd86; '>[</span>ae_i<span style='color:#d2cd86; '>-</span><span style='color:#d2cd86; '>></span>var_index<span style='color:#d2cd86; '>-</span><span style='color:#008c00; '>1</span><span style='color:#d2cd86; '>]</span> <span style='color:#d2cd86; '>=</span> final_string<span style='color:#b060b0; '>;</span>
<span style='color:#b060b0; '>}</span>
<span style='color:#9999a9; '>/*int main(int argc, char const *argv[])</span>
<span style='color:#9999a9; '>{</span>
<span style='color:#9999a9; '>	//AeonInterpreter::set_default(i);</span>
<span style='color:#9999a9; '>	AeonFunction p("print", print);</span>
<span style='color:#9999a9; '>	AeonFunction pl("println", println);</span>
<span style='color:#9999a9; '>	AeonFunction gi("input", get_input);</span>
<span style='color:#9999a9; '>	i->function_list.push_back(pl);</span>
<span style='color:#9999a9; '>	i->function_list.push_back(p);</span>
<span style='color:#9999a9; '>	i->function_list.push_back(gi);</span>
<span style='color:#9999a9; '>	std::vector&lt;std::string> lines;</span>
<span style='color:#9999a9; '>	lines.push_back("%Digite algo: ");</span>
<span style='color:#9999a9; '>	lines.push_back("v.v.^^.");</span>
<span style='color:#9999a9; '>	i->run(lines);</span>
<span style='color:#9999a9; '>	return 0;</span>
<span style='color:#9999a9; '>}</span>
<span style='color:#9999a9; '>*/</span>
<span style='color:#008073; '>#</span><span style='color:#008073; '>endif</span>
</pre>`

var terminal;
var index = 0;
ael_code = ael_code.split('\n');
function strong(s) { return '<strong>' + s + '</strong>'; }
function br() { return '<br>'; }
function loop() {
	terminal.innerHTML += ael_code[index] + '<br>';
	if (index < ael_code.length) {
		index += 1;
	}
	else {
		index = 0;
		terminal.innerHTML = '';
	}
}

function get_window_width() {
	var g = document.getElementsByTagName('body')[0],
    x = window.innerWidth || document.documentElement.clientWidth || g.clientWidth,
    y = window.innerHeight|| document.documentElement.clientHeight|| g.clientHeight;
	return x;
}

function main() {
	terminal = document.getElementById('screen');
	if (get_window_width() < 640) {
		// do it
	}
	setInterval(loop, 100);
}