$(document).ready(function() {

    $("daterangepicker-two-input").click(function() {
        if (!($("div").is(".datapicker-top"))) {
            $(".daterangepicker").append(`
        <div class="datapicker-top">
        <div class="datapicker-top__left">Выбрать дату</div>
        <div class="datapicker-top__right">
            <select>
                <option value="Март 24 - Апрель 24">Март 24 - Апрель 24</option>
                <option value="Март 24 - Апрель 25">Март 24 - Апрель 25</option>
                <option value="Март 24 - Апрель 26">Март 24 - Апрель 26</option>
            </select>
        </div>
    </div>
        `)
        }

    })




    window.customElements.define('daterangepicker-two-input', daterangepickerDoubleInput);
})

function mask() {
    $('.js-date').mask('99.99.9999');
}
class daterangepickerDoubleInput extends HTMLElement {

    constructor() {
        super();

        this.innerHTML =
            `
            <div class="combine-input-container" id="combine-input-container">
                <div class="c-input-container c1-container">
                    <input type='text' class="js-date c-input c1-input filter-input circle-block" id="c1" type="text" value="01.01.2021" class="">
                    <label alt='Departure' class="c-label c1-label"></label>
                </div>
                <span>по</span>
                <div class="c-input-container c2-container">
                    <input type='text' class="js-date c-input c2-input filter-input circle-block" id="c2" value="01.02.2021">
                    <label alt='Return' class="c-label c2-label"></label>
                    
                </div>
            </div>
            `
            // <input type="text" value="01.01.2021" class="filter-input circle-block">
            //      <span>по</span>
            //      <input type="text" value="01.01.2022" class="filter-input circle-block"></input>
        init()

        function init() {
            // http://www.daterangepicker.com/
            $('#combine-input-container').daterangepicker({
                // minDate: new Date(),
                "linkedCalendars": false,
                opens: "center",
                // format: 'MMM D, YYYY',
                startDate: "01.01.2021",
                endDate: "01.02.2021",
                autoUpdateInput: true,
                autoApply: true,
                locale: {
                    "format": "DD/MM/YYYY",
                    "separator": " - ",
                    "applyLabel": "Apply",
                    "cancelLabel": "Cancel",
                    "fromLabel": "From",
                    "toLabel": "To",
                    "customRangeLabel": "Custom",
                    "weekLabel": "W",
                    "cancelLabel": 'Reset',
                    "applyLabel": 'Done',
                    "daysOfWeek": [
                        "Вс",
                        "Пн",
                        "Вт",
                        "Ср",
                        "Чт",
                        "Пт",
                        "Сб"
                    ],
                    "monthNames": [
                        "Январь",
                        "Февраль",
                        "Март",
                        "Апрель",
                        "Май",
                        "Июнь",
                        "Июль",
                        "Август",
                        "Сентябрь",
                        "Октябрь",
                        "Ноябрь",
                        "Декабрь"
                    ],
                    "firstDay": 1
                },

            });
            // console.log(picker.setStartDate)
            //apply value in input
            $('#combine-input-container').on('apply.daterangepicker', function(ev, picker) {
                $('#c1').val(picker.startDate.format('DD.MM.YYYY'))
                $('#c2').val(picker.endDate.format('DD.MM.YYYY'))
                $('.c1-label').addClass('c-input-fill');
                $('.c2-label').addClass('c-input-fill');
                $('div.drp-buttons').prepend('<span class="drp-num-nights">' + picker.endDate.diff(picker.startDate, 'days') + ' nights' + '</span>')
            });

            //clear value on cancel
            $('#combine-input-container').on('cancel.daterangepicker', function(ev, picker) {
                $('#c1').val('');
                $('#c2').val('');
                picker.setStartDate(moment())
                picker.setEndDate(moment())
                $('.c1-label').removeClass('c-input-fill');
                $('.c2-label').removeClass('c-input-fill');
            });

            // check if input are not empty than apply css
            $('daterangepicker-two-input').on('keyup change', function() {
                if ($('#c1').val() === '') {
                    $('.c1-label').removeClass('c-input-fill');
                }
                if ($('#c2').val() === '') {
                    $('.c2-label').removeClass('c-input-fill');
                }
            }).change();
            // $('#combine-input-container').on('daterangepicker-two-input', function(ev, picker) {
            //     console.log(picker)
            //     console.log(picker.startDate.format('YYYY-MM-DD'));
            //     console.log(picker.endDate.format('YYYY-MM-DD'));
            // });

        }
        $('#c1').on('apply.daterangepicker', function(ev, picker) {
            console.log(true)
            $(this).val(picker.startDate.format('MM/DD/YYYY'));
        });

        // $("daterangepicker-two-input #c1").keyup(function() {
        //     let c1Val = $('#c1').val();
        //     console.log(c1Val)
        //     mask()

        //     $('#combine-input-container').data('daterangepicker').setStartDate(c1Val)
        // })
        // $("daterangepicker-two-input #c2").keydown(function() {
        //     let c2Val = $('#c2').val();
        //     console.log(c2Val)
        //     mask()
        //     $('#combine-input-container').data('daterangepicker').setEndDate(c2Val)
        // })
        $("daterangepicker-two-input").keyup(function() {
            let c1Val = $('#c1').val();
            let c2Val = $('#c2').val();
            console.log(c1Val)
            console.log(c2Val)
            mask()

            $('#combine-input-container').data('daterangepicker').setStartDate(c1Val)
            $('#combine-input-container').data('daterangepicker').setEndDate(c2Val)
        })
    }

}