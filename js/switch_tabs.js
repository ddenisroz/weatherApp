import {ObjectsHTML} from "./htmlobjects.js";

const {tabs, content} = ObjectsHTML;

for (let i = 0; i < tabs.length; i++) {
    tabs[i].addEventListener('click', (event) => {
        let tabsChildren = event.target.parentElement.children;
        for (let i = 0; i < tabsChildren.length; i++) {
            tabsChildren[i].classList.remove('tabs--active');
        }
        tabs[i].classList.add('tabs--active');

        for (let c = 0; c < content.length; c++) {
            content[c].classList.remove('content--active');
        }
        content[i].classList.add('content--active')
    })
}