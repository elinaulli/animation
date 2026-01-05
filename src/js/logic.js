export default class Logic {
  constructor(gui) {
    this.gui = gui;
    this.togglePopover = this.togglePopover.bind(this);
    this.hidePopover = this.hidePopover.bind(this);
  }

  init() {
    this.gui.drawUi();
    this.gui.button.addEventListener("click", this.togglePopover);
    document.addEventListener("click", this.hidePopover);
  }

  hidePopover(e) {
    if (e.target !== this.gui.button && !this.gui.popover.contains(e.target) && !this.gui.popover.classList.contains("hidden")) {
      popover.classList.remove("show");
      popover.classList.add("hiding");
    }
    }


  togglePopover(e) {
    e.preventDefault();
    e.stopPropagation();
    const position = e.target.getBoundingClientRect();
    const popover = this.gui.popover;

    if (popover.classList.contains("hidden")) {
      popover.classList.remove("hidden");

      popover.style.position = 'absolute';
      popover.style.top = `${position.bottom + window.scrollY}px`;
      popover.style.left = `${position.left + window.scrollX}px`;
      popover.style.marginTop = '5px';

      popover.classList.remove("hiding");
      requestAnimationFrame(()=> {
        requestAnimationFrame(()=> {
          popover.classList.add("show");
        });
      });
      
    } else {
      popover.classList.remove('show');
      popover.classList.add("hiding");
      setTimeout(()=> {
        popover.classList.add("hidden");
        popover.classList.remove("hiding");
      }, 300)
    }
  }
}
