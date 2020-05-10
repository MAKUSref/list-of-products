import $ from "jquery";
import jsPDF from "jspdf";

const jsToPdf = (e) => {
    const { list } = e.data;
    console.log(list);

    if (list.length) {
        let doc = new jsPDF();

        doc.text(20, 10, "Products: ")
        list.map((item, index) => {
            doc.text(20, 10 + ((index + 1) * 10),
                `${index + 1}. ${item.itemName} - ${item.amount} ${item.typeOfAmount}, Category: ${item.category}`);
        });

        doc.save("Products.pdf");
    } else {
        $(".error-msg-pdf").removeClass("d-none");
    }


};

export default jsToPdf;