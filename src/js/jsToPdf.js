import $ from "jquery";
import jsPDF from "jspdf"; 

const jsToPdf = (e) => {
    const { list } = e.data;

    let doc = new jsPDF();
    // const elementHandler = {
    //     ".download-pdf": (element, renderer) => true
    // };

    doc.text(20, 10, "Products: ")
    list.map((item, index) => {
        doc.text(20, 10 + ((index+1) * 10), 
        `${index+1}. ${item.itemName} - ${item.amount} ${item.typeOfAmount}, Category: ${item.category}`);
    });

    doc.save("Products.pdf");
};

export default jsToPdf;