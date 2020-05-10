import $ from "jquery";

const summingUp = (list) => {
    //Total summing up
    let kiloSum = 0, litSum = 0, pieSum = 0;

    list.map((item) => {
        if(item.typeOfAmount === "pieces") {
            pieSum += parseFloat(item.amount);
        } else if (item.typeOfAmount === "kilograms") {
            kiloSum += parseFloat(item.amount);
        } else if (item.typeOfAmount === "liters") {
            litSum += parseFloat(item.amount);
        }
    });

    $(".total-pieces").text(`${pieSum} pcs.`);
    $(".total-liters").text(`${litSum} l.`);
    $(".total-kilograms").text(`${kiloSum} kg.`);
    $(".total-num").text(list.length);
};

export default summingUp;