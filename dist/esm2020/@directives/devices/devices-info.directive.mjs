/**
 * @name devices-info.directive
 * @description devices-info directive in ngx-responsive
 *
 * @license MIT
 */
import { EventEmitter, Directive, Output } from '@angular/core';
import { PLATFORM_ID, Inject } from '@angular/core';
import { DevicesInfo } from './devices-info';
import * as i0 from "@angular/core";
import * as i1 from "../../@core/providers/responsive-state/responsive-state";
export class DeviceInfoDirective extends DevicesInfo {
    constructor(_responsiveState, viewContainer, cd, _platformId) {
        super(_responsiveState, _platformId);
        this._responsiveState = _responsiveState;
        this.viewContainer = viewContainer;
        this.cd = cd;
        this._platformId = _platformId;
        this.device = new EventEmitter();
    }
    ngOnInit() {
        this.connect();
    }
    ngOnDestroy() {
        this.disconnect();
    }
    _updateData(value) {
        this.device.emit(value);
        this.cd.markForCheck();
    }
}
DeviceInfoDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: DeviceInfoDirective, deps: [{ token: i1.ResponsiveState }, { token: i0.ViewContainerRef }, { token: i0.ChangeDetectorRef }, { token: PLATFORM_ID }], target: i0.ɵɵFactoryTarget.Directive });
DeviceInfoDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.2.3", type: DeviceInfoDirective, selector: "device-info", outputs: { device: "device" }, usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: DeviceInfoDirective, decorators: [{
            type: Directive,
            args: [{ selector: 'device-info' }]
        }], ctorParameters: function () { return [{ type: i1.ResponsiveState }, { type: i0.ViewContainerRef }, { type: i0.ChangeDetectorRef }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [PLATFORM_ID]
                }] }]; }, propDecorators: { device: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGV2aWNlcy1pbmZvLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9AZGlyZWN0aXZlcy9kZXZpY2VzL2RldmljZXMtaW5mby5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7O0dBS0c7QUFDSCxPQUFPLEVBQUUsWUFBWSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQTBELE1BQU0sZUFBZSxDQUFDO0FBQ3hILE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBR3BELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7O0FBRzdDLE1BQU0sT0FBTyxtQkFBb0IsU0FBUSxXQUFXO0lBRWhELFlBQXNCLGdCQUFpQyxFQUN6QyxhQUErQixFQUMvQixFQUFxQixFQUNBLFdBQVc7UUFDMUMsS0FBSyxDQUFDLGdCQUFnQixFQUFFLFdBQVcsQ0FBQyxDQUFDO1FBSm5CLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBaUI7UUFDekMsa0JBQWEsR0FBYixhQUFhLENBQWtCO1FBQy9CLE9BQUUsR0FBRixFQUFFLENBQW1CO1FBQ0EsZ0JBQVcsR0FBWCxXQUFXLENBQUE7UUFKcEMsV0FBTSxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO0lBS2YsQ0FBQztJQUMzQyxRQUFRO1FBQ0osSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ25CLENBQUM7SUFDRCxXQUFXO1FBQ1AsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ3RCLENBQUM7SUFDUyxXQUFXLENBQUMsS0FBVTtRQUM1QixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN4QixJQUFJLENBQUMsRUFBRSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQzNCLENBQUM7O2dIQWhCUSxtQkFBbUIsa0hBS2hCLFdBQVc7b0dBTGQsbUJBQW1COzJGQUFuQixtQkFBbUI7a0JBRC9CLFNBQVM7bUJBQUMsRUFBRSxRQUFRLEVBQUUsYUFBYSxFQUFFOzswQkFNN0IsTUFBTTsyQkFBQyxXQUFXOzRDQUpiLE1BQU07c0JBQWYsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbmFtZSBkZXZpY2VzLWluZm8uZGlyZWN0aXZlXHJcbiAqIEBkZXNjcmlwdGlvbiBkZXZpY2VzLWluZm8gZGlyZWN0aXZlIGluIG5neC1yZXNwb25zaXZlXHJcbiAqXHJcbiAqIEBsaWNlbnNlIE1JVFxyXG4gKi9cclxuaW1wb3J0IHsgRXZlbnRFbWl0dGVyLCBEaXJlY3RpdmUsIE91dHB1dCwgVmlld0NvbnRhaW5lclJlZiwgT25Jbml0LCBPbkRlc3Ryb3ksIENoYW5nZURldGVjdG9yUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFBMQVRGT1JNX0lELCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IFJlc3BvbnNpdmVTdGF0ZSB9IGZyb20gJy4uLy4uL0Bjb3JlL3Byb3ZpZGVycy9yZXNwb25zaXZlLXN0YXRlL3Jlc3BvbnNpdmUtc3RhdGUnO1xyXG5pbXBvcnQgeyBEZXZpY2VzSW5mbyB9IGZyb20gJy4vZGV2aWNlcy1pbmZvJztcclxuXHJcbkBEaXJlY3RpdmUoeyBzZWxlY3RvcjogJ2RldmljZS1pbmZvJyB9KVxyXG5leHBvcnQgY2xhc3MgRGV2aWNlSW5mb0RpcmVjdGl2ZSBleHRlbmRzIERldmljZXNJbmZvIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xyXG4gICAgQE91dHB1dCgpIGRldmljZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgX3Jlc3BvbnNpdmVTdGF0ZTogUmVzcG9uc2l2ZVN0YXRlLFxyXG4gICAgICAgIHByb3RlY3RlZCB2aWV3Q29udGFpbmVyOiBWaWV3Q29udGFpbmVyUmVmLFxyXG4gICAgICAgIHByb3RlY3RlZCBjZDogQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgICAgICAgQEluamVjdChQTEFURk9STV9JRCkgcHJvdGVjdGVkIF9wbGF0Zm9ybUlkXHJcbiAgICApIHsgc3VwZXIoX3Jlc3BvbnNpdmVTdGF0ZSwgX3BsYXRmb3JtSWQpOyB9XHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICB0aGlzLmNvbm5lY3QoKTtcclxuICAgIH1cclxuICAgIG5nT25EZXN0cm95KCkge1xyXG4gICAgICAgIHRoaXMuZGlzY29ubmVjdCgpO1xyXG4gICAgfVxyXG4gICAgcHJvdGVjdGVkIF91cGRhdGVEYXRhKHZhbHVlOiBhbnkpIHtcclxuICAgICAgICB0aGlzLmRldmljZS5lbWl0KHZhbHVlKTtcclxuICAgICAgICB0aGlzLmNkLm1hcmtGb3JDaGVjaygpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==