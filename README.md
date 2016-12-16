# jquery.validate-ex
扩展jquery.validate，消息中文处理、重写showErrors

---
更改jquery.validate默认显示验证的信息，改为基于bootstrap的tootip弹出方式，必须引用`bootstrap`

```style
 form .input-validation-error {
    border: 1px solid #f00;
    background-color: #fee;
}

.icheck-validation {
    border: 1px solid transparent;
}

form .tooltip.top .tooltip-arrow {
    bottom: 1px;
    border-top-color: #d95d5d;
}

form .tooltip.bottom .tooltip-arrow {
    border-bottom-color: #d95d5d;
}

form .tooltip-inner {
    background-color: #d95d5d;
}
```
---
radio 按钮验证
```html
<div class="icheck-validation">
<!--你的radio代码-->
</div>
```
