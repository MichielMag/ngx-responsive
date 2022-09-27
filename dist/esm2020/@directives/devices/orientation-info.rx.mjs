/**
 * @name orientation-info.rx
 * @description Orientation reactive service in ngx-responsive
 *
 * @license MIT
 */
import { Injectable } from '@angular/core';
import { OrientationInfo } from './orientation-info';
import * as i0 from "@angular/core";
import * as i1 from "../../@core/providers/responsive-state/responsive-state";
import * as i2 from "../../@core/providers/platform-service/platform.service";
export class OrientationInfoRx extends OrientationInfo {
    constructor(_responsiveState, platformService) {
        super(_responsiveState, platformService);
        this._responsiveState = _responsiveState;
    }
}
OrientationInfoRx.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: OrientationInfoRx, deps: [{ token: i1.ResponsiveState }, { token: i2.PlatformService }], target: i0.ɵɵFactoryTarget.Injectable });
OrientationInfoRx.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: OrientationInfoRx });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: OrientationInfoRx, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i1.ResponsiveState }, { type: i2.PlatformService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JpZW50YXRpb24taW5mby5yeC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9AZGlyZWN0aXZlcy9kZXZpY2VzL29yaWVudGF0aW9uLWluZm8ucngudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7O0dBS0c7QUFDSCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQzs7OztBQUlyRCxNQUFNLE9BQU8saUJBQWtCLFNBQVEsZUFBZTtJQUNsRCxZQUNXLGdCQUFpQyxFQUN4QyxlQUFnQztRQUNoQyxLQUFLLENBQUMsZ0JBQWdCLEVBQUUsZUFBZSxDQUFDLENBQUM7UUFGbEMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFpQjtJQUVFLENBQUM7OzhHQUp0QyxpQkFBaUI7a0hBQWpCLGlCQUFpQjsyRkFBakIsaUJBQWlCO2tCQUQ3QixVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBuYW1lIG9yaWVudGF0aW9uLWluZm8ucnhcclxuICogQGRlc2NyaXB0aW9uIE9yaWVudGF0aW9uIHJlYWN0aXZlIHNlcnZpY2UgaW4gbmd4LXJlc3BvbnNpdmVcclxuICpcclxuICogQGxpY2Vuc2UgTUlUXHJcbiAqL1xyXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFJlc3BvbnNpdmVTdGF0ZSB9IGZyb20gJy4uLy4uL0Bjb3JlL3Byb3ZpZGVycy9yZXNwb25zaXZlLXN0YXRlL3Jlc3BvbnNpdmUtc3RhdGUnO1xyXG5pbXBvcnQgeyBPcmllbnRhdGlvbkluZm8gfSBmcm9tICcuL29yaWVudGF0aW9uLWluZm8nO1xyXG5pbXBvcnQgeyBQbGF0Zm9ybVNlcnZpY2UgfSBmcm9tICcuLi8uLi9AY29yZS9wcm92aWRlcnMvcGxhdGZvcm0tc2VydmljZS9wbGF0Zm9ybS5zZXJ2aWNlJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIE9yaWVudGF0aW9uSW5mb1J4IGV4dGVuZHMgT3JpZW50YXRpb25JbmZvICB7XHJcbiAgICBjb25zdHJ1Y3RvciggXHJcbiAgICAgICAgcHVibGljIF9yZXNwb25zaXZlU3RhdGU6IFJlc3BvbnNpdmVTdGF0ZSxcclxuICAgICAgICBwbGF0Zm9ybVNlcnZpY2U6IFBsYXRmb3JtU2VydmljZVxyXG4gICAgKSB7IHN1cGVyKF9yZXNwb25zaXZlU3RhdGUsIHBsYXRmb3JtU2VydmljZSk7IH1cclxufVxyXG4iXX0=