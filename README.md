# 15 LocalStorage

> Introduction: [JavaScript30](https://javascript30.com) is a 30-day challenge launched by [Wes Bos](https://github.com/wesbos). The project pur purpose is to make the web page simulate the effect of the menu, add new dishes to the page, and it will not be cleared after the page is refreshed.

In the current initial page, when the submit button (Add Item) is clicked, the page triggers the `submit` event by default, and the page is reloaded. This causes the newly submitted content to be lost in the reloaded page. The CSS file used in the page has been completed, what we need to do is to complete the content of the JavaScript part to achieve the target effect.

This challenge may take a little longer than the previous one, but after understanding the mechanism of localStorage and wanting to understand the implementation of the menu.

The live demo is on [GitHub](https://lujianna.github.io/local-storage/)
 
## resources
-Event
    -[event.preventDefault](https://developer.mozilla.org/zh-CN/docs/Web/API/Event/preventDefault)
    -[eventTarget.addEventListener](https://developer.mozilla.org/zh-CN/docs/Web/API/EventTarget/addEventListener)

-[localStorage](https://developer.mozilla.org/zh-CN/docs/Web/API/Storage/LocalStorage)

    -`localStorage.setItem()`
    -`localStorage.getItem()`

-[JSON](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/JSON)

    -`JSON.stringify()`
    -`JSON.parse()`
-[Template from Hack Your Future](https://github.com/HackYourFutureBelgium/javascript-30-starter)
