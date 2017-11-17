/**
 * HTML одного объекта меню (не используется)
 * @param {Item} item
 * @param {number} index
 * @return {string}
 */
getItemHtml(item, index) {
    return templateItem({item, index});
}

/**
 * Создаем HTML
 */
render() {
    this.el.innerHTML = template(this.data);
}