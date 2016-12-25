const inputs = document.querySelectorAll('.Variables-controls input');

function handleChange() {
  const suffix = this.dataset.suffix || '';
  const newValue = `${this.value}${suffix}`;
  document.documentElement.style.setProperty(`--${this.name}`, newValue);
}

inputs.forEach(input => input.addEventListener('change', handleChange));
inputs.forEach(input => input.addEventListener('mousemove', handleChange));
