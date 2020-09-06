class Swiper {
    constructor() {
        this.initialY = null;
        this.initailX = null;
        document.addEventListener('touchstart', (event) => this.startTouch(event));
        document.addEventListener('touchmove', (event) => this.moveTouch(event));
        this.events = {
            swipeUp: new Event('swipeUp'),
            swipeDown: new Event('swipeDown'),
            swipeLeft: new Event('swipeLeft'),
            swipeRight: new Event('swipeRight'),
        }
    }

    startTouch(event) {
        this.initailX = event.touches[0].clientX;
        this.initailY = event.touches[0].clientY;
    }

    moveTouch(event) {
        if (!this.initailX || !this.initailY) return;
        const currentX = event.touches[0].clientX;
        const currentY = event.touches[0].clientY;
        const diffX = this.initailX - currentX;
        const diffY = this.initailY - currentY;
        if (Math.abs(diffX) > Math.abs(diffY)) {
            if (diffX > 0) {
                document.dispatchEvent(this.events.swipeLeft);
            } else {
                document.dispatchEvent(this.events.swipeRight);
            }
        } else {
            if (diffY > 0) {
                document.dispatchEvent(this.events.swipeUp);
            } else {
                document.dispatchEvent(this.events.swipeDown);
            }
        }
        this.initailX = null;
        this.initailY = null;
    }
}

new Swiper();