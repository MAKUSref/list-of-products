import $ from "jquery";
import createListElement from "./createListElement";
import summingUp from "./summingUp";

const createList = (list, removeEvent, editEvent) => {
    $(".list-product").remove();
    list.map((item) => {
        $(`#category-${item.category}`).append(createListElement(item, removeEvent, editEvent));
    });

    summingUp(list);
};

export default createList;