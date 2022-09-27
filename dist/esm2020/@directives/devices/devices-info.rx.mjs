/**
 * @name devices-info.rx
 * @description devices-info reactive service in ngx-responsive
 *
 * @license MIT
 */
import { Injectable } from '@angular/core';
import { PLATFORM_ID, Inject } from '@angular/core';
import { DevicesInfo } from './devices-info';
import * as i0 from "@angular/core";
import * as i1 from "../../@core/providers/responsive-state/responsive-state";
export class DeviceInfoRx extends DevicesInfo {
    constructor(_responsiveState, _platformId) {
        super(_responsiveState, _platformId);
        this._responsiveState = _responsiveState;
        this._platformId = _platformId;
    }
}
DeviceInfoRx.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: DeviceInfoRx, deps: [{ token: i1.ResponsiveState }, { token: PLATFORM_ID }], target: i0.ɵɵFactoryTarget.Injectable });
DeviceInfoRx.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: DeviceInfoRx });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: DeviceInfoRx, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i1.ResponsiveState }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [PLATFORM_ID]
                }] }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGV2aWNlcy1pbmZvLnJ4LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL0BkaXJlY3RpdmVzL2RldmljZXMvZGV2aWNlcy1pbmZvLnJ4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7OztHQUtHO0FBQ0gsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVwRCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7OztBQUc3QyxNQUFNLE9BQU8sWUFBYSxTQUFRLFdBQVc7SUFDekMsWUFDVyxnQkFBaUMsRUFDVCxXQUFXO1FBQzFDLEtBQUssQ0FBQyxnQkFBZ0IsRUFBRSxXQUFXLENBQUMsQ0FBQztRQUY5QixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWlCO1FBQ1QsZ0JBQVcsR0FBWCxXQUFXLENBQUE7SUFDSixDQUFDOzt5R0FKbEMsWUFBWSxpREFHVCxXQUFXOzZHQUhkLFlBQVk7MkZBQVosWUFBWTtrQkFEeEIsVUFBVTs7MEJBSUYsTUFBTTsyQkFBQyxXQUFXIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBuYW1lIGRldmljZXMtaW5mby5yeFxyXG4gKiBAZGVzY3JpcHRpb24gZGV2aWNlcy1pbmZvIHJlYWN0aXZlIHNlcnZpY2UgaW4gbmd4LXJlc3BvbnNpdmVcclxuICpcclxuICogQGxpY2Vuc2UgTUlUXHJcbiAqL1xyXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFBMQVRGT1JNX0lELCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUmVzcG9uc2l2ZVN0YXRlIH0gZnJvbSAnLi4vLi4vQGNvcmUvcHJvdmlkZXJzL3Jlc3BvbnNpdmUtc3RhdGUvcmVzcG9uc2l2ZS1zdGF0ZSc7XHJcbmltcG9ydCB7IERldmljZXNJbmZvIH0gZnJvbSAnLi9kZXZpY2VzLWluZm8nO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgRGV2aWNlSW5mb1J4IGV4dGVuZHMgRGV2aWNlc0luZm8gIHtcclxuICAgIGNvbnN0cnVjdG9yKCBcclxuICAgICAgICBwdWJsaWMgX3Jlc3BvbnNpdmVTdGF0ZTogUmVzcG9uc2l2ZVN0YXRlLFxyXG4gICAgICAgIEBJbmplY3QoUExBVEZPUk1fSUQpIHByb3RlY3RlZCBfcGxhdGZvcm1JZFxyXG4gICAgKSB7IHN1cGVyKF9yZXNwb25zaXZlU3RhdGUsIF9wbGF0Zm9ybUlkKTsgfVxyXG59XHJcbiJdfQ==