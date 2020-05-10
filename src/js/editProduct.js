import $ from "jquery";
import { v1 } from "uuid";

const editProduct = (id, list) => {
    // const {id, list} = event.data;
    const name = $("#productName--edit").val();
    const type = $("input[name='typeOfAmount--edit']:checked").attr("data-value");
    const cat = $("#category--edit").val();
    const am = $("#amount--edit").val();

    if (name && am) {
        const editedList = list.map((item) => {
            if (item.id == id) {
                item.id= v1();
                item.itemName = name;
                item.typeOfAmount = type;
                item.category = cat;
                item.amount = am;

                return item;
            } else {
                return item;
            }
        });

        $("#edit-modal").modal("hide");

        return editedList;
    } else {
        $(".error-msg").addClass("d-block");
        return list;
    }
};

export default editProduct;