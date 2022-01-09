

import './button.scss';


export class Button {
    render() {
        const btn = document.createElement('button');
        btn.innerHTML = 'To jest button';
        const body = document.querySelector('body');
        body.appendChild(btn);
    }
}