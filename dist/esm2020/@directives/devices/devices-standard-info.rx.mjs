/**
 * @name devices-standard-info.rx
 * @description devices-standard reactive service in ngx-responsive
 *
 *
 * @license MIT
 */
import { Injectable } from '@angular/core';
import { PLATFORM_ID, Inject } from '@angular/core';
import { DeviceStandardInfo } from './devices-standard-info';
import * as i0 from "@angular/core";
import * as i1 from "../../@core/providers/responsive-state/responsive-state";
export class DeviceStandardInfoRx extends DeviceStandardInfo {
    constructor(_responsiveState, _platformId) {
        super(_responsiveState, _platformId);
        this._responsiveState = _responsiveState;
        this._platformId = _platformId;
    }
}
DeviceStandardInfoRx.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: DeviceStandardInfoRx, deps: [{ token: i1.ResponsiveState }, { token: PLATFORM_ID }], target: i0.ɵɵFactoryTarget.Injectable });
DeviceStandardInfoRx.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: DeviceStandardInfoRx });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: DeviceStandardInfoRx, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i1.ResponsiveState }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [PLATFORM_ID]
                }] }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGV2aWNlcy1zdGFuZGFyZC1pbmZvLnJ4LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL0BkaXJlY3RpdmVzL2RldmljZXMvZGV2aWNlcy1zdGFuZGFyZC1pbmZvLnJ4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRztBQUNILE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFcEQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0seUJBQXlCLENBQUM7OztBQUc3RCxNQUFNLE9BQU8sb0JBQXFCLFNBQVEsa0JBQWtCO0lBQ3hELFlBQ1csZ0JBQWlDLEVBQ1QsV0FBVztRQUMxQyxLQUFLLENBQUMsZ0JBQWdCLEVBQUUsV0FBVyxDQUFDLENBQUM7UUFGOUIscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFpQjtRQUNULGdCQUFXLEdBQVgsV0FBVyxDQUFBO0lBQ0osQ0FBQzs7aUhBSmxDLG9CQUFvQixpREFHakIsV0FBVztxSEFIZCxvQkFBb0I7MkZBQXBCLG9CQUFvQjtrQkFEaEMsVUFBVTs7MEJBSUYsTUFBTTsyQkFBQyxXQUFXIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBuYW1lIGRldmljZXMtc3RhbmRhcmQtaW5mby5yeFxyXG4gKiBAZGVzY3JpcHRpb24gZGV2aWNlcy1zdGFuZGFyZCByZWFjdGl2ZSBzZXJ2aWNlIGluIG5neC1yZXNwb25zaXZlXHJcbiAqXHJcbiAqIFxyXG4gKiBAbGljZW5zZSBNSVRcclxuICovXHJcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUExBVEZPUk1fSUQsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBSZXNwb25zaXZlU3RhdGUgfSBmcm9tICcuLi8uLi9AY29yZS9wcm92aWRlcnMvcmVzcG9uc2l2ZS1zdGF0ZS9yZXNwb25zaXZlLXN0YXRlJztcclxuaW1wb3J0IHsgRGV2aWNlU3RhbmRhcmRJbmZvIH0gZnJvbSAnLi9kZXZpY2VzLXN0YW5kYXJkLWluZm8nO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgRGV2aWNlU3RhbmRhcmRJbmZvUnggZXh0ZW5kcyBEZXZpY2VTdGFuZGFyZEluZm8gIHtcclxuICAgIGNvbnN0cnVjdG9yKCBcclxuICAgICAgICBwdWJsaWMgX3Jlc3BvbnNpdmVTdGF0ZTogUmVzcG9uc2l2ZVN0YXRlLFxyXG4gICAgICAgIEBJbmplY3QoUExBVEZPUk1fSUQpIHByb3RlY3RlZCBfcGxhdGZvcm1JZFxyXG4gICAgKSB7IHN1cGVyKF9yZXNwb25zaXZlU3RhdGUsIF9wbGF0Zm9ybUlkKTsgfVxyXG59XHJcbiJdfQ==