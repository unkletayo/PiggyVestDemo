dropdown = document.querySelector('.inpt2');
datalist = document.querySelector('datalist');
select = document.querySelector('select');
options = select.options;

dropdown.addEventListener('click', toggle_ddl);

function toggle_ddl() {
  /* if DDL is hidden */
  if (datalist.style.display === '') {
    /* show DDL */
    datalist.style.display = 'block';
    this.innerHTML = `<div id="dropdown-items" class="dropdown-items">
    <p>|</p>
    <img src="img/icons8-expand-arrow-50.png" alt="">
  </div>
  </div>`;
  } else hide_select();
}

function hide_select() {
  /* hide DDL */
  datalist.style.display = '';
  dropdown.innerHTML = `<div id="dropdown-items" class="dropdown-items">
  <p>|</p>
  <img src="img/icons8-expand-arrow-50.png" alt="">
</div>
</div>`;
}

/* when the user wants to type into text field, hide DDL */
input = document.querySelector('.inpt');
input.addEventListener('focus', hide_select);

/* when user selects an option from DDL, write it to text field */
select.addEventListener('change', fill_input);
function fill_input() {
  input.value = options[this.selectedIndex].value;
  hide_select();
}
