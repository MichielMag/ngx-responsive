/**
 * @name responsive-size-info.rx
 * @description Responsive Size Info reactive service in ngx-responsive
 *
 * @license MIT
 */
import { Injectable } from '@angular/core';
import { ResponsiveSizeInfo } from './responsive-size-info';
import * as i0 from "@angular/core";
import * as i1 from "../../@core/providers/responsive-state/responsive-state";
import * as i2 from "../../@core/providers/platform-service/platform.service";
export class ResponsiveSizeInfoRx extends ResponsiveSizeInfo {
    constructor(_responsiveState, platformService) {
        super(_responsiveState, platformService);
        this._responsiveState = _responsiveState;
    }
}
ResponsiveSizeInfoRx.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: ResponsiveSizeInfoRx, deps: [{ token: i1.ResponsiveState }, { token: i2.PlatformService }], target: i0.ɵɵFactoryTarget.Injectable });
ResponsiveSizeInfoRx.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: ResponsiveSizeInfoRx });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: ResponsiveSizeInfoRx, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i1.ResponsiveState }, { type: i2.PlatformService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzcG9uc2l2ZS1zaXplLWluZm8ucnguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGRpcmVjdGl2ZXMvcmVzcG9uc2l2ZS1zaXplLWluZm8vcmVzcG9uc2l2ZS1zaXplLWluZm8ucngudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7O0dBS0c7QUFDSCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDOzs7O0FBSTVELE1BQU0sT0FBTyxvQkFBcUIsU0FBUSxrQkFBa0I7SUFDeEQsWUFDVyxnQkFBaUMsRUFDeEMsZUFBZ0M7UUFDaEMsS0FBSyxDQUFDLGdCQUFnQixFQUFFLGVBQWUsQ0FBQyxDQUFDO1FBRmxDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBaUI7SUFFRSxDQUFDOztpSEFKdEMsb0JBQW9CO3FIQUFwQixvQkFBb0I7MkZBQXBCLG9CQUFvQjtrQkFEaEMsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbmFtZSByZXNwb25zaXZlLXNpemUtaW5mby5yeFxyXG4gKiBAZGVzY3JpcHRpb24gUmVzcG9uc2l2ZSBTaXplIEluZm8gcmVhY3RpdmUgc2VydmljZSBpbiBuZ3gtcmVzcG9uc2l2ZVxyXG4gKlxyXG4gKiBAbGljZW5zZSBNSVRcclxuICovXHJcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUmVzcG9uc2l2ZVN0YXRlIH0gZnJvbSAnLi4vLi4vQGNvcmUvcHJvdmlkZXJzL3Jlc3BvbnNpdmUtc3RhdGUvcmVzcG9uc2l2ZS1zdGF0ZSc7XHJcbmltcG9ydCB7IFJlc3BvbnNpdmVTaXplSW5mbyB9IGZyb20gJy4vcmVzcG9uc2l2ZS1zaXplLWluZm8nO1xyXG5pbXBvcnQgeyBQbGF0Zm9ybVNlcnZpY2UgfSBmcm9tICcuLi8uLi9AY29yZS9wcm92aWRlcnMvcGxhdGZvcm0tc2VydmljZS9wbGF0Zm9ybS5zZXJ2aWNlJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFJlc3BvbnNpdmVTaXplSW5mb1J4IGV4dGVuZHMgUmVzcG9uc2l2ZVNpemVJbmZvIHtcclxuICAgIGNvbnN0cnVjdG9yKCBcclxuICAgICAgICBwdWJsaWMgX3Jlc3BvbnNpdmVTdGF0ZTogUmVzcG9uc2l2ZVN0YXRlLFxyXG4gICAgICAgIHBsYXRmb3JtU2VydmljZTogUGxhdGZvcm1TZXJ2aWNlXHJcbiAgICApIHsgc3VwZXIoX3Jlc3BvbnNpdmVTdGF0ZSwgcGxhdGZvcm1TZXJ2aWNlKTsgfVxyXG59XHJcbiJdfQ==