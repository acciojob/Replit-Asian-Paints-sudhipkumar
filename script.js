//your JS code here. If required.
const changeButton = document.getElementById('change_button');
    const resetButton = document.getElementById('reset_button');
    const blockInput = document.getElementById('block_id');
    const colorInput = document.getElementById('colour_id');

    function resetGridColors() {
      const items = document.querySelectorAll('.grid-item');
      items.forEach(item => {
        item.style.backgroundColor = 'transparent';
      });
    }

    changeButton.addEventListener('click', () => {
      const blockId = blockInput.value;
      const color = colorInput.value;
      resetGridColors();
      const target = document.querySelector(`.grid-item[data-id='${blockId}']`);
      if (target) {
        target.style.backgroundColor = color;
      } else {
        alert("Invalid Block ID");
      }
    });

    resetButton.addEventListener('click', () => {
      resetGridColors();
    });