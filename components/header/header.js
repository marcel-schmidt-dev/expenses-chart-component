export default function renderHeader() {
    const headerRef = document.createElement('div');
    headerRef.classList.add('header');
    headerRef.innerHTML = /*html*/`
        <div>
            <span>My balance</span>
            <span class="heading-l">$921.48</span>
        </div>
        <div>
            <div class="circle"></div>
        </div>
    `;
    return headerRef;
};