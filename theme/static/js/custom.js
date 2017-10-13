/* ==========================================================================
   Register From
   ========================================================================== */
    function validate_form(){
        var errors_div = $('#validation-errors');
        errors_div.removeClass('hidden');
        errors_div.empty();
        var email_fields = $('input[type=email]');
        if (email_fields[0].value !== email_fields[1].value) {
            email_fields.parent().addClass('has-error');
            errors_div.append('<li> Email and confirm email do not match.</li>');
        }
        else{
            email_fields.parent().removeClass('has-error');
        }

        var ticket_counts = $('.select-tickets').children('select');

        var sum = 0;
        ticket_counts.each(function () {
            sum += parseInt(this.value);
        });

        if(sum === 0)
            errors_div.append('<li>At least select one ticket.</li>');

        var cnic_field = $("label:contains('CNIC')").siblings('input');
        if(cnic_field.val().length !== 13 || isNaN(cnic_field.val())) {
            cnic_field.parent().addClass('has-error');
            errors_div.append('<li>Add valid 13 digit CNIC number</li>');
        }
        else {
            cnic_field.parent().removeClass('has-error');
        }
        var phone_field = $("label:contains('Phone')").siblings('input');
        if(phone_field.val().length !== 11 || isNaN(phone_field.val())) {
            phone_field.parent().addClass('has-error');
            errors_div.append('<li>Add valid 11 digit cell phone number</li>');
        }
        else {
            phone_field.parent().removeClass('has-error');
        }
        return errors_div.children().length === 0;
    }