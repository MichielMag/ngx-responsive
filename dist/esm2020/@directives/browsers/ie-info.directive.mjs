/**
 * @name ie-info.directives
 * @description IE Info directives in ngx-responsive
 *
 * @license MIT
 */
import { EventEmitter, Directive, Input, Output } from '@angular/core';
import { PLATFORM_ID, Inject } from '@angular/core';
import { IeInfo } from './ie-info';
import * as i0 from "@angular/core";
import * as i1 from "../../@core/providers/responsive-state/responsive-state";
export class IeInfoDirective extends IeInfo {
    constructor(_responsiveState, viewContainer, cd, _platformId) {
        super(_responsiveState, _platformId);
        this._responsiveState = _responsiveState;
        this.viewContainer = viewContainer;
        this.cd = cd;
        this._platformId = _platformId;
        this.ieVersion = new EventEmitter();
    }
    set ieInfo(grid_state) {
        this._updateData(this.currentstate);
    }
    ngOnInit() {
        this.connect();
    }
    ngOnDestroy() {
        this.disconnect();
    }
    _updateData(value) {
        this.ieVersion.emit(value);
        this.cd.markForCheck();
    }
}
IeInfoDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: IeInfoDirective, deps: [{ token: i1.ResponsiveState }, { token: i0.ViewContainerRef }, { token: i0.ChangeDetectorRef }, { token: PLATFORM_ID }], target: i0.ɵɵFactoryTarget.Directive });
IeInfoDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.2.3", type: IeInfoDirective, selector: "ie-info", inputs: { ieInfo: "ieInfo" }, outputs: { ieVersion: "ieVersion" }, usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: IeInfoDirective, decorators: [{
            type: Directive,
            args: [{ selector: 'ie-info' }]
        }], ctorParameters: function () { return [{ type: i1.ResponsiveState }, { type: i0.ViewContainerRef }, { type: i0.ChangeDetectorRef }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [PLATFORM_ID]
                }] }]; }, propDecorators: { ieInfo: [{
                type: Input
            }], ieVersion: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWUtaW5mby5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGRpcmVjdGl2ZXMvYnJvd3NlcnMvaWUtaW5mby5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7O0dBS0c7QUFDSCxPQUFPLEVBQUUsWUFBWSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUF1RSxNQUFNLGVBQWUsQ0FBQztBQUM1SSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUlwRCxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sV0FBVyxDQUFDOzs7QUFHbkMsTUFBTSxPQUFPLGVBQWdCLFNBQVEsTUFBTTtJQUt2QyxZQUFtQixnQkFBaUMsRUFDeEMsYUFBK0IsRUFDL0IsRUFBcUIsRUFDRSxXQUFXO1FBQzFDLEtBQUssQ0FBQyxnQkFBZ0IsRUFBRSxXQUFXLENBQUMsQ0FBQztRQUp0QixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWlCO1FBQ3hDLGtCQUFhLEdBQWIsYUFBYSxDQUFrQjtRQUMvQixPQUFFLEdBQUYsRUFBRSxDQUFtQjtRQUNFLGdCQUFXLEdBQVgsV0FBVyxDQUFBO1FBSjdCLGNBQVMsR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQUt6QixDQUFDO0lBUjNDLElBQWEsTUFBTSxDQUFDLFVBQTZCO1FBQzdDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFPRCxRQUFRO1FBQ0osSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ25CLENBQUM7SUFDRCxXQUFXO1FBQ1AsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ3RCLENBQUM7SUFDUyxXQUFXLENBQUMsS0FBVTtRQUM1QixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMzQixJQUFJLENBQUMsRUFBRSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQzNCLENBQUM7OzRHQW5CUSxlQUFlLGtIQVFaLFdBQVc7Z0dBUmQsZUFBZTsyRkFBZixlQUFlO2tCQUQzQixTQUFTO21CQUFDLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRTs7MEJBU3pCLE1BQU07MkJBQUMsV0FBVzs0Q0FQVixNQUFNO3NCQUFsQixLQUFLO2dCQUdXLFNBQVM7c0JBQXpCLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQG5hbWUgaWUtaW5mby5kaXJlY3RpdmVzXHJcbiAqIEBkZXNjcmlwdGlvbiBJRSBJbmZvIGRpcmVjdGl2ZXMgaW4gbmd4LXJlc3BvbnNpdmVcclxuICpcclxuICogQGxpY2Vuc2UgTUlUXHJcbiAqL1xyXG5pbXBvcnQgeyBFdmVudEVtaXR0ZXIsIERpcmVjdGl2ZSwgSW5wdXQsIE91dHB1dCwgVGVtcGxhdGVSZWYsIFZpZXdDb250YWluZXJSZWYsIE9uSW5pdCwgT25EZXN0cm95LCBDaGFuZ2VEZXRlY3RvclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBQTEFURk9STV9JRCwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xyXG5cclxuaW1wb3J0IHsgUmVzcG9uc2l2ZVN0YXRlIH0gZnJvbSAnLi4vLi4vQGNvcmUvcHJvdmlkZXJzL3Jlc3BvbnNpdmUtc3RhdGUvcmVzcG9uc2l2ZS1zdGF0ZSc7XHJcbmltcG9ydCB7IEllSW5mbyB9IGZyb20gJy4vaWUtaW5mbyc7XHJcblxyXG5ARGlyZWN0aXZlKHsgc2VsZWN0b3I6ICdpZS1pbmZvJyB9KVxyXG5leHBvcnQgY2xhc3MgSWVJbmZvRGlyZWN0aXZlIGV4dGVuZHMgSWVJbmZvIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xyXG4gICAgQElucHV0KCkgc2V0IGllSW5mbyhncmlkX3N0YXRlOiBzdHJpbmdbXSB8IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3VwZGF0ZURhdGEodGhpcy5jdXJyZW50c3RhdGUpO1xyXG4gICAgfVxyXG4gICAgQE91dHB1dCgpIHB1YmxpYyBpZVZlcnNpb246IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gICAgY29uc3RydWN0b3IocHVibGljIF9yZXNwb25zaXZlU3RhdGU6IFJlc3BvbnNpdmVTdGF0ZSxcclxuICAgICAgICBwcml2YXRlIHZpZXdDb250YWluZXI6IFZpZXdDb250YWluZXJSZWYsXHJcbiAgICAgICAgcHJpdmF0ZSBjZDogQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgICAgICAgQEluamVjdChQTEFURk9STV9JRCkgcHJvdGVjdGVkIF9wbGF0Zm9ybUlkXHJcbiAgICApIHsgc3VwZXIoX3Jlc3BvbnNpdmVTdGF0ZSwgX3BsYXRmb3JtSWQpOyB9XHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICB0aGlzLmNvbm5lY3QoKTtcclxuICAgIH1cclxuICAgIG5nT25EZXN0cm95KCkge1xyXG4gICAgICAgIHRoaXMuZGlzY29ubmVjdCgpO1xyXG4gICAgfVxyXG4gICAgcHJvdGVjdGVkIF91cGRhdGVEYXRhKHZhbHVlOiBhbnkpIHtcclxuICAgICAgICB0aGlzLmllVmVyc2lvbi5lbWl0KHZhbHVlKTtcclxuICAgICAgICB0aGlzLmNkLm1hcmtGb3JDaGVjaygpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==