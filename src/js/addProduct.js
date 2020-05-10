import $ from "jquery";
import { v1 } from "uuid";

const addProduct = (currentList) => {
    const name = $("#productName").val();
    const type = $("input[name='typeOfAmount']:checked").attr("data-value");
    const cat = $("#category").val();
    const am = $("#amount").val();

    if (name && am) {
        const newProduct = {
            id: v1(),
            itemName: name,
            typeOfAmount: type,
            category: cat,
            amount: am
        }
        
        $(".error-msg").removeClass("d-block");
        $("#exampleModal").modal("hide");
        $("#exampleModal  input").val("");

        return currentList.concat(newProduct);
    } else {
        $(".error-msg").addClass("d-block");
        return currentList;
    }
};

export default addProduct;