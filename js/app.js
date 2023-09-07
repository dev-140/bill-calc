$(document).ready(function(){
    var totalKwh, GC, TC, DC, UC, OC, VAT;
    

    $.fn.computeGSC = function(tkwh) {
       $('.gsc-total').text((tkwh * $('.gsc-rate').text()).toFixed(4));
       $('.par-total').text((tkwh * $('.par-rate').text()).toFixed(1));
       $('.fab-total').text((tkwh * $('.fab-rate').text()).toFixed(4));
       $('.fac-total').text((tkwh * $('.fac-rate').text()).toFixed(4));
       $('.GSC_TOTAL').text(((tkwh * $('.gsc-rate').text()) + (tkwh * $('.par-rate').text()) + (tkwh * $('.fab-rate').text()) + (tkwh * $('.fac-rate').text())).toFixed(2));
       GC = $('.GSC_TOTAL').text();
     };

     $.fn.computeTC = function(tkwh) {
        $('.tsc-total').text((tkwh * $('.tsc-rate').text()).toFixed(4));
        $('.slc-total').text((tkwh * $('.slc-rate').text()).toFixed(4));
        $('.TC_TOTAL').text(((tkwh * $('.tsc-rate').text()) + (tkwh * $('.slc-rate').text())).toFixed(2));
        TC = $('.TC_TOTAL').text();
    };

    $.fn.computeDc = function(tkwh) {
        $('.dsc-total').text((tkwh * $('.dsc-rate').text()).toFixed(4));
        $('.ssc-total').text((tkwh * $('.ssc-rate').text()).toFixed(3));
        $('.rcmc-total').text((tkwh * $('.rcmc-rate').text()).toFixed(4));
        $('.DC_TOTAL').text(((tkwh * $('.dsc-rate').text())+ (tkwh * $('.ssc-rate').text()) + (tkwh * $('.rcmc-rate').text())).toFixed(4));
        DC = $('.DC_TOTAL').text();
    };

    $.fn.computeUC = function(tkwh) {
        $('.mec-total').text((tkwh * $('.mec-rate').text()).toFixed(4));
        $('.envc-total').text((tkwh * $('.envc-rate').text()).toFixed(4));
        $('.UC_TOTAL').text(((tkwh * $('.mec-rate').text()) + (tkwh * $('.envc-rate').text())).toFixed(4));
        UC = $('.UC_TOTAL').text();
    };

    $.fn.computeOC = function(tkwh) {
        $('.lc-total').text((tkwh * $('.lc-rate').text()).toFixed(4));
        $('.lrs-total').text((tkwh * $('.lrs-rate').text()).toFixed(4));
        $('.OC_TOTAL').text(((tkwh * $('.lc-rate').text()) + (tkwh * $('.lrs-rate').text())).toFixed(4));
        OC = $('.OC_TOTAL').text();
    }

    $.fn.computeVAT = function(tkwh) {
        $('.gtc-total').text((tkwh * $('.gtc-rate').text()).toFixed(2));
        $('.ttr-total').text((tkwh * $('.ttr-rate').text()).toFixed(2));
        $('.dtr-total').text((tkwh * $('.dtr-rate').text()).toFixed(2));
        $('.stc-total').text((tkwh * $('.stc-rate').text()).toFixed(2));
        $('.VAT_TOTAL').text(((tkwh * $('.gtc-rate').text()) + (tkwh * $('.ttr-rate').text()) + (tkwh * $('.dtr-rate').text()) + (tkwh * $('.stc-rate').text())).toFixed(2));
        VAT = $('.VAT_TOTAL').text();
    }

    $.fn.computeCAD = function() {
        var total = (parseFloat(GC) + parseFloat(TC) + parseFloat(DC) + parseFloat(UC) + parseFloat(OC) + parseFloat(VAT)).toFixed(2);
        console.log(total);
        $('.currADT').text(total);
    }

    $('.submit-btn').on('click', ()=> {
        var prevR = $('.prev-r').val();
        var preR = $('.pre-r').val();

        totalKwh = preR - prevR;

        $.fn.computeGSC(totalKwh);
        $.fn.computeTC(totalKwh);
        $.fn.computeDc(totalKwh);
        $.fn.computeUC(totalKwh);
        $.fn.computeOC(totalKwh);
        $.fn.computeVAT(totalKwh);
        $.fn.computeCAD();

        $('.display-total').text(totalKwh); 
    });
});