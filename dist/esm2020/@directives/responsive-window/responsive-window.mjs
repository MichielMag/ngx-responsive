/**
 * @name responsive-window
 * @description responsiveWindow Directive in ngx-responsive
 *
 * @license MIT
 */
import { Directive, Input } from '@angular/core';
import { map } from "rxjs/operators";
import * as i0 from "@angular/core";
import * as i1 from "../../@core/providers/responsive-state/responsive-state";
import * as i2 from "../../@core/providers/platform-service/platform.service";
import * as i3 from "../../@core/providers/responsive-config/responsive-config";
export class ResponsiveWindowDirective {
    constructor(_responsiveState, el, cd, platformService, _responsiveConfig) {
        this._responsiveState = _responsiveState;
        this.el = el;
        this.cd = cd;
        this._responsiveConfig = _responsiveConfig;
        this._isEnabledForPlatform = null;
        this._isEnabledForPlatform = platformService.isEnabledForPlatform();
        if (this._isEnabledForPlatform) {
            this.element = el.nativeElement;
        }
        this.currentBreakpoint$ = this._responsiveState
            .ancho$
            .pipe(map(this.getCurrentBreakpoint.bind(this)));
    }
    ngOnInit() {
        if (this._isEnabledForPlatform) {
            this._responsiveState.registerWindow(this);
        }
    }
    ngDoCheck() {
        if (this._isEnabledForPlatform) {
            const _update = this._ifValueChanged(this._noRepeat, this.name);
            if (_update) {
                this._responsiveState.unregisterWindow(this);
                this._responsiveState.registerWindow(this);
                this.cd.markForCheck();
            }
        }
    }
    ngOnDestroy() {
        if (this._isEnabledForPlatform) {
            this._responsiveState.unregisterWindow(this);
        }
    }
    getWidth() {
        return (this._isEnabledForPlatform) ? this.element.offsetWidth : 0;
    }
    getCurrentBreakpoint() {
        const width = this.getWidth();
        // console.error("getCurrentBreakpoint", width)
        if (this._responsiveConfig.config.breakPoints.xl.min <= width) {
            return 'xl';
        }
        else if (this._responsiveConfig.config.breakPoints.lg.max >= width && this._responsiveConfig.config.breakPoints.lg.min <= width) {
            return 'lg';
        }
        else if (this._responsiveConfig.config.breakPoints.md.max >= width && this._responsiveConfig.config.breakPoints.md.min <= width) {
            return 'md';
        }
        else if (this._responsiveConfig.config.breakPoints.sm.max >= width && this._responsiveConfig.config.breakPoints.sm.min <= width) {
            return 'sm';
        }
        else if (this._responsiveConfig.config.breakPoints.xs.max >= width) {
            return 'xs';
        }
    }
    _ifValueChanged(oldValue, newValue) {
        if (oldValue === newValue) {
            return false;
        }
        else {
            this._noRepeat = newValue;
            return true;
        }
    }
}
ResponsiveWindowDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: ResponsiveWindowDirective, deps: [{ token: i1.ResponsiveState }, { token: i0.ElementRef }, { token: i0.ChangeDetectorRef }, { token: i2.PlatformService }, { token: i3.ResponsiveConfig }], target: i0.ɵɵFactoryTarget.Directive });
ResponsiveWindowDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.2.3", type: ResponsiveWindowDirective, selector: "[responsive-window]", inputs: { name: ["responsive-window", "name"] }, exportAs: ["container"], ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: ResponsiveWindowDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: "[responsive-window]",
                    exportAs: "container"
                }]
        }], ctorParameters: function () { return [{ type: i1.ResponsiveState }, { type: i0.ElementRef }, { type: i0.ChangeDetectorRef }, { type: i2.PlatformService }, { type: i3.ResponsiveConfig }]; }, propDecorators: { name: [{
                type: Input,
                args: ['responsive-window']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzcG9uc2l2ZS13aW5kb3cuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGRpcmVjdGl2ZXMvcmVzcG9uc2l2ZS13aW5kb3cvcmVzcG9uc2l2ZS13aW5kb3cudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7O0dBS0c7QUFDSCxPQUFPLEVBQVcsU0FBUyxFQUFFLEtBQUssRUFBb0QsTUFBTSxlQUFlLENBQUM7QUFNNUcsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7OztBQU9yQyxNQUFNLE9BQU8seUJBQXlCO0lBVWxDLFlBQ1ksZ0JBQWlDLEVBQ2pDLEVBQWMsRUFDZCxFQUFxQixFQUM3QixlQUFnQyxFQUN4QixpQkFBbUM7UUFKbkMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFpQjtRQUNqQyxPQUFFLEdBQUYsRUFBRSxDQUFZO1FBQ2QsT0FBRSxHQUFGLEVBQUUsQ0FBbUI7UUFFckIsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFrQjtRQVh2QywwQkFBcUIsR0FBWSxJQUFJLENBQUM7UUFhMUMsSUFBSSxDQUFDLHFCQUFxQixHQUFHLGVBQWUsQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO1FBQ3BFLElBQUksSUFBSSxDQUFDLHFCQUFxQixFQUFFO1lBQzVCLElBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDLGFBQWEsQ0FBQztTQUNuQztRQUVELElBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUMsZ0JBQWdCO2FBQzFDLE1BQU07YUFDTixJQUFJLENBQ0QsR0FBRyxDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FDNUMsQ0FBQztJQUNWLENBQUM7SUFDTSxRQUFRO1FBQ1gsSUFBSSxJQUFJLENBQUMscUJBQXFCLEVBQUU7WUFDNUIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUM5QztJQUNMLENBQUM7SUFFTSxTQUFTO1FBQ1osSUFBSSxJQUFJLENBQUMscUJBQXFCLEVBQUU7WUFDNUIsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNoRSxJQUFJLE9BQU8sRUFBRTtnQkFDVCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQzdDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQzNDLElBQUksQ0FBQyxFQUFFLENBQUMsWUFBWSxFQUFFLENBQUM7YUFDMUI7U0FDSjtJQUNMLENBQUM7SUFDTSxXQUFXO1FBQ2QsSUFBSSxJQUFJLENBQUMscUJBQXFCLEVBQUU7WUFDNUIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ2hEO0lBQ0wsQ0FBQztJQUVNLFFBQVE7UUFDWCxPQUFPLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDdkUsQ0FBQztJQUVNLG9CQUFvQjtRQUN2QixNQUFNLEtBQUssR0FBVyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDdEMsK0NBQStDO1FBQy9DLElBQUksSUFBSSxDQUFDLGlCQUFpQixDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxLQUFLLEVBQUU7WUFDM0QsT0FBTyxJQUFJLENBQUM7U0FDZjthQUFNLElBQUksSUFBSSxDQUFDLGlCQUFpQixDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxLQUFLLElBQUksSUFBSSxDQUFDLGlCQUFpQixDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxLQUFLLEVBQUU7WUFDL0gsT0FBTyxJQUFJLENBQUM7U0FDZjthQUFNLElBQUksSUFBSSxDQUFDLGlCQUFpQixDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxLQUFLLElBQUksSUFBSSxDQUFDLGlCQUFpQixDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxLQUFLLEVBQUU7WUFDL0gsT0FBTyxJQUFJLENBQUM7U0FDZjthQUFNLElBQUksSUFBSSxDQUFDLGlCQUFpQixDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxLQUFLLElBQUksSUFBSSxDQUFDLGlCQUFpQixDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxLQUFLLEVBQUU7WUFDL0gsT0FBTyxJQUFJLENBQUM7U0FDZjthQUFNLElBQUksSUFBSSxDQUFDLGlCQUFpQixDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxLQUFLLEVBQUU7WUFDbEUsT0FBTyxJQUFJLENBQUM7U0FDZjtJQUNMLENBQUM7SUFHTyxlQUFlLENBQUMsUUFBYSxFQUFFLFFBQWE7UUFDaEQsSUFBSSxRQUFRLEtBQUssUUFBUSxFQUFFO1lBQ3ZCLE9BQU8sS0FBSyxDQUFDO1NBQ2hCO2FBQU07WUFDSCxJQUFJLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQztZQUMxQixPQUFPLElBQUksQ0FBQztTQUNmO0lBQ0wsQ0FBQzs7c0hBOUVRLHlCQUF5QjswR0FBekIseUJBQXlCOzJGQUF6Qix5QkFBeUI7a0JBSnJDLFNBQVM7bUJBQUM7b0JBQ1AsUUFBUSxFQUFFLHFCQUFxQjtvQkFDL0IsUUFBUSxFQUFFLFdBQVc7aUJBQ3hCOzROQU8rQixJQUFJO3NCQUEvQixLQUFLO3VCQUFDLG1CQUFtQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbmFtZSByZXNwb25zaXZlLXdpbmRvd1xyXG4gKiBAZGVzY3JpcHRpb24gcmVzcG9uc2l2ZVdpbmRvdyBEaXJlY3RpdmUgaW4gbmd4LXJlc3BvbnNpdmVcclxuICpcclxuICogQGxpY2Vuc2UgTUlUXHJcbiAqL1xyXG5pbXBvcnQgeyBEb0NoZWNrLCBEaXJlY3RpdmUsIElucHV0LCBFbGVtZW50UmVmLCBPbkluaXQsIE9uRGVzdHJveSwgQ2hhbmdlRGV0ZWN0b3JSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUExBVEZPUk1fSUQsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBpc1BsYXRmb3JtQnJvd3NlciB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IFJlc3BvbnNpdmVTdGF0ZSB9IGZyb20gJy4uLy4uL0Bjb3JlL3Byb3ZpZGVycy9yZXNwb25zaXZlLXN0YXRlL3Jlc3BvbnNpdmUtc3RhdGUnO1xyXG5pbXBvcnQgeyBSZXNwb25zaXZlQ29uZmlnIH0gZnJvbSBcIi4uLy4uL0Bjb3JlL3Byb3ZpZGVycy9yZXNwb25zaXZlLWNvbmZpZy9yZXNwb25zaXZlLWNvbmZpZ1wiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anNcIjtcclxuaW1wb3J0IHsgbWFwIH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XHJcbmltcG9ydCB7IFBsYXRmb3JtU2VydmljZSB9IGZyb20gJy4uLy4uL0Bjb3JlL3Byb3ZpZGVycy9wbGF0Zm9ybS1zZXJ2aWNlL3BsYXRmb3JtLnNlcnZpY2UnO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgICBzZWxlY3RvcjogXCJbcmVzcG9uc2l2ZS13aW5kb3ddXCIsXHJcbiAgICBleHBvcnRBczogXCJjb250YWluZXJcIlxyXG59KVxyXG5leHBvcnQgY2xhc3MgUmVzcG9uc2l2ZVdpbmRvd0RpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95LCBEb0NoZWNrIHtcclxuXHJcbiAgICBwcml2YXRlIF9ub1JlcGVhdDogc3RyaW5nO1xyXG4gICAgcHJpdmF0ZSBlbGVtZW50OiBIVE1MRWxlbWVudDtcclxuICAgIHByaXZhdGUgX2lzRW5hYmxlZEZvclBsYXRmb3JtOiBib29sZWFuID0gbnVsbDtcclxuXHJcbiAgICBASW5wdXQoJ3Jlc3BvbnNpdmUtd2luZG93JykgbmFtZTogc3RyaW5nO1xyXG5cclxuICAgIHB1YmxpYyBjdXJyZW50QnJlYWtwb2ludCQ6IE9ic2VydmFibGU8c3RyaW5nPjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcml2YXRlIF9yZXNwb25zaXZlU3RhdGU6IFJlc3BvbnNpdmVTdGF0ZSxcclxuICAgICAgICBwcml2YXRlIGVsOiBFbGVtZW50UmVmLFxyXG4gICAgICAgIHByaXZhdGUgY2Q6IENoYW5nZURldGVjdG9yUmVmLFxyXG4gICAgICAgIHBsYXRmb3JtU2VydmljZTogUGxhdGZvcm1TZXJ2aWNlLFxyXG4gICAgICAgIHByaXZhdGUgX3Jlc3BvbnNpdmVDb25maWc6IFJlc3BvbnNpdmVDb25maWcpIHtcclxuXHJcbiAgICAgICAgdGhpcy5faXNFbmFibGVkRm9yUGxhdGZvcm0gPSBwbGF0Zm9ybVNlcnZpY2UuaXNFbmFibGVkRm9yUGxhdGZvcm0oKTtcclxuICAgICAgICBpZiAodGhpcy5faXNFbmFibGVkRm9yUGxhdGZvcm0pIHtcclxuICAgICAgICAgICAgdGhpcy5lbGVtZW50ID0gZWwubmF0aXZlRWxlbWVudDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuY3VycmVudEJyZWFrcG9pbnQkID0gdGhpcy5fcmVzcG9uc2l2ZVN0YXRlXHJcbiAgICAgICAgICAgIC5hbmNobyRcclxuICAgICAgICAgICAgLnBpcGUoXHJcbiAgICAgICAgICAgICAgICBtYXAodGhpcy5nZXRDdXJyZW50QnJlYWtwb2ludC5iaW5kKHRoaXMpKVxyXG4gICAgICAgICAgICApO1xyXG4gICAgfVxyXG4gICAgcHVibGljIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLl9pc0VuYWJsZWRGb3JQbGF0Zm9ybSkge1xyXG4gICAgICAgICAgICB0aGlzLl9yZXNwb25zaXZlU3RhdGUucmVnaXN0ZXJXaW5kb3codGhpcyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBuZ0RvQ2hlY2soKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2lzRW5hYmxlZEZvclBsYXRmb3JtKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IF91cGRhdGUgPSB0aGlzLl9pZlZhbHVlQ2hhbmdlZCh0aGlzLl9ub1JlcGVhdCwgdGhpcy5uYW1lKTtcclxuICAgICAgICAgICAgaWYgKF91cGRhdGUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3Jlc3BvbnNpdmVTdGF0ZS51bnJlZ2lzdGVyV2luZG93KHRoaXMpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fcmVzcG9uc2l2ZVN0YXRlLnJlZ2lzdGVyV2luZG93KHRoaXMpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jZC5tYXJrRm9yQ2hlY2soKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHB1YmxpYyBuZ09uRGVzdHJveSgpIHtcclxuICAgICAgICBpZiAodGhpcy5faXNFbmFibGVkRm9yUGxhdGZvcm0pIHtcclxuICAgICAgICAgICAgdGhpcy5fcmVzcG9uc2l2ZVN0YXRlLnVucmVnaXN0ZXJXaW5kb3codGhpcyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRXaWR0aCgpIHtcclxuICAgICAgICByZXR1cm4gKHRoaXMuX2lzRW5hYmxlZEZvclBsYXRmb3JtKSA/IHRoaXMuZWxlbWVudC5vZmZzZXRXaWR0aCA6IDA7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldEN1cnJlbnRCcmVha3BvaW50KCk6IHN0cmluZyB7XHJcbiAgICAgICAgY29uc3Qgd2lkdGg6IG51bWJlciA9IHRoaXMuZ2V0V2lkdGgoKTtcclxuICAgICAgICAvLyBjb25zb2xlLmVycm9yKFwiZ2V0Q3VycmVudEJyZWFrcG9pbnRcIiwgd2lkdGgpXHJcbiAgICAgICAgaWYgKHRoaXMuX3Jlc3BvbnNpdmVDb25maWcuY29uZmlnLmJyZWFrUG9pbnRzLnhsLm1pbiA8PSB3aWR0aCkge1xyXG4gICAgICAgICAgICByZXR1cm4gJ3hsJztcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX3Jlc3BvbnNpdmVDb25maWcuY29uZmlnLmJyZWFrUG9pbnRzLmxnLm1heCA+PSB3aWR0aCAmJiB0aGlzLl9yZXNwb25zaXZlQ29uZmlnLmNvbmZpZy5icmVha1BvaW50cy5sZy5taW4gPD0gd2lkdGgpIHtcclxuICAgICAgICAgICAgcmV0dXJuICdsZyc7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLl9yZXNwb25zaXZlQ29uZmlnLmNvbmZpZy5icmVha1BvaW50cy5tZC5tYXggPj0gd2lkdGggJiYgdGhpcy5fcmVzcG9uc2l2ZUNvbmZpZy5jb25maWcuYnJlYWtQb2ludHMubWQubWluIDw9IHdpZHRoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAnbWQnO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5fcmVzcG9uc2l2ZUNvbmZpZy5jb25maWcuYnJlYWtQb2ludHMuc20ubWF4ID49IHdpZHRoICYmIHRoaXMuX3Jlc3BvbnNpdmVDb25maWcuY29uZmlnLmJyZWFrUG9pbnRzLnNtLm1pbiA8PSB3aWR0aCkge1xyXG4gICAgICAgICAgICByZXR1cm4gJ3NtJztcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX3Jlc3BvbnNpdmVDb25maWcuY29uZmlnLmJyZWFrUG9pbnRzLnhzLm1heCA+PSB3aWR0aCkge1xyXG4gICAgICAgICAgICByZXR1cm4gJ3hzJztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHByaXZhdGUgX2lmVmFsdWVDaGFuZ2VkKG9sZFZhbHVlOiBhbnksIG5ld1ZhbHVlOiBhbnkpOiBib29sZWFuIHtcclxuICAgICAgICBpZiAob2xkVmFsdWUgPT09IG5ld1ZhbHVlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLl9ub1JlcGVhdCA9IG5ld1ZhbHVlO1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19