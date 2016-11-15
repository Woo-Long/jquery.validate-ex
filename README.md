# jquery.validate-ex
扩展jquery.validate，消息中文处理、重写showErrors

---
更改jquery.validate默认显示验证的信息，改为基于bootstrap的tootip弹出方式，必须引用`bootstrap`

```style
 .input-validation-error {
    border: 1px solid #f00;
    background-color: #fee;
 }

 form .tooltip.top .tooltip-arrow {
    border-top-color: #d95d5d;
 }

 form .tooltip-inner {
    background-color: #d95d5d;
 }
```
