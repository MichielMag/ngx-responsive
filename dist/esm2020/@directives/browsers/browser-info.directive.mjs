/**
 * @name browser-info.directive
 * @description Browser info directive in ngx-responsive
 *
 * @license MIT
 */
import { EventEmitter, Directive, Input, Output } from '@angular/core';
import { BrowserInfo } from './browser-info';
import * as i0 from "@angular/core";
import * as i1 from "../../@core/providers/responsive-state/responsive-state";
import * as i2 from "../../@core/providers/platform-service/platform.service";
export class BrowserInfoDirective extends BrowserInfo {
    constructor(_responsiveState, cd, platformService) {
        super(_responsiveState, platformService);
        this._responsiveState = _responsiveState;
        this.cd = cd;
        this.platformService = platformService;
        this.browser = new EventEmitter();
    }
    set browserInfo(grid_state) {
        this._updateData(this.currentstate);
    }
    ngOnInit() {
        this.connect();
    }
    ngOnDestroy() {
        this.disconnect();
    }
    _updateData(value) {
        this.browser.emit(value);
        this.cd.markForCheck();
    }
}
BrowserInfoDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: BrowserInfoDirective, deps: [{ token: i1.ResponsiveState }, { token: i0.ChangeDetectorRef }, { token: i2.PlatformService }], target: i0.ɵɵFactoryTarget.Directive });
BrowserInfoDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.2.3", type: BrowserInfoDirective, selector: "browser-info", inputs: { browserInfo: "browserInfo" }, outputs: { browser: "browser" }, usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: BrowserInfoDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'browser-info'
                }]
        }], ctorParameters: function () { return [{ type: i1.ResponsiveState }, { type: i0.ChangeDetectorRef }, { type: i2.PlatformService }]; }, propDecorators: { browser: [{
                type: Output
            }], browserInfo: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJvd3Nlci1pbmZvLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9AZGlyZWN0aXZlcy9icm93c2Vycy9icm93c2VyLWluZm8uZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBOzs7OztHQUtHO0FBQ0gsT0FBTyxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBd0MsTUFBTSxlQUFlLENBQUM7QUFHN0csT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7O0FBTTdDLE1BQU0sT0FBTyxvQkFBcUIsU0FBUSxXQUFXO0lBS2pELFlBQW1CLGdCQUFpQyxFQUN4QyxFQUFxQixFQUNuQixlQUFnQztRQUMxQyxLQUFLLENBQUMsZ0JBQWdCLEVBQUUsZUFBZSxDQUFDLENBQUM7UUFIMUIscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFpQjtRQUN4QyxPQUFFLEdBQUYsRUFBRSxDQUFtQjtRQUNuQixvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFON0IsWUFBTyxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO0lBT25CLENBQUM7SUFOL0MsSUFBYSxXQUFXLENBQUMsVUFBNkI7UUFDbEQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDeEMsQ0FBQztJQU1ELFFBQVE7UUFDSixJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDbkIsQ0FBQztJQUNELFdBQVc7UUFDUCxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDdEIsQ0FBQztJQUNTLFdBQVcsQ0FBQyxLQUFVO1FBQzVCLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxFQUFFLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDM0IsQ0FBQzs7aUhBbkJRLG9CQUFvQjtxR0FBcEIsb0JBQW9COzJGQUFwQixvQkFBb0I7a0JBSGhDLFNBQVM7bUJBQUM7b0JBQ1AsUUFBUSxFQUFFLGNBQWM7aUJBQzNCO29LQUVvQixPQUFPO3NCQUF2QixNQUFNO2dCQUNNLFdBQVc7c0JBQXZCLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLyoqXHJcbiAqIEBuYW1lIGJyb3dzZXItaW5mby5kaXJlY3RpdmVcclxuICogQGRlc2NyaXB0aW9uIEJyb3dzZXIgaW5mbyBkaXJlY3RpdmUgaW4gbmd4LXJlc3BvbnNpdmVcclxuICpcclxuICogQGxpY2Vuc2UgTUlUXHJcbiAqL1xyXG5pbXBvcnQgeyBFdmVudEVtaXR0ZXIsIERpcmVjdGl2ZSwgSW5wdXQsIE91dHB1dCwgT25Jbml0LCBPbkRlc3Ryb3ksIENoYW5nZURldGVjdG9yUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBSZXNwb25zaXZlU3RhdGUgfSBmcm9tICcuLi8uLi9AY29yZS9wcm92aWRlcnMvcmVzcG9uc2l2ZS1zdGF0ZS9yZXNwb25zaXZlLXN0YXRlJztcclxuaW1wb3J0IHsgQnJvd3NlckluZm8gfSBmcm9tICcuL2Jyb3dzZXItaW5mbyc7XHJcbmltcG9ydCB7IFBsYXRmb3JtU2VydmljZSB9IGZyb20gJy4uLy4uL0Bjb3JlL3Byb3ZpZGVycy9wbGF0Zm9ybS1zZXJ2aWNlL3BsYXRmb3JtLnNlcnZpY2UnO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgICBzZWxlY3RvcjogJ2Jyb3dzZXItaW5mbydcclxufSlcclxuZXhwb3J0IGNsYXNzIEJyb3dzZXJJbmZvRGlyZWN0aXZlIGV4dGVuZHMgQnJvd3NlckluZm8gaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XHJcbiAgICBAT3V0cHV0KCkgcHVibGljIGJyb3dzZXI6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gICAgQElucHV0KCkgc2V0IGJyb3dzZXJJbmZvKGdyaWRfc3RhdGU6IHN0cmluZ1tdIHwgc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fdXBkYXRlRGF0YSh0aGlzLmN1cnJlbnRzdGF0ZSk7XHJcbiAgICB9XHJcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgX3Jlc3BvbnNpdmVTdGF0ZTogUmVzcG9uc2l2ZVN0YXRlLFxyXG4gICAgICAgIHByaXZhdGUgY2Q6IENoYW5nZURldGVjdG9yUmVmLFxyXG4gICAgICAgIHByb3RlY3RlZCBwbGF0Zm9ybVNlcnZpY2U6IFBsYXRmb3JtU2VydmljZVxyXG4gICAgKSB7IHN1cGVyKF9yZXNwb25zaXZlU3RhdGUsIHBsYXRmb3JtU2VydmljZSk7IH1cclxuXHJcbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmNvbm5lY3QoKTtcclxuICAgIH1cclxuICAgIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuZGlzY29ubmVjdCgpO1xyXG4gICAgfVxyXG4gICAgcHJvdGVjdGVkIF91cGRhdGVEYXRhKHZhbHVlOiBhbnkpIHtcclxuICAgICAgICB0aGlzLmJyb3dzZXIuZW1pdCh2YWx1ZSk7XHJcbiAgICAgICAgdGhpcy5jZC5tYXJrRm9yQ2hlY2soKTtcclxuICAgIH1cclxufVxyXG4iXX0=