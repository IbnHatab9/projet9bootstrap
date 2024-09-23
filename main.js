$('#infiniteCarousel').on('slid.bs.carousel', function () {
    var $carouselItems = $(this).find('.carousel-item');
    var $lastItem = $carouselItems.last();
    var $firstItem = $carouselItems.first();

    // Si le dernier item est actif, déplacer le premier à la fin
    if ($lastItem.hasClass('active')) {
        $firstItem.remove().insertAfter($lastItem);
        $(this).carousel(0); // Réinitialise l'index
    }
});