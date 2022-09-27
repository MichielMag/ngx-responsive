/**
 * @name useragent-info.rx
 * @description Useragent info reactive service in ngx-responsive
 *
 * @license MIT
 */
import { Injectable } from '@angular/core';
import { PLATFORM_ID, Inject } from '@angular/core';
import { UserAgentInfo } from './useragent-info';
import * as i0 from "@angular/core";
import * as i1 from "../../@core/providers/responsive-state/responsive-state";
export class UserAgentInfoRx extends UserAgentInfo {
    constructor(_responsiveState, _platformId) {
        super(_responsiveState, _platformId);
        this._responsiveState = _responsiveState;
        this._platformId = _platformId;
    }
}
UserAgentInfoRx.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: UserAgentInfoRx, deps: [{ token: i1.ResponsiveState }, { token: PLATFORM_ID }], target: i0.ɵɵFactoryTarget.Injectable });
UserAgentInfoRx.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: UserAgentInfoRx });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: UserAgentInfoRx, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i1.ResponsiveState }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [PLATFORM_ID]
                }] }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlcmFnZW50LWluZm8ucnguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGRpcmVjdGl2ZXMvdXNlcmFnZW50L3VzZXJhZ2VudC1pbmZvLnJ4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7OztHQUtHO0FBQ0gsT0FBTyxFQUFFLFVBQVUsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUMxQyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVwRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7OztBQUdqRCxNQUFNLE9BQU8sZUFBZ0IsU0FBUSxhQUFhO0lBQzlDLFlBQ1csZ0JBQWlDLEVBQ1QsV0FBVztRQUMxQyxLQUFLLENBQUMsZ0JBQWdCLEVBQUUsV0FBVyxDQUFDLENBQUM7UUFGOUIscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFpQjtRQUNULGdCQUFXLEdBQVgsV0FBVyxDQUFBO0lBQ0osQ0FBQzs7NEdBSmxDLGVBQWUsaURBR1osV0FBVztnSEFIZCxlQUFlOzJGQUFmLGVBQWU7a0JBRDNCLFVBQVU7OzBCQUlGLE1BQU07MkJBQUMsV0FBVyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbmFtZSB1c2VyYWdlbnQtaW5mby5yeFxyXG4gKiBAZGVzY3JpcHRpb24gVXNlcmFnZW50IGluZm8gcmVhY3RpdmUgc2VydmljZSBpbiBuZ3gtcmVzcG9uc2l2ZVxyXG4gKlxyXG4gKiBAbGljZW5zZSBNSVRcclxuICovXHJcbmltcG9ydCB7IEluamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBQTEFURk9STV9JRCwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFJlc3BvbnNpdmVTdGF0ZSB9IGZyb20gJy4uLy4uL0Bjb3JlL3Byb3ZpZGVycy9yZXNwb25zaXZlLXN0YXRlL3Jlc3BvbnNpdmUtc3RhdGUnO1xyXG5pbXBvcnQgeyBVc2VyQWdlbnRJbmZvIH0gZnJvbSAnLi91c2VyYWdlbnQtaW5mbyc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBVc2VyQWdlbnRJbmZvUnggZXh0ZW5kcyBVc2VyQWdlbnRJbmZvICB7XHJcbiAgICBjb25zdHJ1Y3RvciggXHJcbiAgICAgICAgcHVibGljIF9yZXNwb25zaXZlU3RhdGU6IFJlc3BvbnNpdmVTdGF0ZSxcclxuICAgICAgICBASW5qZWN0KFBMQVRGT1JNX0lEKSBwcm90ZWN0ZWQgX3BsYXRmb3JtSWRcclxuICAgICkgeyBzdXBlcihfcmVzcG9uc2l2ZVN0YXRlLCBfcGxhdGZvcm1JZCk7IH1cclxufVxyXG4iXX0=