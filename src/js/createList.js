import $ from "jquery";
import createListElement from "./createListElement";

const createList = (list, removeEvent, editEvent) => {
    $(".list-product").remove();
    list.map((item) => {
        $(`#category-${item.category}`).append(createListElement(item, removeEvent, editEvent));
    });
};

export default createList;