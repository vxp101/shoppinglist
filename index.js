$('#js-shopping-list-form').on('submit', function (e) {
    e.preventDefault()

    let item = $('#shopping-list-entry').val()

    let page = `<li>
    <span class="shopping-item">${item}</span>
    <div class="shopping-item-controls">
      <button class="shopping-item-toggle">
        <span class="button-label">check</span>
      </button>
      <button class="shopping-item-delete">
        <span class="button-label">delete</span>
      </button>
    </div>
  </li>`

    $('.shopping-list').append(page)

})

$('.shopping-item-toggle').on('click', function () {

    $(this).parent().siblings().toggleClass('shopping-item__checked')

})

$('.shopping-item-delete').on('click', function () {

    console.log($(this).closest())
    $(this).closest('li').remove()

})
