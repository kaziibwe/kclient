// $(document).ready(function() {
//     $("#Order_number").keyup(function() {
//         var Order_number = $("#Order_number").val();
//         // alert(Order_number);

//         $.ajax({
//             headers: {
//                 'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
//             },
//             type: 'post',
//             url: '/deliveryman/check-verrificationcode',
//             data: {
//                 Order_number: Order_number },
//                 success: function (resp){
//                     if (resp == "false") {
//                         $("#verifyOrderCode").html('Order Code is Incorrect!');
//                     } else if (resp == "true") {
//                         $("#verifyOrderCode").html('Order Code is Correct!');
//                     }
//                 },error:function(){
//                     alert("Error");
//                 }

//     });
// });

// });



// $(document).ready(function() {
//     $(".order-number-input").keyup(function() {
//             // console.log('Keyup event triggered'); // Add this line

//         var Order_number = $(this).val();
//         var tracking_no = $(this).attr('id').split('_')[1]; // Extract tracking_no from the element's ID.
//         // var tracking_no = $("#tracking_no").val();
//         // console.log('Tracking Number:', tracking_no);
//         $.ajax({
//             headers: {
//                 'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
//             },
//             type: 'post',
//             url: '/deliveryman/check-verrificationcode',
//             data: {
//                 Order_number: Order_number,
//                 tracking_no: tracking_no // Pass the tracking_no to the server
//             },
//             success: function (resp) {

//                 console.log('Response from server:', resp); // Debugging line
//                 // console.log('Tracking Number:', tracking_no); // Debugging line
//                 console.log('Extracted Tracking Number:', tracking_no);

//                 if (resp == "false") {
//                     $("#verifyOrderCode_" + tracking_no).html('Order Code is Incorrect!');
//                 } else if (resp == "true") {
//                     $("#verifyOrderCode_" + tracking_no).html('Order Code is Correct!');

//                 }

//             },
//             error: function () {
//                 alert("Error");
//             }



//         });
//     });
// });



$(document).ready(function() {
    $(".order-number-input").keyup(function() {
        var Order_number = $(this).val();

        // Retrieve the tracking_no from the data attribute
        var tracking_no = $(this).data('tracking-no');

        // Log the tracking_no for debugging
        // console.log('Tracking Number:', tracking_no);

        $.ajax({
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            },
            type: 'post',
            url: '/deliveryman/check-verrificationcode',
            data: {
                Order_number: Order_number,
                tracking_no: tracking_no
            },
            success: function (resp) {
                // Log the tracking number for debugging
                // console.log('Tracking Number:', tracking_no);

                if (resp == "false") {
                    // Target the specific message span based on tracking_no
                    $("#verifyOrderCode_" + tracking_no).html('Order Code is Incorrect!');
                } else if (resp == "true") {
                    // Target the specific message span based on tracking_no
                    $("#verifyOrderCode_" + tracking_no).html('Order Code is Correct!');
                }
            },
            error: function () {
                alert("Error");
            }
        });
    });
});
