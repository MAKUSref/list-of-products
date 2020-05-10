import $ from "jquery";
import addProduct from "./addProduct";
import createList from "./createList";
import editProduct from "./editProduct";
import jsToPdf from "./jsToPdf";

// const newProduct = {
//     id: v1(),
//     itemName: name,
//     typeOfAmount: type,
//     category: cat,
//     amount: am
// }

class Dashboard {
    constructor() {
        this.listItems = [];

        this.handleRemoveLi = this.handleRemoveLi.bind(this);
        this.handleEditLi = this.handleEditLi.bind(this);
        this.handleAddProduct = this.handleAddProduct.bind(this);
        this.saveToLocalStorage = this.saveToLocalStorage.bind(this);
        this.loadLocalStorage = this.loadLocalStorage.bind(this);
        this.handleClearForm = this.handleClearForm.bind(this);
        this.handleShowEditForm = this.handleShowEditForm.bind(this);
    }

    handleClearForm() {
        $("#exampleModal").on("hidden.bs.modal", function () {
            console.log("hide modal");
            $(this).find("input").val("");
            $(".error-msg").removeClass("d-block");
            // $("input:radio").attr("checked", false);
        });

        $("#edit-modal").on("hidden.bs.modal", function() {
            $(".error-msg").removeClass("d-block");
            $(this).find("input").val("");
            $("input:radio").attr("checked", false);
        });
    }

    handleShowEditForm(id) {
        $("#edit-modal").modal("show");

        const li = this.listItems.filter((item) => item.id == id);
        console.log(li, $(`input:radio#type-${li[0].typeOfAmount}`))

        $("#productName--edit").val(li[0].itemName);
        $(`input:radio#type-${li[0].typeOfAmount}--edit`).attr("checked", true);
        $("#category--edit").val(li[0].category);
        $("#amount--edit").val(li[0].amount);

        $(".edit-product-btn").click({id: id}, this.handleEditLi);
    }

    handleEditLi(event) {
        this.listItems = editProduct(event.data.id, this.listItems);
        createList(this.listItems, this.handleRemoveLi, this.handleShowEditForm);
        $(".edit-product-btn").off("click");
        this.saveToLocalStorage(); // save to local storage
    }

    handleRemoveLi(id) {
        this.listItems = this.listItems.filter((option) => id != option.id);
        createList(this.listItems, this.handleRemoveLi, this.handleShowEditForm);
        $(".download-pdf").off("click");
        $(".download-pdf").click({list: this.listItems}, jsToPdf);
        this.saveToLocalStorage(); // save to local storage
    }

    handleAddProduct() {
        this.listItems = addProduct(this.listItems, this.handleRemoveLi, this.handleShowEditForm);
        createList(this.listItems, this.handleRemoveLi, this.handleShowEditForm);
        $(".download-pdf").off("click");
        $(".download-pdf").click({list: this.listItems}, jsToPdf);
        this.saveToLocalStorage(); // save to local storage
    }

    //local storage settings
    loadLocalStorage() {
        try {
            const json = localStorage.getItem("list");
            const list = JSON.parse(json);

            if (list) {
                this.listItems = list;
            }
        } catch (e) {
            // Do nothing at all
        }
    }

    saveToLocalStorage() {
        const json = JSON.stringify(this.listItems);
        localStorage.setItem("list", json);
    }

    //main function
    init() {
        this.handleClearForm();
        this.loadLocalStorage();
        createList(this.listItems, this.handleRemoveLi, this.handleShowEditForm);
        $(".add-product-btn").click(this.handleAddProduct);
        $(".download-pdf").click({list: this.listItems}, jsToPdf);
    }
};

export default Dashboard;