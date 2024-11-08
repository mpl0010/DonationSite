import { CommonModule, DOCUMENT } from '@angular/common';
import { afterNextRender, Component, ElementRef, Inject, OnDestroy, Renderer2 } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { ToolbarModule } from 'primeng/toolbar';

@Component({
    selector: 'app-header',
    standalone: true,
    imports: [ButtonModule, ToolbarModule, CommonModule],
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnDestroy {

    private window: Window;

    scrollListener: VoidFunction | null;

    constructor(
        @Inject(DOCUMENT) private document: Document,
        private el: ElementRef,
        private renderer: Renderer2
    ) {
        this.scrollListener = null;
        this.window = this.document.defaultView as Window;

        afterNextRender(() => {
            this.bindScrollListener()
        })
    }

    ngOnDestroy(): void {
        this.unbindScrollListener();
    }
    
    bindScrollListener() {
        if (!this.scrollListener) {
            this.scrollListener = this.renderer.listen(this.window, 'scroll', () => {
                if (this.window.scrollY > 0) {
                    this.el.nativeElement.children[0].classList.add('layout-toolbar-sticky');
                }
                else {
                    this.el.nativeElement.children[0].classList.remove('layout-toolbar-sticky');
                }
            })
        }
    }

    unbindScrollListener() {
        if (this.scrollListener) {
            this.scrollListener();
            this.scrollListener = null;
        }
    }
    
}
