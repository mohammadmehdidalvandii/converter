# Unit Converter (Length & Weight)

This is a simple **Unit Converter** built using **HTML, CSS, and JavaScript**. It allows users to convert between different units of **length** and **weight**.

---

## Features

- Convert between various **length units**: meters (m), kilometers (km), centimeters (cm), millimeters (mm), miles (mi), yards (yd), feet (ft), inches (in).
- Convert between various **weight units**: kilograms (kg), grams (g), milligrams (mg), pounds (lb), ounces (oz).
- Dynamic selection of categories and units.
- Simple and responsive **HTML/CSS UI**.
- Error handling for invalid inputs.

---

## File Structure

- `index.html` – Main HTML file with input fields, dropdowns, and result display.
- `script.js` – Contains the **Converter object** and all the JavaScript logic.
- `style.css` – (Optional) Custom styling for the UI.

---

## How It Works

1. **Category Selection**
   - User selects a category (`Length` or `Weight`) from the dropdown.
   - JavaScript dynamically populates the **From Unit** and **To Unit** dropdowns based on the selected category.

2. **Input Value**
   - User enters a numeric value to convert.

3. **Conversion**
   - On clicking the **Convert** button, the script calls the appropriate conversion function from the `Converter` object:
     ```javascript
     result = Converter[category].convert(value, from, to);
     ```
   - Conversion formula for **length & weight**:
     ```
     convertedValue = inputValue * unitFactorFrom / unitFactorTo
     ```
   - Result is displayed in the format:
     ```
     1000 m = 1 km
     ```

4. **Error Handling**
   - If input is invalid (non-numeric or missing), an error message is displayed.
   - If unit/category is invalid, the script also displays an error message.

---

## Example Usage

1. Select **Length** as the category.
2. Enter `1000` as the value.
3. Choose `m` as the **From Unit** and `km` as the **To Unit**.
4. Click **Convert** → Output: `1000 m = 1 km`.

---
