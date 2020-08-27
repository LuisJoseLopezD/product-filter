$(document).ready(function(){
    
    // class active

    $('.category-list .category-item[category="all"]').addClass('category-active');
    
    $('.category-item').click(function(){

        var categoryProduct = $(this).attr('category');
        console.log(categoryProduct);

        $('.category-item').removeClass('category-active');
        $(this).addClass('category-active');

        // Hiding Products

        $('.product-item').hide();

        // Showing Products

        $('.product-item[category="'+categoryProduct+'"]').show();
        
    });  

    // showing everything

    $('.category-item[category="all"').click(function() {

        $('.product-item').show();

    });      

});
