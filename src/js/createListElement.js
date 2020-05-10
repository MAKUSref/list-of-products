import $ from "jquery";

const createListElement = (product, removeEvent, editEvent) => {
    const { id, itemName, amount, typeOfAmount="units" } = product;
    let $newLi = $("<li></li>", {
        class: "list-product list-group-item d-flex justify-content-between align-items-center",
    });

    let $divEl = $("<div></div>");
    let $divEl2 = $("<div></div>");
    let $span = $("<span></span>").click(function() {editEvent(id)});
    let $span2 = $("<span></span>").click(function() {removeEvent(id)});
    const $editEl = $("<i></i>", { 
        class: "fas fa-pencil-alt text-success mx-1 cursor-pointer",
        click: function() { editEvent(id) }
    });

    const $removeEl = $("<span></span>", { 
        class: "fas fa-times text-danger mx-1 cursor-pointer",
        click: function() { removeEvent(id) }
    });

    const $amountEl = $("<span></span>", {
        class: "badge primary-color text-light badge-pill"
    }).text(`${amount} ${typeOfAmount}`);

    $newLi
        .append($divEl.html(`<span>${itemName}</span>`))
        .append($divEl2
            .append($amountEl)
            .append($span
                .append($editEl))
            .append($span2
                .append($removeEl)));

    return $newLi;
};

export default createListElement;