// external js

input = document.getElementById('v-input');
frame = document.getElementById('v-output');


input.addEventListener('change', function chaAttr(){

	input = input.value;

	filter = input.match(/watch\?v=(.*)/)[1];
	frame.src="https://www.youtube.com/embed/"+filter;

	// input1 = input1.replace('watch?v=','embed/');
	// frame.src=input1;
})

// pattern
// https://www.youtube.com/embed/398-9lP53DEe
// https://www.youtube.com/watch?v=OcaFqzRwGlk