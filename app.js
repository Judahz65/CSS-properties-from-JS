const userInputs= document.querySelectorAll('.controls input');

function update(){
    const suffix=this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

userInputs.forEach(input=> input.addEventListener('change', update));
userInputs.forEach(input=> input.addEventListener('mousemove', update));

