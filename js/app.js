const categorySelect = document.getElementById("category");
const fromUnitSelect = document.getElementById("fromUnit");
const toUnitSelect = document.getElementById("toUnit");

const Converter = {
    length: {
        units: { m: 1, km: 1000, cm: 0.01, mm: 0.001, mi: 1609.34, yd: 0.9144, ft: 0.3048, in: 0.0254 },
        convert(value, from, to) { return (value * this.units[from]) / this.units[to]; }
    },
    weight: {
        units: { kg: 1, g: 0.001, mg: 0.000001, lb: 0.453592, oz: 0.0283495 },
        convert(value, from, to) { return (value * this.units[from]) / this.units[to]; }
    },
}


function updateUnits() {
    const category = categorySelect.value;
    const units = Object.keys(Converter[category].units || {});
    fromUnitSelect.innerHTML = units.map(u => `<option value="${u}">${u}</option>`).join('');
    toUnitSelect.innerHTML = units.map(u => `<option value="${u}">${u}</option>`).join('');
}

categorySelect.addEventListener('change', updateUnits);
updateUnits(); // initial load

function convert() {
    const category = categorySelect.value;
    const value = parseFloat(document.getElementById("value").value);
    const from = fromUnitSelect.value;
    const to = toUnitSelect.value;
    let result;
    try {
        result = Converter[category].convert(value, from, to);
        document.getElementById("result").innerText = `${value} ${from} = ${result} ${to}`;
    } catch (e) {
        document.getElementById("result").innerText = e.message;
    }
}