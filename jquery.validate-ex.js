/*
* =======================================================
* jquery.validate-ex
* Jason (Long.Woo)
* https://github.com/Woo-Long/jquery.validate-ex
* =======================================================
*/

(function ($) {
    $.extend($.validator, {
        messages: {
            required: "不能为空值",
            remote: "请重新输入",
            email: "不是有效的邮箱格式",
            url: "不是有效的url格式",
            date: "不是有效的日期格式",
            dateISO: "不是有效的ISO格式",
            number: "不是有效的数字格式",
            digits: "只能为数字",
            equalTo: "再次输入相同的值",
            maxlength: $.validator.format("长度不能超过{0}"),
            minlength: $.validator.format("长度至少为{0}"),
            rangelength: $.validator.format("长度在{0}-{1}之间"),
            range: $.validator.format("输入的值在{0}-{1}之间"),
            max: $.validator.format("输入的值不能大于{0}"),
            min: $.validator.format("输入的值不能小于{0}"),
            step: $.validator.format("输入{0}的倍数值")
        }
    });

    $.extend($.validator.prototype, {
        showErrors: function () {
            var $errorElement = "";

            // 成功
            $.each(this.successList, function (i, o) {
                $errorElement = $(o);

                var elementName = $errorElement.attr("name");

                if ($errorElement.is(":radio") || $errorElement.is(":checkbox")) {
                    var $p = $errorElement.parents(".icheck-validation");
                    $errorElement = $p;
                }

                $errorElement.removeClass("input-validation-error").tooltip("destroy");
            });

            // 错误
            $.each(this.errorList, function (i, o) {
                $errorElement = $(o.element);

                var elementName = $errorElement.attr("name");

                if ($errorElement.is(":radio") || $errorElement.is(":checkbox")) {
                    var $p = $errorElement.parents(".icheck-validation");
                    $errorElement = $p;
                }

                $errorElement.addClass("input-validation-error");
                $errorElement.data("title", o.message).tooltip({ placement: "auto" }).tooltip("show");
            });

            if (this.errorList.length > 0) {
                var element = $(this.errorList).filter(function (index) {
                    return !$(this.element).is(":radio") && !$(this.element).is(":checkbox") && $(this.element).is(":visible")
                })[0].element;

                $(this.findLastActive() || element).focus();
            }
        }
    });

    // 两位小数点验证
    $.validator.addMethod("twodecimal", function (value, element, params) {
	return this.optional(element) || (/^\d+(\.\d{1,2})?$/.test(value));
    }, "小数点后面只能为两位");

    $.validator.classRuleSettings.twodecimal = { twodecimal: true };
	
    // 验证存在html标签
    $.validator.addMethod("htmltag", function (value,element,params) {
        return this.optional(element) || !(/<[^>]+>/gi.test(value));
    }, "不能输入html标签");

    $.validator.classRuleSettings.htmltag = { htmltag: true };

})(jQuery);
