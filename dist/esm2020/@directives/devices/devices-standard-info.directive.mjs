/**
 * @name devices-standard-info.directive
 * @description devices-standard-info directive in ngx-responsive
 *
 * @license MIT
 */
import { EventEmitter, Directive, Input, Output } from '@angular/core';
import { PLATFORM_ID, Inject } from '@angular/core';
import { DeviceStandardInfo } from './devices-standard-info';
import * as i0 from "@angular/core";
import * as i1 from "../../@core/providers/responsive-state/responsive-state";
export class DeviceStandardInfoDirective extends DeviceStandardInfo {
    constructor(_responsiveState, viewContainer, cd, _platformId) {
        super(_responsiveState, _platformId);
        this._responsiveState = _responsiveState;
        this.viewContainer = viewContainer;
        this.cd = cd;
        this._platformId = _platformId;
        this.standard = new EventEmitter();
    }
    set deviceStandardInfo(grid_state) {
        this._updateData(this.currentstate);
    }
    ngOnInit() {
        this.connect();
    }
    ngOnDestroy() {
        this.disconnect();
    }
    _updateData(value) {
        this.standard.emit(value);
        this.cd.markForCheck();
    }
}
DeviceStandardInfoDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: DeviceStandardInfoDirective, deps: [{ token: i1.ResponsiveState }, { token: i0.ViewContainerRef }, { token: i0.ChangeDetectorRef }, { token: PLATFORM_ID }], target: i0.ɵɵFactoryTarget.Directive });
DeviceStandardInfoDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.2.3", type: DeviceStandardInfoDirective, selector: "device-standard-info", inputs: { deviceStandardInfo: "deviceStandardInfo" }, outputs: { standard: "standard" }, usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: DeviceStandardInfoDirective, decorators: [{
            type: Directive,
            args: [{ selector: 'device-standard-info' }]
        }], ctorParameters: function () { return [{ type: i1.ResponsiveState }, { type: i0.ViewContainerRef }, { type: i0.ChangeDetectorRef }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [PLATFORM_ID]
                }] }]; }, propDecorators: { deviceStandardInfo: [{
                type: Input
            }], standard: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGV2aWNlcy1zdGFuZGFyZC1pbmZvLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9AZGlyZWN0aXZlcy9kZXZpY2VzL2RldmljZXMtc3RhbmRhcmQtaW5mby5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7O0dBS0c7QUFDSCxPQUFPLEVBQUUsWUFBWSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUEwRCxNQUFNLGVBQWUsQ0FBQztBQUMvSCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUdwRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQzs7O0FBRzdELE1BQU0sT0FBTywyQkFBNEIsU0FBUSxrQkFBa0I7SUFLL0QsWUFBdUIsZ0JBQWlDLEVBQzFDLGFBQStCLEVBQy9CLEVBQXFCLEVBQ0EsV0FBVztRQUMxQyxLQUFLLENBQUMsZ0JBQWdCLEVBQUUsV0FBVyxDQUFDLENBQUM7UUFKbEIscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFpQjtRQUMxQyxrQkFBYSxHQUFiLGFBQWEsQ0FBa0I7UUFDL0IsT0FBRSxHQUFGLEVBQUUsQ0FBbUI7UUFDQSxnQkFBVyxHQUFYLFdBQVcsQ0FBQTtRQUo3QixhQUFRLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7SUFLeEIsQ0FBQztJQVIzQyxJQUFhLGtCQUFrQixDQUFFLFVBQTZCO1FBQzFELElBQUksQ0FBQyxXQUFXLENBQUUsSUFBSSxDQUFDLFlBQVksQ0FBRSxDQUFDO0lBQzFDLENBQUM7SUFPRCxRQUFRO1FBQ0wsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ2xCLENBQUM7SUFDRCxXQUFXO1FBQ1AsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ3RCLENBQUM7SUFDUyxXQUFXLENBQUUsS0FBVTtRQUM3QixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBRSxLQUFLLENBQUUsQ0FBQztRQUM1QixJQUFJLENBQUMsRUFBRSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQzNCLENBQUM7O3dIQW5CUSwyQkFBMkIsa0hBUXhCLFdBQVc7NEdBUmQsMkJBQTJCOzJGQUEzQiwyQkFBMkI7a0JBRHZDLFNBQVM7bUJBQUMsRUFBRSxRQUFRLEVBQUUsc0JBQXNCLEVBQUU7OzBCQVN0QyxNQUFNOzJCQUFDLFdBQVc7NENBUFYsa0JBQWtCO3NCQUE5QixLQUFLO2dCQUdXLFFBQVE7c0JBQXhCLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQG5hbWUgZGV2aWNlcy1zdGFuZGFyZC1pbmZvLmRpcmVjdGl2ZVxyXG4gKiBAZGVzY3JpcHRpb24gZGV2aWNlcy1zdGFuZGFyZC1pbmZvIGRpcmVjdGl2ZSBpbiBuZ3gtcmVzcG9uc2l2ZVxyXG4gKlxyXG4gKiBAbGljZW5zZSBNSVRcclxuICovXHJcbmltcG9ydCB7IEV2ZW50RW1pdHRlciwgRGlyZWN0aXZlLCBJbnB1dCwgT3V0cHV0LCBWaWV3Q29udGFpbmVyUmVmLCBPbkluaXQsIE9uRGVzdHJveSwgQ2hhbmdlRGV0ZWN0b3JSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUExBVEZPUk1fSUQsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgUmVzcG9uc2l2ZVN0YXRlIH0gZnJvbSAnLi4vLi4vQGNvcmUvcHJvdmlkZXJzL3Jlc3BvbnNpdmUtc3RhdGUvcmVzcG9uc2l2ZS1zdGF0ZSc7XHJcbmltcG9ydCB7IERldmljZVN0YW5kYXJkSW5mbyB9IGZyb20gJy4vZGV2aWNlcy1zdGFuZGFyZC1pbmZvJztcclxuXHJcbkBEaXJlY3RpdmUoeyBzZWxlY3RvcjogJ2RldmljZS1zdGFuZGFyZC1pbmZvJyB9KVxyXG5leHBvcnQgY2xhc3MgRGV2aWNlU3RhbmRhcmRJbmZvRGlyZWN0aXZlIGV4dGVuZHMgRGV2aWNlU3RhbmRhcmRJbmZvIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xyXG4gICAgQElucHV0KCkgc2V0IGRldmljZVN0YW5kYXJkSW5mbyggZ3JpZF9zdGF0ZTogc3RyaW5nW10gfCBzdHJpbmcgKSB7XHJcbiAgICAgICAgdGhpcy5fdXBkYXRlRGF0YSggdGhpcy5jdXJyZW50c3RhdGUgKTtcclxuICAgIH1cclxuICAgIEBPdXRwdXQoKSBwdWJsaWMgc3RhbmRhcmQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gICAgY29uc3RydWN0b3IoIHByb3RlY3RlZCBfcmVzcG9uc2l2ZVN0YXRlOiBSZXNwb25zaXZlU3RhdGUsXHJcbiAgICAgICAgcHJvdGVjdGVkIHZpZXdDb250YWluZXI6IFZpZXdDb250YWluZXJSZWYsXHJcbiAgICAgICAgcHJvdGVjdGVkIGNkOiBDaGFuZ2VEZXRlY3RvclJlZixcclxuICAgICAgICBASW5qZWN0KFBMQVRGT1JNX0lEKSBwcm90ZWN0ZWQgX3BsYXRmb3JtSWRcclxuICAgICkgeyBzdXBlcihfcmVzcG9uc2l2ZVN0YXRlLCBfcGxhdGZvcm1JZCk7IH1cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgdGhpcy5jb25uZWN0KCk7XHJcbiAgICB9XHJcbiAgICBuZ09uRGVzdHJveSgpIHtcclxuICAgICAgICB0aGlzLmRpc2Nvbm5lY3QoKTtcclxuICAgIH1cclxuICAgIHByb3RlY3RlZCBfdXBkYXRlRGF0YSggdmFsdWU6IGFueSApIHtcclxuICAgICAgICB0aGlzLnN0YW5kYXJkLmVtaXQoIHZhbHVlICk7XHJcbiAgICAgICAgdGhpcy5jZC5tYXJrRm9yQ2hlY2soKTtcclxuICAgIH1cclxufVxyXG4iXX0=