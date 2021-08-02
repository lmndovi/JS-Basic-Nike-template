let errorParagraph = document.getElementById("error");
let success1Paragraph = document.getElementById("success1");
let success2Paragraph = document.getElementById("success2");


function purchaseFail() {
    // console.log("button was clicked");
    errorParagraph.textContent = "Transaction Cancelled. Refresh the page or try again later";
    }

function purchaseSuccess1 () {
    success1Paragraph.textContent = "Transaction Successful. Thank you for shopping with us";
} 

function purchaseSuccess2 () {
    success2Paragraph.textContent = "Transaction Successful. Thank you for shopping with us";

}