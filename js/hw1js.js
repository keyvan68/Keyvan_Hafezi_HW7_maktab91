$(function () {
});
let sum1 = 0;
let sum2 = 0;
let sum3 = 0;
let selectedOption = 0;
$("#count1").change(function () {

    let count1 = $("#count1").val();
    let price1 = $("#price1").text();
    sum1 = count1 * price1;

    return AddItem(sum1, sum2, sum3, selectedOption);

});

//var conceptName = $('#aioConceptName').find(":selected").val();
$("#count2").change(function () {

    let count2 = $("#count2").val();
    let price2 = $("#price2").text();
    sum2 = count2 * price2;

    return AddItem(sum1, sum2, sum3, selectedOption);

});
$("#count3").change(function () {

    let count3 = $("#count3").val();
    let price3 = $("#price3").text();
    sum3 = count3 * price3;

    return AddItem(sum1, sum2, sum3, selectedOption);

});


$('#selectOpt').change(function () {
    selectedOption = Number(this.value);
    //alert(this.value);
    return AddItem(sum1, sum2, sum3, selectedOption);
});



// return textvalu

function AddItem(sum1, sum2, sum3, selectedOption) {

    let sumItem = 0;
    let totalItem = 0;
    //console.log(count);

    sumItem = sum1 + sum2 + sum3;
    totalItem = sum1 + sum2 + sum3 + selectedOption;

    // console.log(sum);
    $("#item").html(sumItem);
    $("#total").html(totalItem);

}